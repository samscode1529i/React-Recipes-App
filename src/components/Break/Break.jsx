import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import './Break.css'
import break1 from '../../assets/break1.png'
import breakImage from '../../assets/break-images.png'



const Break = () => {


   useEffect(() => {
     AOS.init({
       duration: 800,
       once: true,
     })
   }, [])


  return (
    <div>
        <div className="break">
            <div className="left-container">
                <h2 data-aos="fade-right">Everybody can be a chef in their own kitchen</h2>
                <p data-aos="fade-up-right">Most people think cooking is a difficult task, but like most things in life all you need to do is get the hang of it and honestly cooking will become a fun part of our day.</p>
                <button className='btn' data-aos="fade-up">Learn More</button>
            </div>

            <div className="right-container">
                <img src={breakImage} alt="break" className='veggies' data-aos="fade-up" />
                <img src={break1} alt="break" className='break-img' data-aos="fade-left"/>
            </div>
        </div>
    </div>
  )
}

export default Break