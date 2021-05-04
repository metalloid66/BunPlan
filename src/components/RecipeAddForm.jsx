import React from "react";
import RecipeAddFormIng from "./RecipeAddFormIng";
export default function RecipeAddForm(props) {
  let ingArray = [];
  ingArray[props.ingNum] = (
    <RecipeAddFormIng addIng={props.addIng} allowAddIng={props.allowAddIng} />
  );
  return (
    <div className="add-form-container">
      {/* <button className="btn close-btn">Close</button> */}
      <form className="add-form">
        <input type="text" placeholder="Recipe Name" />
        <textarea placeholder="Recipe Description" />
        {/* <RecipeAddFormIng
          addIng={props.addIng}
          allowAddIng={props.allowAddIng}
        /> */}
        {ingArray.map((ing) => ing)}
        <button className="submit-form-btn">Save Recipe</button>
      </form>
    </div>
  );
}
