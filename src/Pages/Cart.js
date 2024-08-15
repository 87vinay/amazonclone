import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircle } from "@mui/icons-material";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/amazonSlice";
import { emptyCart } from "../assets/index";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.amazon.product);
  const [totalprice, setTotalPrice] = useState("");
  useEffect(() => {
    let Total = 0;
    product.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total.toFixed(2));
    });
  }, [product]);
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-full bg-gray-100 p-4">
      {product.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="w-full h-full bg-white px-4 lg:col-span-4">
            <div className="font-titleFont flex flex-col lg:flex-row items-start lg:items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h2 className="text-2xl lg:text-3xl font-medium">
                Shopping Cart
              </h2>
              {/* <h4 className="text-lg lg:text-xl font-normal mt-2 lg:mt-0">
                Subtitle
              </h4> */}
            </div>
            <div>
              {product.map((item) => (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                  className="w-full p-4 flex flex-col lg:flex-row items-start lg:items-center gap-6"
                >
                  <div className="w-full border-b-[1px] border-b-gray-300 p-4 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    <div className="w-full lg:w-1/5">
                      <img
                        className="w-full h-44 object-contain"
                        src={item.image}
                        alt="producrimg"
                      />
                    </div>
                    <div className="w-full lg:w-4/5">
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-sm">
                        {item.description.substring(0, 200)}
                      </p>
                      <p className="text-base font-normal">
                        Price
                        <span className="font-semibold">${item.price}</span>
                      </p>
                      <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md mt-2 lg:mt-0">
                        <p>Qty:</p>
                        <p
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                        >
                          -
                        </p>
                        <p>{item.quantity}</p>
                        <p
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                        >
                          +
                        </p>
                      </div>
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                      >
                        Delete Item
                      </button>
                    </div>
                    <div>
                      <p className="text-lg font-titleFont">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="w-full py-2">
              <button
                onClick={() => dispatch(resetCart())}
                className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-3xl font-titleFont font-semibold text-lg tracking-wide"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="w-full h-auto lg:h-52 bg-white col-span-1 flex flex-col items-center justify-center p-4">
            <div>
              <p className="gap-1 items-start text-sm">
                <span>
                  <CheckCircle className="bg-white text-green-500 rounded-full" />
                </span>
                Your order qualifies for <strong>Free </strong>shpping choose
                this option at <strong>checkout</strong>. See details...
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1 flex items-center gap-2 justify-between">
                Total: <span className="text-lg font-bold">${totalprice}</span>
              </p>
            </div>
            <NavLink to={"/checkout"}> 
               <div className="relative">
               <button className="font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 px-4 rounded-md mt-3 w-full">
                  Proceed To Pay
                </button>
               </div>
            </NavLink>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col lg:flex-row justify-center items-center gap-4 py-10"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emtycartimg"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont lg:text-xl font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis">
              Your cart feels lonely.
            </h1>
            <p className="text-sm text-center">
              Your shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, vedios, etc. and make it happy.
            </p>
            <NavLink to={"/"}>
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
                Continue Shopping
              </button>
            </NavLink>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
