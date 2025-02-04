import React, { useState, useEffect } from "react";

const images = [
  { url: "/images/tiles_news_copy.webp" },
  { url: "/images/tiles_news_copy_2.webp" },
  { url: "/images/tiles_news_copy_3.webp" },
];

const KidsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0); // Reset progress bar
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          nextImage();
          return 0; // Reset progress
        }
        return prevProgress + 1; // Increment progress
      });
    }, 100); // Adjust the time to control speed

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-section">
      <div className="carousel-left">
        <img
          src={images[currentIndex].url}
          alt="Carousel Slide"
          className="carousel-image"
        />
      </div>

      <div className="carousel-right">
        <div>
          <h3>STEP INTO MAGIC</h3>
          <button className="order-button">Order Now</button>
        </div>
        <div className="part_two">
          {images.map((_, index) => (
            <div key={index} className="progress-bar-container">
              <div
                className={`progress-bar ${
                  index === currentIndex ? "active" : ""
                }`}
                style={{
                  width: index === currentIndex ? `${progress}%` : "0%",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidsSection;
