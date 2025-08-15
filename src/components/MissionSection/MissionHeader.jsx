// MissionHeader.jsx
import React from "react";
import "./MissionHeader.css";

const MissionHeader = () => {
  return (
    <>
      {/* Section Header */}
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title">ABOUT</h2>
        <div className="section-divider"></div>
      </div>

      {/* Mission Intro */}
      <div className="mission-intro" data-aos="fade-up" data-aos-delay="100">
        <h4 className="intro-title">Our Mission</h4>
        <p className="intro-text">
          <span className="italic">
            "Building a peaceful and prosperous world”
          </span>{" "}
          through groundbreaking innovations that empower communities,
          strengthen human connections, and enrich lives on a global scale.
        </p>
      </div>
    </>
  );
};

export default MissionHeader;
