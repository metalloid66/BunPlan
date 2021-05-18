import React from "react";

export default function CalculateBtn(props) {
  return (
    <button
      className={!props.isOpenCalc ? "btn close-btn" : "btn calculate-btn"}
      onClick={props.toggleCalculate}
    >
      {!props.isOpenCalc ? "CLOSE SHOP" : "SHOP"}
    </button>
  );
}
