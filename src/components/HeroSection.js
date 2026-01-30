import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Using react-scroll for smooth scrolling within the portfolio

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-premium-dark text-white px-6 py-20 overflow-hidden">
      {/* Background Decor (Optional specific visual cues) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-premium-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-4xl"
      >
        <h2 className="text-premium-accent font-bold tracking-wider uppercase mb-4 text-sm sm:text-base">
          Automation Systems Technologist | Network & Security Integrator
        </h2>
        <h1 className="text-5xl sm:text-7xl font-display font-bold mb-6 leading-tight tracking-tight">
          Rostislav Grishin
        </h1>
        <p className="text-lg sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between hardware installation and software configuration.
          Expert in Building Automation, Enterprise Networks, and Integrated Security Ecosystems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Note: ID references will be added to other sections */}
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-premium-accent hover:bg-sky-400 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            View Experience
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer border-2 border-premium-accent text-premium-accent hover:bg-premium-accent hover:text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Contact Me
          </Link>
          <a
            href="/Rostislav_Grishin_AV_Automation_Specialist.pdf"
            download
            className="cursor-pointer flex items-center gap-2 text-gray-400 hover:text-white font-medium py-3 px-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce cursor-pointer text-gray-400"
      >
        <Link to="skills" smooth={true} duration={500}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
