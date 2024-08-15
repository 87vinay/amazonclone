import React, { useState } from "react";
import imageData from "./ImageSliderData";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden lg:hidden">
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 z-10"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 z-10"
      >
        <ChevronRight />
      </button>
      <h2 className="text-center text-xl mb-1">
        watch on <span className="text-[#de146d] font-semibold">miniTV</span>
      </h2>
      <NavLink to={"/minitv"}>
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageData.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full mt-1">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </NavLink>
    </div>
  );
};

export default ImageSlider;
