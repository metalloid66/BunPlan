import React from "react";
import Recipe from "./Recipe";
import AddBtn from "./AddBtn";
import CalculateBtn from "./CalculateBtn";

export default function Recipes(props) {
  return (
    <div className="container" id="style-9">
      {props.recipes.length === 0
        ? "Please Add recipes"
        : props.recipes.map((recipe, index) => {
            return (
              <Recipe
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
  );
}
