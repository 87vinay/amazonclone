import React from "react";
import Cards from "./Cards";
import {
  Home_decor1,
  Home_furnishings1,
  Home_lighting1,
  Home_storage1,
  Appliances,
  Appliances1,
  Appliances2,
  Appliances3,
  boAt,
  Boult,
  Zebronics,
  Noise,
  Vaccum,
  Vega,
  Rim_tyrecare,
  GlassCare,
} from "../../assets";

const CardsData = () => {
  const cardArray = [
    {
      id: 1,
      title: "Home Essentials",
      images: [
        { image: Home_decor1, altText: "Home Decor", label: "Home Decor" },
        {
          image: Home_furnishings1,
          altText: "Home Furnishings",
          label: "Home Furnishings",
        },
        {
          image: Home_lighting1,
          altText: "Home Lighting",
          label: "Home Lighting",
        },
        {
          image: Home_storage1,
          altText: "Home Storage",
          label: "Home Storage",
        },
      ],
      bottomText: "Explore all",
    },
    {
      id: 2,
      title: "Appliances for your home | Up to 55% off",
      images: [
        {
          image: Appliances,
          altText: "Air Conditioner",
          label: "Air Conditioner",
        },
        { image: Appliances1, altText: "Refrigerator", label: "Refrigerator" },
        { image: Appliances2, altText: "Microwave", label: "Microwave" },
        {
          image: Appliances3,
          altText: "Washing Machine",
          label: "Washing Machine",
        },
      ],
      bottomText: "See all",
    },
    {
      id: 3,
      title: "Starting ₹149 | Headphones",
      images: [
        { image: boAt, altText: "boat", label: "Starting at ₹ 249 | boat" },
        { image: Boult, altText: "boult", label: "Starting at ₹ 349 | boult" },
        { image: Noise, altText: "noise", label: "Starting at ₹ 649 | noise" },
        {
          image: Zebronics,
          altText: "Zebronics",
          label: "Starting at ₹ 149 | zebronics",
        },
      ],
      bottomText: "See all offers",
    },
    {
      id: 4,
      title: "Automotive essentials | Up to 60% off",
      images: [
        { image: Vaccum, altText: "cleaning", label: "Cleaning accessories" },
        { image: Vega, altText: "Tyreandrim", label: "Tyre & rim care" },
        {
          image: Rim_tyrecare,
          altText: "Helmets",
          label: "Helmets",
        },
        { image: GlassCare, altText: "vaccumcleaner", label: "Vaccum cleaner" },
      ],
      bottomText: "See more",
    },
  ];
  return (
    <div className="p-2 sm:p-5 relative mt-2 xs:-mt-6 md:-mt-16 lg:-mt-36 py-3 sm:py-5 sm:px-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4">
        {cardArray.map((card) => {
          return (
            <Cards
              key={card.id}
              title={card.title}
              images={card.images}
              bottomText={card.bottomText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsData;
