// components/ImageSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import './Slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6900,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1.5
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="slider">
      <div><img src="/images/img1.jpeg" alt="slide1" /></div>
      <div><img src="/images/img2.jpg" alt="slide2" /></div>
      <div><img src="/images/img3.jpg" alt="slide3" /></div>
      <div><img src="/images/img4.jpg" alt="slide4" /></div>
    </Slider>
  );
};

export default ImageSlider;
