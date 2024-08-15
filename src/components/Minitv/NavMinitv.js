import React, { useEffect, useState } from "react";
import minitvlogo from "./Images/minitv.svg";
import alogo from "./Images/alogo.svg";
import { Settings } from "@mui/icons-material";
import MinitvBanner from "./MinitvBanner";
import { NavLink } from "react-router-dom";

const NavMinitv = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);
  const navLinks = [
    "Home",
    "Web Series",
    "Movies",
    "Imported",
    "Romance",
    "Comedy",
    "Tamil",
    "Telugu",
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
      setIsVerySmallScreen(window.innerWidth < 670);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const visibleLinks = isVerySmallScreen ? navLinks.slice(0, 4) : navLinks;

  return (
    <>
      <nav className="w-full h-auto bg-[#1a2224] text-white p-3 sm:p-3 sticky top-0 z-50">
        <div
          className={`max-w-7xl mx-auto ${
            isSmallScreen
              ? "flex flex-col items-center"
              : "flex items-center justify-between"
          }`}
        >
          <div
            className={`flex ${
              isSmallScreen ? "flex-col items-center" : "items-center"
            }`}
          >
            <div className={`w-40 ${isSmallScreen ? "mb-4" : "mr-6"}`}>
              <img src={minitvlogo} alt="logominitv" className="w-full" />
            </div>
            <ul
              className={`flex ${
                isSmallScreen ? "flex-nowrap overflow-x-auto" : "flex-wrap"
              } ${isSmallScreen ? "w-full" : ""}`}
            >
              {visibleLinks.map((link, index) => (
                <li
                  key={index}
                  className={`${
                    isSmallScreen ? "mr-4 flex-shrink-0" : "mr-6 mb-2 mt-4"
                  }`}
                >
                  <a
                    href="/minitv"
                    className="font-md hover:text-[#de146d] transition-colors duration-300 whitespace-nowrap"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`flex gap-6 items-center ${isSmallScreen ? "mt-4" : ""}`}
          >
            <NavLink to={"/"}>
              <div className=" w-6 relative group">
                <img
                  src={alogo}
                  alt="rightlogo"
                  className="w-full cursor-pointer"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-7 hidden group-hover:block bg-[#1a2224] text-white text-sm px-4 py-1 rounded whitespace-nowrap">
                  Go to Amazon
                </div>
              </div>
            </NavLink>
            <Settings />
          </div>
        </div>
      </nav>
      <MinitvBanner />
    </>
  );
};

export default NavMinitv;
