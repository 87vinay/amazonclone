import React, { useState } from "react";
import Slider from "react-slick";
import MiniSliderComponents from "./MiniSliderComponents";
import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
} from "../../assets/index";
import MinitvFaq from "./MinitvFaq";
import MinitvFooterBottom from "./MinitvFooterBottom";
function MinitvBanner() {
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
          top: "85%",
          left: "0",
          right: "0",
          margin: "0 auto",
          transform: "translate(-50% -50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
          dots: false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full bg-[#070d0e]">
        <div className="w-full h-full relative">
          <Slider {...settings}>
            <div>
              <img src={slider1} alt="bannerImgOne" />
            </div>
            <div>
              <img src={slider2} alt="bannerImgTwo" />
            </div>
            <div>
              <img src={slider3} alt="bannerImgThree" />
            </div>
            <div>
              <img src={slider4} alt="bannerImgFour" />
            </div>
            <div>
              <img src={slider5} alt="bannerImgFive" />
            </div>
            <div>
              <img src={slider6} alt="bannerImgSix" />
            </div>
          </Slider>
        </div>
        <MiniSliderComponents/>
        <MinitvFaq/>
        <MinitvFooterBottom/>
      </div>
    </>
  );
}

export default MinitvBanner;
