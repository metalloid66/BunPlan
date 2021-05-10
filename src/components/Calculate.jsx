import { React, useState, useEffect } from "react";

export default function Calculate() {
  let [allRecipes, setAllRecipes] = useState([]);
  let [recipesToCook, setRecipesToCook] = useState([]);
  let [ingsToBuy, setIngsToBuy] = useState([]);
  let [finalIngs, setFinalIngs] = useState([]);
  useEffect(() => {
    const getRecipes = async () => {
      const recipesFromServer = await fetchRecipes();
      setAllRecipes(recipesFromServer);
    };
    getRecipes();
  }, []); // might cause problems in edit

  // Add recipe To Cook
  function addRecipeToCook(e, recipe) {
    e.preventDefault();
    setRecipesToCook([...recipesToCook, recipe]);
    ingsToBuyUpdater(recipe.ingredients);
  }

  // Remove Recipe From Cook
  function removeRecipeFromCook(e, index) {
    e.preventDefault();
    setRecipesToCook(recipesToCook.filter((_, i) => i !== index));

    // ingsToBuyUpdater([]);
  }
  // Ingridents to buy
  function ingsToBuyUpdater(ingsOfRecipes) {
    setIngsToBuy([...ingsToBuy, ingsOfRecipes]);
    let ingsFlat = ingsToBuy.flat();
    let finalResult = [];
    for (let i = 0; i < ingsFlat.length; i++) {
      if (
        finalResult.some(
          (el) =>
            el.ingTitle === ingsFlat[i].ingTitle && el.unit === ingsFlat[i].unit
        )
      )
        continue;
      let similar = ingsFlat.filter(
        (el) =>
          el.ingTitle === ingsFlat[i].ingTitle && el.unit === ingsFlat[i].unit
      );
      let finalAmount = similar.reduce((acc, cur) => {
        return acc + Number(cur.amount);
      }, 0);
      finalResult.push({
        ingTitle: ingsFlat[i].ingTitle,
        amount: finalAmount,
        unit: ingsFlat[i].unit,
      });
    }
    setFinalIngs(finalResult);
  }

  // Fetch reipes from backend with titles
  async function fetchRecipes() {
    const res = await fetch("http://localhost:5000/recipes"); // replace with any backend
    const data = await res.json();
    return data;
  }
  return (
    <div className="calculate-container">
      <div className="allRecipes">
        <h2>All Recipes</h2>
        {allRecipes.length === 0
          ? "No recipes yet"
          : allRecipes.map((recipe, index) => {
              return (
                <h4 key={index} onClick={(e) => addRecipeToCook(e, recipe)}>
                  {recipe.title}
                </h4>
              );
            })}
      </div>

      <div className="recipesToCook">
        <h2>Recipes to Cook</h2>
        {recipesToCook.length === 0
          ? "Please add recipes to cook"
          : recipesToCook.map((recipeToCook, index) => {
              return (
                <div key={index}>
                  <h4>{recipeToCook.title}</h4>{" "}
                  {/* Just the title btw. not entire recipe*/}
                  <button onClick={(e) => removeRecipeFromCook(e, index)}>
                    -
                  </button>
                </div>
              );
            })}
      </div>

      <div className="ingsToBuy">
        <h2>Ingredients to buy </h2>
        {finalIngs.length === 0
          ? "No ingredients to buy"
          : finalIngs.map((finalIng, index) => {
              return (
                <div key={index}>
                  <h3>{finalIng.ingTitle}</h3>
                  <h3>{finalIng.amount}</h3>
                  <h3>{finalIng.unit}</h3>
                </div>
              );
            })}
      </div>
    </div>
  );
}
