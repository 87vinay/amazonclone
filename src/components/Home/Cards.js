import React from "react";

const Cards = ({ title, images, bottomText }) => {
  return (
    <>
       <div className="bg-white p-4 sm:p-3 font-titleFont w-full max-w-none sm:max-w-xs min-h-[340px] sm:min-h-[320px] flex flex-col justify-between transition-all duration-200 hover:shadow-xl cursor-pointer">
      <h3 className="text-lg sm:text-md font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-2 gap-3 sm:gap-2">
        {images.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={item.image}
              alt={item.altText}
              className="w-full h-auto object-cover"
            />
            <p className="mt-1 text-sm sm:text-xs text-left text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm sm:text-xs text-left text-blue-600 italic">
        {bottomText}
      </p>
    </div>
    </>
  );
};

export default Cards;
