function Header({ darkMode, toggleDarkMode }) {
  return (
    <header
  className={`py-6 px-4 sm:py-6 sm:px-6 lg:py-6 lg:px-6 shadow-md transition-all duration-300 ${
    darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
  }`}
>
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-xl sm:text-2xl font-bold transition-colors duration-300">
          Progresso
        </h1>
        <button
          onClick={toggleDarkMode}
          className="border px-3 py-1 rounded text-sm transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;