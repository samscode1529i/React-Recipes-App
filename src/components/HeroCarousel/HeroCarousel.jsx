import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./HeroCarousel.css";
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import hero4 from '../../assets/hero4.png'
import scroll from '../../assets/scroll.png'
import johnDoe from '../../assets/john.png'

// Data for slides
const slides = [
  {
    title: "Spicy fried chicken wings",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et  ",
    image: hero1,
    dishType: "Pasta",
    duration: "30 minutes",
    authorImage: johnDoe,
    authorName: "John Doe",
    date: "Dec 15, 2025"
  },
  {
    title: "Healthy And Savory Salad",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et ",
    image: hero2,
    dishType: "Soup",
    duration: "45 minutes",
    authorImage: johnDoe,
    authorName: "John Doe",
    date: "Dec 12, 2025"
  },
  {
    title: "Tender Pork Loin Roast",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim  ",
    image: hero3,
    dishType: "Pasta",
    duration: "45 minutes",
    authorImage: johnDoe,
    authorName: "John Doe",
    date: "Dec 12, 2025"
  },
  {
    title: "Spicy Frog Bites With Grits",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et  ",
    image: hero4,
    dishType: "Chicken",
    duration: "45 minutes",
    authorImage: johnDoe,
    authorName: "John Doe",
    date: "Dec 12, 2025"
  }

];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            {/* Left Card */}
            <div className="slide-card">
              <div className="top-img">
                  <span> <img src={scroll} alt="" />Hot Recipies</span>
              </div>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>

              <div className="card-info">
                <div className="info-item">
                  <FontAwesomeIcon icon={faClock} /> {slide.duration}
                </div>
                <div className="info-item">
                  <FontAwesomeIcon icon={faUtensils} /> {slide.dishType}
                </div>
              </div>

              <div className="card-footer">
                <div className="author">
                  <img src={slide.authorImage} alt="author" />
                  <div className="author-info">
                    <span>{slide.authorName}</span>
                    <span className="date">{slide.date}</span>
                  </div>
                </div>
                <div className="card-button">
                  View Recipes
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="slide-image">
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
