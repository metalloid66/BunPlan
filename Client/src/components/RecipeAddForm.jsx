import React from "react";
import { useState, useEffect } from "react";

export default function RecipeAddForm(props) {
  const port = process.env.PORT || 5000;
  let [recipeName, setRecipeName] = useState("");
  let [recipeDes, setRecipeDes] = useState("");
  let [recipeIngs, setRecipeIngs] = useState([]);

  // Handling a recipe edit
  useEffect(() => {
    if (props.allowEdit) {
      async function decfunction() {
        // let toEditRecipe = await fetch(`${props.idToEdit}`);
        let toEditRecipe = await fetch(
          `https://bunplanner.herokuapp.com/recipes/${props.idToEdit}`
        );
        let toEditRecipeData = await toEditRecipe.json();
        setRecipeName(toEditRecipeData.title);
        setRecipeDes(toEditRecipeData.description);
        setRecipeIngs(toEditRecipeData.ingredients);
      }
      decfunction();
      props.disallowEdit();
    }
  });

  // Submitting the form
  function onSubmitFunc(e) {
    e.preventDefault();
    if (!props.showEdit) {
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
    const finishedSubmit = true;
    props.toggleAddForm(finishedSubmit);
  }

  // Handling adding an ingredient
  function handleAddIng(e) {
    e.preventDefault();
    const ing = {
      ingTitle: "",
      amount: "",
      unit: "",
    };
    setRecipeIngs((prev) => [...prev, ing]);
  }
  // Handling changes in ingredient fields
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
  // Removing an ingredient
  const handleRemoveIng = (e, index) => {
    e.preventDefault();
    setRecipeIngs((prev) => prev.filter((item) => item !== prev[index]));
  };

  return (
    <div className="addForm-container">
      <form className="add-form" onSubmit={onSubmitFunc}>
        <label className="rec-descriptor-text">Recipe Name</label>
        <input
          className="title-input"
          type="text"
          placeholder="e.g Pizza"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
        <label className="rec-descriptor-text">Recipe Description</label>
        <textarea
          className="description-input"
          placeholder="e.g Put the pizza in oven..."
          value={recipeDes}
          onChange={(e) => setRecipeDes(e.target.value)}
          required
        />
        <label className="rec-descriptor-text">Recipe Ingredients</label>
        <div className="recipe-ings">
          {recipeIngs.map((ing, index) => {
            return (
              <div className="recipe-ing" key={`ing-${index}`}>
                <h5>#{index + 1}</h5>
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
                <button
                  onClick={(e) => handleRemoveIng(e, index)}
                  className="remove-ing"
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={handleAddIng} className="add-ing">
            ADD INGREDIENT
          </button>
          <input
            type="submit"
            value="SAVE RECIPE"
            className="submit-form-btn"
          />
        </div>
      </form>
    </div>
  );
}
