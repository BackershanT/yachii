// MissionContent.jsx
import React from "react";
import "./MissionContent.css";

const MissionContent = () => {
  return (
    <div className="mission-content">
      {/* Text Side */}
      <div className="mission-text" data-aos="fade-right" data-aos-delay="200">
        <h4 className="content-title">Our Story</h4>
        <p>
          Yachii was born from a simple yet powerful vision—technology should
          uplift, connect, and enrich lives. The name Yachii originates from
          our founder’s nickname and aligns beautifully with its Japanese
          meaning: <strong>"eight thousand blessings" or "eight wisdom."</strong>
          It embodies wisdom, abundance, and the infinite power of collaboration.
        </p>
        <p>
          Guided by these values, we are dedicated to developing{" "}
          <strong>transformative, sector-agnostic solutions</strong> that transform
          digital experiences. From a next-generation social media platform
          reshaping online interactions and virtual shopping to a revolutionary
          gig worker hub redefining the blue- and grey-collar workforce — Yachii
          empowers individuals and fosters prosperity on a global scale.
        </p>
      </div>

      {/* Image Side */}
      <div className="mission-image" data-aos="fade-left" data-aos-delay="300">
        <picture>
          <source srcSet="/images/our-story.webp" type="image/webp" />
          <img src="/images/our-story.jpg" alt="Our Story" loading="lazy" />
        </picture>
      </div>
    </div>
  );
};

export default MissionContent;
