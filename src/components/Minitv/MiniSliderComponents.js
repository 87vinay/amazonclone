import React from "react";
import SliderComponent from "./SliderComponent";
import {
  minislider1,
  minislider2,
  minislider3,
  minislider4,
  minislider5,
  minislider6,
  minislider7,
  minislider8,
  minislider9,
} from "../../assets/index";
import MinitvCard from "./MinitvCard";

function MiniSliderComponents() {
  const trendingImages = [
    { src: minislider1, alt: "minitvslider1" },
    { src: minislider2, alt: "minitvslider2" },
    { src: minislider3, alt: "minitvslider3" },
    { src: minislider4, alt: "minitvslider4" },
    { src: minislider5, alt: "minitvslider5" },
    { src: minislider6, alt: "minitvslider6" },
    { src: minislider7, alt: "minitvslider7" },
    { src: minislider8, alt: "minitvslider8" },
    { src: minislider9, alt: "minitvslider9" },
  ];

  return (
   <>
     <SliderComponent
      title="Trending Top 10 on miniTV"
      images={trendingImages}
    />
     <SliderComponent
      title="Popular on miniTV"
      images={trendingImages}
    />
       <SliderComponent
      title= "New Releases"
      images={trendingImages}
    />
       <SliderComponent
      title="Trending Top 10 on miniTV"
      images={trendingImages}
    />
    <MinitvCard/>
   </>
  );
}

export default MiniSliderComponents;