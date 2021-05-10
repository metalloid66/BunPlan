import React from "react";
import { GrFormSubtract } from "react-icons/gr";
import { GiRapidshareArrow } from "react-icons/gi";
import { useState, useEffect } from "react";

export default function RecipeAddFormIng(props) {
  // let [ingTitle, setIngTitle] = useState();
  // let [ingAmount, setIngAmount] = useState();
  // let [ingUnit, setIngUnit] = useState();
  function titleUpdater(e) {
    props.titleUpdater(e.target.value);
    props.idGetter(props.id);
  }
  function amountUpdater(e) {
    props.amountUpdater(e.target.value);
  }
  function unitUpdater(e) {
    props.unitUpdater(e.target.value);
  }

  return (
    <div className="add-form-ing" data-id={props.id}>
      <input
        type="text"
        placeholder="Ingredient Name"
        onChange={titleUpdater}
        value={props.ingTitle}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        onChange={amountUpdater}
        value={props.ingAmount}
        required
      />
      <input
        type="text"
        placeholder="Unit"
        onChange={unitUpdater}
        value={props.ingUnit}
        required
      />
      <GiRapidshareArrow data-adding={props.id} onClick={props.submitIng} />
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
