import React from "react";
import ReadMore from "../ReadMore/ReadMore";
import "./ProductFeature.css";

const ProductFeature = ({ title, image, readMore }) => (
  <section id="products" className="product-feature section">
    {/* Section Title */}
    <div
      className="container section-title text-center mb-4"
      data-aos="fade-up"
    >
      <h2>Products</h2>
    </div>

    <div className="container">
      <div className="row gy-5 align-items-center">
        {/* First Product - Text Left, Image Right */}
        <div
          className="col-lg-6 d-flex flex-column justify-content-center product-text"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>{title}</h3>
          <p className="text-muted fst-italic">
            "Nurturing relationships by bringing friends and family closer
            through shared virtual experiences"
          </p>
          <p className="text-muted">
            As technology advances, families and friends are becoming
            increasingly isolated and disconnected. But with our innovative
            approach, we're determined to change that. We're not just developing
            another app—we are building a transformative space that fosters
            genuine relationships, enriches lives, and bridges the gaps that
            technology has unintentionally created.
          </p>
          <ReadMore>{readMore}</ReadMore>
        </div>

        <div
          className="col-lg-6 product-image"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <picture>
            <source srcSet="/images/Prodcut-1.png" type="image/webp" />
            <img
              src={image}
              alt={title || "Feature image"}
              className="img-fluid rounded-4"
              loading="lazy"
            />
          </picture>
        </div>

        {/* Second Product - Image Left, Text Right */}
        <div
          className="col-lg-6 product-image"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <picture>
            <source srcSet="/images/Product-2.jpg" type="image/webp" />
            <img
              src="/images/Prodcut-2.jpg"
              alt="YWork Feature"
              className="img-fluid rounded-4"
              loading="lazy"
            />
          </picture>
        </div>

        <div
          className="col-lg-6 d-flex flex-column justify-content-center product-text"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>YWork</h3>
          <p className="text-muted fst-italic">
            "Transforming the gig economy for millions—one trusted job at a
            time."
          </p>
          <p className="text-muted">
            YWork is a platform designed to empower the blue- and grey-collar
            gig economy by seamlessly connecting service providers with clients
            seeking convenient, flexible, and reliable services. As demand for
            on-demand, trusted labor grows, YWork offers an organized,
            transparent, and user-friendly ecosystem that fosters direct access,
            fair opportunity, and dignity of work. Our mission is to transform
            this traditionally informal sector into a structured marketplace
            where both workers and consumers benefit from trust, efficiency, and
            accessibility.
          </p>
          <p className="text-muted">
            Stay tuned—
            <span className="fst-italic">
              <strong>Launching Soon!</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ProductFeature;
