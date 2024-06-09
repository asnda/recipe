import React from "react";
import { useParams, Link } from "react-router-dom";
import "./RecipeDetail.css";

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-info">
        <div className="info-item">
          <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
        </div>
        <div className="info-item">
          <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
        </div>
        <div className="info-item">
          <p><strong>Total Time:</strong> {recipe.totalTime}</p>
        </div>
        <div className="info-item">
          <p><strong>Servings:</strong> {recipe.servings}</p>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Preparation Steps</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <h2>Nutrition Information</h2>
      <div className="nutrition-info">
        <p><strong>Calories:</strong> {recipe.nutrition.calories}</p>
        <p><strong>Protein:</strong> {recipe.nutrition.protein}</p>
        <p><strong>Fat:</strong> {recipe.nutrition.fat}</p>
        <p><strong>Carbs:</strong> {recipe.nutrition.carbs}</p>
      </div>
      <Link to="/" className="back-link">Back to Recipes List</Link>
    </div>
  );
};

export default RecipeDetail;
