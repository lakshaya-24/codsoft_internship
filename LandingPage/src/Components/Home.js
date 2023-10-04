import React from 'react'
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";
const Home = () => {
  return <div className="home-container">
    <Navbar/>
    <div className="home-banner-container">
        <div className="home-bannerImage-conatiner">
            <img src={BannerBackground} alt=""/>
            </div>
            <div className="home-text-section">
                <h2 className="primary-heading">
                    Your favourite food is Delivered Hot and Fresh
                </h2>
                <p className="primary-text">
                
                </p>
                <button className="secondary-button">
                  Order Now <FiArrowRight/>
                </button>
            </div>
            <div className="home-image-container">
              <img src={BannerImage} alt=" "></img>
            </div>
    </div>
  </div>
}

export default Home