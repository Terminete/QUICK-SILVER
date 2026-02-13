import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { FaXmark } from "react-icons/fa6";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  // const brand = {
  //   name: "Total Gas",
  //   price: 2500,
  //   image: "/images/13kg totalEnergies.png",
  // };

  const { cart, removeFromCart } = useCart();

  // const totalPrice = brand.price * quantity;
  function handleSubmit(e) {
    e.preventDefault();
    if (!address || !location) {
      alert("please fill in delivery details");
      return;
    }
    const order = {
      brand,
      quantity,
      address,
      location,
      totalPrice,
      status: "pending",
    };
    localStorage.setItem("order", JSON.stringify(order));
    alert("Order saved. proceeding to payment...");
    navigate("/payment")
  }

  return (
    <div className="">
      <Navbar />

      <div className="min-w-full mx-auto p-6 flex  justify-between gap-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Delivery Details</h2>

          <label className="block mb-2 font-medium">Delivery Address</label>
          <input
            type="text"
            placeholder="Street, building, house number"
            className="w-full border px-3 py-2 rounded mb-4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="block mb-2 font-medium">Location</label>
          <input
            type="text"
            placeholder="City / Area"
            className="w-full border px-3 py-2 rounded mb-4"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label className="block mb-2 font-medium">Quantity</label>
          <input
            type="number"
            min="1"
            className="w-full border px-3 py-2 rounded mb-6"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Save & Proceed to Payment
          </button>
        </form>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4"> Summary</h2>
          <div className="">
            <h1 className="font-semibold text-lg  "> Ependitures </h1>
            <div className=" flex flex-col">
              <ul className=" flex *:mx-1 ">
                <li>Item</li> * <li> Amount</li> * <li>Quantity</li> ={" "}
                <li>Total</li>
              </ul>
              <p className="font-semibold ">Total Amount</p>
            </div>
          </div>

          <div className=" grid grid-cols-3">
            {cart.map((brand) => (
              <div
                className="border border-gray-300 px-3 py-2 w-[70%] bg-gray-100 rounded-md  "
                key={brand.id}
              >
                <div className="flex justify-between  ">
                  <div className="">
                    {" "}
                    <p className="font-semibold"> {brand.name} </p>
                    <p className="font-semibold  "> KSH {brand.price} </p>
                  </div>
                  <div className="">
                    <p className=" flex items-center">  <span><FaXmark /></span> <span>Quantity</span></p>
                  </div>
                </div>{" "}
                <img src={brand.image} alt="" />
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <p className="text-lg font-bold">
            {/* Total: <span className="text-green-600">KES {totalPrice}</span> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
