import Recipes from "./components/Recipes";
import RecipeAddForm from "./components/RecipeAddForm";
import { useState, useEffect } from "react";

function App() {
  // define states
  let [formControlState, setFormControlState] = useState({
    addNewIng: false,
    ingCounter: 1,
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

  // Add new ing in form
  function addIngHandler(e) {
    e.preventDefault();
    setFormControlState({
      ...formControlState,
      ingCounter: formControlState.ingCounter + 1,
      addNewIng: true,
    });
    console.log(formControlState.addNewIng, formControlState.ingCounter);
  }

  // Remove ing from form
  function removeIngHandler(e) {
    e.preventDefault();
    setFormControlState({
      ...formControlState,
      filterArray: e.target.dataset.ingid,
      // ingCounter: formControlState.ingCounter - 1,
    });
    console.log("removed ing");
  }

  // Rendering
  return (
    <div className="App">
      <RecipeAddForm
        addIng={addIngHandler}
        removeIng={removeIngHandler}
        allowAddIng={formControlState.addNewIng}
        ingCounter={formControlState.ingCounter}
        filterArray={formControlState.filterArray}
      />
      <h1>{formControlState.ingCounter}</h1>
    </div>
  );
}
// {
//   <Recipes recipes={showRecipeState} />;
// }
export default App;
