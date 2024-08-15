import React, { useEffect, useRef, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { motion } from "framer-motion";
import { AccountCircleOutlined } from "@mui/icons-material";
import SideNavContent from "./SideNavContent";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
function HeaderBottom() {
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center gap-1 "
        >
          <MenuOutlinedIcon />
          All
        </li>
        <li className="hidden md:inline-flex headerHover hover:text-yellow-300">Today's Deals</li>
        <li className="hidden md:inline-flex headerHover  hover:text-yellow-300">Customer Service</li>
        <li className="hidden md:inline-flex headerHover  hover:text-yellow-300">Gift Cards</li>
        <li className="hidden md:inline-flex headerHover  hover:text-yellow-300">Registry</li>
        <li className="hidden md:inline-flex headerHover  hover:text-yellow-300">Sell</li>
      </ul>
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50 z-10">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" w-[80%] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                  <AccountCircleOutlined />
                {userInfo ? (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide">
                    Hello,{userInfo.userName}
                  </h3>
                ) : (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide">
                    Hello, Signin
                  </h3>
                )}
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent title="Help & Settings" one="Your Account" />
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 left-[309px] w-10 h-11 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderBottom;
