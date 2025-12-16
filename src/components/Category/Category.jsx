import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import brakefast from '../../assets/breakfast.png'
import vegan from '../../assets/vegan.png'
import chocolate from '../../assets/chocolate.png'
import meat from '../../assets/meat.png'
import dessert from '../../assets/cake.png'
import lunch from '../../assets/sandwitch.png'
import './Category.css'

const Category = () => {

      useEffect(() => {
        AOS.init({ duration: 1000 }); // animation duration in ms
  }, []);

  return (
    <div>
        <div className="category">
            <div className="category--head" >
                <h2 data-aos="fade-right">Category</h2>
                <button data-aos="fade-left">View all Categories</button>
            </div>

            <div className="category--main" >
                <div className='item-text'  data-aos="fade-up">
                    <div className='category-img'>
                        <img src={brakefast} alt="" />
                    </div>
                    <p className='b-fast'>Breakfast</p>
                </div>

                <div className='item-text' data-aos="fade-down">
                    <div className='category-img'>
                        <img src={vegan} alt="" />
                    </div>
                    <p className='vegan'>Vegan</p>
                </div>

                <div className='item-text'  data-aos="fade-up">
                    <div className='category-img'>
                        <img src={meat} alt="" />
                    </div>
                    <p className='meat'>Meat</p>
                </div>
                
                
                <div className='item-text'  data-aos="fade-down">
                    <div className='category-img'>
                        <img src={dessert} alt="" />
                    </div>
                    <p className='dessert'>Dessert</p>
                </div>
                
                <div className='item-text'  data-aos="fade-up">
                    <div className='category-img'>
                        <img src={lunch} alt="" />
                    </div>
                    <p className='lunch'>Lunch</p>
                </div>
                
                <div className='item-text'  data-aos="fade-down">
                    <div className='category-img'>
                        <img src={chocolate} alt="" />
                    </div>
                    <p className='chocolate'>Chocolate</p>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Category