import React from "react"
import Slider from "react-slick";
import './Home.css'
import home from './home.json'

function MySlider() {
  const settings = {
    infinite: true,
    dots: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    centerMode: true,
    
  
  };

  return (
    <div className="slider">
    <Slider {...settings}>

           {home.map((item, index) => (
         <div className="con">
          <div key={index} className="img">
            <img src={item.url} alt={item.title} />
            <div key={index} className="details">
            <p>{item.info} </p>
          </div>

       
          </div>
          </div>
          
        ))}
    </Slider>
    </div>
  );
}

export default MySlider;
