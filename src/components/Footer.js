// components/Footer.js
import React from "react";
import { FaPhone, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Rostman Smart Solutions</h2>
          <p className="text-sm text-gray-400">
            Providing smart home, network, AV, and surveillance solutions in Edmonton and area.
          </p>
          <p className="mt-4 text-gray-500 text-sm">
            © {new Date().getFullYear()} Rostman. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contacts & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="tel:+17805990885" className="hover:text-white">📞 +1 (780) 599-0885</a>
            </li>
            <li>
              <a href="mailto:grishin.r@outlook.com" className="hover:text-white">📧 grishin.r@outlook.com</a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="tel:+17805990885" className="text-blue-400 hover:text-white"><FaPhone /></a>
            <a href="https://wa.me/17805990885" target="_blank" rel="noreferrer" className="text-green-400 hover:text-white"><FaWhatsapp /></a>
            <a href="https://t.me/rostman_technology" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-white"><FaTelegramPlane /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
