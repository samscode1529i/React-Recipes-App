import React from 'react'
import recipes from '../Recipie/RecipesData'
import './OtherRecipe.css'

const OtherRecipes = () => {
  // Pick 3 random recipes
  const shuffled = [...recipes].sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, 3)

  return (
    <div className="other-recipes" data-aos="fade-up-left">
      <h2>Other Recipes</h2>
      {selected.map(recipe => (
        <div className="other-recipe-card" key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <div className="other-recipe-info">
            <h4>{recipe.title}</h4>
            <small>By {recipe.author}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherRecipes
