import React from "react";

export default function CalculateBtn(props) {
  return (
    <button className="btn calculate-btn" onClick={props.toggleCalculate}>
      SHOP
    </button>
  );
}
