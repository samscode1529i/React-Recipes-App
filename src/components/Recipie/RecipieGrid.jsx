import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import "./RecipieGrid.css"
import RecipieCards from './RecipieCards.jsx'

import grid1 from '../../assets/grid1.png'
import grid2 from '../../assets/grid2.png'
import grid3 from '../../assets/grid3.png'
import grid4 from '../../assets/grid4.png'
import grid5 from '../../assets/grid5.png'
import grid6 from '../../assets/grid6.png'
import grid7 from '../../assets/grid7.png'
import grid8 from '../../assets/grid8.png'
import grid9 from '../../assets/grid9.png'

const recipies = [
  { id: 1, title: "Lemon Salmo", image: grid1, duration: 35, type: "Pasta" },
  { id: 2, title: "Honey Dipped Pancakes", image: grid2, duration: 35, type: "Chicken" },
  { id: 3, title: "Beef Burger", image: grid3, duration: 20, type: "Salad" },
  { id: 4, title: "Full Salad Bowl", image: grid4, duration: 25, type: "Beef" },
  { id: 5, title: "Meat Balls", image: grid5, duration: 40, type: "Seafood" },
  { id: 6, title: "Pancakes", image: grid6, duration: 15, type: "Dessert" },
  { id: 7, title: "Chicken n Rice", image: grid7, duration: 30, type: "Pasta" },
  { id: 8, title: "Pasta Red Sauce", image: grid8, duration: 10, type: "Fruit" },
  { id: 9, title: "Burrito Chicken Wrap", image: grid9, duration: 35, type: "Fish" },
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
