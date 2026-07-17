import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

const BASE_URL = "http://localhost:5000/api";

function CategoryProducts() {
  const { slug } = useParams();
  const location = useLocation();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map a2zseals-style URLs to taxonomy slugs
  const urlToSlugMap = {
    'seal-kits': 'seal-kits',
    'hydraulic-cylinder-seals': 'hydraulic-cylinder-seals',
    'oil-seals': 'oil-seals',
    'shaft-seals': 'shaft-seals',
    'hub-cassette-seals': 'hub-cassette-seals',
    'gear-box-seals': 'gear-box-seals',
    'pump-seals-kits': 'pump-seals-kits',
    'o-rings-box-kits': 'o-rings-box-kits',
    'floating-seals': 'floating-seals',
    'engine-oil-seal': 'engine-oil-seal',
    'ptfe-seals': 'ptfe-seals',
    'motor-seals-kits': 'motor-seals-kits',
    'cfw-oil-seals': 'cfw',
    'nok-oil-seals': 'nok',
    'sog-oil-seals': 'sog',
  };

  // Get the actual taxonomy slug from the URL
  const getTaxonomySlug = () => {
    const path = location.pathname.replace('/', '');
    return urlToSlugMap[path] || slug;
  };

  const taxonomySlug = getTaxonomySlug();
  const oemRange = new URLSearchParams(location.search).get("oem");

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        
        // Fetch category details
        const categoryRes = await axios.get(`${BASE_URL}/taxonomies/categories/${taxonomySlug}`);
        setCategory(categoryRes.data.data);

        // Fetch category products
        const productsRes = await axios.get(`${BASE_URL}/taxonomies/categories/${taxonomySlug}/products`);
        const categoryProducts = productsRes.data.data || [];

        if (oemRange) {
          const [start, end] = oemRange.split("-");
          setProducts(
            categoryProducts.filter((product) => {
              const initial = (product.title || product.name || "").trim().charAt(0).toUpperCase();
              return initial >= start && initial <= end;
            })
          );
        } else {
          setProducts(categoryProducts);
        }
      } catch (err) {
        console.error("Error fetching category products:", err);
        console.error("Taxonomy slug:", taxonomySlug);
      } finally {
        setLoading(false);
      }
    };

    if (taxonomySlug) {
      fetchCategoryProducts();
    }
  }, [taxonomySlug, oemRange]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 mb-4"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {category?.name || "Category Products"}
          </h1>
          {category?.description && (
            <p className="mt-2 text-lg text-gray-600">{category.description}</p>
          )}
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id || product.ID}
                to={`/shop/product/${product.slug || product.id || product.ID}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200">
                  <img
                    src={
                      product.thumbnail || product.image
                        ? (product.thumbnail || product.image).startsWith('http')
                          ? (product.thumbnail || product.image)
                          : `${import.meta.env.VITE_API_URL}${product.thumbnail || product.image}`
                        : "/placeholder.png"
                    }
                    alt={product.title || product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {product.title || product.name}
                  </h3>
                  {product.price && (
                    <p className="mt-2 text-xl font-bold text-gray-900">
                      ₹{product.price}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryProducts;
