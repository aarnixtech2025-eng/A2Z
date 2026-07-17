import { useState, useEffect } from "react";
import axios from "axios";
import { FiStar, FiPackage, FiCheck, FiX } from "react-icons/fi";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [featuredCount, setFeaturedCount] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.get(`${API_URL}/api/products`);
      
      let productsData = [];
      if (Array.isArray(response.data.products)) {
        productsData = response.data.products;
      } else if (Array.isArray(response.data.data)) {
        productsData = response.data.data;
      } else if (Array.isArray(response.data)) {
        productsData = response.data;
      }
      
      setProducts(productsData);
      setFeaturedCount(productsData.filter(p => p.isFeatured).length);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFeatured = async (productId) => {
    setSaving(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const token = localStorage.getItem("token");
      const product = products.find(p => p.id === productId);
      await axios.put(
        `${API_URL}/api/products/${productId}/featured`,
        { isFeatured: !product.isFeatured },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProducts(products.map(p => 
        p.id === productId ? { ...p, isFeatured: !p.isFeatured } : p
      ));
      setFeaturedCount(prev => product.isFeatured ? prev - 1 : prev + 1);
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update featured status");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-700 rounded w-64 mb-4"></div>
            <div className="h-2 bg-slate-700 rounded w-32 mb-8"></div>
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="h-4 bg-slate-700 rounded w-full mb-4"></div>
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg">
              <FiStar className="text-white text-xl" />
            </div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Products
            </h1>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg">
            Select products to feature on the home page
          </p>
          
          {/* Stats Card */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-5 border border-slate-600 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FiPackage className="text-blue-400 text-lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{products.length}</div>
                  <div className="text-sm text-gray-400">Total Products</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-5 border border-yellow-500/30 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-500/30 rounded-lg">
                  <FiStar className="text-yellow-400 text-lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">{featuredCount}</div>
                  <div className="text-sm text-yellow-200">Featured</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-5 border border-slate-600 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <FiCheck className="text-green-400 text-lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{products.length - featuredCount}</div>
                  <div className="text-sm text-gray-400">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-700">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FiPackage className="text-gray-400" />
              Products List
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800/80">
                <tr>
                  <th className="p-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Product</th>
                  <th className="p-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Price</th>
                  <th className="p-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="p-5 text-left text-xs font-bold text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="p-5 text-right text-xs font-bold text-gray-300 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {products.map((product) => (
                  <tr 
                    key={product.id} 
                    className={`transition-all duration-300 hover:bg-slate-700/30 ${
                      product.isFeatured ? 'bg-yellow-500/5' : ''
                    }`}
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          {product.thumbnail ? (
                            <img 
                              src={product.thumbnail} 
                              alt={product.title} 
                              className="w-14 h-14 rounded-xl object-cover border-2 border-slate-600 shadow-md"
                            />
                          ) : (
                            <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center border-2 border-slate-600">
                              <FiPackage className="text-slate-500 text-lg" />
                            </div>
                          )}
                          {product.isFeatured && (
                            <div className="absolute -top-2 -right-2 p-1 bg-yellow-400 rounded-full shadow-lg">
                              <FiStar className="text-yellow-900 text-xs" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-white text-base">{product.title}</div>
                          {product.excerpt && (
                            <div className="text-xs text-gray-400 truncate max-w-xs mt-1">{product.excerpt}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-700/50 rounded-lg border border-slate-600">
                        <span className="text-lg font-bold text-white">₹</span>
                        <span className="text-lg font-bold text-white">{product.price}</span>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex flex-wrap gap-1">
                        {product.categories && product.categories.length > 0 ? (
                          product.categories.slice(0, 2).map((cat, index) => (
                            <span 
                              key={index}
                              className="px-2.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-md border border-blue-500/30"
                            >
                              {cat.name}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-500 text-sm">N/A</span>
                        )}
                        {product.categories && product.categories.length > 2 && (
                          <span className="text-gray-500 text-xs">+{product.categories.length - 2}</span>
                        )}
                      </div>
                    </td>
                    <td className="p-5">
                      {product.isFeatured ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 text-xs font-bold rounded-lg border border-yellow-500/30">
                          <FiStar className="text-xs" />
                          Featured
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700/50 text-gray-400 text-xs font-bold rounded-lg border border-slate-600">
                          <FiX className="text-xs" />
                          Not Featured
                        </span>
                      )}
                    </td>
                    <td className="p-5 text-right">
                      <button
                        onClick={() => toggleFeatured(product.id)}
                        disabled={saving}
                        className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ${
                          product.isFeatured 
                            ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700' 
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                        } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                      >
                        {product.isFeatured ? (
                          <span className="flex items-center gap-2">
                            <FiX />
                            Remove
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <FiStar />
                            Add to Featured
                          </span>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {products.length === 0 && (
            <div className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-slate-700 rounded-full flex items-center justify-center">
                <FiPackage className="text-slate-500 text-3xl" />
              </div>
              <div className="text-gray-400 text-lg font-medium">No products found</div>
              <div className="text-gray-500 text-sm mt-2">Add products to manage featured items</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
