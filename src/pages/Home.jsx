import React from "react";
import BrandCard from "../components/BrandCard";
import brands from "../data/brands";
import { useCart } from "../Context/CartContext";

import Cart from "../Context/Cart";
import Navbar from "../components/Navbar";
const Home = () => {
  const { addToCart } = useCart();
  return (
    <>
      <div className="flex flex-col   ">
        <div className="w-full fixed ">
          <Navbar />
        </div>
        <div className=" ">
          <h2 className="text-2xl font-bold  text-center bg-amber-700">
            WELCOME TO QUICK SILVER
          </h2>
          <div className="grid grid-cols-3 gap-6 w-[80%] m-auto justify-items-center mt-22 ">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="border border-gray-300 px-3 py-2 w-[70%] bg-gray-100 rounded-md  "
              >
                <h3
                  className=" font-semibold "
                >
                  {brand.name}
                </h3>
                <p className=" text-xl font-semibold py-1 ">
                  KES {brand.price}
                </p>
                <img
                  src={brand.image}
                  alt=""
                  className="bg-gray-100  h-60 w-[100%] "
                />
                <button
                  className=" px-3 py-1 my-3 border-1 border-gray-300 shadow-gray-400 shadow-sm hover:bg-gray-300 hover:text-gray-900 font-semibold hover:cursor-pointer rounded-md   "
                  onClick={() => addToCart(brand)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
