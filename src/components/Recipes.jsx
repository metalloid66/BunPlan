import React from "react";
import AddBtn from "./AddBtn";
import Recipe from "./Recipe";

export default function Recipes(props) {
  return (
    <div className="container">
      <div className="title-and-add">
        <h2>Recipes</h2>
        <AddBtn toggleAddForm={props.toggleAddForm} />
      </div>
      {props.recipes.length === 0
        ? "Please Add recipes"
        : props.recipes.map((recipe) => {
            return (
              <Recipe
                onRemove={props.onRemove}
                onEdit={props.onEdit}
                recipeTitle={recipe.title}
                recipeDescription={recipe.description}
                recipeIngredients={recipe.ingredients}
                recipeId={recipe.id}
              />
            );
          })}
    </div>
  );
}
