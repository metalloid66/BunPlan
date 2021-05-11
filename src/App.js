import Recipes from "./components/Recipes";
import RecipeAddForm from "./components/RecipeAddForm";
import Calculate from "./components/Calculate";
import Header from "./components/Header.jsx";

// import SomeForm from "./components/SomeForm"
import { useState, useEffect } from "react";

function App() {
  /* Define states */

  // Recipe States
  let [recipeState, setRecipeState] = useState([]);

  // Control States
  let [controlState, setControlState] = useState({
    showRecipes: true,
    showAddForm: false,
    showCalculate: false,
    showEdit: false,
    allowEdit: false,
  });

  // Expermental to edit state
  let [recipeToEdit, setRecipeToEdit] = useState({});
  // let [recipeToEditIngs, setRecipeToEditIngs] = useState({});
  let [idToEdit, setIdToEdit] = useState({});

  /* End of Define states */

  // On page load
  useEffect(() => {
    const getRecipes = async () => {
      const recipesFromServer = await fetchRecipes();
      setRecipeState(recipesFromServer);
    };
    getRecipes();
  }, []);

  // Fetch reipes from backend
  async function fetchRecipes() {
    const res = await fetch("http://localhost:5000/recipes"); // replace with any backend
    const data = await res.json();
    return data;
  }

  // Toggle form recipes
  function toggleAddForm() {
    setControlState({
      ...controlState,
      showRecipes: !controlState.showRecipes,
      showAddForm: !controlState.showAddForm,
      showEdit: false,
    });
    setRecipeToEdit({});
  }

  // Toggle Calculate
  function toggleCalculate(e) {
    e.preventDefault();
    setControlState({
      ...controlState,
      showRecipes: !controlState.showRecipes,
      showCalculate: !controlState.showCalculate,
    });
  }

  /* Adding Recipe From Form */
  async function addRecipe(recipe) {
    const res = await fetch("http://localhost:5000/recipes", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(recipe),
    });
    const data = await res.json();
    setRecipeState(recipeState.concat([data]));
  }

  // Deleting a recipe (UI and Server)
  async function removeRecipe(id) {
    await fetch(`http://localhost:5000/recipes/${id}`, { method: "DELETE" });

    setRecipeState(recipeState.filter((recipe) => recipe.id !== id));
  }

  // Updating a recipe (UI and Server)
  async function editRecipe(id) {
    setControlState({
      ...controlState,
      showRecipes: !controlState.showRecipes,
      showAddForm: !controlState.showAddForm,
      showEdit: true,
      allowEdit: true,
    });
    setIdToEdit(id);
  }
  function disallowEdit() {
    setControlState({
      ...controlState,
      allowEdit: false,
    });
  }

  async function finishEdit(id, editedRecipe) {
    const res = await fetch(`http://localhost:5000/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(editedRecipe),
    });
    const data = await res.json();
    setRecipeState(recipeState.concat([data]));
  }

  // Rendering
  return (
    <div className="App">
      {/* <Header/> */}
      {controlState.showCalculate ? <Calculate /> : null}
      {controlState.showRecipes ? (
        <Recipes
          recipes={recipeState}
          onRemove={removeRecipe}
          onEdit={editRecipe}
          toggleAddForm={toggleAddForm}
          toggleCalculate={toggleCalculate}
          isAdd={controlState.showRecipes}
        />
      ) : null}
      {controlState.showAddForm ? (
        <RecipeAddForm
          toggleAddForm={toggleAddForm}
          onAdd={addRecipe}
          showEdit={controlState.showEdit}
          allowEdit={controlState.allowEdit}
          disallowEdit={disallowEdit}
          finishEdit={finishEdit}
          idToEdit={idToEdit}
          recipeToEdit={recipeToEdit}
        />
      ) : null}
    </div>
  );
}
export default App;
