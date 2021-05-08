import React from "react";
import { IoMdSettings } from "react-icons/io";
import { useState, useEffect } from "react";

import RecipeAddFormIng from "./RecipeAddFormIng";
import AddIngBtn from "./AddIngBtn";

export default function RecipeAddForm(props) {
  let [recipeName, setRecipeName] = useState("");
  let [recipeDes, setRecipeDes] = useState("");
  let [recipeIngs, setRecipeIngs] = useState({});

  // handling the ingredients
  let [ingTitle, setIngTitle] = useState("");
  let [ingAmount, setIngAmount] = useState(1);
  let [ingUnit, setIngUnit] = useState("");
  let [ingId, setIngId] = useState(0);

  useEffect(() => {
    if (props.showEdit == true) {
      console.log(props.recipeToEdit);
      setRecipeName(props.recipeToEdit?.title);
      setRecipeDes(props.recipeToEdit?.description);
    } else {
      console.log("add");
    }
  }, []);

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
        id: ingId,
      },
    });
  }

  // Remove ing from form (Server only)
  function removeIngServHandler(e) {
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

    if (!props.showEdit) {
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
    } else {
      props.finishEdit(props.recipeToEdit.id, {
        title: recipeName,
        description: recipeDes,
        ingredients: { ...recipeIngs },
      });
      alert("You have Edited a recipe");
    }

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

        {props.ings.map((ing, i) => {
          return (
            <RecipeAddFormIng
              key={ing.id}
              id={ing.id}
              removeIngServ={removeIngServHandler}
              removeIngUI={props.removeIngUI}
              titleUpdater={titleUpdater}
              amountUpdater={amountUpdater}
              unitUpdater={unitUpdater}
              idGetter={idGetter}
              showEdit={props.showEdit}
              // initialEditIngs={
              //   Object.entries(props.recipeToEdit.ingredients)[i]
              // }
            />
          );
        })}

        <AddIngBtn addIng={props.addIng} />
        <input type="submit" value="Save Recipe" className="submit-form-btn" />
      </form>
    </div>
  );
}
