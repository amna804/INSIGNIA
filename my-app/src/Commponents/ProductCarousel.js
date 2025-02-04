
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const products = [
    {
      id: 1,
      src: "/images/shoe1.webp",
      title: "Product Title 1",
      price: "Price 1",
      oldPrice: "Old Price 1",
      sale: true
    },
    // Add more products as needed
  ];

  return (
    <div style={{ margin: "0 auto", width: "90%" }}>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.src} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price} {product.sale && <span style={{ color: 'red' }}>{product.oldPrice}</span>}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
