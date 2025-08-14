import React from "react";
import "./MissionSection.css"; // We'll create this new CSS file for styling

const MissionSection = () => {
  return (
    <section id="about" className="mission-section">
      {/* Section Header */}
      <div className="section-header" data-aos="fade-up">
        <h2 className="section-title">About</h2>
        <div className="section-divider"></div>
      </div>

      {/* Mission Intro */}
      <div
        className="mission-intro"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h4 className="intro-title">Our Mission</h4>
        <p className="intro-text">
          <span className="italic">
            "Building a peaceful and prosperous world”
          </span>{" "}
          through groundbreaking innovations that empower communities,
          strengthen human connections, and enrich lives on a global scale.
        </p>
      </div>

      {/* Mission Content */}
      <div className="mission-content">
        {/* Text Side */}
        <div
          className="mission-text"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h4 className="content-title">Our Story</h4>
          <p>
            Yachii was born from a simple yet powerful vision—technology should
            uplift, connect, and enrich lives. The name Yachii originates from
            our founder’s nickname and aligns beautifully with its Japanese
            meaning:{" "}
            <strong>
              "eight thousand blessings" or "eight wisdom."
            </strong>{" "}
            It embodies wisdom, abundance, and the infinite power of
            collaboration.
          </p>
          <p>
            Guided by these values, we are dedicated to developing{" "}
            <strong>
              transformative, sector-agnostic solutions
            </strong>{" "}
            that transform digital experiences. From a next-generation social
            media platform reshaping online interactions and virtual shopping
            to a revolutionary gig worker hub redefining the blue- and
            grey-collar workforce — Yachii empowers individuals and fosters
            prosperity on a global scale.
          </p>
        </div>

        {/* Image Side */}
        <div
          className="mission-image"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <picture>
            <source srcSet="/images/our-story.webp" type="image/webp" />
            <img
              src="/images/our-story.jpg"
              alt="Our Story"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
