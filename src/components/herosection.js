<div className="relative w-full h-screen flex items-center justify-center">
  {/* Центр — заголовок */}
  <motion.h1
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="text-2xl sm:text-4xl font-bold text-center z-20"
  >
    Мы решим ваши проблемы
  </motion.h1>

  {/* Кнопки вокруг текста */}
  <ServiceButton text="Security Cameras" delay={0.4} icon="/icons/cctv.jpg" style="top-10 left-1/3" />
  <ServiceButton text="Network" delay={0.6} icon="/icons/network.jpg" style="top-1/4 right-20" />
  <ServiceButton text="Audio & Video" delay={0.8} icon="/icons/av.jpg" style="bottom-1/4 right-24" />
  <ServiceButton text="Smart Home" delay={1} icon="/icons/smart.jpg" style="bottom-10 left-1/3" />
</div>
