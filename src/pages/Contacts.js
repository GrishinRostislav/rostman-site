// src/pages/Contacts.js
import React from "react";
import { Helmet } from "react-helmet";
import { FaPhone, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

function Contacts() {
  return (
    <main id="contacts" className="py-10 bg-gray-50 mt-10">
      <Helmet>
        <title>Contact Us | Rostman Smart Solutions</title>
        <meta
          name="description"
          content="Get in touch with Rostman for smart home automation, networking, video surveillance, and more. Serving clients across Canada without a physical office — mobile, flexible, and available when you need us."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Contact Rostman Smart Solutions
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          We’re here to help with your smart home, networking, and tech needs. 
          While we don't have a physical office, we’re always within reach — mobile, fast, and ready to work on-site.
        </p>

        <div className="bg-white shadow-md rounded-2xl p-6 sm:p-10">
          <ul className="text-gray-800 text-md space-y-4">
            <li className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="flex items-center">
                📞 <strong> Phone: </strong> +1 (870) 599-0885
              </span>
            </li>
            <li className="flex gap-6 text-3xl">
              <a
                href="tel:+18705990885"
                className="text-blue-600 hover:text-blue-800"
                aria-label="Call"
              >
                <FaPhone />
              </a>
              <a
                href="https://wa.me/18705990885"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://t.me/rostman_technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              📧 <strong>Email:</strong> info@rostman.ca
            </li>
            <li>
              🌐 <strong>Service Area:</strong> We serve homes and businesses across Edmonton.
            </li>
            <li>
              🕒 <strong>Working Hours:</strong> Mon–Sat: 9:00 – 18:00
            </li>
          </ul>

        </div>

        <p className="text-sm text-center text-gray-500 mt-6">
          We usually respond within a few hours. Don’t hesitate to reach out!
        </p>
      </div>
    </main>
  );
}

export default Contacts;
