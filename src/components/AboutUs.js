// src/components/AboutUs.js
import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Rostman – Smart Home & Tech Integration</title>
        <meta
          name="description"
          content="Learn more about Rostman — a boutique smart home and tech integration company with over 13 years of experience in Kazakhstan, Israel, and Canada."
        />
        <meta
          name="keywords"
          content="About Rostman, smart home, tech integration, IT support, video surveillance, computer repair, network setup"
        />
        <meta name="author" content="Rostman" />
        <meta property="og:title" content="About Rostman – Smart Home & Tech Integration" />
        <meta property="og:description" content="With global experience and a personal approach, Rostman delivers smart solutions for homes and businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:image" content="https://yourdomain.com/icons/logoBC.png" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 font-sans">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">About Rostman</h1>

        <p className="mb-6 text-lg leading-relaxed">
          <strong>Rostman</strong> is a boutique tech integration company driven by a single mission — to make smart technology simple, elegant, and truly personal.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          With over <strong>13 years of international experience</strong> — including <strong>5 years in Kazakhstan</strong>, <strong>8 years in Israel</strong>, and now <strong>6 months in Canada</strong> — we bring a global perspective and consistent quality to every project.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">What We Do</h3>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Smart Home Systems</li>
          <li>Security Cameras & Surveillance</li>
          <li>Network Setup & Optimization</li>
          <li>Office IT Support</li>
          <li>Audio/Video Installation</li>
          <li>Computer Repair & Troubleshooting</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">What Sets Us Apart</h3>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li><strong>Honesty</strong>: Clear communication and no upselling</li>
          <li><strong>Reliability</strong>: Always on time, always on point</li>
          <li><strong>Discretion</strong>: Respect for your space and data</li>
          <li><strong>Design & Function</strong>: Clean installs that look as good as they work</li>
        </ul>

        <p className="mt-6 text-lg leading-relaxed">
          Whether you need better Wi-Fi, sharper cameras, a smarter home, or just fast help with a slow computer — <strong>Rostman</strong> is here to make it happen, cleanly and professionally.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
