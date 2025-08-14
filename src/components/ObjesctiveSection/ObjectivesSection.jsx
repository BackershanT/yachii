import React from "react";
import "../ObjesctiveSection/ObjectiveSection.css";

const objectives = [
  {
    title: "Empower Communities",
    desc: "Develop technology that uplifts individuals and strengthens societal bonds."
  },
  {
    title: "Enhance Human Connections",
    desc: "Build digital solutions that bring people closer, enabling deeper and more meaningful interactions."
  },
  {
    title: "Drive Sustainable Innovation",
    desc: "Ensure responsible technological advancement that benefits humanity and the planet."
  },
  {
    title: "Promote Inclusivity & Diversity",
    desc: "Design products that embrace diverse perspectives and create equitable opportunities."
  },
  {
    title: "Create Prosperity",
    desc: "Support economic growth by developing sector-agnostic innovations that generate long-term value."
  }
];

const ObjectivesSection = () => (
  <section id="objectives" className="objectives-section">
    <div className="objectives-container">
      {/* Left Image */}
      <div className="objectives-image" data-aos="fade-up">
        <picture>
          <source srcSet="/images/objective.webp" type="image/webp" />
          <img
            src="/images/objective.jpg"
            alt="Objectives"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Right Content */}
      <div className="objectives-content">
        <h2 className="section-title" data-aos="fade-up">
          Our Objectives
        </h2>
        <div className="objectives-list">
          {objectives.map(({ title, desc }, index) => (
            <div
              className="objective-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="icon">
                <i className="bi bi-brightness-high"></i>
              </div>
              <div className="text">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ObjectivesSection;
