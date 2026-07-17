import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

const BASE_URL = "http://localhost:5000/api";

function ImportedPage({ pageSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = routeSlug || pageSlug;
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(`${BASE_URL}/taxonomies/pages/${slug}`);
        setPage(response.data.data);
      } catch (err) {
        setPage(null);
        setError("This page could not be found.");
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#9a6900]">
            <FaArrowLeft />
            Back to Home
          </Link>
          <p className="text-lg text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10 sm:py-14">
      <article className="mx-auto max-w-4xl rounded-xl bg-white px-5 py-8 shadow-sm sm:px-10 sm:py-12">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#9a6900]">
          <FaArrowLeft />
          Back to Home
        </Link>
        <h1 className="mb-8 text-3xl font-extrabold text-[#061a38] sm:text-4xl">{page.title}</h1>
        <div
          className="prose max-w-none prose-headings:text-[#061a38] prose-a:text-[#9a6900] prose-a:font-semibold prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </article>
    </main>
  );
}

export default ImportedPage;
