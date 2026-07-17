import { Link } from "react-router-dom";
import { FaCogs, FaArrowRight } from "react-icons/fa";

function CategoryCard({ category }) {
  const getCategoryPath = (slug) => {
    // Match a2zseals URL structure for common categories
    const categoryPaths = {
      'seal-kits': '/seal-kits',
      'hydraulic-cylinder-seals': '/hydraulic-cylinder-seals',
      'oil-seals': '/oil-seals',
      'shaft-seals': '/shaft-seals',
      'hub-cassette-seals': '/hub-cassette-seals',
      'gear-box-seals': '/gear-box-seals',
      'pump-seals-kits': '/pump-seals-kits',
      'o-rings-box-kits': '/o-rings-box-kits',
      'floating-seals': '/floating-seals',
      'engine-oil-seal': '/engine-oil-seal',
      'ptfe-seals': '/ptfe-seals',
      'motor-seals-kits': '/motor-seals-kits',
    };
    
    return categoryPaths[slug] || `/${slug}`;
  };

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b400]/50 hover:shadow-[0_12px_32px_rgba(6,26,56,0.12)]">
      {/* Compact Header with Icon */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#061a38] to-[#0b3265] p-4">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#f5b400]/30 bg-[#f5b400]/10 text-xl text-[#f5b400] shadow-md">
            <FaCogs />
          </div>
          
          <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[9px] font-extrabold uppercase tracking-wide text-emerald-400">
            Available
          </span>
        </div>
      </div>

      {/* Compact Card Content */}
      <div className="p-3">
        {/* Title */}
        <h3 className="text-sm font-extrabold text-[#061a38] leading-tight line-clamp-2 min-h-[36px] transition-colors group-hover:text-[#b57b00]">
          {category.name}
        </h3>

        {/* ID Badge */}
        <div className="mt-2">
          <span className="inline-block rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-500">
            ID: {category.term_id}
          </span>
        </div>

        {/* Action Button */}
        <div className="mt-3">
          <Link
            to={getCategoryPath(category.slug)}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#061a38] px-3 py-2 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-[#f5b400] hover:text-[#061a38]"
          >
            View
            <FaArrowRight className="text-[8px]" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CategoryCard;
