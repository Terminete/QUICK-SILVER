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
      <div className="flex flex-col min-w-full    ">
        
        <div className="w-full fixed ">
          <Navbar />
          <FaBars />
        </div>
        <div className="px-6 py-6 ">
          <div className="grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-8 ">
            {filteredBrands.length === 0 && <p> No brands found</p> }
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="border border-red-300 px-3 py-2 w-[80%] bg-white rounded-md shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col items-center  "
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
                  className=" h-60
                        w-full
                        object-contain
                        bg-gray-100 
                                      hover:-translate-y-2
                        hover:shadow-2xl
                        transition-all
                        duration-500  
 "
                />
                <button
                  className=" w-full
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-3
                  rounded-lg
                  transition
                  font-semibold    "
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
