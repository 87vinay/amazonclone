import React, { useState } from "react";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
  bannerImgFour,
  bannerImgFive,
  bannerImgSix,
} from "../../assets/index";

function Banner() {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul
          style={{
            padding: 0,
            margin: 0,
            display: "inline-flex",
            listStyle: "none",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer border ${
          i === dotActive
            ? "bg-amazon_blue border-yellow-400"
            : "bg-gray-500 border-white"
        }`}
        style={{
          width: "10px", // Smaller size for dots
          height: "10px",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                textAlign: "center",
              }}
            >
              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  display: "inline-flex",
                  listStyle: "none",
                  gap: "10px", 
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`w-2 h-2 rounded-full cursor-pointer border ${
                i === dotActive
                  ? "bg-amazon_blue border-yellow-400"
                  : "bg-gray-500 border-white"
              }`}
              style={{
                width: "10px", 
                height: "10px",
              }}
            />
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                textAlign: "center",
              }}
            >
              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  display: "inline-flex",
                  listStyle: "none",
                  gap: "6px",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`w-1.6 h-1.6 rounded-full cursor-pointer border ${
                i === dotActive
                  ? "bg-amazon_blue border-yellow-400"
                  : "bg-gray-500 border-white"
              }`}
              style={{
                width: "6px",
                height: "6px",
              }}
            />
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img src={bannerImgOne} alt="bannerImgOne" />
          </div>
          <div>
            <img src={bannerImgTwo} alt="bannerImgTwo" />
          </div>
          <div>
            <img src={bannerImgThree} alt="bannerImgThree" />
          </div>
          <div>
            <img src={bannerImgFour} alt="bannerImgFour" />
          </div>
          <div>
            <img src={bannerImgFive} alt="bannerImgFive" />
          </div>
          <div>
            <img src={bannerImgSix} alt="bannerImgSix" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
