import React from "react";
import { Helmet } from "react-helmet";
import ComputerRepairText from "../components/ComputerRepairText";

const ComputerRepairPage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Computer Repair Services in Canada | Rostman</title>
        <meta
          name="description"
          content="Fast and reliable computer repair services from Rostman. We provide diagnostics, part replacement, cleaning, and on-site service to get your devices up and running quickly."
        />
        <meta
          name="keywords"
          content="Computer Repair, Laptop Repair, Desktop Repair, On-Site Service, Diagnostics, Part Replacement, Computer Setup, Canada Tech Support"
        />
        <link rel="canonical" href="https://yourdomain.com/services/computer-repair" />
      </Helmet>

      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Computer Repair Services by Rostman</h1>
        <p className="text-lg text-gray-700">
          Need fast, reliable computer repair? Whether your device is slow or won't turn on, we offer comprehensive solutions with on-site visits and same-day fixes.
        </p>
      </div>

      <ComputerRepairText />
    </div>
  );
};

export default ComputerRepairPage;
