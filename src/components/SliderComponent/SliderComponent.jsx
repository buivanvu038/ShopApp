import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
  };
  return (
    <Slider {...settings}>
      {arrImages.map((image, index) => (
        <div key={index}>
          <Image
            className="centered-image"
            src={image}
            alt={`Slider-${index}`}
            width="50%"
            height="250px"
          />
        </div>
      ))}
    </Slider>
  );
};
export default SliderComponent;
