import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaArrowRight, FaBox, FaTag, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await axios.get(`${API_URL}/api/products?page=${page}&limit=36`);
        setProducts(res.data.products || []);
        setTotalPages(res.data.totalPages || 1);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-64 mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mb-8"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="p-3">
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-blue-950 rounded-2xl p-5 md:p-6 mb-6 shadow-xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <FaBox className="text-white text-xl" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                    All Products
                  </h1>
                </div>
                <p className="text-white/90 text-sm md:text-base">
                  Browse our complete collection of premium industrial sealing products
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30"
                >
                  <FaArrowLeft />
                  Back to Home
                </Link>
                <div className="flex gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{products.length}</div>
                    <div className="text-[10px] text-white/80 uppercase tracking-wider">Total</div>
                  </div>
                  <div className="w-px bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{totalPages}</div>
                    <div className="text-[10px] text-white/80 uppercase tracking-wider">Pages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.map((product) => (
                <Link
                  key={product.id || product.ID}
                  to={`/shop/product/${product.slug || product.id || product.ID}`}
                  className="group bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="aspect-w-1 aspect-h-1 w-full bg-gray-100 overflow-hidden">
                      <img
                        src={
                          product.thumbnail || product.image
                            ? (product.thumbnail || product.image).startsWith('http')
                              ? (product.thumbnail || product.image)
                              : `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${product.thumbnail || product.image}`
                            : "/placeholder.png"
                        }
                        alt={product.title || product.name}
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {product.isFeatured && (
                      <div className="absolute top-2 right-2 p-1.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-md">
                        <FaStar className="text-yellow-900 text-[10px]" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-3">
                    <h3 className="text-xs font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                      {product.title || product.name}
                    </h3>
                    
                    {product.price && (
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-0.5 px-2 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 rounded-md border border-green-500/20">
                          <span className="text-xs font-bold">₹</span>
                          <span className="text-xs font-bold">{product.price}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-4">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                >
                  <FaChevronLeft />
                  Previous
                </button>
                <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-gray-600 font-medium">Page</span>
                  <span className="text-gray-900 font-bold">{page}</span>
                  <span className="text-gray-600 font-medium">of</span>
                  <span className="text-gray-900 font-bold">{totalPages}</span>
                </div>
                <button
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 disabled:hover:scale-100"
                >
                  Next
                  <FaChevronRight />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <FaBox className="text-gray-400 text-4xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Found</h3>
            <p className="text-gray-600">Check back later for new products</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
