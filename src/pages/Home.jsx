import React from "react";
import BrandCard from "../components/BrandCard";
import { useState } from "react";
import { brands } from "../data/brands";
import { useCart } from "../Context/CartContext";
import { useLocation } from "react-router-dom";
import Cart from "../Context/Cart";
import Navbar from "../components/Navbar";
import { FaBars } from "react-icons/fa6";
const Home = () => {
  const { addToCart } = useCart();
  const [search, setSearch] = useState(" ");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";
  const filteredBrands = brands.filter((brand) => {
    if (!search) return true;
    return brand.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  }

  );
  
  return (
    <>
      <div className="flex flex-col min-w-full   ">
        
        <div className="w-full fixed ">
          <Navbar />
          <FaBars />
        </div>
        <div className="px-6 py-6 ">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-auto justify-items-center mt-22 ">
            {filteredBrands.length === 0 && <p> No brands found</p> }
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="border border-red-300 px-3 py-2 w-[80%] bg-violet-900 rounded-md flex flex-col items-center  "
              >
                <h3
                  className="font-semibold text-lg"
                >
                  {brand.name}
                </h3>
                <p className=" text-green-600 font-semibold py-1 ">
                  KES {brand.price}
                </p>
                <img
                  src={brand.image}
                  alt=""
                  className="bg-violet-900  h-60 w-[100%] object-contain my-3 "
                />
                <button
                  className=" px-3 py-1 my-3 border-1 border-gray-300 shadow-red-400 shadow-sm hover:bg-pink-500 hover:text-gray-900 font-semibold hover:cursor-pointer rounded-md   "
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
