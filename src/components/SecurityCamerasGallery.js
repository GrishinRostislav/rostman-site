// src/components/SecurityCamerasGallery.js
import React from "react";

// Функция для извлечения имени файла без расширения и преобразования в читаемый формат
function getTextFromFilename(filename) {
  const name = filename.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, ''); // Убираем путь и расширение
  return name.replace(/[-_]/g, ' ').toLowerCase(); // Заменяем дефисы и подчеркивания на пробелы
}

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/SecurityCameras", false, /\.(png|jpe?g|svg)$/i)
);

const SecurityCamerasGallery = () => {
  return (
    <section className="w-full sm:max-w-xl mx-auto h-auto object-contain rounded-lg mt-8" id="security-cameras-gallery">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Security Cameras Installation Gallery
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Real projects from our clients — showcasing state-of-the-art surveillance systems.
      </p>

      <div className="flex flex-col gap-6">
        {images.map((src, index) => {
          const textFromFilename = getTextFromFilename(src); // Генерация текста из имени файла
          const altText = textFromFilename; // Используем тот же текст для alt
          const titleText = `Security camera setup by Rostman - project ${textFromFilename}`;

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

export default SecurityCamerasGallery;
