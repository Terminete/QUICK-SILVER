import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate("/Login");
  };

  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <>
      <div className="min-h-screen bg-gray-200 p-4 flex items-center justify-center">
        <div
          className="bg-white p-6 rounded-lg shadow w-full max-w-sm
    "
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              className="w-full mb-3 px-3 py-2  border-2 border-gray-400 rounded focus:border-2 focus:border-green-500 outline-none"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="w-full mb-3 px-3 py-2  border-2 border-gray-400 rounded focus:border-2 focus:border-green-500 outline-none"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="">
              <p className="text-sm w-fit hover:underline cursor-pointer mb-2 hover:text-green-500  ">
                Forgot Password ?
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/Login")}
              className="py-2 text-lg font-semibold bg-green-600  text-gray-100 border cursor-pointer w-full  hover:bg-green-700 "
            >
              Login
            </button>
            <p className="text-sm my-2 ">Don't have an account? <span className=" hover:underline cursor-pointer mb-2 hover:text-green-500" onClick={handleRegister}>Sign Up</span>  </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
