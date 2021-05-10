import React from "react";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
export default function Recipe(props) {
  // Toggle Recipe Details
  let [showRecDet, setRecDet] = useState(false);
  function toggleRecDet() {
    setRecDet(!showRecDet);
  }

  return (
    <div className="recipe-container">
      <div className="recipe-btns">
        <MdModeEdit
          style={{ paddingBottom: "10px" }}
          onClick={() => {
            props.onEdit(props.recipeId);
            setRecDet((showRecDet = true));
          }}
        />
        <IoMdRemoveCircle
          onClick={() => {
            props.onRemove(props.recipeId);
          }}
        />
      </div>
      <h3 onClick={toggleRecDet} style={{ cursor: "pointer" }}>
        {props.recipeTitle}
      </h3>
      {showRecDet ? (
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
