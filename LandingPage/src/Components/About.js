import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
  <div className="about-section-container">
    <div className="about-background-image-container">
        <img src={AboutBackground} alt=""></img>
    </div>
    <div className="about-section-image-container">
    <img src={AboutBackgroundImage} alt=""></img>

    
    <div className="about-section-text-conatiner">
        <p className="primary-subheading">About
        </p>
        <h1 className="primary-haeding">
         Food is an important part of balanced diet
        </h1>
        <p className="primary-text">Healthy Fresh- Happy meal</p>
        <p className="primary-text"></p>
        <div className="about-buttons-container"></div>
        <button className="secondary-button">Learn more</button>
        <button className="watch-video-button">
            {" "}
        <BsFillPlayCircleFill/>Watch Video
        </button>
    </div>
     </div>
  </div>
  );
};

export default About;
