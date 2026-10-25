import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import { FaBars, FaFireFlameCurved, FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const cartCount = cart.reduce((count, item) => count + (Number(item.quantity) || 1), 0);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchTerm.trim();
    navigate(query ? `/?search=${encodeURIComponent(query)}` : "/");
    setMenuOpen(false);
  };

  const navLinkClass = (path) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      location.pathname === path
        ? "bg-white/15 text-white"
        : "text-white/75 hover:bg-white/10 hover:text-white"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#153b32] text-white shadow-lg shadow-[#102c25]/10">
      <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-2 px-4 py-2 sm:px-6 lg:flex-nowrap lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4a261]">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4a261] text-lg text-[#173a31]">
            <FaFireFlameCurved aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold uppercase tracking-[0.1em] sm:text-base">Quick Silver</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">Gas Point</span>
          </span>
        </Link>

        <form onSubmit={handleSearch} role="search" className="order-3 flex w-full min-w-0 gap-2 lg:order-none lg:max-w-sm lg:flex-1">
          <label htmlFor="site-search" className="sr-only">Search products</label>
          <div className="relative min-w-0 flex-1">
            <FaMagnifyingGlass aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/45" />
            <input
              id="site-search"
              type="search"
              placeholder="Search gas and accessories"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/10 py-2.5 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-white/50 focus:border-[#f4a261] focus:ring-4 focus:ring-[#f4a261]/15"
            />
          </div>
          <button type="submit" className="rounded-lg bg-[#f4a261] px-4 text-sm font-bold text-[#173a31] transition hover:bg-[#f7b47e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4a261]">
            Search
          </button>
        </form>

        <div className="hidden items-center gap-1 lg:flex">
          <Link to="/" className={navLinkClass("/")}>Home</Link>
          <Link to="/cart" className={`${navLinkClass("/cart")} inline-flex items-center gap-2`}>
            Cart <span className="rounded-full bg-[#f4a261] px-2 py-0.5 text-xs font-extrabold text-[#173a31]">{cartCount}</span>
          </Link>
          <Link to="/checkout" className={navLinkClass("/checkout")}>Checkout</Link>
          {user ? (
            <>
              <span className="ml-2 max-w-32 truncate text-xs text-white/70" title={user.email}>{user.email}</span>
              <button type="button" onClick={logout} className="ml-1 rounded-lg px-3 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-white">Log out</button>
            </>
          ) : (
            <>
              <Link to="/login" className={navLinkClass("/login")}>Sign in</Link>
              <Link to="/register" className="ml-1 rounded-lg bg-white px-3 py-2 text-sm font-bold text-[#153b32] transition hover:bg-[#e8eee5]">Create account</Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-lg transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4a261] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        {menuOpen && (
          <div className="order-4 grid w-full grid-cols-2 gap-2 border-t border-white/15 pt-3 lg:hidden">
            <Link to="/" onClick={closeMenu} className={navLinkClass("/")}>Home</Link>
            <Link to="/cart" onClick={closeMenu} className={navLinkClass("/cart")}>Cart ({cartCount})</Link>
            <Link to="/checkout" onClick={closeMenu} className={navLinkClass("/checkout")}>Checkout</Link>
            {user ? (
              <button type="button" onClick={() => { logout(); closeMenu(); }} className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-white/75 hover:bg-white/10">Log out</button>
            ) : (
              <>
                <Link to="/login" onClick={closeMenu} className={navLinkClass("/login")}>Sign in</Link>
                <Link to="/register" onClick={closeMenu} className={navLinkClass("/register")}>Create account</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
