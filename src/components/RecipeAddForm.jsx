import React from "react";
import { useState, useEffect } from "react";

export default function RecipeAddForm(props) {
  let [recipeName, setRecipeName] = useState("");
  let [recipeDes, setRecipeDes] = useState("");
  let [recipeIngs, setRecipeIngs] = useState([]);

  // handling the edit

  useEffect(() => {
    if (props.allowEdit) {
      async function decfunction() {
        let toEditRecipe = await fetch(
          `http://localhost:5000/recipes/${props.idToEdit}`
        );
        let toEditRecipeData = await toEditRecipe.json();
        setRecipeName(toEditRecipeData.title);
        setRecipeDes(toEditRecipeData.description);
        setRecipeIngs(toEditRecipeData.ingredients);
        console.log(recipeIngs);
      }
      decfunction();
      props.disallowEdit();
    }
  });
  // Submit the form
  function onSubmitFunc(e) {
    e.preventDefault();
    if (!props.showEdit) {
      console.log(recipeIngs);
      props.onAdd({
        title: recipeName,
        description: recipeDes,
        ingredients: recipeIngs,
      });
      alert("You have added a recipe");
    } else {
      props.finishEdit(props.idToEdit, {
        title: recipeName,
        description: recipeDes,
        ingredients: recipeIngs,
      });
      alert("You have Edited a recipe");
    }
    props.toggleAddForm();
  }

  function handleAddIng(e) {
    e.preventDefault();
    const ing = {
      ingTitle: "",
      amount: "",
      unit: "",
    };
    setRecipeIngs((prev) => [...prev, ing]);
  }
  function onChangeIngs(event, index) {
    event.preventDefault();
    event.persist();
    setRecipeIngs((prev) => {
      return prev.map((ing, i) => {
        if (i !== index) {
          return ing;
        }
        return {
          ...ing,
          [event.target.name]: event.target.value,
        };
      });
    });
  }
  const handleRemoveIng = (e, index) => {
    e.preventDefault();
    setRecipeIngs((prev) => prev.filter((item) => item !== prev[index]));
  };

  return (
    <div className="add-form-container">
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
        {recipeIngs.map((ing, index) => {
          return (
            <div className="add-form-ing" key={`ing-${index}`}>
              <input
                placeholder="Ing name"
                name="ingTitle"
                type="text"
                onChange={(e) => onChangeIngs(e, index)}
                value={ing.ingTitle}
              />
              <input
                placeholder="Amount"
                name="amount"
                type="number"
                onChange={(e) => onChangeIngs(e, index)}
                value={ing.amount}
              />
              <input
                placeholder="Unit"
                name="unit"
                type="text"
                onChange={(e) => onChangeIngs(e, index)}
                value={ing.unit}
              />
              <button onClick={(e) => handleRemoveIng(e, index)}>X</button>
            </div>
          );
        })}
        <button onClick={handleAddIng}>+</button>
        <input type="submit" value="Save Recipe" className="submit-form-btn" />
      </form>
    </div>
  );
}
