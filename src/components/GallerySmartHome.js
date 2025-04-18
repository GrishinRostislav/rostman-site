import React from "react";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/SmartHome", false, /\.(png|jpe?g|svg)$/i)
);

const SmartHomeGallery = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8" id="smart-home-gallery">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Smart Home Installation Gallery
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Real projects from our clients — showcasing clean design, smart wiring, and advanced automation setups.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
          >
            <img
              src={src}
              alt={`Smart home project ${index + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmartHomeGallery;
