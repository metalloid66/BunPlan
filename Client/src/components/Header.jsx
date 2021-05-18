import React from "react";
import AddBtn from "./AddBtn";
import CalculateBtn from "./CalculateBtn";

export default function Header(props) {
  return (
    <header className="header">
      <h1>Recipe Planner</h1>
      <AddBtn toggleAddForm={props.toggleAddForm} isAdd={props.isAdd} />
      <CalculateBtn toggleCalculate={props.toggleCalculate} />
    </header>
  );
}
