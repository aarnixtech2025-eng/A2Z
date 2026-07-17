import { Link } from "react-router-dom";
import { FaArrowRight, FaRing } from "react-icons/fa";

const sealProfiles = [
  "Rod Seal",
  "Piston Seal",
  "Wiper Seal",
  "Oil Seal",
  "O-Ring",
  "V-Ring",
  "U-Cup Seal",
  "Chevron Seal",
  "Cassette Seal",
  "Floating Seal",
  "Mechanical Seal",
  "Wear Ring",
  "Guide Ring",
  "Dust Seal",
  "Buffer Seal",
  "Hydraulic Seal Kit",
];

function SealsProfilesList() {
  return (
    <section className="min-h-screen bg-[#f5f8fc]">
      <div className="relative overflow-hidden bg-[#061a38] py-16 sm:py-20">
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#f5b400]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5b400] text-2xl text-[#061a38]">
            <FaRing />
          </div>

          <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f5b400]">
            A2Z Seals Product Guide
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Seal Profiles <span className="text-[#f5b400]">List</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Browse different industrial seal profiles for hydraulic systems,
            machines, pumps, gearboxes and heavy equipment.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sealProfiles.map((profile) => (
            <Link
              key={profile}
              to={`/shop/products?profile=${encodeURIComponent(profile)}`}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:border-[#f5b400] hover:shadow-lg"
            >
              <span className="font-extrabold text-[#061a38]">{profile}</span>

              <FaArrowRight className="text-[#d99600] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SealsProfilesList;