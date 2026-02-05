import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // Function to handle navigation to sections
  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (isHome) {
      // If on home, just scroll
      // react-scroll logic handles this via ScrollLink usually, 
      // but for manual calling we can just let ScrollLink do its job.
    } else {
      // If not on home, go to home then scroll
      navigate("/");
      // Note: Auto-scroll after navigation needs a bit more logic (e.g. hash), 
      // but for now this resets to top of home. 
      // User can scroll down.
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const NavItem = ({ to, children }) => {
    if (isHome) {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          offset={-80} // header height
          className="cursor-pointer hover:text-black transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          {children}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink
          to="/"
          className="cursor-pointer hover:text-black transition-colors"
          onClick={() => handleNavClick(to)}
        >
          {children}
        </RouterLink>
      );
    }
  };

  return (
    <header className="w-full bg-white bg-opacity-90 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO AREA */}
        <RouterLink to="/" className="flex items-center gap-3 z-50">
          {/* You might want a new logo for the pro application, but keeping existing one for now */}
          <img
            src="/icons/logoBC.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-gray-900 leading-tight">Rostislav Grishin</h1>
            <p className="text-xs text-gray-500 tracking-wider">SYSTEMS INTEGRATOR</p>
          </div>
        </RouterLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <NavItem to="skills">Skills</NavItem>
          <NavItem to="experience">Experience</NavItem>
          <NavItem to="education">Education</NavItem>
          <RouterLink to="/portfolio-gallery" className="cursor-pointer hover:text-black transition-colors">Gallery</RouterLink>
          <NavItem to="contact">Contact</NavItem>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full bg-white flex flex-col justify-center items-center gap-8 shadow-xl"
          >
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-xl font-medium text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-xl font-medium text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="education"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-xl font-medium text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Education
            </ScrollLink>
            <RouterLink
              to="/portfolio-gallery"
              className="text-xl font-medium text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </RouterLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-xl font-medium text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </ScrollLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
