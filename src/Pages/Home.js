import React from "react";
import Banner from "../components/Home/Banner";
import Product from "../components/Home/Product";
import { useOutletContext } from "react-router-dom";
import CardsData from "../components/Home/CardsData";

function Home() {
  const { triggerLoading } = useOutletContext();
  return (
    <div>
      <Banner />
      <div className="w-full -mt-10 xl:-mt-30 py-10">
      <CardsData />
        <Product  triggerLoading={triggerLoading}/>
      </div>
    </div>
  );
}

export default Home;
