import React from "react";
import { IoMdSettings } from "react-icons/io";
import { useState, useEffect } from "react";

import RecipeAddFormIng from "./RecipeAddFormIng";
import AddIngBtn from "./AddIngBtn";

export default function RecipeAddForm(props) {
  let [recipeName, setRecipeName] = useState("");
  let [recipeDes, setRecipeDes] = useState("");
  let [recipeIngs, setRecipeIngs] = useState({});

  // handler the ingredients
  let [ingTitle, setIngTitle] = useState("");
  let [ingAmount, setIngAmount] = useState(1);
  let [ingUnit, setIngUnit] = useState("");
  let [ingId, setIngId] = useState(0);

  function idGetter(id) {
    setIngId(id);
  }
  function titleUpdater(title) {
    setIngTitle(title);
  }
  function amountUpdater(amount) {
    setIngAmount(amount);
  }
  function unitUpdater(unit) {
    setIngUnit(unit);
    setRecipeIngs({
      ...recipeIngs,
      [ingTitle]: {
        amount: ingAmount,
        unit: ingUnit,
        ingId: ingId,
      },
    });
  }

  function removeIngHandler(e) {
    e.preventDefault();
    setRecipeIngs(
      Object.fromEntries(
        Object.entries(recipeIngs).filter((recipeIng) => {
          return recipeIng[1].ingId !== Number(e.target.dataset.removeid);
        })
      )
    );
  }

  // Submit the form
  function onSubmitFunc(e) {
    e.preventDefault();

    props.onAdd({
      title: recipeName,
      description: recipeDes,
      ingredients: {
        ...recipeIngs,
        // flour: { amount: 15, unit: "pcs" },
        // bulgur: { amount: 15, unit: "pcs" },
      },
    });
    alert("You have added a recipe");
    props.toggleAddForm();
  }

  return (
    <div className="add-form-container">
      <button className="btn close-btn" onClick={props.toggleAddForm}>
        CLOSE
      </button>
      <form className="add-form" onSubmit={onSubmitFunc}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
        <textarea
          placeholder="Recipe Description"
          value={recipeDes}
          onChange={(e) => setRecipeDes(e.target.value)}
          required
        />

        {props.ings.map((ing) => {
          return (
            <RecipeAddFormIng
              key={ing.id}
              id={ing.id}
              removeTwo={removeIngHandler}
              removeIng={props.removeIng}
              titleUpdater={titleUpdater}
              amountUpdater={amountUpdater}
              unitUpdater={unitUpdater}
              idGetter={idGetter}
            />
          );
        })}
        <AddIngBtn addIng={props.addIng} />
        <input type="submit" value="Save Recipe" className="submit-form-btn" />
      </form>
    </div>
  );
}
