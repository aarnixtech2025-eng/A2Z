import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const sealProducts = [
  {
    id: 1,
    title: "cfw oil seals : By A2Z Seals India in Kolkata, India",
    description: "We Can Supply Special PTFE SEALS, High Pressure Seals, High Temperature Seals",
    date: "13/01/2023",
    category: "Oil-Seal"
  },
  {
    id: 2,
    title: "V Pack | Chevron Seal – ES, EKV, EK, K01, ESV, TFW, DMS, VPS",
    description: "Chevron packing seals | V packing seals | V packs are highly adaptive sealing products of low to high standard rubber, resin cloths which consist of many V / U shaped lip seals that have been stacked vertically.",
    date: "12/09/2022",
    category: "Oil-Seal"
  },
  {
    id: 3,
    title: "Axial Seals V-Rings – VL VS VA",
    description: "A2Z SEALS offer V-rings which are simple and reliable solution for axial sealing applications. Understanding the differences",
    date: "12/09/2022",
    category: "Oil-Seal"
  },
  {
    id: 4,
    title: "ODI Piston Seal | What ODI Piston Seal ? NOK SEAL HYDRAULIC",
    description: "A2Z Seals is one of the leading seal kit manufacturers, provides the best quality ODI Piston Seal.",
    date: "27/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 5,
    title: "IDI Rod Seals | What IDI Rod Seals ? NOK SEAL HYDRAULIC | A2Z SEALS",
    description: "A large cross-section design that can be used over a wide pressure range. Uses U801 iron rubber in the materials for excellent abrasion resistance and also sealing capability.",
    date: "27/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 6,
    title: "UPH Packings for Piston Seal and Rod Seal | What UPH Type Packings for Piston Seal and Rod Seal ? NOK SEAL HYDRAULIC | A2Z SEALS",
    description: "Usable for both piston seal and rod seal. Designed with a large cross-section so that it can be used for wide range of applications.",
    date: "27/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 7,
    title: "USH, Piston/Rod Seal | What USH, Piston/Rod Seal ? NOK SEAL HYDRAULIC | A2Z SEALS",
    description: "R = 0.3 or below, R1 = 0.5 or below ,R2 = 1. The inner surface of the cylinder tube should be finished by buring (RLB) or honing (GH) to 0.4 to 3.2 μmRz (0.1 to 0.8 μmRa).",
    date: "27/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 8,
    title: "LBH Dust Seal | What LBH, Dust Seal ? NOK SEAL HYDRAULIC | A2Z SEALS",
    description: "R = 0.3 or below R1 = 0.5 or below. The surface of the rod should be finished by buffing (SPBF) to 0.8 to 1.6 μmRz (0.2 to 0.4 μmRz).",
    date: "27/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 9,
    title: "ISI Rod Seal | What ISI, Rod Seal ? NOK OIL SEAL | A2Z SEALS",
    description: "Special Packing for Rod Seals. R = 0.3 or below, R1 = 0.5 or below, R2 = 1. The surface of the rod should be finished by buffing (SPBF) to 0.8 to 1.6 μmRz (0.2 to 0.4 μmRz).",
    date: "27/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 10,
    title: "DC OIL SEAL | What DC OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "DC type Nitrile Rubber (NBR) / Acrylic Rubber (ACM) Lip Material. Nitrile Rubber (NBR) : NOK A727 Acrylic Rubber (ACM) : NOK T303",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 11,
    title: "OC OIL SEAL | What OC OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "OC type Nitrile Rubber (NBR) Lip Material NOK A727. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 12,
    title: "DB OIL SEAL | What DB OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "DB type Nitrile Rubber (NBR) / Acrylic Rubber (ACM) Lip Material. Nitrile Rubber (NBR) : NOK A727 Acrylic Rubber (ACM) : NOK T303",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 13,
    title: "SA1J OIL SEAL | What SA1J OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "SA1J type Tetrafluoroethylene Resin (PTFE) Lip Material NOK 31BF. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 14,
    title: "TB4 OIL SEAL | What TB4 OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "TB4 type Nitrile Rubber (NBR) Lip Material NOK A795. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 15,
    title: "KA3J OIL SEAL | What KA3J OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "KA3J type Tetrafluorothylene Resin (PTFE) Lip Material NOK 31BF. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 16,
    title: "TCJ OIL SEAL | What TCJ OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "TCJ type Nitrile Rubber (NBR) + Tetrafluoroethylene Resin (PTFE) Lip Material. Nitrile Rubber: NOK A103 + NOK 31BF Acrylic Rubber: NOK T303 + NOK 31BF",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 17,
    title: "KB OIL SEAL | What KB OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "KB type Nitrile Rubber (NBR) Lip Material NOK A727. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 18,
    title: "VAJ OIL SEAL | What VAJ OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "VAJ type Tetrafluorothylene Resin (PTFE) Lip Material NOK 31BF. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 19,
    title: "SBB OIL SEAL | What SBB OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "SBB type Nitrile Rubber (NBR) Lip Material NOK A941. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 20,
    title: "TC4 OIL SEAL | What TC4 OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "TC4 type Nitrile Rubber (NBR) Lip Material NOK A795. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 21,
    title: "KC OIL SEAL | What KC OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "KC type Nitrile Rubber (NBR) Lip Material NOK A727. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 22,
    title: "MG OIL SEAL | What MG OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "MG type Nitrile Rubber (NBR) Lip Material NOK A103 / NOK A104. Lip material NOK A104. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 23,
    title: "VB OIL SEAL | What VB OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "VB type Nitrile Rubber (NBR) Lip Material NOK A727: Shaft diameter class 150 mm or smaller. NOK A971: Shaft diameter class 150 mm or larger.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 24,
    title: "VR OIL SEAL | What VR OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "VR type Nitrile Rubber (NBR) / Fluorocarbon Rubber (FKM) Lip Material. Nitrile Rubber (NBR) : NOK A134 Fluorocarbon Rubber (FKM) : NOK F129",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 25,
    title: "ZT OIL SEAL | What ZT OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "ZT type Nitrile Rubber (NBR) Lip Material NOK A103. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 26,
    title: "ZF OIL SEAL | What ZF OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "ZF type Nitrile Rubber (NBR) Lip Material NOK A103. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 27,
    title: "QLFY OIL SEAL | What QLFY OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "QLFY type Nitrile Rubber (NRB) Lip material NOK A751. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 28,
    title: "VC OIL SEAL | What VC OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "VC type. Nok oil seal is a mechanical component used to seal oil. It isolates the parts of the transmission component that need to be lubricated from the output components.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 29,
    title: "TCN OIL SEAL | What TCN OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "TCN type Nitrile Rubber (NBR) Lip material NOK A795. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 30,
    title: "TCV OIL SEAL | What TCV OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "TCZ type Nitrile Rubber (NBR) Lip Material NOK A795. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 31,
    title: "TB OIL SEAL | What TB OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "TB type Nitrile Rubber (NBR) Lip Material NOK A727: Shaft diameter class 150 mm or smaller. NOK A971: Shaft diameter class 150 mm or larger.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 32,
    title: "TC Type NOK Oil Seal | NOK | A2Z SEALS",
    description: "Oil Seal for dust–free application. Maximum pressure 0.03MPa – 0.3Kgf / cm2. NOK Standard Oil Seal TC Type from NOK.",
    date: "22/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 33,
    title: "SB Type NOK Oil Seal | NOK | A2Z SEALS",
    description: "Oil Seal for dust–free application. Maximum pressure 0.03MPa – 0.3Kgf / cm2. NOK Standard Oil Seal SB Type from NOK.",
    date: "22/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 34,
    title: "SC OIL SEAL|What SC OIL SEAL? SC NOK OIL SEAL-A2ZSEALS",
    description: "SC NOK OIL SEAL from NOK. A2Z SEALS offers EXSTOCK short lead times, competitive pricing, and no minimum order quantity.",
    date: "21/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 35,
    title: "What are NOK Oil seals ? Products",
    description: "NOK CORPORATION of very high reliability, including oil seals, based on its constant and focused research on materials and workings. It is Japan's oil seal manufacturer.",
    date: "19/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 36,
    title: "TC4 OIL SEAL | What TC4 OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "TC4 type Nitrile Rubber (NBR) Lip Material NOK A795. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  },
  {
    id: 37,
    title: "TCN OIL SEAL | What TCN OIL SEAL ? NOK OIL SEAL | A2Z SEALS",
    description: "TCN type Nitrile Rubber (NBR) Lip material NOK A795. Nok oil seal is a mechanical component used to seal oil.",
    date: "26/05/2022",
    category: "Oil-Seal"
  }
];

const ITEMS_PER_PAGE = 10;

function Categories() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sealProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = sealProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Different Type of Seals
          </h1>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Browse our wide range of seal products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4">
                <span className="inline-block rounded-full bg-[#f5b400]/10 px-3 py-1 text-xs font-bold text-[#b57b00]">
                  {product.category}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-extrabold text-[#061a38] line-clamp-2 group-hover:text-[#e5a600]">
                {product.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{product.date}</span>
                <Link
                  to="#"
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#061a38] transition-colors hover:text-[#e5a600]"
                >
                  Read More
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="text-xs" />
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition-all ${
                    currentPage === page
                      ? "bg-[#f5b400] text-[#061a38]"
                      : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <FaChevronRight className="text-xs" />
            </button>
          </div>

          {/* Page Info */}
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, sealProducts.length)} of {sealProducts.length} products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
