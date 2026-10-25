import { brands } from "../data/brands";
import { useCart } from "../Context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const searchTerm = (searchParams.get("search") || "").trim().toLocaleLowerCase();
  const filteredBrands = brands.filter((brand) =>
    brand.name.trim().toLocaleLowerCase().includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#f5f7f3] text-[#173a31]">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-7 sm:px-6 lg:px-8">
        <section className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-[#dce5dd] pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b85b35]">Quick Silver Gas Point</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Gas for your home</h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#61716b]">
              Choose a trusted brand or find the accessories you need.
            </p>
          </div>
          <p className="text-sm font-semibold text-[#61716b]" aria-live="polite">
            {filteredBrands.length} {filteredBrands.length === 1 ? "product" : "products"}
            {searchTerm && <> for “{searchParams.get("search")?.trim()}”</>}
          </p>
        </section>

        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredBrands.map((brand) => (
              <article
                key={brand.id}
                className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#dce5dd] bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-[#f0f3ef] p-4">
                  <img
                    src={brand.image.trim()}
                    alt={brand.name}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h2 className="min-h-6 font-bold text-[#173a31]">{brand.name.trim()}</h2>
                  <p className="mt-2 text-lg font-extrabold text-[#27765c]">
                    KES {Number(brand.price).toLocaleString("en-KE")}
                  </p>
                  <button
                    type="button"
                    onClick={() => addToCart(brand)}
                    className="mt-4 w-full rounded-lg bg-[#153b32] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#205648] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#27765c]/25"
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border-y border-[#dce5dd] py-16 text-center">
            <p className="text-lg font-bold">No matching products</p>
            <p className="mt-2 text-sm text-[#61716b]">Try another brand or search term.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
