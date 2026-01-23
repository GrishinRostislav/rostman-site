import React from "react";

// Функция для извлечения имени файла без расширения и преобразования в читаемый формат
function getTextFromFilename(filename) {
  // Remove path (forward or backward slash)
  const lastSlash = Math.max(filename.lastIndexOf('/'), filename.lastIndexOf('\\'));
  const nameOnly = lastSlash !== -1 ? filename.substring(lastSlash + 1) : filename;

  // Remove extension
  const lastDot = nameOnly.lastIndexOf('.');
  const cleanName = lastDot !== -1 ? nameOnly.substring(0, lastDot) : nameOnly;

  return cleanName.replace(/[-_]/g, ' ').toLowerCase();
}

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/SmartHome", false, /\.(png|jpe?g|svg)$/i)
);

const SmartHomeGallery = () => {
  return (
    <section className="w-full sm:max-w-xl mx-auto h-auto object-contain rounded-lg mt-8" id="smart-home-gallery">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Smart Home Installation Gallery
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Showcasing real projects from my clients — highlighting custom smart home integrations, seamless automation, and modern living solutions.
      </p>


      <div className="flex flex-col gap-6">
        {images.map((src, index) => {
          const textFromFilename = getTextFromFilename(src); // Генерация текста из имени файла
          const altText = textFromFilename; // Используем тот же текст для alt
          const titleText = `Smart home setup by Rostman - project ${textFromFilename}`;

          return (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
            >
              <img
                src={src}
                alt={altText} // Используем alt, основанный на имени файла
                title={titleText} // Используем title с названием проекта
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SmartHomeGallery;
