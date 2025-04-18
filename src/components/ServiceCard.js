import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ServiceCard({ title, subtext, time, image, buttonText, delay, link, onGalleryClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 2, delay }}
      className="flex flex-col justify-between max-w-sm w-full bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-black relative m-4"
    >
      {/* Верхняя часть карточки */}
      <div>
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover"
          />
          {time && (
            <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full uppercase font-sans">
              {time}
            </div>
          )}
        </div>

        {/* Заголовок + описание */}
        <div className="p-5 min-h-[140px] flex flex-col justify-start">
          <h2 className="text-lg sm:text-xl font-bold font-sans leading-tight">{title}</h2>
          {subtext && (
            <p className="text-sm text-gray-600 font-sans mt-1">{subtext}</p>
          )}
        </div>
      </div>

      {/* Кнопки внизу */}
      <div className="mt-auto bg-gray-100 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <Link
          to={link}
          className="w-32 sm:w-auto bg-black text-white px-4 py-2 rounded-lg text-sm font-sans hover:bg-gray-800 transition text-center"
        >
          {buttonText || 'More'}
        </Link>

        {onGalleryClick && (
          <button
            onClick={onGalleryClick}
            className="w-full sm:w-auto border border-black text-black px-4 py-2 rounded-lg text-sm font-sans hover:bg-black hover:text-white transition"
          >
            Gallery
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default ServiceCard;
