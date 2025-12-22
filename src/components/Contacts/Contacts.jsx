import React, { useEffect } from 'react'
import AOS from "aos"
import './Contact.css'
import ContactImg from '../../assets/contact-img.png'

const Contacts = () => {


      useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        })
      }, [])


  return (
    <div>
        <div className="contacts">
            <div className='contacts--head'>
                <h2 data-aos="fade-right">Contact Us</h2>
                <p data-aos="fade-left">Contact Us and we'll respond in a Giffy...?</p>
            </div>

            <div className="contact--form">
                <div className="left" data-aos="fade-up-right">
                    <img src={ContactImg} alt="" />
                </div>
                <div className="right" data-aos="fade-up-left">
                        <form className="contact-form">
                            <input type="text" placeholder="Full Name" data-aos="fade-right"/>
                            <input type="email" placeholder="Email Address"data-aos="fade-left" />
                            <input type="text" placeholder="Subject" data-aos="fade-right"/>

                            <select data-aos="fade-left">
                                <option value="">Enquiry Type</option>
                                <option value="general">General</option>
                                <option value="recipes">Recipes</option>
                                <option value="support">Support</option>
                            </select>

                            <textarea placeholder="Your Message" data-aos="fade-up"></textarea>

                            <button type="submit" data-aos="fade-down">Submit</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts