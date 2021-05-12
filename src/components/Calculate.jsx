import { React, useState, useEffect } from "react";

export default function Calculate(props) {
  // let [allRecipes, setAllRecipes] = useState([]);
  let [recipesToCook, setRecipesToCook] = useState([]);
  let [ingsToBuy, setIngsToBuy] = useState([]);
  let [finalIngs, setFinalIngs] = useState([]);
  // Get Recipe to shop
  useEffect(() => {
    if (props.recipeToShop.title) {
      setRecipesToCook(recipesToCook.concat([props.recipeToShop]));
      console.log(recipesToCook);
    }
  }, [props.recipeToShop]);

  useEffect(() => {
    ingsToBuyUpdater(recipesToCook);
  }, [recipesToCook]);

  useEffect(() => {
    calcFinal();
  }, [ingsToBuy]);

  // Remove Recipe From Cook
  function removeRecipeFromCook(e, index) {
    e.preventDefault();
    setRecipesToCook(recipesToCook.filter((_, i) => i !== index));
  }

  // Ingridents to buy
  function ingsToBuyUpdater(recipes) {
    let ingsOfRecipes = [];
    recipes.forEach((recipe) => {
      ingsOfRecipes.push(recipe.ingredients);
    });
    setIngsToBuy(ingsOfRecipes);
  }
  function calcFinal() {
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
  return (
    <div className="calculate-container">
      <h2 className="recipesToCookTitle">Recipes to Cook</h2>
      <div className="recipesToCook">
        {recipesToCook.length === 0
          ? "Please add recipes to cook"
          : recipesToCook.map((recipeToCook, index) => {
              return (
                <div key={index} className="recipeToCook-container">
                  <h4 className="recipeToCook-title">{recipeToCook.title}</h4>
                  <button
                    className="recipeToCook-remove"
                    onClick={(e) => removeRecipeFromCook(e, index)}
                  >
                    x
                  </button>
                </div>
              );
            })}
      </div>

      <h2 className="ingsToCookTitle">Ingredients to buy </h2>
      <div className="ingsToCook">
        {finalIngs.length === 0
          ? "No ingredients to buy"
          : finalIngs.map((finalIng, index) => {
              return (
                <div key={index} className="ingToCook-container">
                  <p>
                    {finalIng.ingTitle} {finalIng.amount} {finalIng.unit}
                  </p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
