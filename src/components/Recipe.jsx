import React from "react";
import { useState } from "react";
export default function Recipe(props) {
  // Toggle Recipe Details

  let [controlClasses, setControlClasses] = useState({ hovered: false });

  function toggleRecipeBtns(e) {
    e.preventDefault();
    setControlClasses({ ...controlClasses, hovered: !controlClasses.hovered });
  }
  function setDets() {
    props.toggleRecDet();
    props.updateRecipeDet(
      props.recipeTitle,
      props.recipeDescription,
      props.recipeIngredients
    );
  }
  return (
    <div
      className="recipe-container"
      onMouseEnter={(e) => toggleRecipeBtns(e)}
      onMouseLeave={(e) => toggleRecipeBtns(e)}
    >
      <h3 onClick={setDets} className="recipe-title">
        {props.recipeTitle}
      </h3>
      <div
        className={controlClasses.hovered ? "edit-recipe-btn" : "hide"}
        onClick={() => {
          props.onEdit(props.recipeId);
          // setRecDet((showRecDet = true));
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
    </div>
  );
}
