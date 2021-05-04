import Recipes from "./components/Recipes";
import RecipeAddForm from "./components/RecipeAddForm";
import { useState, useEffect } from "react";

function App() {
  let [formControlState, setFormControlState] = useState({
    addNewIng: false,
    ingCounter: 0,
  });
  let [showRecipeState, setRecipeState] = useState([]);

  // On page load
  useEffect(() => {
    const getRecipes = async () => {
      const recipesFromServer = await fetchRecipes();
      setRecipeState(recipesFromServer);
      console.log(showRecipeState);
    };
    getRecipes();
  }, []);

  // Fetch reipes from backend
  async function fetchRecipes() {
    const res = await fetch("http://localhost:5000/recipes"); // replace with any backend
    const data = await res.json();
    return data;
  }

  // Add new ing
  function addIngHandler(e) {
    e.preventDefault();
    setFormControlState({
      addNewIng: !formControlState.addNewIng,
      ingCounter: formControlState.ingCounter++,
    });
    console.log(formControlState.addNewIng, formControlState.ingCounter);
  }

  // Rendering
  return (
    <div className="App">
      <RecipeAddForm
        addIng={addIngHandler}
        allowAddIng={formControlState.addNewIng}
        ingNum={formControlState.ingCounter}
      />
      <h1>{formControlState.ingCounter}</h1>
    </div>
  );
}
// {
//   <Recipes recipes={showRecipeState} />;
// }
export default App;
