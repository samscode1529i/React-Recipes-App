import React from 'react'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import Category from '../components/Category/Category'
import RecipieGrid from '../components/Recipie/RecipieGrid'



const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Category />
      <RecipieGrid />

    </div>
  )
}

export default Home