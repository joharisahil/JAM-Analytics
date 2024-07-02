import React from "react";
import bannerImage from "../../assets/images/object-2.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="Banner-Container">
      <div className="Banner-Wrapper">
        <div className="Banner-Left-Content">
          <h1 className="Banner-Heading">
            EMPOWERING INNOVATION, SIMPLIFYING COMPLEXITY
          </h1>
          <p className="Banner-Description">
            Discover excellence in ERP and LMS solutions tailored for schools,
            colleges, and corporates. At JAM Analytics, we leverage cutting-edge
            technology to revolutionize education and business management.
            Experience seamless integration, enhanced productivity, and
            exceptional support. Partner with us to elevate your organizational
            efficiency and success.
          </p>
          <button className="Contact-btn">
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </a>
          </button>
        </div>
        <div className="Banner-Right-Content">
          <div className="Banner-Image-Wrapper">
            <img src={bannerImage} alt="Cynthronix" className="Banner-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
