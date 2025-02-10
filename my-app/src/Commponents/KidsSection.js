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
    }, 20); // Adjust the time to control speed (50ms for smoother progress)

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Preload images to avoid flickering
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  }, []);

  return (
    <div className="kids-carousel-section">
      <div className="kids-carousel-left">
        <img
          src={images[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          className="kids-carousel-image"
        />
      </div>
      <div className="kids-carousel-right">
        <h3>STEP INTO MAGIC</h3>
        <button className="kids-order-button">Order Now</button>
        <div className="kids-progress-bars-container">
          {images.map((_, index) => (
            <div key={index} className="kids-progress-bar-container">
              <div
                className={`kids-progress-bar ${
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
