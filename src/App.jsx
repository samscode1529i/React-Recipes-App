import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Blog from './pages/blog'
import Recipie from './pages/Recipie'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/blog" element={<Blog/>} />
          <Route path ="/recipie" element={<Recipie/>} />
          <Route path ="/contact" element={<Contact/>} />
          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App