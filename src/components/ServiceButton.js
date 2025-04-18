import { motion } from "framer-motion";

function ServiceButton({ text, subtext, delay, icon }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 2, delay }}
      className="w-full sm:w-[300px] bg-white text-black px-1 py-1 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.45)] hover:bg-blue-700 text-sm sm:text-base transition-shadow duration-300 flex items-center gap-3"
    >
      {icon && (
        <img
          src={icon}
          alt=""
          className="w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] rounded-md object-cover"
        />
      )}
      <div className="flex flex-col items-start">
        <span className="font-sans text-[17px]">{text}</span>
        {subtext && (
          <span className="text-[14px] font-sans text-gray-500">{subtext}</span>
        )}
      </div>
    </motion.button>
  );
}

export default ServiceButton;





/// import { motion } from "framer-motion";

// function ServiceButton({ text, delay, style }) {
//   return (
//     <motion.button
//       initial={{ opacity: 0, y: 20, scale: 0.95 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.6, delay }}
//       className={`absolute ${style} bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-700 text-sm sm:text-base`}
//     >
//       {text}
//     </motion.button>
//   );
// }

// export default ServiceButton;
