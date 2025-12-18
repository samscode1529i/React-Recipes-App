import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Recipie.css'
import RecipieCards from '../components/Recipie/RecipieCards'
import grid1 from '../assets/grid1.png'
import grid2 from '../assets/grid2.png'
import grid3 from '../assets/grid3.png'
import grid4 from '../assets/grid4.png'
import grid5 from '../assets/grid5.png'
import grid6 from '../assets/grid6.png'
import grid7 from '../assets/grid7.png'
import grid8 from '../assets/grid8.png'
import grid9 from '../assets/grid9.png'
import grid10 from '../assets/grid10.png'
import grid11 from '../assets/grid11.png'
import grid12 from '../assets/grid12.png'
import grid13 from '../assets/grid13.png'
import grid14 from '../assets/grid14.png'
import grid15 from '../assets/grid15.png'
import grid16 from '../assets/grid16.png'
import grid17 from '../assets/grid17.png'

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

  { id: 10, title: "Mixed Tropical Fruit Salad with Superfood Boosts ", image: grid10, duration: 35, type: "Pasta" },
  { id: 11, title: "Big and Juicy Wagyu Beef Cheeseburger", image: grid11, duration: 35, type: "Chicken" },
  { id: 12, title: "Healthy Japanese Fried Rice with Asparagus", image: grid12, duration: 20, type: "Salad" },
  { id: 13, title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing", image: grid13, duration: 25, type: "Beef" },
  { id: 14, title: "Barbeque Spicy Sandwiches with Chips ", image: grid14, duration: 40, type: "Seafood" },
  { id: 15, title: "Firecracker Vegan Lettuce Wraps - Spicy! ", image: grid15, duration: 15, type: "Dessert" },
  { id: 16, title: "Chicken Ramen Soup with Mushroom ", image: grid16, duration: 30, type: "Pasta" },
  { id: 17, title: "Grilled Chicken Burrito", image: grid17, duration: 10, type: "Fruit" }
  
]

const Recipie = () => {

  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentRecipies = recipies.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(recipies.length / cardsPerPage);


  return (
    <div>
      <div className="recipe--head">
        <h1>Recipes</h1>
        <p>Tasty dishes made simple. Explore our collection and cook something amazing today!</p>
      </div>

      <div className="featured--grid">
        {currentRecipies.map((recipe, index) => {
          const animation = index % 2 === 0 ? 'fade-up' : 'fade-down';
          return <RecipieCards key={recipe.id} {...recipe} aos={animation} />;
        })}
      </div>

      {/* Pagination / Carousel */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Recipie