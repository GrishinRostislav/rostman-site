// src/pages/PrivacyPage.js
import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Privacy Policy | NeuroLang</title>
        <meta
          name="description"
          content="Privacy Policy for NeuroLang — English learning app using AI. Learn how we handle user data and ensure privacy."
        />
        <meta
          name="keywords"
          content="Privacy Policy, NeuroLang, English Learning App, Data Collection, User Privacy"
        />
        <link rel="canonical" href="https://rostman.net/privacy" />
      </Helmet>

      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          NeuroLang — Privacy Policy / Политика конфиденциальности / מדיניות פרטיות
        </h1>

        {/* English */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">English</h2>
          <p className="text-gray-700 mb-2">
            NeuroLang respects your privacy. This app collects text that you input to generate AI responses via OpenAI’s API. The collected data is <strong>only used for app functionality</strong> and is <strong>not used for advertising, marketing, or tracking</strong>.
          </p>
          <p className="text-gray-700 mb-2">
            The app does <strong>not collect personal identifiers</strong> such as your name, email, phone number, or location. Data is not linked to your identity.
          </p>
          <p className="text-gray-700 mb-2">
            Your usage data may be stored locally on your device (via SwiftData) or in iCloud to track progress and provide app features.
          </p>
          <p className="text-gray-700">
            For any questions or concerns, please contact:<br/>
            <strong>Email:</strong> <a href="mailto:grishin.r@outlook.com" className="text-blue-600 hover:underline">grishin.r@outlook.com</a><br/>
            <strong>Website:</strong> <a href="https://rostman.net" className="text-blue-600 hover:underline">https://rostman.net</a>
          </p>
        </section>

        {/* Russian */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Русский</h2>
          <p className="text-gray-700 mb-2">
            NeuroLang уважает вашу приватность. Приложение собирает <strong>только текст</strong>, который вы вводите для генерации ответов через API ChatGPT (OpenAI). Собранные данные используются <strong>исключительно для работы приложения</strong> и <strong>не применяются для рекламы, маркетинга или трекинга</strong>.
          </p>
          <p className="text-gray-700 mb-2">
            Приложение <strong>не собирает персональные данные</strong>: имя, e-mail, номер телефона или местоположение. Данные не привязаны к вашей личности.
          </p>
          <p className="text-gray-700 mb-2">
            Ваш прогресс может сохраняться <strong>локально на устройстве</strong> (SwiftData) или в iCloud для работы функций приложения.
          </p>
          <p className="text-gray-700">
            Если у вас есть вопросы, пишите:<br/>
            <strong>Email:</strong> <a href="mailto:grishin.r@outlook.com" className="text-blue-600 hover:underline">grishin.r@outlook.com</a><br/>
            <strong>Сайт:</strong> <a href="https://rostman.net" className="text-blue-600 hover:underline">https://rostman.net</a>
          </p>
        </section>

        {/* Hebrew */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">עברית</h2>
          <p className="text-gray-700 mb-2">
            NeuroLang מכבדת את פרטיותך. האפליקציה אוספת <strong>רק את הטקסט</strong> שאתה מזין כדי ליצור תגובות בינה מלאכותית דרך OpenAI API. הנתונים שנאספים משמשים <strong>רק לפונקציונליות האפליקציה</strong> ואינם משמשים <strong>לפרסום, שיווק או מעקב</strong>.
          </p>
          <p className="text-gray-700 mb-2">
            האפליקציה <strong>אינה אוספת מידע אישי</strong> כגון שם, דוא״ל, מספר טלפון או מיקום. הנתונים אינם מקושרים לזהות המשתמש.
          </p>
          <p className="text-gray-700 mb-2">
            ההתקדמות שלך עשויה להישמר <strong>מקומית במכשיר</strong> (SwiftData) או ב-iCloud כדי לאפשר את תכונות האפליקציה.
          </p>
          <p className="text-gray-700">
            לשאלות או בירורים, פנה אלינו:<br/>
            <strong>דוא״ל:</strong> <a href="mailto:grishin.r@outlook.com" className="text-blue-600 hover:underline">grishin.r@outlook.com</a><br/>
            <strong>אתר:</strong> <a href="https://rostman.net" className="text-blue-600 hover:underline">https://rostman.net</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
