import { useState, useEffect, useMemo } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array of high-quality images for the slider
  const images = useMemo(
    () => [
      { url: "/images/banner_12.jpg", title: "sfdgfghf", description: "Nurturing relationships by bringing friends and family closer through shared virtual experiences" },
      { url: "/images/banner_123.jpeg", title: "", description: "Transforming the gig economy for millions—one trusted job at a time" }
    ],
    []
  );

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = images.map((img) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.onload = resolve;
            image.onerror = () => {
              console.error(`Failed to load image: ${img.url}`);
              resolve();
            };
            image.src = img.url;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, [images]);

  // Auto-advance the slider
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, imagesLoaded]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const goToNext = () =>
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  if (!imagesLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div id="home" className="slider-container">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className="slide"
          style={{
            backgroundImage: `url(${image.url})`,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          <div className="slide-overlay">
            <div className="slide-content">
              <h1
                className={`slide-title ${
                  index === currentIndex ? "fade-in-up" : ""
                }`}
                style={{
                  animationDelay: index === currentIndex ? "0.5s" : "0s",
                }}
              >
                {image.title}
              </h1>
              <p
                className={`slide-description ${
                  index === currentIndex ? "fade-in-up" : ""
                }`}
                style={{
                  animationDelay: index === currentIndex ? "0.8s" : "0s",
                }}
              >
                {image.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button className="nav-button nav-prev" onClick={goToPrevious}>
        ‹
      </button>
      <button className="nav-button nav-next" onClick={goToNext}>
        ›
      </button>

      {/* Dot Indicators */}
      <div className="dots-container">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
