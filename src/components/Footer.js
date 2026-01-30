import React from "react";
import { FaPhone, FaWhatsapp, FaTelegramPlane, FaImages } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Personal Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Rostislav G. | Smart Tech</h2>
          <p className="text-sm text-gray-400">
            Helping people build smarter homes and better tech environments — from automation to support.
          </p>
          <p className="mt-4 text-gray-500 text-sm">
            © {new Date().getFullYear()} Rostislav G. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">About Me</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="tel:+17805990885" className="hover:text-white">📞 +1 (780) 599-0885</a>
            </li>
            <li>
              <a href="mailto:grishin.rost@gmail.com" className="hover:text-white">📧 grishin.rost@gmail.com</a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-2xl">
            <a
              href="tel:+17805990885"
              aria-label="Call me"
              className="hover:text-white transition-colors"
            >
              <FaPhone />
            </a>
            <a
              href="https://wa.me/17805990885"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hover:text-white transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me/rostman_technology"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="hover:text-white transition-colors"
            >
              <FaTelegramPlane />
            </a>
            <Link
              to="/portfolio-gallery"
              aria-label="Portfolio Gallery"
              className="hover:text-white transition-colors"
            >
              <FaImages />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
