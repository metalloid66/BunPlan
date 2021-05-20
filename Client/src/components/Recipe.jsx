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
      <p onClick={setDets} className="recipe-title">
        {props.recipeTitle}
      </p>

      {props.isOpenEdit ? null : ( // if form is taken by edit, hide recipe btns
        <>
          {props.isOpenCalc ? ( // isOpenCalc === false ?
            <div
              className={
                !isHovered || !props.isOpenAdd ? "hide" : "edit-recipe-btn"
              }
              onClick={(e) => {
                e.preventDefault();
                window.history.replaceState(
                  //change the url without reloading
                  null,
                  null,
                  `/recipes/${props.recipeId}`
                );
                props.onEdit(props.recipeId);
              }}
            >
              EDIT
            </div>
          ) : null}
          {props.isOpenCalc ? ( // isOpenCalc === false ?
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
          {!props.isOpenCalc ? ( // isOpenCalc === true?
            <div
              className={!isHovered ? "hide" : "openCalc-btn"}
              onClick={() => {
                props.getRecipe(props.recipeId);
                window.history.replaceState(
                  //change the url without reloading
                  null,
                  null,
                  `/recipes/${props.recipeId}`
                );
              }}
            >
              Add To List
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
