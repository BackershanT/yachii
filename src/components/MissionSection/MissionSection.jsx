// MissionSection.jsx
import React from "react";
import MissionHeader from "./MissionHeader";
import MissionContent from "./MissionContent";
import "./MissionSection.css"; // Manages section-wide styles like background

const MissionSection = () => {
  return (
    <section id="about" className="mission-section">
      {/* MissionHeader section */}
      <MissionHeader />

      {/* Content section */}
      <MissionContent />
    </section>
  );
};

export default MissionSection;
