import React from "react";
import { Helmet } from "react-helmet";
import SmartHomeText from "../components/SmartHomeText";
import SmartHomeGallery from "../components/SmartHomeGallery";

const SmartHomePage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Smart Home Integration by Rostman | Custom Solutions</title>
        <meta
          name="description"
          content="Upgrade your living space with personalized smart home solutions. Control lighting, temperature, security, and entertainment with ease, fully integrated with the latest platforms."
        />
        <meta
          name="keywords"
          content="Smart Home, Home Automation, Control4, Apple HomeKit, Google Home, Alexa, Home Assistant, Smart Devices, Custom Integration"
        />
        <link rel="canonical" href="https://yourdomain.com/services/smart-home" />
      </Helmet>

      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Personal Smart Home Solutions
        </h1>
        <p className="text-lg text-gray-700">
          Transform your home into a smart, intuitive space. Control your lighting, temperature, security, and entertainment systems seamlessly. Fully integrated with the best platforms, including Control4, Apple HomeKit, Google Home, and Alexa.
        </p>
      </div>

      <SmartHomeText />
      <SmartHomeGallery />
    </div>
  );
};

export default SmartHomePage;
