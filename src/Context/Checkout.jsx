import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate} from "react-router-dom";
import { useCart} from "./CartContext";
import { FaXmark, FaLocationDot, FaTruckFast, FaShieldHalved } from "react-icons/fa6";
const Checkout = () => {
const navigate = useNavigate();
const [address, setAddress] = useState("");
const [location, setLocation] = useState("");
const [paymentMethod, setPaymentMethod] = useState("mpesa");
const { cart, updateQuantity, removeFromCart } = useCart();
//support existing cart entries that may not have a quantity yet.
const getQuantity = (brand) => Number(brand.quantity) || 1;
const getItemTotal = (brand) => 
Number(brand.price) * (Number(brand.quantity) || 1);
const totalAmount = cart.reduce((total, brand) => {
const quantity = Number(brand.quantity) || 1;
return total + Number(brand.price) * quantity;
}, 0);

const formatKES = (amount) => 
`KES ${Number(amount || 0).toLocaleString("en-KE")}`;
function handleSubmit(e) {
e.preventDefault();
if (!address.trim() || !location.trim()){
alert("please fill in delivery details and location.");
return;
}
if (cart.length ===0){
alert("Your cart is empty.please add gas products before checkout");
return;
}
const order = {
items: cart.map((brand) => ({
id: brand.id,
name:brand.name,
price: Number(brand.price) || 0,
quantity: getQuantity(brand),
total: getItemTotal(brand),
image: brand.image,
})
)  ,
address : address.trim(),
location: location.trim(),
paymentMethod,
totalAmount,
status: "pending",
createdAt: new Date().toISOString(),
};
localStorage.setItem("order", JSON.stringify(order));
alert("Order saved. Proceding to payment...");
navigate("/payment");
}
return (
<div className="min-h-screen bg-slate-100 text-slate-900">
<Navbar />
<main className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div className="mb-8">
<p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
Quick Silver Gas Point
</p>
<h1  className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl" >
checkout
</h1>
<p className="mt-2 text-slate-600">confirm your delivery details and review your order</p>
</div>
<div className="grid items-start gap-6 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,0.8fr)]">
<form action=""
onSubmit={handleSubmit}
className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
<div className="mb-6 flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
<FaLocationDot />
</div>
<div>
<h2 className="text-xl font-bold">Delivery details</h2>
<p className="text-sm text-slate-500">Where should we deliver?</p>
</div>
</div>
<label htmlFor="address"className="mb-2 block text-sm font-semibold">
Delivery address
</label>
<input type="text"
id="address"
required
placeholder="Street, building, house number"
className="mb-5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
value={address}
onChange={(e) => setAddress(e.target.value)}/>
<label htmlFor="location" className="mb-2 block text-sm font-semibold">City / area </label>
<input type="text"
id="location"
required 
placeholder="eg.kutus"
className="mb-6 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
onChange={(e) => setLocation(e.target.value)}/>
<label htmlFor="payment-method" className="mb-2 block text-sm font-semibold">
Payment method
</label>
<select
id="payment-method"
className="mb-6 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
value={paymentMethod}
onChange={(e) => setPaymentMethod(e.target.value)}
>
<option value="mpesa">M-Pesa</option>
<option value="card">Card</option>
<option value="cash">Cash on delivery</option>
</select>
<div className="mb-6 rounded-xl bg-slate-50 p-4">
<div className="flex items-center gap-3">
<FaTruckFast className="text-xl text-emerald-700" />
<div>
<p className="font-semibold">Delivery service</p>
<p className="text-sm text-slate-500">Your delivery details will be saved with this order </p>

</div>
</div>
</div>
<button type="submit"
disabled={cart.length === 0}
className="w-full rounded-xl bg-emerald-600 px-5 py-3.5 font-bold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:bg-slate-300">
save ; proceed to payment
</button>
<p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
<FaShieldHalved className="text-emerald-700" />
Review your order before proceeding.
</p>
</form>
<section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
<div className="flex flex-wrap items-start justify-between gap-3">
<div>
<h2 className="text-xl font-bold sm:text-2xl">Order summary</h2>
<p className="mt-1 text-sm text-slate-500">
{cart.length} {cart.length === 1 ? "product" : "products"} in your cart
</p>
</div>
<span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
{cart.length === 0 ? "Empty cart" : "Ready for review"}
</span>
</div>

{cart.length === 0 ? (
<div className="mt-6 rounded-xl border border-dashed border-slate-300 px-5 py-12 text-center">
<p className="font-semibold">Your cart is empty</p>
<p className="mt-1 text-sm text-slate-500">
Return to the home page and add a gas product to continue.
</p>
<button
type="button"
onClick={() => navigate("/")}
className="mt-4 rounded-xl bg-emerald-600 px-4 py-2.5 font-semibold text-white hover:bg-emerald-700"
>
Browse products
</button>
</div>
) : (
<>
<div className="mt-6 hidden grid-cols-[minmax(0,1fr)_90px_90px_110px] gap-4 border-b border-slate-200 pb-3 text-xs font-bold uppercase tracking-wide text-slate-500 md:grid">
<span>Product</span>
<span className="text-right">Price</span>
<span className="text-right">Quantity</span>
<span className="text-right">Total</span>
</div>

<div className="divide-y divide-slate-100">
{cart.map((brand) => {
const quantity = Number(brand.quantity) || 1;
const itemTotal = Number(brand.price) * quantity;
return(
<div
key={brand.id}
className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(0,1fr)_90px_90px_110px] md:items-center md:gap-4"
>
<div className="flex min-w-0 items-center gap-4">
<div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-2">
  <img
    src={brand.image}
    alt={brand.name}
    className="h-full w-full object-contain"
  />
</div>
<div className="min-w-0">
  <h3 className="truncate font-bold">{brand.name}</h3>
  <p className="mt-1 text-sm text-slate-500 md:hidden">
    {formatKES(brand.price)} × {getQuantity(brand)}
  </p>

  <button
type="button"
onClick={() =>
updateQuantity(
brand.id,
-1
)
}
disabled={quantity <= 1}
className="flex h-9 w-9 items-center justify-center rounded-full
border border-gray-300 bg-white text-xl font-bold
text-gray-700 transition hover:bg-gray-100
disabled:cursor-not-allowed disabled:opacity-40"
aria-label={`Decrease ${brand.name} quantity`}
>
−
</button>

<span className="min-w-6 text-center font-semibold">
{Number(brand.quantity) || 1}
</span>

<button
type="button"
onClick={() =>
updateQuantity(
brand.id,
1
)
}
className="flex h-9 w-9 items-center justify-center rounded-full
bg-emerald-600 text-xl font-bold text-white
transition hover:bg-emerald-700"
aria-label={`Increase ${brand.name} quantity`}
>
+
</button>
  <button
    type="button"
    onClick={() => removeFromCart(brand.id)}
    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-rose-600 hover:text-rose-700"
  >
    <FaXmark />
    Remove
  </button>
</div>
</div>
<div className="hidden text-right text-sm text-slate-600 md:block">
{formatKES(brand.price)}
</div>
<div className="hidden text-right text-sm text-slate-600 md:block">
{getQuantity(brand)}
</div>
<div className="flex items-center justify-between font-bold md:block md:text-right">
<span className="text-sm text-slate-500 md:hidden">
  Item total
</span>
{formatKES(itemTotal)}
</div>
</div>
);
})}
<p className="text-xl font-bold text-green-700">Total Amount: KES {totalAmount.toLocaleString("en-KE")}</p>

</div>
<div className="mt-2 space-y-3 border-t border-slate-200 pt-5">
<div className="flex justify-between gap-4 text-sm text-slate-600">
<span>Subtotal</span>
<span>{formatKES(totalAmount)}</span>
</div>
<div className="flex justify-between gap-4 text-sm text-slate-600">
<span>Delivery fee</span>
<span className="text-slate-500">Not included</span>
</div>
<div className="flex items-center justify-between gap-4 rounded-xl bg-emerald-50 p-4">
<div>
<p className="font-bold">Total amount</p>
<p className="text-xs text-slate-600">
Sum of price × quantity for all products
</p>
</div>
<p className="text-xl font-extrabold text-emerald-700 sm:text-2xl">
{formatKES(totalAmount)}
</p>
</div>
</div>
</>
)}
</section>
</div>
</main>

</div>
)
};
export default Checkout;