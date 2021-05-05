import Recipes from "./components/Recipes";
import RecipeAddForm from "./components/RecipeAddForm";
import { useState, useEffect } from "react";

function App() {
  /* Define states */

  // Recipe States
  let [recipeState, setRecipeState] = useState([]);

  // Ingrident States
  let [ingsState, setIngsState] = useState([
    { id: Math.floor(Math.random() * 100000 + 1) },
  ]);

  // Control States
  let [controlState, setControlState] = useState({ showRecipes: true });

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

  // Add new ing in form
  function addIngHandler(e) {
    e.preventDefault();
    setIngsState([
      ...ingsState,
      { id: Math.floor(Math.random() * 100000 + 1) },
    ]);
  }

  // Remove ing from form
  function removeIngHandler(e) {
    e.preventDefault();
    setIngsState(
      ingsState.filter((ing) => {
        return ing.id !== Number(e.target.dataset.removeid);
      })
    );
  }

  function toggleAddForm() {
    setControlState({
      ...controlState,
      showRecipes: !controlState.showRecipes,
    });
  }

  // Rendering
  return (
    <div className="App">
      {controlState.showRecipes ? (
        <Recipes recipes={recipeState} toggleAddForm={toggleAddForm} />
      ) : null}
      {controlState.showRecipes ? null : (
        <RecipeAddForm
          ings={ingsState}
          removeIng={removeIngHandler}
          addIng={addIngHandler}
          toggleAddForm={toggleAddForm}
        />
      )}
    </div>
  );
}
export default App;
