import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-10 bg-slate-800 text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-3">
        <div>
          <h3 className="font-bold">Gas Point</h3>
          <p className="text-sm">Fast and reliable gas delivery service.</p>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <p className="text-sm">Email: paulmuli878@gmail.com</p>
          <p className="text-sm">Phone: +254 706201319</p>
          <p className="text-sm">WhatsApp: 0706201319</p>
        </div>

        <div>
          <h3 className="font-bold">Follow us</h3>
          <ul className="mt-1 space-y-1 text-sm">
            <li>
              <a
                href="https://instagram.com/termineterwizkid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <FaInstagram aria-hidden="true" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/TermineterWizkid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <FaFacebookF aria-hidden="true" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-600">
        <p className="mx-auto max-w-5xl px-4 py-2 text-right text-sm">
          © 2026 Gas Point
        </p>
      </div>
    </footer>
  );
};

export default Footer;
