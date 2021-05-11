import { React, useState } from "react";
export default function RecipeDet(props) {
  return (
    <div>
      {props.showRecDet ? (
        <div>
          <h4>{props.recipeDescription}</h4>
          {Object.entries(props.recipeIngredients).map((ing, index) => {
            return (
              <p key={`ing-${index}`}>
                {ing[1].ingTitle} {ing[1].amount} {ing[1].unit}
                <br />
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
