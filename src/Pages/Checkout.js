import React from "react";
import { darklogo } from "../assets/index";
import { NavLink } from "react-router-dom";
const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100 p-4">
      <div className="mt-5 mb-6">
        <img src={darklogo} alt="amzncheckoutlogo" className="w-32 mx-auto" />
      </div>
      <div className='className="bg-white shadow-md rounded-lg p-8 text-center max-w-md w-full"'>
        <h2 className="text-2xl font-semibold mb-4">Service Not Started Yet</h2>
        <p className="text-gray-600 mb-6">
          We're working hard to bring this service to you soon. Please check
          back later.
        </p>
        <NavLink to="/">
          <button className="font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 px-4 rounded-md mt-3 w-full">
            Go Back
          </button>
        </NavLink>
      </div>
      <div className="w-full flex flex-col gap-4 justify-center items-center py-18 mt-16 md:mt-34 lg:mt-52">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <p className="checkout-footer">
            Conditions of Use
          </p>
          <p className="checkout-footer">
            Privacy Notice
          </p>
          <p className="checkout-footer">
            Copyright
          </p>
        </div>
        <p className="text-xs text-gray-600 text-center">
          © 2024 Amazon Clone. All rights reserved. This site is a demonstration
          project and not affiliated with Amazon.com.
        </p>
      </div>
    </div>
  );
};

export default Checkout;
