import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      <h1>Dinner Recipes</h1>
      <div className="grid-container">
        {recipes.map((recipe) => (
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
