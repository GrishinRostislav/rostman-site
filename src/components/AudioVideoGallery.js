// src/components/GalleryAudioVideo.js
import React from "react";

// Преобразование имени файла в читаемый заголовок
function getReadableText(filename) {
  const name = filename
    .replace(/^.*[\\/]/, '')     // убрать путь
    .replace(/\.[^/.]+$/, '')    // убрать расширение
    .replace(/\.[a-f0-9]{10,}$/i, '') // убрать хеш если есть (например, .10ee9eacf3bb)
    .replace(/[-_]/g, ' ')       // заменить - и _ на пробел
    .trim()
    .toLowerCase();

  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Импорт всех изображений из папки AudioVideo
function importAll(r) {
  return r.keys().map(key => ({
    src: r(key),
    filename: key
  }));
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
        {images.map((img, index) => {
          const readableText = getReadableText(img.filename);
          const altText = `Audio-video project: ${readableText}`;
          const titleText = `Rostman audio and video setup – ${readableText}`;

          return (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
            >
              <img
                src={img.src}
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
