import React from "react";

const ComputerRepairText = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl text-gray-800 space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-600">🔧 Computer Repair</h2>
      
      <p className="text-base sm:text-lg font-sans">
        Fast. Honest. On-site if needed.
      </p>

      <p className="text-base sm:text-lg font-sans">
        Whether your laptop is running slow, randomly crashing, or doesn’t turn on at all — I’ll figure it out and fix it. No guesswork, no unnecessary upsells.
      </p>

      <p className="text-base sm:text-lg font-sans">
        I offer diagnostics, part replacement, deep cleaning, system optimization, and full setup — all tailored to your needs.
      </p>

      <ul className="list-disc list-inside text-base sm:text-lg font-sans mt-2 space-y-1">
        <li><span className="font-semibold">📍 On-site or in-office visits</span></li>
        <li><span className="font-semibold">⏱ Same-day service whenever possible</span></li>
        <li><span className="font-semibold">🧰 Spare parts always on hand</span></li>
      </ul>

      <p className="text-lg font-bold font-sans text-gray-900 mt-4">
        Your computer — my responsibility.
      </p>

      <p className="text-base sm:text-lg font-sans text-gray-700">
        Got a problem? Just reach out. I’ll take care of it.
      </p>
    </div>
  );
};

export default ComputerRepairText;
