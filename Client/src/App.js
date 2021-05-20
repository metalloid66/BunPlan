import Recipes from "./components/Recipes";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState(null);

  let [recipeState, setRecipeState] = useState([]);
  // On page load
  useEffect(() => {
    const getRecipes = async () => {
      const recipesFromServer = await fetchRecipes();
      setRecipeState(recipesFromServer);
    };
    getRecipes();
    console.log(recipeState);
  }, []); // not sure of how dangerous...

  // Fetch reipes from backend - GET
  async function fetchRecipes() {
    // const res = await fetch("recipes"); // gotten from backend
    const res = await fetch("https://bunplanner.herokuapp.com/recipes");
    const data = await res.json();
    return data;
  }

  // Updating the recipe state - POST/PUT
  function onUpdate(recipe) {
    setRecipeState(recipeState.concat([recipe]));
    const getRecipes = async () => {
      const recipesFromServer = await fetchRecipes();
      setRecipeState(recipesFromServer);
    };
    getRecipes();
  }

  // Deleting a recipe (UI and Server) - DELETE
  async function removeRecipe(id) {
    await fetch(`https://bunplanner.herokuapp.com/recipes/${id}`, {
      method: "DELETE",
    });
    setRecipeState(recipeState.filter((recipe) => recipe.id !== id));
    const getRecipes = async () => {
      // redundant but will do for now
      const recipesFromServer = await fetchRecipes();
      setRecipeState(recipesFromServer);
    };
    getRecipes();
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
