import {useState} from 'react'
import { useParams } from 'react-router-dom'
import brands from '../data/brands'
const order = () => {
const { id } = useParams()
const selectedBrand = brands.find(
(brands) => brands.id === Number(id)
)

const [address, setAddress] = useState("")
const [location, setLocation] = useState("")
const [paymentMethod, setPaymentMethod] = useState("mpesa")
const [orderPlaced, setOrderPlaced] = useState(false)
if (!selectedBrand){
return(
<p className='text-center mt-10 text-red-500'>
Gas brand not found
</p>
)
}

const handleOrder = (e) => {
e.preventDefault()

if (!address || !location) {
alert("Please fill in delivery address and location")
return
}

// Simulate successful payment & order
setOrderPlaced(true)
}

return (
<div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
<div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
<h2 className="text-2xl font-bold mb-4 text-center">
Gas Order Details
</h2>


{!orderPlaced ? (
<form onSubmit={handleOrder}>
{/* Address */}
<div className="mb-4">
  <label className="block mb-1 font-medium">Delivery Address</label>
  <input
    type="text"
    placeholder="Street / House No"
    className="w-full px-3 py-2 border rounded"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
  />
</div>

{/* Location */}
<div className="mb-4">
  <label className="block mb-1 font-medium">Location</label>
  <input
    type="text"
    placeholder="Town / Area"
    className="w-full px-3 py-2 border rounded"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />
</div>

{/* Payment Method */}
<div className="mb-4">
  <label className="block mb-1 font-medium">
    Payment Method
  </label>
  <select
    className="w-full px-3 py-2 border rounded"
    value={paymentMethod}
    onChange={(e) => setPaymentMethod(e.target.value)}
  >
    <option value="mpesa">M-Pesa</option>
    <option value="card">Card</option>
    <option value="cash">Cash on Delivery</option>
  </select>
</div>

<button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
  Pay & Place Order
</button>
<h2 className="text-xl font-bold mb-2">
Ordering: {selectedBrand.name}
</h2>

<p className="text-green-600 font-semibold mb-4">
Price: KES {selectedBrand.price}
</p>
</form>
) : (
<div className="text-center"
><h3>name: </h3>
<h4>id: </h4>
<h5>price: </h5>
<h4 className="text-xl font-semibold text-green-600 mb-2">
  Order Successful 
</h4>
<p className="text-gray-600">
  Your gas is now <strong>in transit</strong>.
</p>

</div>
)}
</div>
</div>
)
}


export default order
