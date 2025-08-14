const objectives = [
  { title: "Empower Communities", desc: "Develop technology that uplifts individuals and strengthens societal bonds." },
  { title: "Enhance Human Connections", desc: "Build digital solutions that bring people closer, enabling deeper and more meaningful interactions." },
  { title: "Drive Sustainable Innovation", desc: "Ensure responsible technological advancement that benefits humanity and the planet." },
  { title: "Promote Inclusivity & Diversity", desc: "Design products that embrace diverse perspectives and create equitable opportunities." },
  { title: "Create Prosperity", desc: "Support economic growth by developing sector-agnostic innovations that generate long-term value." },
];

const ObjectivesSection = () => (
  <section id="objectives" className="tabs">
    <div className="container" data-aos="fade-up">
      <div className="row justify-content-between">
        <div className="col-lg-6 d-flex flex-column">
          <div className="tab-content cust_objectives_seaction" data-aos="fade-up" data-aos-delay="200">
            <picture>
              <source srcSet="/images/objective.webp" type="image/webp" />
              <img
                src="/images/objective.jpg"
                alt="Objectives"
                className="img-fluid rounded-4 flip-horizontal"
                loading="lazy"
                width="100%"
              />
            </picture>
          </div>
        </div>

        <div className="col-lg-6 d-flex flex-column">
          <h4>Our Objectives</h4>
          <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            {objectives.map(({ title, desc }, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link">
                  <i className="bi bi-brightness-high"></i>
                  <div>
                    <h4 className="d-lg-block">{title}</h4>
                    <p className="text-muted">{desc}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ObjectivesSection;
