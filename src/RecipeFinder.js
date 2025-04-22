import React, { useState } from "react";
import { ingredientsList } from "./recipes";
import recipes from "./full_format_recipes.json";
import "./RecipeFinder.css";

function RecipeFinder() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [modalRecipe, setModalRecipe] = useState(null);
  const [modalDetails, setModalDetails] = useState(null);

  // Filter recipes based on selected ingredients
  const filteredRecipes = selectedIngredients.length === 0
    ? recipes
    : recipes.filter(recipe =>
        selectedIngredients.every(ingredient =>
          recipe.ingredients && Array.isArray(recipe.ingredients)
            ? recipe.ingredients.some(ing => ing.toLowerCase().includes(ingredient.toLowerCase()))
            : false
        )
      );



  const handleIngredientChange = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleRecipeClick = (recipe) => {
    setModalRecipe(recipe);
    setModalDetails(recipe);
  };

  const closeModal = () => {
    setModalRecipe(null);
    setModalDetails(null);
  };

  const handleRemoveIngredient = (ingredient) => {
    setSelectedIngredients((prev) => prev.filter((i) => i !== ingredient));
  };


  return (
    <div className="recipe-finder-container">
      <h2>Choose Your Ingredients</h2>
      <div className="ingredients-list">
        {ingredientsList.filter(ingredient => !selectedIngredients.includes(ingredient)).map((ingredient) => (
          <label key={ingredient} className="ingredient-item">
            <input
              type="checkbox"
              value={ingredient}
              checked={false}
              onChange={() => handleIngredientChange(ingredient)}
            />
            {ingredient}
          </label>
        ))}
      </div>
      <h3>Recipes:</h3>
      {selectedIngredients.length > 0 && (
        <div className="selected-ingredients-container">
          {selectedIngredients.map((ingredient) => (
            <span className="ingredient-chip" key={ingredient}>
              {ingredient}
              <button
                className="chip-remove"
                onClick={() => handleRemoveIngredient(ingredient)}
                title="Remove"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="recipes-big-container">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, idx) => (
            <div
              className="recipe-card"
              key={recipe.id || idx}
              onClick={() => handleRecipeClick(recipe)}
              style={{ cursor: "pointer" }}
              title="Click for details"
            >
              {recipe.image && (
                <img
                  className="recipe-image"
                  src={recipe.image}
                  alt={recipe.title}
                />
              )}
              <div className="recipe-info">
                <h4 className="recipe-title">{recipe.title}</h4>
              </div>
            </div>
          ))
        ) : (
          <div className="no-dishes-msg">No recipes found. Try selecting different ingredients!</div>
        )}
      </div>

      {selectedIngredients.length > 0 && (
        <div className="selected-ingredients-container">
          {selectedIngredients.map((ingredient) => (
            <span className="ingredient-chip" key={ingredient}>
              {ingredient}
              <button
                className="chip-remove"
                onClick={() => handleRemoveIngredient(ingredient)}
                title="Remove"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Modal Popup */}
      {modalRecipe && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            {modalDetails ? (
              <>
                {modalDetails.image && (
                  <img className="modal-image" src={modalDetails.image} alt={modalDetails.title} />
                )}
                <h2 className="modal-title">{modalDetails.title}</h2>
                <h4>Ingredients:</h4>
                <ul className="modal-ingredients-list">
                  {modalDetails.ingredients && modalDetails.ingredients.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
                <h4>Instructions:</h4>
                {modalDetails.instructions && modalDetails.instructions.length > 0 ? (
                  <ol className="modal-instructions-list">
                    {modalDetails.instructions.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                ) : (
                  <div>No instructions found for this recipe.</div>
                )}
              </>
            ) : (
              <div>No details available for this recipe.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeFinder;
