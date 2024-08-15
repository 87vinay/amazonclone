import React from "react";
import { FooterBootomData } from "../../constants";
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
const MinitvFooterBottom = () => {
  return (
    <>
      <div className="max-w-[95%] mx-auto bg-[#070d0e] rounded-lg p-6 md:p-8 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {FooterBootomData.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-white text-sm mb-4">{section.heading}</h3>
              <ul className="text-[#717a7b] space-y-2 text-sm cursor-pointer">
                {section.items.map((item, idx) => (
                  <li key={idx} className="hover:text-[#de146d]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 justify-center items-center py-4 mt-4 bg-zinc-900">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <p className="text-sm text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-75">
          Conditions of Use
        </p>
        <p className="text-sm text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-75">
          Privacy Notice
        </p>
        <p className="text-sm text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-75">
          Copyright
        </p>
      </div>
      <p className="text-sm text-gray-500 text-center mt-4 px-4">
        © 2024 Amazon <span className="text-[#de166d]">miniTV</span> Clone. All rights reserved. This site is a demonstration
        project and not affiliated with Amazon.com
      </p>
      <div className="flex gap-4 mt-2 justify-center flex-wrap px-2">
        <a href="https://www.facebook.com" aria-label="Facebook" className="socialmediaicons">
          <Facebook fontSize="inherit" />
        </a>
        <a href="https://www.twitter.com" aria-label="Twitter" className="socialmediaicons">
          <Twitter fontSize="inherit" />
        </a>
        <a href="https://www.instagram.com" aria-label="Instagram" className="socialmediaicons">
          <Instagram fontSize="inherit" />
        </a>
        <a href="https://www.youtube.com" aria-label="YouTube" className="socialmediaicons">
          <YouTube fontSize="inherit" />
        </a>
      </div>
    </div>
    </>
  );
};

export default MinitvFooterBottom;
