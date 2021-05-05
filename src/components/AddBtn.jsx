import React from "react";

export default function AddBtn(props) {
  return (
    <div>
      <button className="btn add-btn" onClick={props.toggleAddForm}>
        ADD
      </button>
    </div>
  );
}
