import React from "react";
import { useState } from "react";
import RecipeDet from "./RecipeDet";
// import { MdModeEdit } from "react-icons/md";
// import { IoMdRemoveCircle } from "react-icons/io";
export default function Recipe(props) {
  // Toggle Recipe Details
  let [showRecDet, setRecDet] = useState(false);
  let [controlClasses, setControlClasses] = useState({ hovered: false });
  function toggleRecDet() {
    setRecDet(!showRecDet);
  }
  function toggleRecipeBtns(e) {
    e.preventDefault();
    setControlClasses({ ...controlClasses, hovered: !controlClasses.hovered });
  }
  return (
    <div
      className="recipe-container"
      onMouseEnter={(e) => toggleRecipeBtns(e)}
      onMouseLeave={(e) => toggleRecipeBtns(e)}
    >
      <h3 onClick={toggleRecDet} className="recipe-title">
        {props.recipeTitle}
      </h3>
      <div
        className={controlClasses.hovered ? "edit-recipe-btn" : "hide"}
        onClick={() => {
          props.onEdit(props.recipeId);
          setRecDet((showRecDet = true));
        }}
      >
        EDIT
      </div>
      <div
        className={controlClasses.hovered ? "remove-recipe-btn" : "hide"}
        onClick={() => {
          props.onRemove(props.recipeId);
        }}
      >
        REMOVE
      </div>
      <RecipeDet
        showRecDet={showRecDet}
        recipeDescription={props.recipeDescription}
        recipeIngredients={props.recipeIngredients}
      />
    </div>
  );
}
