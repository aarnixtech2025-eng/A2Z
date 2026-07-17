import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaShoppingCart, FaBox, FaTag, FaCheckCircle } from "react-icons/fa";

function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const res = await axios.get(`${API_URL}/api/products/${slug}`);
        setProduct(res.data.product);
        setSelectedImage(0);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-64 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 rounded-2xl"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-12 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <FaBox className="text-gray-400 text-4xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h3>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaArrowLeft />
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  const resolveImage = (src) =>
    !src
      ? "/placeholder.png"
      : src.startsWith('http')
        ? src
        : `${API_URL}${src}`;

  const galleryImages = [
    product.thumbnail || product.image,
    ...((product.gallery || []).filter(Boolean)),
  ].filter(Boolean);
  if (galleryImages.length === 0) galleryImages.push(null);

  const discount =
    product.regularPrice && product.regularPrice > product.price
      ? Math.round(((product.regularPrice - product.price) / product.regularPrice) * 100)
      : 0;

return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-blue-950 rounded-2xl p-5 md:p-6 mb-6 shadow-xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/10 rounded-lg">
                <FaBox className="text-white text-xl" />
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                Product Details
              </h1>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Image Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
                  <img
                    src={resolveImage(galleryImages[selectedImage])}
                    alt={product.title || product.name}
                    className="w-full h-96 object-contain p-8"
                  />
                </div>
                {product.isFeatured && (
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">BEST</span>
                  </div>
                )}
              </div>

              {galleryImages.length > 1 && (
                <div className="mt-6 grid grid-cols-5 gap-3">
                  {galleryImages.slice(0, 5).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`rounded-xl overflow-hidden border-2 transition-all duration-300 bg-white shadow-sm ${
                        selectedImage === idx 
                          ? "border-blue-600 shadow-md transform scale-105" 
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={resolveImage(img)}
                        alt={`thumbnail-${idx}`}
                        className="w-full h-20 object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info Section */}
            <div className="p-8">
              {/* Category Badge */}
              {product.categories && product.categories.length > 0 && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                    {product.categories[0].name}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
                {product.title || product.name}
              </h1>

              {/* SKU */}
              {product.sku && (
                <div className="mb-6">
                  <span className="text-sm text-gray-500">SKU: {product.sku}</span>
                </div>
              )}

              {/* Price Section */}
              {product.price && (
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
                    {product.regularPrice && product.regularPrice > product.price && (
                      <span className="text-xl text-gray-400 line-through">₹{product.regularPrice}</span>
                    )}
                  </div>
                  {discount > 0 && (
                    <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 text-sm font-bold rounded-lg">
                      Save ₹{product.regularPrice - product.price} ({discount}% off)
                    </div>
                  )}
                </div>
              )}

              {/* Stock Status */}
              {product.stockStatus && (
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold ${
                    product.stockStatus === 'instock' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    <FaCheckCircle />
                    {product.stockStatus === 'instock' ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>
              )}

              <hr className="border-gray-200 my-6" />

              {/* Add to Cart Button */}
              <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 rounded-xl font-bold text-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <FaShoppingCart className="inline mr-2" />
                Add to Cart
              </button>
            </div>
          </div>

          {/* Description Section */}
          <div className="border-t border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaBox className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Description</h3>
            </div>
            <div className="text-gray-700 leading-relaxed">
              {product.description && product.description.trim() ? (
                <div
                  className="[&_h1]:text-lg [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mt-6 [&_h1]:mb-3 [&_h1]:pb-2 [&_h1]:border-b [&_h1]:border-gray-100 [&_h1]:first:mt-0
                  [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-gray-100 [&_h2]:first:mt-0
                  [&_h3]:flex [&_h3]:items-center [&_h3]:gap-2 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:pb-2 [&_h3]:border-b [&_h3]:border-gray-100 [&_h3]:first:mt-0
                  [&_p]:mb-3 [&_p]:text-[15px]
                  [&_ul]:grid [&_ul]:grid-cols-1 sm:[&_ul]:grid-cols-2 [&_ul]:gap-x-6 [&_ul]:gap-y-2 [&_ul]:list-none [&_ul]:pl-0 [&_ul]:mb-2
                  [&_li]:relative [&_li]:pl-5 [&_li]:text-[14px] [&_li]:text-gray-600
                  [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[7px] [&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:rounded-full [&_li]:before:bg-blue-500
                  [&_strong]:text-gray-900 [&_strong]:font-semibold [&_b]:text-gray-900 [&_b]:font-semibold
                  [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              ) : product.excerpt && product.excerpt.trim() ? (
                <p className="mb-3 text-[15px]">{product.excerpt}</p>
              ) : (
                <p className="text-gray-500 italic text-sm">No description available.</p>
              )}
            </div>
          </div>

          {/* Categories Section */}
          {product.categories && product.categories.length > 0 && (
            <div className="border-t border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {product.categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm hover:shadow-md"
                  >
                    <FaTag className="text-xs text-gray-400" />
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Tags Section */}
          {product.tags && product.tags.length > 0 && (
            <div className="border-t border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {product.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-200 shadow-sm"
                  >
                    <FaTag className="text-xs text-gray-400" />
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
