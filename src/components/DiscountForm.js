import React, { useState } from "react";
import { sendToTelegram } from "../components/sendToTelegram";

const DiscountForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const telegramMessage = `
      📩 New inquiry received:
      🔹 Name: ${name}
      🔹 Phone: ${phone}
      🔹 Email: ${email}
      🔹 Message: ${message}
    `;

    await sendToTelegram(telegramMessage);

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);

    alert("Thank you! Your message has been sent. I’ll get back to you shortly.");
    if (onClose) onClose();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-xl">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900">Let's work together</h2>
      <p className="text-sm text-center text-gray-600 mb-6">
        Leave your contacts and I’ll get in touch with you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">What can I help you with?</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default DiscountForm;
