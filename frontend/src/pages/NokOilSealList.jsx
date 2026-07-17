import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BASE_URL = "http://localhost:5000/api";

function NokOilSealList({ listType = "nok-oil-seals", title = "NOK Oil Seal List", basePath = "/nok-oil-seal-list" }) {
  const { page: pageParam } = useParams();
  const currentPage = Math.max(Number(pageParam) || 1, 1);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/taxonomies/lists/${listType}`, {
          params: { page: currentPage, limit: 10 },
        });
        setPosts(response.data.posts || []);
        setTotal(response.data.total || 0);
        setTotalPages(response.data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching imported list:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, listType]);

  const getPagePath = (page) =>
    page === 1 ? basePath : `${basePath}/page/${page}`;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#9a6900]">
          <FaArrowLeft />
          Back to Home
        </Link>
        <div className="mb-8 rounded-xl bg-white px-6 py-7 shadow-sm sm:px-8">
          <h1 className="text-3xl font-extrabold text-[#061a38] sm:text-4xl">{title}</h1>
          <p className="mt-2 text-slate-600">Browse {total.toLocaleString()} imported entries.</p>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="p-5">
                  <h2 className="text-lg font-extrabold text-[#061a38]">{post.title}</h2>
                  {post.content && (
                    <div
                      className="prose prose-sm mt-3 max-w-none prose-img:rounded-lg prose-img:shadow-sm"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white p-8 text-center text-slate-600 shadow-sm">No entries were found.</div>
        )}

        <nav className="mt-10 flex items-center justify-center gap-3" aria-label={`${title} pagination`}>
          {currentPage > 1 && (
            <Link
              to={getPagePath(currentPage - 1)}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:border-[#f5b400] hover:text-[#9a6900]"
            >
              <FaChevronLeft className="text-xs" />
              Previous
            </Link>
          )}
          <span className="text-sm font-semibold text-slate-600">Page {currentPage} of {totalPages}</span>
          {currentPage < totalPages && (
            <Link
              to={getPagePath(currentPage + 1)}
              className="inline-flex items-center gap-2 rounded-lg bg-[#061a38] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#9a6900]"
            >
              Next
              <FaChevronRight className="text-xs" />
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}

export default NokOilSealList;
