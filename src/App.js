import Recipes from "./components/Recipes";
import { useState, useEffect } from "react";
function App() {
  const port = process.env.PORT || 5000;
  // Recipe States
  let [recipeState, setRecipeState] = useState([]);
  // On page load
  useEffect(() => {
    const getRecipes = async () => {
      const recipesFromServer = await fetchRecipes();
      setRecipeState(recipesFromServer);
    };
    getRecipes();
  }, []);
  // Fetch reipes from backend - GET
  async function fetchRecipes() {
    // const res = await fetch("http://localhost:5000/recipes"); // replace with any backend
    const res = await fetch(`${window.location.hostname}:${port}/recipes`); // replace with any backend
    const data = await res.json();
    return data;
  }
  // Updating the recipe state - POST/PUT
  function onUpdate(recipe) {
    setRecipeState(recipeState.concat([recipe]));
  }

  // Deleting a recipe (UI and Server) - DELETE
  async function removeRecipe(id) {
    await fetch(`${window.location.hostname}:${port}/recipes/${id}`, {
      method: "DELETE",
    });

    setRecipeState(recipeState.filter((recipe) => recipe.id !== id));
  }
  // Rendering
  return (
    <div className="App">
      <Recipes
        onUpdate={onUpdate}
        recipes={recipeState}
        onRemove={removeRecipe}
      />
    </div>
  );
}
export default App;
