import React from "react";

export default function RecipeAddFormIng(props) {
  return (
    <div className="add-form-ing">
      <input type="text" placeholder="Ingredient Name" />
      <input type="number" placeholder="Amount" />
      <input type="text" placeholder="Unit" />
      <button onClick={props.addIng}>+</button>
      {props.allowAddIng === true ? <button>-</button> : null}
    </div>
  );
}
