import Recipes from "./components/Recipes";
import RecipeAddForm from "./components/RecipeAddForm";
// import SomeForm from "./components/SomeForm"
import { useState, useEffect } from "react";

function App() {
  /* Define states */

  // Recipe States
  let [recipeState, setRecipeState] = useState([]);

  // Ingrident States --

  // Control States
  let [controlState, setControlState] = useState({
    showRecipes: true,
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
  });

  // Fetch reipes from backend
  async function fetchRecipes() {
    const res = await fetch("http://localhost:5000/recipes"); // replace with any backend
    const data = await res.json();
    return data;
  }

  // Add new ing in form  --

  // Remove ing from form (UI only) --

  // Toggle form recipes
  function toggleAddForm() {
    setControlState({
      ...controlState,
      showRecipes: !controlState.showRecipes,
      showEdit: false,
    });
    setRecipeToEdit({});
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

  // Updating a recipe (UI and Server) expermental
  async function editRecipe(id) {
    setControlState({
      ...controlState,
      showRecipes: !controlState.showRecipes,
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

  // update ings --

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
      {controlState.showRecipes ? (
        <Recipes
          recipes={recipeState}
          toggleAddForm={toggleAddForm}
          onRemove={removeRecipe}
          onEdit={editRecipe}
        />
      ) : null}
      {controlState.showRecipes ? null : (
        <RecipeAddForm
          // ings={ingsState}
          // removeIngUI={removeIngHandlerUI}
          // addIng={addIngHandler}
          toggleAddForm={toggleAddForm}
          onAdd={addRecipe}
          showEdit={controlState.showEdit}
          allowEdit={controlState.allowEdit}
          disallowEdit={disallowEdit}
          finishEdit={finishEdit}
          idToEdit={idToEdit}
          // updateIngs={updateIngs}
          recipeToEdit={recipeToEdit}
          // recipeToEditIngs={recipeToEditIngs}
        />
      )}
    </div>
  );
}
export default App;
