import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import "./RecipieGrid.css"
import RecipieCards from './RecipieCards.jsx'

import grid1 from '../../assets/grid1.png'

const recipies = [
  { id: 1, title: "Chicken Pasta", image: grid1, duration: 35, type: "Pasta" },
  { id: 2, title: "Grilled Chicken", image: grid1, duration: 35, type: "Chicken" },
  { id: 3, title: "Vegetable Salad", image: grid1, duration: 20, type: "Salad" },
  { id: 4, title: "Beef Burger", image: grid1, duration: 25, type: "Beef" },
  { id: 5, title: "Seafood Rice", image: grid1, duration: 40, type: "Seafood" },
  { id: 6, title: "Pancakes", image: grid1, duration: 15, type: "Dessert" },
  { id: 7, title: "Spaghetti", image: grid1, duration: 30, type: "Pasta" },
  { id: 8, title: "Fruit Bowl", image: grid1, duration: 10, type: "Fruit" },
  { id: 9, title: "Roasted Fish", image: grid1, duration: 35, type: "Fish" },
]

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
          // Decide animation based on odd/even index
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
