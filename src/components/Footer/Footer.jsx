import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Foodieland..png'
import { faFacebook, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <div>
        <div className="footer">

            
            <div className="left">
                <img src={logo} alt="logo" className='logo' />
                <p>The number one spot for dishes and all things food, dishes from all around the planet and even other planets</p>
            </div>

            <div className='right'>
                <ul>
                    <div className="list">
                       <Link to="/recipie">Recipes</Link>
                       <Link to="/blog">Blog</Link>
                       <Link to="/contact">Contact</Link>
                    </div>
                </ul>
            </div>

            
        </div>

        <div className="end">
                <p>© 2026 Created By Samuel Irenikase. Figma design by Webflow</p>
                <FontAwesomeIcon icon={ faInstagram } className='icon' />
                <FontAwesomeIcon icon={ faXTwitter }  className='icon'/>
                <FontAwesomeIcon icon={ faFacebook }  className='icon'/>
        </div>
    </div>
  )
}




export default Footer