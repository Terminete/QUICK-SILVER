import React from "react";
import { useCart } from "../Context/CartContext";
import brands from "../data/brands";
import Navbar from "../components/Navbar";
const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, } = useCart();

  return (
    <div className="bg-blue-500 min-h-screen  ">
      <Navbar />
      {cart.length === 0 ? (
        <div className="mt-10 w-full flex justify-center bg-grey-500 p-6 rounded-lg text ">
          <div className="flex justify-center w-[80%]  border rounded-md shadow-blue-400 shadow-sm border-gray-400  ">
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
              <p>KES {brand.price * brand.quantity}</p>
              <img src={brand.image} alt="" />
              <div className="flex items-center justify-center gap-4">
                <button onClick={() => decreaseQuantity(brand.id)}
                className="px-4 py-2 bg-gray-300 rounded-md font-bold text-xl hover:bg-gray-400">-</button>
                <span className="  font-semibold text-lg"> {brand.quantity} </span>
                <button onClick= {() => increaseQuantity(brand.id)} className=" px-4 py-2 bg-green-600 text-white rounded-md font-bold text-xl hover:bg-green-700"> 
                  +
                </button>
              
              </div>
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
