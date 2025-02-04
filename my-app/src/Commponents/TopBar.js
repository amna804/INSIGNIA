// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import the icons

// const TopBar = () => {
//   return (
//     <div>
//       {/* Carousel for welcome message */}
//       <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
//         <Carousel controls={false} indicators={false} interval={3000}>
//           <Carousel.Item>
//             <span><FaChevronLeft /> Welcome to our store <FaChevronRight /></span>
//           </Carousel.Item>
//           <Carousel.Item>
//             <span><FaChevronLeft /> Exclusive Deals Today <FaChevronRight /></span>
//           </Carousel.Item>
//         </Carousel>
//       </div>
      
//       {/* Logo and Store Locator */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', alignItems: 'center' }}>
//         <h1 style={{ fontWeight: 'bold' }}>INSIGNIA</h1>
//         <div>
//           <a href="#store-locator" style={{ marginRight: '15px' }}>Store Locator</a>
//           <a href="#sign-in">Sign in</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;
import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const TopBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "Free Delivery Nationwide for orders above PKR 3000/-",
    "Welcome to our store"
  ];

  const handlePrev = () => {
    setCurrentSlide((currentSlide === 0) ? slides.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide === slides.length - 1) ? 0 : currentSlide + 1);
  };

  return (
    <div className="carousel">
      <div className="slider-buttons">
        <button onClick={handlePrev} className="arrow-button">
          <IoIosArrowBack className="arrow-icon" />
        </button>
        <span>{slides[currentSlide]}</span>
        <button onClick={handleNext} className="arrow-button">
          <IoIosArrowForward className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
