import React from "react";
import { GrAdd, GrFormSubtract } from "react-icons/gr";

export default function RecipeAddFormIng(props) {
  return (
    <div className="add-form-ing">
      <input type="text" placeholder="Ingredient Name" />
      <input type="number" placeholder="Amount" />
      <input type="text" placeholder="Unit" />
      {props.removePlus === true ? null : <GrAdd onClick={props.addIng} />}
      {props.allowAddIng === true ? (
        <GrFormSubtract data-ingid={props.id} onClick={props.removeIng} />
      ) : null}
    </div>
  );
}
