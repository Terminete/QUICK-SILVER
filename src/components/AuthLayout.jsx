import { Link } from "react-router-dom";
import { FaFireFlameCurved } from "react-icons/fa6";

const AuthLayout = ({ eyebrow, title, subtitle, footer, children }) => (
  <main className="min-h-screen bg-[#f6f7f2] text-[#173a31] lg:grid lg:grid-cols-[minmax(360px,0.95fr)_1.05fr]">
    <section className="relative flex min-h-[390px] flex-col overflow-hidden bg-[#153b32] px-7 py-7 text-white sm:px-10 lg:min-h-screen lg:px-14 lg:py-10">
      <Link to="/" className="inline-flex w-fit items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4a261]">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4a261] text-xl text-[#173a31]">
          <FaFireFlameCurved aria-hidden="true" />
        </span>
        <span className="text-sm font-extrabold uppercase tracking-[0.12em]">Quick Silver</span>
      </Link>

      <div className="relative z-10 mt-10 max-w-lg sm:mt-12 lg:mt-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f4a261]">Gas Point · Kenya</p>
        <h1 className="mt-4 max-w-md text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          Your home, <span className="text-[#f4a261]">always in good hands.</span>
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-6 text-white/75 sm:text-base">
          Trusted gas and essentials, delivered right to your door.
        </p>
      </div>

      <div className="relative mt-auto -mx-7 -mb-7 mt-8 flex min-h-40 items-end overflow-hidden bg-[#e8eee5] px-5 pt-3 sm:-mx-10 sm:-mb-7 sm:px-10 lg:-mx-14 lg:-mb-10 lg:min-h-64 lg:px-12">
        <img
          src="/images/background.png"
          alt="A selection of gas cylinders"
          className="mx-auto h-40 w-full max-w-md object-contain sm:h-48 lg:h-64"
        />
        <span className="absolute bottom-4 right-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#31594d] sm:right-10 lg:right-12">
          Reliable delivery, every day
        </span>
      </div>
    </section>

    <section className="flex min-h-[520px] items-center justify-center px-6 py-12 sm:px-10 lg:min-h-screen lg:px-14">
      <div className="w-full max-w-md">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b85b35]">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#173a31] sm:text-4xl">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-[#61716b]">{subtitle}</p>
        <div className="mt-8">{children}</div>
        <div className="mt-7 border-t border-[#dce3dc] pt-5 text-sm text-[#61716b]">{footer}</div>
      </div>
    </section>
  </main>
);

export default AuthLayout;