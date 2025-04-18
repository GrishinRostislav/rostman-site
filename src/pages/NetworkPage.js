// src/pages/NetworkPage.js
import React from "react";
import { Helmet } from "react-helmet";
import NetworkText from "../components/NetworkText";
import NetworkGallery from "../components/NetworkGallery"; // Аналогично галерее для других страниц

const NetworkPage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Network Solutions | Rostman</title>
        <meta
          name="description"
          content="Boost your internet with expert network solutions from Rostman. Strong Wi-Fi, professional routing, and seamless performance for home or business."
        />
        <meta name="keywords" content="Network, Wi-Fi, Routing, Switching, Home Network, Enterprise Network, Networking Solutions" />
        <link rel="canonical" href="https://yourdomain.com/services/network" />
      </Helmet>
      <NetworkText />
      <NetworkGallery /> {/* Галерея для Network */}
    </div>
  );
};

export default NetworkPage;
