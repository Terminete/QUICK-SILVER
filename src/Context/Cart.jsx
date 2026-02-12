import React from "react";
import { useCart } from "../Context/CartContext";
import brands from "../data/brands";
import Navbar from "../components/Navbar";
const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="bg-gray-100 min-h-screen  ">
      <Navbar />
      {cart.length === 0 ? (
        <div className="mt-10 w-full flex justify-center ">
          <div className="flex justify-center w-[80%]  border rounded-md shadow-gray-400 shadow-sm border-gray-400  ">
            <p className="py-3 flex justify-center font-semibold text-gray-400 ">Oops! Your cart is empty</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 w-[80%] m-auto justify-items-center mt-22 ">
          {cart.map((brand) => (
            <div
              key={brand.id}
              className="border border-gray-300 px-3 py-2 w-[70%] bg-gray-100 rounded-md  "
            >
              <p>{brand.name}</p>
              <p>KES {brand.price}</p>
              <img src={brand.image} alt="" />
              <button
                onClick={() => removeFromCart(brand.id)}
                className=" px-3 py-1 my-3 border border-gray-300 shadow-gray-400 shadow-sm hover:bg-gray-300 hover:text-gray-900 font-semibold hover:cursor-pointer rounded-md   "
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
