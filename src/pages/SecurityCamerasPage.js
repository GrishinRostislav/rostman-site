// src/pages/SecurityCamerasPage.js
import React from "react";
import { Helmet } from "react-helmet";
import SecurityCamerasText from "../components/SecurityCamerasText";
import SecurityCamerasGallery from "../components/SecurityCamerasGallery";  // Модуль для галереи, аналогично SmartHome

const SecurityCamerasPage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Security Cameras | Rostman</title>
        <meta
          name="description"
          content="Protect your home with advanced security cameras by Rostman. Remote monitoring, night vision, and smart integration for ultimate safety."
        />
        <meta name="keywords" content="Security Cameras, Surveillance Systems, Home Security, Motion Detection, Night Vision, Remote Monitoring" />
        <link rel="canonical" href="https://yourdomain.com/services/security-cameras" />
      </Helmet>
      <SecurityCamerasText />
      <SecurityCamerasGallery />  {/* Галерея с изображениями */}
    </div>
  );
};

export default SecurityCamerasPage;
