import { motion } from "framer-motion";

function ServiceCard({ title, subtext, time, image, icon, buttonText }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-sm w-full bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-black relative m-4"
    >
      {/* Изображение */}
      <div className="relative">
        <img
          src={image}
          alt="Service"
          className="w-full h-56 object-cover"
        />
        {time && (
          <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold">
            {time}
          </div>
        )}
      </div>

      {/* Контент */}
      <div className="p-5">
        <h2 className="text-lg sm:text-xl font-bold leading-tight">{title}</h2>
        {subtext && (
          <p className="text-sm text-gray-600 mt-1">{subtext}</p>
        )}
      </div>

      {/* Логотип и кнопка */}
      <div className="bg-gray-100 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && (
            <img
              src={icon}
              className="w-10 h-10 rounded-md object-contain"
              alt="icon"
            />
          )}
          <div className="text-sm">
            <p className="font-semibold">Rostman</p>
            <p className="text-gray-500">Мы решаем задачи</p>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
          {buttonText || 'Подробнее'}
        </button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
