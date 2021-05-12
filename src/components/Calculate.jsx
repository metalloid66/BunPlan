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
