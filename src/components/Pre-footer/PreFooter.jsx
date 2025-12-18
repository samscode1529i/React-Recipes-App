import React, { useEffect } from 'react'
import AOS from "aos"
import './PreFooter.css'
 import footer1 from '../../assets/footer1.png'
 import footer2 from '../../assets/footer2.png'

const PreFooter = () => {


      useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        })
      }, [])


  return (
    <div>
        <div className="preFooter" data-aos="zoom-in">
            <div className='breaker'>

                <div>
                    <h2 data-aos="fade-down">Deliciousness to your inbox</h2>
                    <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>

                    <form className="email-form">
                        <input type="email" placeholder="Your email address..." data-aos="fade-right"/>
                        <button type="submit" data-aos="fade-left">Subscribe</button>
                    </form>

                    <div className="images">
                        <img src={footer1} alt="" className="img1" data-aos="fade-up-right"/>
                        <img src={footer2} alt="" className="img2" data-aos="fade-up-left"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default PreFooter