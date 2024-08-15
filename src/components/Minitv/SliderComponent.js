import React from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <ArrowBackIos className="text-white font-bold" />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <ArrowForwardIos className="text-white font-bold" />
    </div>
  );
};

const SliderComponent = ({ title, images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    centerPadding: "0",
    swipe: true,
    draggable: true,
    touchThreshold: 10,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className="w-full relative">
      <div className="w-full px-4 sm:px-8 py-1 mt-3">
        <h2 className="text-white text-lg sm:text-lg">{title}</h2>
      </div>
      <div className="slider-container relative mx-2 sm:mx-6">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-1 sm:px-2">
           <div className="image-wrapper transition-all duration-300 hover:shadow-lg hover:shadow-white/50 rounded-lg cursor-pointer">
           <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-sm"
              />
           </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;