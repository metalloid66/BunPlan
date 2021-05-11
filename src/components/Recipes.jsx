import { React, useState } from "react";
import Recipe from "./Recipe";
import RecipeDet from "./RecipeDet";
import AddBtn from "./AddBtn";
import CalculateBtn from "./CalculateBtn";

export default function Recipes(props) {
  let [showRecDet, setRecDet] = useState(false);
  let [recipeTitle, setRecipeTitle] = useState("");
  let [recipeDescription, setRecipeDescription] = useState("");
  let [recipeIngredients, setRecipeIngredients] = useState("");

  function toggleRecDet() {
    setRecDet(!showRecDet);
  }
  function updateRecipeDet(recTitle, recDes, recIngs) {
    setRecipeTitle(recTitle);
    setRecipeDescription(recDes);
    setRecipeIngredients(recIngs);
  }
  return (
    <div className="container">
      <div className="container-1" id="style-9">
        {props.recipes.length === 0
          ? "Please Add recipes"
          : props.recipes.map((recipe, index) => {
              return (
                <Recipe
                  toggleRecDet={toggleRecDet}
                  updateRecipeDet={updateRecipeDet}
                  key={`recipe-${index}`}
                  onRemove={props.onRemove}
                  onEdit={props.onEdit}
                  recipeTitle={recipe.title}
                  recipeDescription={recipe.description}
                  recipeIngredients={recipe.ingredients}
                  recipeId={recipe.id}
                />
              );
            })}
        <div className="add-calc-btns">
          <AddBtn toggleAddForm={props.toggleAddForm} isAdd={props.isAdd} />
          <CalculateBtn toggleCalculate={props.toggleCalculate} />
        </div>
      </div>
      <div className="container-2">
        {showRecDet ? (
          <RecipeDet
            recipeTitle={recipeTitle}
            recipeDescription={recipeDescription}
            recipeIngredients={recipeIngredients}
          />
        ) : (
          "Click on a recipe to show details"
        )}
      </div>
    </div>
  );
}
