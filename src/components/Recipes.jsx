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
      {Object.entries(props.recipes).map((recipe) => {
        return (
          <Recipe
            recipeTitle={recipe[0]}
            recipeDescription={recipe[1].description}
          />
        );
      })}
    </div>
  );
}
