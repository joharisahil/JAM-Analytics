import React from "react";
import image from "../../assets/images/object-1.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container" id="about">
      <div className="aboutus-wrapper">
        <div className="aboutus-left-content">
          <h1 className="aboutus-title">ABOUT COMPANY</h1>
          <p className="aboutus-paragraph-first">
            <span className="aboutus-paragraph-company">
              JAM Analytics Pvt. Ltd.
            </span>{" "}
            pioneers advanced ERP and LMS solutions tailored for educational
            institutions and corporate entities.
          </p>
          <p className="aboutus-paragraph-second">
            With a commitment to innovation, we specialize in enhancing
            operational efficiency and educational outcomes through cutting-edge
            technology. Our comprehensive suite of services integrates
            seamlessly, providing holistic management solutions that empower
            clients to streamline processes and achieve strategic goals
            effortlessly. Backed by a dedicated team of experts, we ensure
            unparalleled support and customization to meet the unique needs of
            each client. Discover how JAM Analytics transforms education and
            business management with precision and reliability.
          </p>
          <button className="aboutus-button">
            <a href="#contact">Reach Us</a>
          </button>
        </div>
        <div className="aboutus-right-content">
          <div className="image_wrapper">
            <img src={image} alt="cynthronix" srcset="" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
