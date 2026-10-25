import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import brands from "../data/brands";

const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedBrand = brands.find((brand) => brand.id === Number(id));
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");

  if (!selectedBrand) {
    return (
      <div className="min-h-screen bg-slate-100">
        <Navbar />
        <main className="mx-auto max-w-xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Gas product not found</h1>
          <Link to="/" className="mt-5 inline-block font-semibold text-emerald-700">
            Browse products
          </Link>
        </main>
      </div>
    );
  }

  const handleOrder = (event) => {
    event.preventDefault();
    const deliveryAddress = address.trim();
    const deliveryLocation = location.trim();

    if (!deliveryAddress || !deliveryLocation) return;

    const order = {
      items: [{
        id: selectedBrand.id,
        name: selectedBrand.name,
        price: Number(selectedBrand.price),
        quantity: 1,
        total: Number(selectedBrand.price),
        image: selectedBrand.image,
      }],
      address: deliveryAddress,
      location: deliveryLocation,
      paymentMethod,
      totalAmount: Number(selectedBrand.price),
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("order", JSON.stringify(order));
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="mx-auto grid max-w-5xl gap-6 px-4 py-8 md:grid-cols-[1fr_0.8fr]">
        <form
          onSubmit={handleOrder}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase text-emerald-700">Delivery details</p>
          <h1 className="mt-2 text-2xl font-bold">Complete your order</h1>

          <label htmlFor="delivery-address" className="mb-2 mt-6 block text-sm font-semibold">
            Delivery address
          </label>
          <input
            id="delivery-address"
            type="text"
            autoComplete="street-address"
            required
            placeholder="Street, building, house number"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />

          <label htmlFor="delivery-location" className="mb-2 mt-5 block text-sm font-semibold">
            Town or area
          </label>
          <input
            id="delivery-location"
            type="text"
            autoComplete="address-level2"
            required
            placeholder="Town or neighbourhood"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />

          <label htmlFor="payment-method" className="mb-2 mt-5 block text-sm font-semibold">
            Payment method
          </label>
          <select
            id="payment-method"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            value={paymentMethod}
            onChange={(event) => setPaymentMethod(event.target.value)}
          >
            <option value="mpesa">M-Pesa</option>
            <option value="card">Card</option>
            <option value="cash">Cash on delivery</option>
          </select>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-emerald-700 px-5 py-3 font-bold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Continue to payment
          </button>
        </form>

        <section className="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">Order summary</h2>
          <div className="mt-5 flex items-center gap-4">
            <img src={selectedBrand.image} alt={selectedBrand.name} className="h-20 w-20 object-contain" />
            <div>
              <p className="font-semibold">{selectedBrand.name}</p>
              <p className="mt-1 text-sm text-slate-500">Quantity: 1</p>
            </div>
          </div>
          <div className="mt-6 flex justify-between border-t border-slate-200 pt-4 font-bold">
            <span>Total</span>
            <span>KES {Number(selectedBrand.price).toLocaleString("en-KE")}</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Order;
