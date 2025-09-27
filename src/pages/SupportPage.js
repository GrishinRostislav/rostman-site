// src/pages/SupportPage.js
import React from "react";
import { Helmet } from "react-helmet";

const SupportPage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Support | NeuroLang</title>
        <meta
          name="description"
          content="Support page for NeuroLang — AI-powered language trainer. Find FAQs, troubleshooting, privacy info, and contact support."
        />
        <meta
          name="keywords"
          content="App Support, NeuroLang, FAQ, Troubleshooting, Help, Contact"
        />
        <link rel="canonical" href="https://rostman.net/support" />
      </Helmet>

      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          NeuroLang — Support / Поддержка / תמיכה
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to the support page for <strong>NeuroLang</strong>.<br />  
          Добро пожаловать на страницу поддержки <strong>NeuroLang</strong>.<br />  
          ברוכים הבאים לעמוד התמיכה של <strong>NeuroLang</strong>.<br />  
          <br />
          Here you’ll find instructions, FAQs, and ways to contact us if you
          need help.
        </p>

        {/* About App */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">About NeuroLang</h2>
          <p className="text-gray-700">
            NeuroLang helps you learn new words easily, practice dialogues with AI,
            and read adaptive stories based on your vocabulary.  
            Save your progress, track how many words you’ve learned, and master
            English step by step.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Frequently Asked Questions</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>How do I add a new word?</strong> — Select a word in the
              dialogue with AI and tap “Add”.
            </li>
            <li>
              <strong>Как читать адаптивные истории?</strong> — Истории создаются
              автоматически из слов, которые вы изучаете.
            </li>
            <li>
              <strong>איך לעקוב אחרי ההתקדמות שלי?</strong> — נקודות ומילים
              נלמדות מוצגות במסך הראשי של האפליקציה.
            </li>
            <li>
              <strong>The app doesn’t work as expected. What should I do?</strong> — 
              Restart the app or reinstall it. If the issue persists, contact support.
            </li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Troubleshooting</h2>
          <p className="text-gray-700">
            Most issues can be fixed by restarting the app, reinstalling, or
            updating iOS.  
            If the problem continues, please contact us.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Support</h2>
          <p className="text-gray-700">
            If you didn’t find your answer, feel free to contact us:
          </p>
          <ul className="mt-2 text-gray-700">
            <li>
              Email:{" "}
              <a
                href="mailto:grishin.r@outlook.com"
                className="text-blue-600 hover:underline"
              >
                grishin.r@outlook.com
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://rostman.net"
                className="text-blue-600 hover:underline"
              >
                https://rostman.net
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;
