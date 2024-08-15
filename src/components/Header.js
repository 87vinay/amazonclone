import React, { useEffect, useRef, useState } from "react";
import { logo } from "../assets/index";
import { getAuth, signOut } from "firebase/auth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Logout } from "@mui/icons-material";
import { allItems } from "../constants";
import HeaderBottom from "./HeaderBottom";
import { motion, useAnimation } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetCart, userSignOut } from "../redux/amazonSlice";

const Header = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.amazon.product);
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const [showAll, setShowAll] = useState(false);

  const controls = useAnimation();
  const cartItemCount = product.length;
  useEffect(() => {
    if (cartItemCount > 0) {
      controls.start({
        scale: [2, 1.2, 1],
        transition: { duration: 0.5, type: "spring" },
      });
    }
  }, [cartItemCount, controls]);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
    });
  }, [ref, showAll]);
  const handelLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(userSignOut());
        dispatch(resetCart());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  const triggerLoading = () => {
    setLoading(true);
  };
  const handelCartClick = () => {
    triggerLoading();
  };
  return (
    <>
      <div className="w-full sticky top-0 z-50">
        <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
          <NavLink to={"/"}>
            <div className="headerHover">
              <img className="w-24 mt-2" src={logo} alt="logoimage" />
            </div>
          </NavLink>
          <div className="headerHover hidden mdl:inline-flex">
            <LocationOnIcon />
            <p className="text-sm text-lightText font-light flex flex-col">
              Deliver to
              <span className="text-sm font-semibold mt-1 text-whiteText">
                India
              </span>
            </p>
          </div>
          <div className="h-10 rounded-md hidden lgl:flex  flex-grow relative">
            <span
              onClick={() => setShowAll(!showAll)}
              className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
            >
              All <span></span>
              <ArrowDropDownOutlinedIcon />
            </span>
            {showAll && (
              <div>
                <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                  {allItems.map((item) => (
                    <li
                      className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                      key={item._id}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <input
              type="text"
              className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            />
            <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
              <SearchIcon />
            </span>
          </div>
          <NavLink to={"/signin"}>
            <div className="flex flex-col items-start justify-center headerHover">
              {userInfo ? (
                <div className="flex flex-col mdl:flex-row items-start mdl:items-center">
                  <p className="text-sm text-gray-100">Hello,</p>
                  <p className="text-sm text-gray-100 mdl:ml-1">
                    {userInfo.userName}
                  </p>
                </div>
              ) : (
                <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
                  Hello, Signin
                </p>
              )}
              <p className="hidden md:inline-flex text-sm font-semibold -mt-1 text-whiteText">
                Account & Lists
                <span>
                  <ArrowDropDownOutlinedIcon />
                </span>
              </p>
            </div>
          </NavLink>
          <NavLink to={"/minitv"}>
            <div className="lgl:flex flex-col items-start justify-center">
              <p className="text-sm font-semibold text-[#de166d]">miniTV</p>
            </div>
          </NavLink>
          <NavLink to={"/cart"}>
            <motion.div
              onClick={handelCartClick}
              animate={controls}
              className="flex items-start justify-center headerHover relative"
            >
              <div className="relative">
                <ShoppingCartIcon
                  className={`text-white ${loading ? "animate-pulse" : ""}`}
                />
              </div>
              <p className="inline-flex text-xs font-semibold mt-3 text-whiteText">
                Cart
                <span className="absolute text-xs top-0 left-6 w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                  {cartItemCount}
                </span>
              </p>
            </motion.div>
          </NavLink>
          {userInfo && (
            <div
              onClick={handelLogout}
              className="group flex flex-col justify-center items-center headerHover relative cursor-pointer text-white hover:text-red-500 duration-300"
            >
              <Logout className="group-hover:text-red-500 duration-300" />
              <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteTextgroup-hover:text-red-500 duration-300">
                Log out
              </p>
            </div>
          )}
        </div>
        <HeaderBottom />
      </div>
      {triggerLoading && (
        <div className="fixed top-0 left-0 w-full h-2 bg-red-700 animate-loading"></div>
      )}
    </>
  );
};

export default Header;
