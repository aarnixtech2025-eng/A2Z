function Blog() {
  return (
    <div className="w-full bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h1>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Latest news and updates about seals and industrial machinery
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
          <p className="text-lg text-gray-600">
            Coming soon - Stay tuned for our latest articles and insights!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
