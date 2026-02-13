import React from 'react'
import { useNavigate } from "react-router-dom"
const payment = () => {
  const navigate = useNavigate()
  const order = JSON.parse(localStorage.getItem(" order "))
  if (!order){
    return (
      <div className="p-6 text-center">
        <h2 className=' text-xl font-bold'>NO order found</h2>
      </div>
    )
  }
  function handlePayment() {
    //Simulate payment success
    const updatedOrder = { ...order, status: "paid" }
    localStorage.setItem("order", JSON.stringify(updatedOrder))
    alert("Payment successful !")
    navigate("/track")
  }
  return (
    <div>
      <h2>Payment Summary</h2>
      <p><strong>Brand:</strong> {order.brand.name}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Brand:</strong> {order.totalPrice}</p>
      <button
      onClick={handlePayment}
              className="w-full mt-6 bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Pay Now 
        </button>
    </div>
  )
}

export default payment

