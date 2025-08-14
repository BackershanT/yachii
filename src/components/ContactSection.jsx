import ContactForm from './ContactForm';

const ContactSection = () => (
  <section id="contact" className="contact section">
    <div className="container section-title mb-4" data-aos="fade-up">
      <h2>Contact</h2>
      <p className="text-muted">We'd love to hear from you. Reach out to us at any of our locations below.</p>
    </div>
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      <div className="row gx-4">
        <div className="col-lg-5 d-flex">
          <div className="info-wrap w-100 p-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Registered Address</h3>
                <p>160 Robinson Road, #14-04<br />Singapore Business Federation Center<br />Singapore (068914)</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p><a href="mailto:info@yachii.com" className="text-decoration-none">info@yachii.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 d-flex">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
