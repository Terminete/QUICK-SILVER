import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email.trim());
    navigate("/");
  };

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in to your account"
      subtitle="Pick up where you left off and get your next delivery moving."
      footer={<>New to Quick Silver? <Link to="/register" className="ml-1 font-bold text-[#b85b35] underline-offset-4 hover:underline">Create an account</Link></>}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="login-email" className="mb-2 block text-sm font-bold">Email address</label>
          <div className="relative">
            <FaEnvelope aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#74847d]" />
            <input
              id="login-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-[#ccd7cf] bg-white py-3 pl-11 pr-4 text-[#173a31] outline-none transition placeholder:text-[#9aa69f] focus:border-[#27765c] focus:ring-4 focus:ring-[#27765c]/10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="login-password" className="mb-2 block text-sm font-bold">Password</label>
          <div className="relative">
            <FaLock aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#74847d]" />
            <input
              id="login-password"
              type="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-[#ccd7cf] bg-white py-3 pl-11 pr-4 text-[#173a31] outline-none transition placeholder:text-[#9aa69f] focus:border-[#27765c] focus:ring-4 focus:ring-[#27765c]/10"
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#b85b35] px-5 py-3.5 font-bold text-white transition hover:bg-[#9f492a] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#b85b35]/30"
        >
          Sign in <span aria-hidden="true">→</span>
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
