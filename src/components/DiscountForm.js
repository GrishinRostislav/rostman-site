// src/components/DiscountForm.js
import React, { useState } from "react";
import { sendToTelegram } from "../components/sendToTelegram"; // импортируем функцию отправки

const DiscountForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Формируем сообщение
    const telegramMessage = `
      Новый запрос на скидку 10%:
      Имя: ${name}
      Телефон: ${phone}
      Email: ${email}
      Сообщение: ${message}
    `;

    // Отправляем в Telegram
    await sendToTelegram(telegramMessage);

    // После отправки можно сбросить форму
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);

    alert("Thank you for your inquiry! We have received your request and will get in touch with you as soon as possible.");
    if (onClose) {
      onClose(); // Закрываем модалку
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold">Phone number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          {isSubmitting ? "Sending..." : "Get Discount"}
        </button>
      </form>
    </div>
  );
};

export default DiscountForm;
