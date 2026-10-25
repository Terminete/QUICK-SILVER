import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function readOrder() {
  try {
    return JSON.parse(localStorage.getItem("order"));
  } catch {
    return null;
  }
}

const statusLabels = {
  pending: "Order received",
  confirmed: "Order confirmed",
  paid: "Payment confirmed",
  preparing: "Preparing your order",
  out_for_delivery: "Out for delivery",
  delivered: "Delivered",
};

const Track = () => {
  const order = readOrder();
  const currentStatus = order?.status || "pending";

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-sm font-semibold uppercase text-emerald-700">Delivery</p>
        <h1 className="mt-2 text-3xl font-bold">Track your order</h1>
        {!order ? (
          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="font-semibold">No recent order found</p>
            <Link to="/" className="mt-4 inline-block font-semibold text-emerald-700">
              Browse products
            </Link>
          </section>
        ) : (
          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 pb-5">
              <div>
                <h2 className="text-xl font-bold">{statusLabels[currentStatus] || "Order update"}</h2>
                <p className="mt-1 text-sm text-slate-500">{order.location} · {order.address}</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold capitalize text-emerald-800">
                {currentStatus.replaceAll("_", " ")}
              </span>
            </div>
            <div className="divide-y divide-slate-100">
              {order.items?.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 py-4">
                  <p className="font-medium">{item.name} <span className="text-slate-500">× {item.quantity}</span></p>
                  <p className="shrink-0 font-semibold">KES {Number(item.total).toLocaleString("en-KE")}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-4 font-bold">
              <span>Order total</span>
              <span>KES {Number(order.totalAmount).toLocaleString("en-KE")}</span>
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Live delivery updates will appear here once tracking is connected to the server.
            </p>
          </section>
        )}
      </main>
    </div>
  );
};

export default Track;
