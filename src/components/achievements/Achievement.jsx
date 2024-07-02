import React from "react";
import "./Achievement.css";

const Achievement = () => {
  return (
    <div className="achievement-container">
      <div className="achievement-wrapper">
        <div className="achievement-left-content">
          <h1 className="achievement-title">RECOGNITIONS AND ACHIEVEMENTS</h1>
          <p className="achivement-paragraph">
            we take pride in our remarkable recognitions and achievements that
            highlight our dedication, expertise, and commitment to excellence.
            We have been consistently recognized and honored for our
            contributions in the IT industry, client satisfaction, successful
            project deployments, and continuous innovation.
          </p>
        </div>
        <div className="achievement-right-content">

          <div className="right-content-card">
            <p className="counts"><span className="client-count">500</span><span className="client-plus">+</span></p>
            <span className="achievement-label">Awards won</span>
          </div>

          <div className="right-content-card">
            <p className="counts"><span className="client-count">2k</span><span className="client-plus">+</span></p>
            <span className="achievement-label">Clients Satisfied</span>
          </div>
         
          <div className="right-content-card">
            <p className="counts"><span className="client-count">3k</span></p>
            <span className="achievement-label">Projects Delivered</span>
          </div>
          <div className="right-content-card">
          <p className="counts"><span className="client-count">100</span><span className="client-plus">+</span></p>
            <span className="achievement-label">Team Members</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Achievement;
