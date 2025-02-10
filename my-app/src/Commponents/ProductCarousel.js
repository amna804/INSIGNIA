import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Left Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <button className="prev-arrow" onClick={onClick}>
      <FaArrowLeft />
    </button>
  );
};

// Right Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <button className="next-arrow" onClick={onClick}>
      <FaArrowRight />
    </button>
  );
};

const ProductCarousel = () => {
  const settings = {
    dots: false, 
    arrows: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  const products = [
    { id: 1, src: "/images/shoe1.webp", title: "Product Title 1", price: "Price 1", oldPrice: "Old Price 1", sale: true },
    { id: 2, src: "/images/shoe2.webp", title: "Product Title 2", price: "Price 2", oldPrice: "Old Price 2", sale: true },
    { id: 3, src: "/images/shoe3.webp", title: "Product Title 3", price: "Price 3", oldPrice: "Old Price 3", sale: false },
    { id: 4, src: "/images/shoe4.webp", title: "Product Title 4", price: "Price 4", oldPrice: "Old Price 4", sale: true },
  ];

  return (
    <div className="carousel-container">
       <h2 className="section-title ">NEW ARRIVALS</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.src} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price} {product.sale && <span className="sale-price">{product.oldPrice}</span>}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
