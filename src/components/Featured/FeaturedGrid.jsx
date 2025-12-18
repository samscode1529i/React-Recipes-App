import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import './FeaturedGrid.css'
import grid10 from '../../assets/grid10.png'
import grid11 from '../../assets/grid11.png'
import grid12 from '../../assets/grid12.png'
import grid13 from '../../assets/grid13.png'
import grid14 from '../../assets/grid14.png'
import grid15 from '../../assets/grid15.png'
import grid16 from '../../assets/grid16.png'
import grid17 from '../../assets/grid17.png'
import RecipieCards from '../Recipie/RecipieCards'

const recipies = [
  { id: 1, title: "Mixed Tropical Fruit Salad with Superfood Boosts ", image: grid10, duration: 35, type: "Pasta" },
  { id: 2, title: "Big and Juicy Wagyu Beef Cheeseburger", image: grid11, duration: 35, type: "Chicken" },
  { id: 3, title: "Healthy Japanese Fried Rice with Asparagus", image: grid12, duration: 20, type: "Salad" },
  { id: 4, title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing", image: grid13, duration: 25, type: "Beef" },
  { id: 5, title: "Barbeque Spicy Sandwiches with Chips ", image: grid14, duration: 40, type: "Seafood" },
  { id: 6, title: "Firecracker Vegan Lettuce Wraps - Spicy! ", image: grid15, duration: 15, type: "Dessert" },
  { id: 7, title: "Chicken Ramen Soup with Mushroom ", image: grid16, duration: 30, type: "Pasta" },
  { id: 8, title: "Grilled Chicken Burrito", image: grid17, duration: 10, type: "Fruit" }
  
]

const FeaturedGrid = () => {


      useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        })

        
        AOS.refresh()
      }, [])

  return (
    <div>
        <div className="featured"   >
            <div className="featured--head"  data-aos="fade-up">
                    <h2>Try this delicious recipe
                        to make your day</h2>
                

                    <p>Explore exciting tastes and have fun in the kitchen with our simple, step-by-step recipes. From first-time cooks to skilled home chefs, our dishes are made to spark ideas and make cooking enjoyable for everyone.</p>
            </div>

            <div className="featured--grid">
                    {recipies.map((recipe, index) => {
                      const animation = index % 2 === 0 ? "fade-up" : "fade-down";
                      return (
                        <RecipieCards
                          key={recipe.id}
                          {...recipe}
                          aos={animation}  // pass to the card
                          className="no-bg"
                        />
                      )
                    })}
            </div>
        </div>
    </div>
  )
}

export default FeaturedGrid