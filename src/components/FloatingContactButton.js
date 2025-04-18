import React, { useState } from "react";
import { FaEnvelope, FaTelegramPlane, FaWhatsapp, FaComments } from "react-icons/fa";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-50 bottom-[2%] right-4 flex flex-col items-end gap-2">
      {open && (
        <div className="flex flex-col gap-3 bg-white p-3 rounded-xl shadow-lg border">
          <a href="mailto:info@rostman.ca" className="text-red-500 hover:text-red-700 text-2xl" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://t.me/rostman_technology" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-2xl" aria-label="Telegram">
            <FaTelegramPlane />
          </a>
          <a href="https://wa.me/17805990885" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 text-2xl" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition"
        aria-label="Contact Options"
      >
        <FaComments className="text-2xl" />
      </button>
    </div>
  );
};

export default FloatingContactButton;
