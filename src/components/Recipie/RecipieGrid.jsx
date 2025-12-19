import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import "./RecipieGrid.css"
import RecipieCards from './RecipieCards.jsx'
import recipies from './RecipesData.js'


const RecipieGrid = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <div className="recipie-grid-wrapper">

      <div className="recipie-grid-head">
        <h2 data-aos="fade-left">Simple and tasty recipes</h2>
        <p data-aos="fade-right">
          The best culinary achievements, join us and find the dish that best suits your taste, go around the site and enjoy.
        </p>
      </div>

      <div className="recipie-grid">
        {recipies.map((recipe, index) => {
          const animation = index % 2 === 0 ? "fade-up" : "fade-down";
          return (
            <RecipieCards
              key={recipe.id}
              {...recipe}
              aos={animation}  // pass to the card
            />
          )
        })}
      </div>

    </div>
  )
}

export default RecipieGrid
