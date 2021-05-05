import React from "react";
import { IoMdSettings } from "react-icons/io";
import RecipeAddFormIng from "./RecipeAddFormIng";
export default function RecipeAddForm(props) {
  let ingArray = [];
  for (let i = 0; i < props.ingCounter; i++) {
    ingArray.push(
      <RecipeAddFormIng
        id={Math.floor(Math.random() * 10000 + 1)}
        key={i}
        addIng={props.addIng}
        removeIng={props.removeIng}
        allowAddIng={props.allowAddIng}
        removePlus={i === 0 ? false : true}
      />
    );
  }

  // ingArray = ingArray.filter((ing) => {
  //   console.log(`clicked id: ${ing.props.id}, filter id: ${props.filterArray}`);
  //   return ing.props.id !== props.filterArray;
  // });

  return (
    <div className="add-form-container">
      {/* <button className="btn close-btn">Close</button> */}
      <form className="add-form">
        <input type="text" placeholder="Recipe Name" />
        <textarea placeholder="Recipe Description" />
        {ingArray.map((ing) => {
          return ing;
        })}
        <button className="submit-form-btn">Save Recipe</button>
      </form>
    </div>
  );
}
