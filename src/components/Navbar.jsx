import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <>
      <nav className="w-full h-22 flex justify-between items-center  bg-green-500 text-white py-2 px-4  overscroll-contain ">
        <h1 className="">
          <Link to="/ " className="font-bold text-2xl  ">QUICK SILVER GAS POINT</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          <Link to="/checkout">Checkout</Link>

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
