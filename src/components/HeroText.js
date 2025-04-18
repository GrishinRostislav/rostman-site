
import { motion } from "framer-motion";

function HeroText() {
  return (
    <motion.h1
      className="text-5xl font-bold text-center text-blue-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Добро пожаловать на сайт!
    </motion.h1>
  );
}

export default HeroText;
