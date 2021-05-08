import React from "react";
import { GrAdd, GrFormSubtract } from "react-icons/gr";
import { useState, useEffect } from "react";

export default function RecipeAddFormIng(props) {
  let [ingTitle, setIngTitle] = useState("");
  let [ingAmount, setIngAmount] = useState(1);
  let [ingUnit, setIngUnit] = useState("");

  useEffect(() => {
    if (props.showEdit) {
      setIngTitle(props.initialEditIngs?.[0]);
      setIngAmount(props.editIngAmount?.[1]?.amount);
      setIngUnit(props.editIngUnit?.[1].unit);
    } else {
      console.log("add");
    }
  }, []);

  return (
    <div className="add-form-ing" data-id={props.id}>
      <input
        type="text"
        placeholder="Ingredient Name"
        onChange={(e) => {
          setIngTitle(e.target.value);
          props.titleUpdater(e.target.value);
          props.idGetter(props.id);
        }}
        value={ingTitle}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => {
          setIngAmount(e.target.value);
          props.amountUpdater(e.target.value);
        }}
        value={ingAmount}
        required
      />
      <input
        type="text"
        placeholder="Unit"
        onChange={(e) => {
          setIngUnit(e.target.value);
          props.unitUpdater(e.target.value);
        }}
        value={ingUnit}
        required
      />
      <GrFormSubtract
        data-removeid={props.id}
        onClick={(e) => {
          props.removeIngUI(e);
          props.removeIngServ(e);
        }}
      />
    </div>
  );
}
