import React from "react";

export default function AddBtn(props) {
  return (
    <button
      onClick={props.toggleAddForm}
      className={props.isAdd ? "btn add-btn" : "btn close-btn"}
    >
      ADD
    </button>
  );
}
