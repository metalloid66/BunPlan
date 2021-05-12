import { React, useState } from "react";
import Recipe from "./Recipe";
import RecipeDet from "./RecipeDet";
import AddBtn from "./AddBtn";
import CalculateBtn from "./CalculateBtn";
import RecipeAddForm from "./RecipeAddForm";
import Calculate from "./Calculate";

export default function Recipes(props) {
  const port = process.env.PORT || 5000;
  /* States & functions for RecipeAddForm */
  const [showAddForm, setShowAddForm] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(true);
  const [hideAdd, setHideAdd] = useState(false);

  // Toggle form recipes
  function toggleAddForm() {
    setShowAddForm(!showAddForm);
    setIsOpenAdd(!isOpenAdd);
    setRecipeToEdit({});
    setShowEdit(false);
    setHideCalc(!hideCalc);
  }

  // Adding Recipe From Form
  async function addRecipe(recipe) {
    const res = await fetch(`${window.location.hostname}:${port}/recipes`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(recipe),
    });
    const data = await res.json();
    props.onUpdate(data);
  }

  /* States & functions for Edit */
  const [showEdit, setShowEdit] = useState(false);
  const [allowEdit, setAllowEdit] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState({});
  const [idToEdit, setIdToEdit] = useState({});

  // Editting A Recipe
  async function editRecipe(id) {
    setShowAddForm(!showAddForm);
    setShowEdit(true);
    setAllowEdit(true);
    setIdToEdit(id);
  }
  function disallowEdit() {
    setAllowEdit(false);
  }

  async function finishEdit(id, editedRecipe) {
    const res = await fetch(
      `${window.location.hostname}:${port}/recipes/${id}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editedRecipe),
      }
    );

    const data = await res.json();
    props.onUpdate(data);
  }

  /* States & functions for Calculate */
  const [showCalculate, setShowCalculate] = useState(false);
  const [isOpenCalc, setIsOpenCalc] = useState(true);
  const [hideCalc, setHideCalc] = useState(false);
  const [recipeToShop, setRecipeToShop] = useState({});
  // Toggle Calculate
  function toggleCalculate(e) {
    e.preventDefault();
    setShowCalculate(!showCalculate);
    setIsOpenCalc(!isOpenCalc);
    setHideAdd(!hideAdd);
  }
  // Get ID to show recipe in Calculate
  async function getRecipe(id) {
    let recipe = await fetch(
      `${window.location.hostname}:${port}/recipes/${id}`
    );
    let data = await recipe.json();
    setRecipeToShop(data);
  }

  /* States & functions for RecipeDet */
  let [showRecDet, setRecDet] = useState(false);
  let [recipeTitle, setRecipeTitle] = useState("");
  let [recipeDescription, setRecipeDescription] = useState("");
  let [recipeIngredients, setRecipeIngredients] = useState("");

  function toggleRecDet() {
    setRecDet(!showRecDet);
  }
  function updateRecipeDet(recTitle, recDes, recIngs) {
    setRecipeTitle(recTitle);
    setRecipeDescription(recDes);
    setRecipeIngredients(recIngs);
  }

  return (
    <div className="container">
      <div className="container-1" id="style-9">
        {props.recipes.length === 0
          ? "Please Add recipes"
          : props.recipes.map((recipe, index) => {
              return (
                <Recipe
                  isOpenAdd={isOpenAdd}
                  isOpenCalc={isOpenCalc}
                  getRecipe={getRecipe}
                  toggleRecDet={toggleRecDet}
                  updateRecipeDet={updateRecipeDet}
                  key={`recipe-${index}`}
                  onRemove={props.onRemove}
                  onEdit={editRecipe}
                  recipeTitle={recipe.title}
                  recipeDescription={recipe.description}
                  recipeIngredients={recipe.ingredients}
                  recipeId={recipe.id}
                />
              );
            })}
        <div className="add-calc-btns">
          {hideAdd ? null : (
            <AddBtn toggleAddForm={toggleAddForm} isOpenAdd={isOpenAdd} />
          )}
          {hideCalc ? null : (
            <CalculateBtn
              toggleCalculate={toggleCalculate}
              isOpenCalc={isOpenCalc}
            />
          )}
        </div>
      </div>

      {
        showRecDet ? (
          <div className="container-2" id="style-9">
            <RecipeDet
              recipeTitle={recipeTitle}
              recipeDescription={recipeDescription}
              recipeIngredients={recipeIngredients}
            />
          </div>
        ) : null

        //
      }

      {showAddForm ? (
        <div className="container-3" id="style-9">
          <RecipeAddForm
            toggleAddForm={toggleAddForm}
            onAdd={addRecipe}
            showEdit={showEdit}
            allowEdit={allowEdit}
            disallowEdit={disallowEdit}
            finishEdit={finishEdit}
            idToEdit={idToEdit}
            recipeToEdit={recipeToEdit}
          />
        </div>
      ) : null}
      {showCalculate ? (
        <div className="container-4" id="style-9">
          <Calculate recipeToShop={recipeToShop} />
        </div>
      ) : null}
    </div>
  );
}
