import React from "react";
import { MdModeEdit } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
export default function Recipe(props) {
  return (
    <div className="recipe-container">
      <div className="recipe-btns">
        <MdModeEdit
          style={{ paddingBottom: "10px" }}
          // onClick={() => {
          //   props.onEdit(props.recipeId);
          // }}
        />
        <IoMdRemoveCircle
          onClick={() => {
            props.onRemove(props.recipeId);
          }}
        />
      </div>
      <h3>{props.recipeTitle}</h3>
      <h4>{props.recipeDescription}</h4>
    </div>
  );
}
