import React from 'react'
import './RecipieCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUtensils } from '@fortawesome/free-solid-svg-icons'

const RecipieCards = ({ title, image, duration, type, aos, className }) => {
  return (
    <div className={`recipe-card ${className ? className : ''}`} data-aos={aos}>
      <img
        src={image}
        alt={title}
        className="recipe-card-img"
      />
      <div className="recipe-card-content">
        <h3>{title}</h3>
        <div className="recipe-card-meta">
          <span className="meta-item">
            <FontAwesomeIcon icon={faClock} />
            <span>{duration} mins</span>
          </span>
          <span className="meta-item">
            <FontAwesomeIcon icon={faUtensils} />
            <span>{type}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RecipieCards
