// src/components/GalleryAudioVideo.js
import React from "react";

// Функция для извлечения имени файла без расширения и преобразования в читаемый формат
function getTextFromFilename(filename) {
  const name = filename.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, '');
  return name.replace(/[-_]/g, ' ').toLowerCase();
}

// Автоматический импорт всех изображений из папки AudioVideo
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/AudioVideo", false, /\.(png|jpe?g|svg)$/i)
);

const AudioVideoGallery = () => {
  return (
    <section className="w-full sm:max-w-xl mx-auto h-auto object-contain rounded-lg mt-8" id="audio-video-gallery">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Audio and Video Installation Gallery
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Showcasing high-quality audio and video solutions — from home theaters to multi-room setups.
      </p>

      <div className="flex flex-col gap-6">
        {images.map((src, index) => {
          const textFromFilename = getTextFromFilename(src);
          const altText = `audio-video project ${textFromFilename}`;
          const titleText = `Rostman audio and video setup - ${textFromFilename}`;

          return (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
            >
              <img
                src={src}
                alt={altText}
                title={titleText}
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

export default AudioVideoGallery;
