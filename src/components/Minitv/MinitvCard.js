import React from "react";
import {
  g11,
  g12,
  g13,
  grid2,
  grid3,
  grid4,
  grid6,
  grid9,
} from "../../assets/index"

const MinitvcardList = () => {
  const cardData = [
    { id: 1, image: grid2, title: "miniTV webseries 1" },
    { id: 2, image: grid3, title: "miniTV webseries 2" },
    { id: 3, image: grid4, title: "miniTV webseries 3" },
    { id: 4, image: grid6, title: "miniTV webseries 4" },
    { id: 5, image: grid9, title: "miniTV webseries 5" },
    { id: 6, image: g11, title: "miniTV webseries 6"},
    { id: 7, image: g12, title: "miniTV webseries 7" },
    { id: 8, image: g13, title: "miniTV webseries 8" },
  ];

  const MinitvCard = ({ image, title }) => (
    <div className="rounded-lg shadow-md overflow-hidden max-w-[150px] xs:max-w-[150px] sm:max-w-[200px] sml:max-w-[220px] md:max-w-[240px] lg:max-w-[260px] mx-auto my-2 sm:my-4 transition-all duration-300 hover:shadow-lg hover:shadow-white/50 cursor-pointer">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl text-white mb-2 mt-3 text-center">Most Watched</h2>
      <div className="grid grid-cols-2 gap-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {cardData.map((card) => (
          <MinitvCard key={card.id} image={card.image} />
        ))}
      </div>
    </div>
  );
};
export default MinitvcardList;

