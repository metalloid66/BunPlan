import React from "react";
import { useState } from "react";
export default function Recipe(props) {
  const [isHovered, setIsHovered] = useState(false);

  function toggleRecipeBtns(e) {
    e.preventDefault();
    setIsHovered(!isHovered);
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

      {props.isOpenCalc ? (
        <div
          className={
            !isHovered || !props.isOpenAdd ? "hide" : "edit-recipe-btn"
          }
          onClick={() => {
            props.onEdit(props.recipeId);
          }}
        >
          EDIT
        </div>
      ) : null}

      {props.isOpenCalc ? (
        <div
          className={
            !isHovered || !props.isOpenAdd ? "hide" : "remove-recipe-btn"
          }
          onClick={() => {
            props.onRemove(props.recipeId);
          }}
        >
          REMOVE
        </div>
      ) : null}
      {!props.isOpenCalc ? (
        <div
          className={!isHovered ? "hide" : "openCalc-btn"}
          onClick={() => props.getRecipe(props.recipeId)}
        >
          Add To List
        </div>
      ) : null}
    </div>
  );
}
