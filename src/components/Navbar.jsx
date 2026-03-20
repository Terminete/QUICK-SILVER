import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${search}`);
  }
  return (
    <>
      <nav className="w-full h-22 flex flex-col md:flex-row  justify-between items-center gap-3  bg-green-500 text-white py-2 px-4  overscroll-contain ">
        <h1 className="">
          <Link to="/ " className="font-bold text-2xl  ">QUICK SILVER GAS POINT</Link>
        </h1>
         <form onSubmit={handleSearch} className="flex  w-full md:w-auto gap-2">
        <input
          type="text"
          placeholder="Search gas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-1 rounded-lg w-full md:w-64 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded-lg"
        >
          Search
        </button>
      </form>
        <div className="space-x-4 text-white flex gap-4">
          <Link to="/" className="bg-white text-red-600 py-2 px-1 rounded">Home</Link>
          <Link to="/cart" className="bg-white text-red-400 px-3 py-1 rounded">Cart ({cart.length})</Link>
          <Link to="/checkout" className="bg-white text-red-600 px-4 py-1 rounded">Checkout</Link>

          {user ? (
            <>
              <span>{user.email}</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-white text-green-600 px-4 py-1 rounded"
            >
              Login
            </Link>
          )}

          <Link
            to="/register"
            className="bg-white text-green-600 px-4 py-1 rounded"
          >
            Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
