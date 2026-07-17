export default function AdminFooter() {
  return (
    <footer className="bg-[#0b2545] dark:bg-gray-900 border-t border-[#D7B25B]/20 dark:border-gray-700 py-6 px-8 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <p className="text-sm text-gray-300 dark:text-gray-300">
          © 2026{" "}
          <span className="font-bold text-[#D7B25B] dark:text-yellow-400">
            Tanush Interiors
          </span>
          . All Rights Reserved.
        </p>

        {/* Right Side */}
        <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-400">
          <span className="w-2 h-2 rounded-full bg-[#D7B25B] dark:bg-yellow-400 shadow-[0_0_8px_rgba(215,178,91,0.6)] dark:shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
          <span className="tracking-wider uppercase">System Version 1.0.0</span>
        </div>
      </div>
    </footer>
  );
}