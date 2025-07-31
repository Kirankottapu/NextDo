const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`mt-10 p-4 text-center border-t transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-gray-300 border-gray-700"
          : "bg-white text-gray-600 border-gray-200"
      }`}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">TaskMaster Pro</span> · Built by <span className="font-medium">Kiran kumar kottapu</span>
      </p>
    </footer>
  );
};

export default Footer;
