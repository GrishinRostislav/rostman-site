import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Импортируем Link из react-router-dom

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white bg-opacity-80 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 relative flex items-center justify-between">
        {/* Логотип слева с переходом на главную */}
        <Link to="/" className="flex items-center gap-2 z-10">
          <img
            src="/icons/logoBC.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
        </Link>

        {/* Название по центру с переходом на главную */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-xl font-sans text-black hover:underline"
        >
          Rostislav Grishin
        </Link>

        {/* Меню для десктопа */}
        <nav className="hidden md:flex gap-6 text-sm font-sans text-gray-700 z-10">
          <Link to="/services" className="hover:text-black">What I Do</Link>
          <Link to="/about" className="hover:text-black">About Me</Link>
          <Link to="/contact" className="hover:text-black">Contact</Link>
        </nav>

        {/* Иконка меню для мобилки */}
        <div className="md:hidden z-10">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Мобильное меню с анимацией */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      className="md:hidden bg-white px-4 py-2 space-y-2 shadow-lg"
      initial={{ opacity: 0, maxHeight: 0 }}
      animate={{ opacity: 1, maxHeight: 500 }}
      exit={{ opacity: 0, maxHeight: 0 }}
      transition={{ duration: 0.3 }}
      style={{ overflow: "hidden" }}
    >
      <Link
        to="/services"
        onClick={() => setMenuOpen(false)}
        className="block text-sm font-sans text-gray-700 hover:text-black"
      >
        What I Do
      </Link>
      <Link
        to="/about"
        onClick={() => setMenuOpen(false)}
        className="block text-sm font-sans text-gray-700 hover:text-black"
      >
        About Me
      </Link>
      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className="block text-sm font-sans text-gray-700 hover:text-black"
      >
        Contact
      </Link>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}

export default Header;
