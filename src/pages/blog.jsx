import React from 'react'
import BlogPosts from '../components/BlogPosts/BlogPosts'
import PreFooter from '../components/Pre-footer/PreFooter'
import OtherRecipes from '../components/BlogPosts/OtherRecipe'
import './blog.css'


const blog = () => {
  return (
    <div>
      <div className="blog-layout">
        <BlogPosts />
        <OtherRecipes />
      </div>
      <PreFooter />
    </div>
  )
}

export default blog