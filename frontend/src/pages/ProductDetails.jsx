import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

const BASE_URL = "http://localhost:5000/api";

function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/products/${slug}`);
        setProduct(res.data.product);
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 mb-6"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={
                  product.thumbnail || product.image
                    ? (product.thumbnail || product.image).startsWith('http')
                      ? (product.thumbnail || product.image)
                      : `${import.meta.env.VITE_API_URL}${product.thumbnail || product.image}`
                    : "/placeholder.png"
                }
                alt={product.title || product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                {product.title || product.name}
              </h1>

              {product.sku && (
                <p className="text-sm text-gray-600 mb-4">
                  SKU: {product.sku}
                </p>
              )}

              {product.price && (
                <div className="mb-6">
                  <p className="text-3xl font-bold text-gray-900">
                    ₹{product.price}
                  </p>
                  {product.regularPrice && product.regularPrice > product.price && (
                    <p className="text-lg text-gray-500 line-through">
                      ₹{product.regularPrice}
                    </p>
                  )}
                </div>
              )}

              {product.description && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
                </div>
              )}

              {product.excerpt && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Short Description</h3>
                  <p className="text-gray-600">{product.excerpt}</p>
                </div>
              )}

              {/* Stock Status */}
              {product.stockStatus && (
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    product.stockStatus === 'instock' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stockStatus === 'instock' ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              )}

              {/* Add to Cart Button */}
              <button className="inline-flex items-center justify-center gap-2 bg-[#061a38] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#f5b400] transition-colors">
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        {product.categories && product.categories.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {product.categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Product Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
