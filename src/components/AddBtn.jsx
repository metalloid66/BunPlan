import React from "react";

export default function AddBtn(props) {
  return (
    <button
      onClick={props.toggleAddForm}
      className={props.isOpenAdd ? "btn add-btn" : "btn close-btn"}
    >
      {props.isOpenAdd ? "ADD" : "CLOSE FORM"}
    </button>
  );
}
