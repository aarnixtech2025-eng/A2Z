function PagePlaceholder({ title, breadcrumb }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {breadcrumb && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-brand-400">
          {breadcrumb}
        </p>
      )}
      <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      <div className="mt-8 flex min-h-[40vh] items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-gray-800">
        <p className="text-gray-400">This page is intentionally blank for now.</p>
      </div>
    </section>
  );
}

export default PagePlaceholder;
