import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-brand-800">404</h1>
      <p className="mt-4 text-gray-500">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
