import React from 'react'
import './BlogPosts.css'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import blog4 from '../../assets/blog4.png'
import blog5 from '../../assets/blog5.png'
import blog6 from '../../assets/blog6.png'

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Perfect Pasta",
    image: blog1,
    body: "Learn the best ways to cook pasta and make your meals taste amazing...",
    author: "Jane Doe",
    date: "2025-12-01"
  },
  {
    id: 2,
    title: "Healthy Fried Rice Recipes",
    image: blog2,
    body: "Discover easy ways to make fried rice healthy and delicious...",
    author: "John Smith",
    date: "2025-12-03"
  },
  {
    id: 3,
    title: "Top 10 Spices for Cooking",
    image: blog3,
    body: "Enhance your dishes with these essential spices every kitchen needs...",
    author: "Alice Green",
    date: "2025-12-05"
  },
  {
    id: 4,
    title: "Baking Bread at Home",
    image: blog4,
    body: "Step-by-step guide to baking soft, fresh bread at home...",
    author: "Mark White",
    date: "2025-12-07"
  },
  {
    id: 5,
    title: "Quick and Easy Soups",
    image: blog5,
    body: "Learn to make comforting soups in under 30 minutes...",
    author: "Emma Brown",
    date: "2025-12-09"
  },
  {
    id: 6,
    title: "Vegan Desserts You’ll Love",
    image: blog6,
    body: "Delicious plant-based desserts that satisfy your sweet tooth...",
    author: "Liam Gray",
    date: "2025-12-11"
  }
]

const BlogPosts = () => {
  return (
    <>

    <div className="blog--head">
      <h2>Blog & Artice</h2>
      <p>Check around our blog, post or look up dishes you find interesting share your cullunary opinions with the whole world</p>
    </div>

    <div className="blogPosts">
      {blogPosts.map(post => (
        <div className="blog-post-card" key={post.id}>
          <img src={post.image} alt={post.title} />
          <div className="blog-post-content">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>By {post.author} | {post.date}</small>
          </div>
        </div>
      ))}
    </div>


    </>
  )
}

export default BlogPosts