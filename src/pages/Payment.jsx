import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function readOrder() {
  try {
    return JSON.parse(localStorage.getItem("order"));
  } catch {
    return null;
  }
}

const Payment = () => {
  const navigate = useNavigate();
  const order = readOrder();

  if (!order || !Array.isArray(order.items)) {
    return (
      <div className="min-h-screen bg-slate-100">
        <Navbar />
        <main className="mx-auto max-w-xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">No order ready for payment</h1>
          <Link to="/" className="mt-5 inline-block font-semibold text-emerald-700">
            Browse products
          </Link>
        </main>
      </div>
    );
  }

  const isCashOrder = order.paymentMethod === "cash";
  const handlePayment = () => {
    const updatedOrder = {
      ...order,
      status: isCashOrder ? "confirmed" : "paid",
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem("order", JSON.stringify(updatedOrder));
    navigate("/track");
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-sm font-semibold uppercase text-emerald-700">Payment</p>
        <h1 className="mt-2 text-3xl font-bold">Review your order</h1>
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="divide-y divide-slate-100">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4 py-4">
                <div className="flex min-w-0 items-center gap-3">
                  {item.image && <img src={item.image} alt="" className="h-14 w-14 object-contain" />}
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-slate-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="shrink-0 font-semibold">KES {Number(item.total).toLocaleString("en-KE")}</p>
              </div>
            ))}
          </div>
          <dl className="mt-4 grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-500">Deliver to</dt>
              <dd className="font-medium">{order.address}, {order.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Payment method</dt>
              <dd className="font-medium">{order.paymentMethod || "M-Pesa"}</dd>
            </div>
          </dl>
          <div className="mt-5 flex justify-between border-t border-slate-200 pt-5 text-lg font-bold">
            <span>Total</span>
            <span>KES {Number(order.totalAmount).toLocaleString("en-KE")}</span>
          </div>
          <p className="mt-5 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
            Frontend demo only. No payment will be collected.
          </p>
          <button
            type="button"
            onClick={handlePayment}
            className="mt-5 w-full rounded-lg bg-emerald-700 px-5 py-3 font-bold text-white hover:bg-emerald-800"
          >
            {isCashOrder ? "Confirm cash on delivery" : "Simulate payment confirmation"}
          </button>
        </section>
      </main>
    </div>
  );
};

export default Payment;

