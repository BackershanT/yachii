const MissionSection = () => (
    <section id="about" className="about section">
        <div className="container section-title text-center mt-sm-2 mt-md-2 mb-lg-2" data-aos="fade-up">
            <h2>About</h2>
        </div>
        <div className="container text-start ps-lg-4">
            <h4>Our Mission</h4>
            <p className='text-muted small lh-lg'>
                <span className="fst-italic">"Building a peaceful and prosperous world”</span> through groundbreaking innovations that empower communities, strengthen human connections, and enrich lives on a global scale.
            </p>
        </div>
        <div className="container">
            <div className="row gy-3 mt-4">
                <div className="col-lg-6 h-100 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="ps-0 ps-lg-3">
                        <h4>Our Story</h4>
                        <p className="text-muted small lh-lg">
                            Yachii was born from a simple yet powerful vision—technology should uplift, connect, and enrich lives. The name Yachii originates from our founder’s nickname and aligns beautifully with its Japanese meaning: <strong>"eight thousand blessings" or "eight wisdom."</strong> It embodies wisdom, abundance, and the infinite power of collaboration.
                        </p>
                        <p className='text-muted small lh-lg'>
                            Guided by these values, we are dedicated to developing <strong>transformative, sector-agnostic solutions</strong> that transform digital experiences. Its core offering is a next-generation social media platform reshaping online interactions and virtual shopping to a revolutionary gig worker hub redefining the blue- and grey-collar workforce. s. Through these advancements, Yachii empowers individuals and fosters prosperity on a global scale.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <picture>
                        <source srcSet="/images/our-story.webp" type="image/webp" />
                        <img
                            src="/images/our-story.jpg"
                            alt="Our Story"
                            className="img-fluid rounded-4"
                            loading="lazy"
                            width="100%"
                        />
                    </picture>
                </div>

            </div>
        </div>
    </section>
);

export default MissionSection;
