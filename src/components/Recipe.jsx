import React from "react";
import { MdModeEdit } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
export default function Recipe(props) {
  return (
    <div className="recipe-container">
      <div className="recipe-btns">
        <MdModeEdit style={{ paddingBottom: "10px" }} />
        <IoMdRemoveCircle />
      </div>
      <h3>{props.recipeTitle}</h3>
      <h4>{props.recipeDescription}</h4>
    </div>
  );
}
