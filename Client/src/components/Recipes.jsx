import { React, useState } from "react";
import Recipe from "./Recipe";
import RecipeDet from "./RecipeDet";
import CalculateBtn from "./CalculateBtn";
import Calculate from "./Calculate";
import AddBtn from "./AddBtn";
import RecipeAddForm from "./RecipeAddForm";

export default function Recipes(props) {
  const port = process.env.PORT || 5000;

  /* States & handler functions for RecipeAddForm */
  const [showAddForm, setShowAddForm] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(true);
  const [hideAdd, setHideAdd] = useState(false);

  // Toggle form recipes
  function toggleAddForm(finishSubmit) {
    setAllowEdit(false);
    setShowAddForm(!showAddForm);
    setShowEdit(false);
    setRecDet(false);
    setShowCalculate(false);
    // temp submit from edit solution
    if (finishSubmit === true) {
      setIsOpenAdd(true);
      setHideCalc(false);
      setIsOpenEdit(false);
    } else {
      setIsOpenAdd(!isOpenAdd);
      setHideCalc(!hideCalc);
      setIsOpenEdit(!isOpenEdit);
    }
  }

  // Adding Recipe From Form
  async function addRecipe(recipe) {
    const res = await fetch(`https://bunplanner.herokuapp.com/add-recipe`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(recipe),
    });
    const data = await res.json();
    props.onUpdate(data);
  }

  /* States & handler functions for Edit */
  const [showEdit, setShowEdit] = useState(false);
  const [allowEdit, setAllowEdit] = useState(false);
  const [idToEdit, setIdToEdit] = useState({});
  //experimental
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  // Toggle A Recipe to edit
  async function editRecipe(id) {
    setShowAddForm(!showAddForm);
    setRecDet(false);
    setShowEdit(true);
    setAllowEdit(true);
    setIdToEdit(id);
    //experimental
    setIsOpenEdit(!isOpenEdit);
    setIsOpenAdd(!isOpenAdd);
    setHideCalc(!hideCalc);
  }

  // Stop infinite edits loop
  function disallowEdit() {
    setAllowEdit(false);
  }

  // Finalize Edit and PUT
  async function finishEdit(id, editedRecipe) {
    const res = await fetch(`https://bunplanner.herokuapp.com/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(editedRecipe),
    });
    const data = await res.json();
    props.onUpdate(data);
  }

  /* States & handler functions for Calculate */
  const [showCalculate, setShowCalculate] = useState(false);
  const [isOpenCalc, setIsOpenCalc] = useState(true);
  const [hideCalc, setHideCalc] = useState(false);
  const [recipeToShop, setRecipeToShop] = useState({});

  // Toggle Calculate
  function toggleCalculate(e) {
    e.preventDefault();
    setShowCalculate(!showCalculate);
    setRecDet(false);
    setShowAddForm(false);
    setShowEdit(false);
    setIsOpenCalc(!isOpenCalc);
    setHideAdd(!hideAdd);
  }

  // Get Recipes's ID to shop in Calculate list
  async function getRecipe(id) {
    // let recipe = await fetch(id);
    let recipe = await fetch(`https://bunplanner.herokuapp.com/recipes/${id}`);
    let data = await recipe.json();
    setRecipeToShop(data);
  }

  /* States & handler functions for RecipeDet */
  let [showRecDet, setRecDet] = useState(false);
  let [recipeTitle, setRecipeTitle] = useState("");
  let [recipeDescription, setRecipeDescription] = useState("");
  let [recipeIngredients, setRecipeIngredients] = useState("");

  function toggleRecDet() {
    if (showAddForm === true || showEdit === true || showCalculate === true)
      return;
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
                  isOpenEdit={isOpenEdit}
                  getRecipe={getRecipe}
                  toggleRecDet={toggleRecDet}
                  updateRecipeDet={updateRecipeDet}
                  key={`recipe-${index}`}
                  onRemove={props.onRemove}
                  onEdit={editRecipe}
                  recipeTitle={recipe.title}
                  recipeDescription={recipe.description}
                  recipeIngredients={recipe.ingredients}
                  // recipeId={recipe.id}
                  recipeId={recipe._id}
                />
              );
            })}
      </div>
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
