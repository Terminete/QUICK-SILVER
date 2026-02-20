import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    // Simulate registration
    setRegistered(true);
  };

  const navigate = useNavigate();

  const handeLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

        {!registered ? (
          <form onSubmit={handleRegister}>
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-3 px-3 py-2  border-2 rounded focus:border-2  border-gray-400  focus:border-green-500 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 px-3 py-2 border-2 rounded focus:border-2 border-gray-400 focus:border-green-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-3 py-2  border-2 rounded focus:border-2  border-gray-400 focus:border-green-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Register
            </button>
            <p className="text-sm my-2">
              Already have an account?{" "}
              <span
                className=" hover:underline cursor-pointer mb-2 hover:text-green-500"
                onClick={handeLogin}
              >
                Log in{" "}
              </span>{" "}
            </p>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-600">
              Registration Successful 
            </h3>
            <p className="text-gray-600 mt-2">
              You can now log in and order gas.
            </p>
            <button
              onClick={handeLogin}
              className="py-2 text-lg font-semibold bg-green-500/20 rounded-sm my-2 mt-3 text-green-500 border cursor-pointer w-full  hover:bg-violent-600 "
            >
              Log in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
