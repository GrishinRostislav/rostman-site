import { motion } from "framer-motion";

function CenterMessage() {
  return (
    <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-darkText text-center text-2xl sm:text-4xl font-sans max-w-xl mx-auto px-4"
      >
        Your time is priceless. <br /> Less talk — more action.
    </motion.h2>
  );
}

export default CenterMessage;



