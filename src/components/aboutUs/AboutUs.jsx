import React from "react";
import image from '../../assets/images/object-1.png'
import "./AboutUs.css";

const AboutUs = () => {
  return (
      <div className="aboutus-container" id="about">
          <div className="aboutus-wrapper">
              <div className="aboutus-left-content">
                  <h1 className="aboutus-title">ABOUT COMPANY</h1>
                  <p className="aboutus-paragraph-first">
                      At Cynthronix, we are a leading IT solutions provider
                      dedicated to delivering innovative and cutting-edge
                      technology services.
                  </p>
                  <p className="aboutus-paragraph-second">
                      With a team of skilled professionals and a passion for
                      excellence, we strive to empower businesses with advanced
                      digital solutions that drive growth, efficiency, and
                      success. With a strong commitment to customer
                      satisfaction, we work closely with our clients to
                      understand their unique needs and deliver tailored IT
                      solutions that exceed expectations. Trust us to be your
                      reliable partner in navigating the ever-evolving
                      technology landscape and unlocking the full potential of
                      your business.
                  </p>
                  <button className="aboutus-button">
                      <a href="#contact">Reach Us</a>
                  </button>
              </div>
              <div className="aboutus-right-content">
                  <div className="image_wrapper">
                      <img
                          src={image}
                          alt="cynthronix"
                          srcset=""
                          className="image"
                      />
                  </div>
              </div>
          </div>
      </div>
  );
};

export default AboutUs;
