import React, { useEffect } from 'react'
import AOS from "aos"
import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'
import post3 from '../../assets/post3.png'
import post4 from '../../assets/post4.png'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import './Social.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Social = () => {

      useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        })
      }, [])

  return (
    <div>
        <div className="social">
            <div className="social--head" >
                <h2 data-aos="fade-right">Check out @foodieland on Instagram</h2>
                <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>

            <div className="social--main">
                <div className='social-images'>
                    <img src={post1} alt="ig post" data-aos="fade-up" />
                    <img src={post2} alt="ig post" data-aos="fade-down"/>
                    <img src={post3} alt="ig post" data-aos="fade-up"/>
                    <img src={post4} alt="ig post"data-aos="fade-down" />
                </div>

                
                <div className='social-btn' data-aos="fade-up">
                    <button className="btn">
                        Visit Our Instagram <FontAwesomeIcon icon={faInstagram} size='x3'/>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Social