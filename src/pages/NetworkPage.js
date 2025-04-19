import React from "react";
import { Helmet } from "react-helmet";
import NetworkText from "../components/NetworkText";
import NetworkGallery from "../components/NetworkGallery"; // Галерея для Network

const NetworkPage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Reliable Network Solutions | Rostman</title>
        <meta
          name="description"
          content="Boost your connectivity with Rostman's expert network solutions. From home Wi-Fi optimization to enterprise-level routing, experience seamless performance anywhere."
        />
        <meta
          name="keywords"
          content="Network Setup, Wi-Fi Optimization, Routing, Enterprise Networking, Home Network, IT Support, Professional Network Solutions, Canada"
        />
        <link rel="canonical" href="https://yourdomain.com/services/network" />
      </Helmet>

      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Professional Network Solutions for Home and Business
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Whether you're a homeowner struggling with weak Wi-Fi or a business in need of a scalable network setup, Rostman offers reliable network solutions. Get fast, secure, and seamless connectivity for all your devices.
        </p>
      </div>

      <NetworkText />
      <NetworkGallery /> {/* Галерея для Network */}
    </div>
  );
};

export default NetworkPage;
