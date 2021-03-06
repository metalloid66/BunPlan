import { React } from "react";
export default function RecipeDet(props) {
  return (
    <div>
      <h2 className="recipeDet-title">How to cook {props.recipeTitle}?</h2>
      <div className="recipeDet-des">
        <p>{props.recipeDescription}</p>
      </div>
      <div>
        <h4>You will need:</h4>
        {Object.entries(props.recipeIngredients).map((ing, index) => {
          return (
            <p key={`ing-${index}`}>
              {ing[1].ingTitle} {ing[1].amount} {ing[1].unit}
              <br />
            </p>
          );
        })}
      </div>
    </div>
  );
}
