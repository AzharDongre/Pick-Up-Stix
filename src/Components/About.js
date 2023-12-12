import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image2.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">What We Do</p>
        <h1 className="primary-heading">Welcome to Pick Up Sticks</h1>
        <p className="primary-text">
          Here, we offer a delightful array of dishes designed to be enjoyed on
          a stick. Our vibrant establishment is dedicated to redefining
          convenience dining. Join us at Pick Up Sticks for a unique culinary
          journey, where innovation meets flavor in every bite.
        </p>
        <p className="primary-text">
          Whether it's a casual meal or a special celebration, we also cater to
          party orders for an unforgettable dining experience.
        </p>
      </div>
    </div>
  );
};

export default About;
