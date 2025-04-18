import React from "react";
import { Helmet } from "react-helmet";
import SmartHomeText from "../components/SmartHomeText";
import SmartHomeGallery from "../components/SmartHomeGallery";

const SmartHomePage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Smart Home Integration Services in Canada | Rostman</title>
        <meta
          name="description"
          content="Upgrade to a smarter lifestyle with Rostman's custom smart home systems. Control lights, temperature, security, and more with your voice or phone. Serving Canada with modern, discreet automation solutions."
        />
        <meta
          name="keywords"
          content="Smart Home, Home Automation, Control4, Apple HomeKit, Google Home, Alexa, Home Assistant, Smart Devices, Voice Control, Canada Smart Home, Residential Automation, Custom Home Integration"
        />
        <link rel="canonical" href="https://yourdomain.com/services/smart-home" />
      </Helmet>

      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Smart Home Integration by Rostman</h1>
        <p className="text-lg text-gray-700">
          Discover the power of custom home automation tailored to your lifestyle. Whether it's lighting, climate,
          security, or media — we help you control it all with ease. Fully compatible with Control4, Apple HomeKit,
          Google Home, Alexa, and more.
        </p>
      </div>

      <SmartHomeText />
      <SmartHomeGallery />
    </div>
  );
};

export default SmartHomePage;
