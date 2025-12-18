import React from 'react'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import Category from '../components/Category/Category'
import RecipieGrid from '../components/Recipie/RecipieGrid'
import Break from '../components/Break/Break'
import Social from '../components/Social/Social'
import FeaturedGrid from '../components/Featured/FeaturedGrid'
import PreFooter from '../components/Pre-footer/PreFooter'


const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Category />
      <RecipieGrid />
      <Break />
      <Social />
      <FeaturedGrid />
      <PreFooter />

    </div>
  )
}

export default Home