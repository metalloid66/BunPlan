import React from "react";
import { IoMdSettings } from "react-icons/io";
import RecipeAddFormIng from "./RecipeAddFormIng";
import AddIngBtn from "./AddIngBtn";
export default function RecipeAddForm(props) {
  return (
    <div className="add-form-container">
      <button className="btn close-btn" onClick={props.toggleAddForm}>
        CLOSE
      </button>
      <form className="add-form">
        <input type="text" placeholder="Recipe Name" />
        <textarea placeholder="Recipe Description" />
        {props.ings.map((ing) => {
          return (
            <RecipeAddFormIng
              key={ing.id}
              id={ing.id}
              removeIng={props.removeIng}
            />
          );
        })}
        <AddIngBtn addIng={props.addIng} />
        <button className="submit-form-btn">Save Recipe</button>
      </form>
    </div>
  );
}
