import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import AuthLayout from "../components/AuthLayout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    setRegistered(true);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <AuthLayout
      eyebrow={registered ? "You're all set" : "Join Quick Silver"}
      title={registered ? "Registration preview complete" : "Create your account"}
      subtitle={registered ? "Account creation will be connected to the server next." : "A few details now, easier gas delivery from here on."}
      footer={registered ? null : <>Already have an account? <Link to="/login" className="ml-1 font-bold text-[#b85b35] underline-offset-4 hover:underline">Sign in</Link></>}
    >
      {registered ? (
        <button
          type="button"
          onClick={handleLogin}
          className="w-full rounded-lg bg-[#b85b35] px-5 py-3.5 font-bold text-white transition hover:bg-[#9f492a] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#b85b35]/30"
        >
          Go to sign in <span aria-hidden="true">→</span>
        </button>
      ) : (
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label htmlFor="register-name" className="mb-2 block text-sm font-bold">Full name</label>
            <div className="relative">
              <FaUser aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#74847d]" />
              <input
                id="register-name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-lg border border-[#ccd7cf] bg-white py-3 pl-11 pr-4 text-[#173a31] outline-none transition placeholder:text-[#9aa69f] focus:border-[#27765c] focus:ring-4 focus:ring-[#27765c]/10"
              />
            </div>
          </div>
          <div>
            <label htmlFor="register-email" className="mb-2 block text-sm font-bold">Email address</label>
            <div className="relative">
              <FaEnvelope aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#74847d]" />
              <input
                id="register-email"
                type="email"
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
            <label htmlFor="register-password" className="mb-2 block text-sm font-bold">Password</label>
            <div className="relative">
              <FaLock aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#74847d]" />
              <input
                id="register-password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                placeholder="At least 8 characters"
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
            Create account <span aria-hidden="true">→</span>
          </button>
        </form>
      )}
    </AuthLayout>
  );
};

export default Register;
