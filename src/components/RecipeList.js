import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  // Filter dinner recipes
  const dinnerRecipes = recipes.filter(recipe => recipe.category === "Dinner");
  // Filter dessert recipes
  const dessertRecipes = recipes.filter(recipe => recipe.category === "Dessert");

  return (
    <div className="recipe-list">
      <h1>Dinner Recipes</h1>
      <div className="grid-container">
        {dinnerRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <img src={recipe.image} alt={recipe.title} className="recipe-thumbnail" />
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} className="view-link">
              View Recipe
            </Link>
          </div>
        ))}
      </div>

      <h1>Dessert Recipes</h1>
      <div className="grid-container">
        {dessertRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <img src={recipe.image} alt={recipe.title} className="recipe-thumbnail" />
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} className="view-link">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
