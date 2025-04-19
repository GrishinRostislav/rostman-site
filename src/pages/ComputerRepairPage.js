import React from "react";
import { Helmet } from "react-helmet";
import ComputerRepairText from "../components/ComputerRepairText";

const ComputerRepairPage = () => {
  return (
    <div className="pt-10 px-4 pb-12 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Computer Repair in Edmonton | Rostislav G.</title>
        <meta
          name="description"
          content="Need quick and honest computer repair in Edmonton? I provide diagnostics, part replacement, cleaning, and tech help — fast and with personal care."
        />
        <meta
          name="keywords"
          content="Computer Repair, Laptop Repair, Desktop Repair, On-Site Computer Help, Diagnostics, Slow PC Fix, Edmonton Tech Support, Canada IT Help"
        />
        <link rel="canonical" href="https://rostman.net/services/computer-repair" />
      </Helmet>

      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Personal Computer Repair Services
        </h1>
        <p className="text-lg text-gray-700">
          Whether your computer is slow, frozen, or not turning on — I’ll fix it quickly and clearly explain what went wrong. No confusing tech-talk. Just honest support you can trust, right here in Edmonton.
        </p>
      </div>

      <ComputerRepairText />
    </div>
  );
};

export default ComputerRepairPage;
