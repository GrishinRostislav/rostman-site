// src/pages/SecurityCamerasPage.js
import React from "react";
import { Helmet } from "react-helmet";
import SecurityCamerasText from "../components/SecurityCamerasText";
import SecurityCamerasGallery from "../components/SecurityCamerasGallery";  // Модуль для галереи, аналогично SmartHome

const SecurityCamerasPage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Security Cameras for Home & Business | Rostman</title>
        <meta
          name="description"
          content="Protect your home or business with advanced security cameras. Offering remote monitoring, night vision, and smart integration for your safety."
        />
        <meta
          name="keywords"
          content="Security Cameras, Surveillance Systems, Home Security, Motion Detection, Night Vision, Remote Monitoring, CCTV"
        />
        <link rel="canonical" href="https://rostman.net/services/security-cameras" />
      </Helmet>

      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Security Cameras & Surveillance Solutions</h1>
        <p className="text-lg text-gray-700">
          I offer professional security camera installation to keep your home or business safe. With remote monitoring, motion detection, and night vision, I ensure your property is always protected, no matter where you are.
        </p>
      </div>

      <SecurityCamerasText />
      <SecurityCamerasGallery /> {/* Галерея с изображениями */}
    </div>
  );
};

export default SecurityCamerasPage;
