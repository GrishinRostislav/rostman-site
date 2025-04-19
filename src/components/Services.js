import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Smart Home",
      image: "/icons/smart_home.jpg",
      alt: "Smart Home Automation",
      description:
        "I design and install smart home systems — lighting, climate, security and more — all controlled from your phone or voice assistant.",
      link: "/services/smart-home",
    },
    {
      title: "Video Surveillance",
      image: "/icons/cctv.jpg",
      alt: "Camera System Setup",
      description:
        "I install reliable camera systems you can monitor anytime from anywhere. Stay safe, always in control.",
      link: "/services/security-cameras",
    },
    {
      title: "Network Setup",
      image: "/icons/network.jpg",
      alt: "Network Configuration",
      description:
        "Need fast, stable internet? I build strong wired and wireless networks for homes and offices.",
      link: "/services/network",
    },
    {
      title: "Audio & Video Systems",
      image: "/icons/av.jpg",
      alt: "Home Theater & Audio Setup",
      description:
        "I install and tune immersive sound and video systems for movies, music, or meetings.",
      link: "/services/audio-video",
    },
    {
      title: "Computer Repair",
      image: "/icons/computer.jpg",
      alt: "Tech Support & Repair",
      description:
        "Slow PC? I fix, upgrade, and optimize laptops and desktops — fast and reliably.",
      link: "/services/computer-repair",
    },
  ];

  return (
    <main id="services" className="py-10 bg-gray-50">
      <Helmet>
        <title>Services | Smart Tech by Rostislav</title>
        <meta
          name="description"
          content="Smart home, networking, cameras, and tech support — explore what I do and how I can help you."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-2 sm:px-10">
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          What I Do
        </h1>
        <h2 className="text-xl text-center text-gray-600 mb-10">
          Helping you simplify tech — smartly and efficiently
        </h2>

        <div className="flex flex-wrap justify-center items-start p-4 sm:p-10">
          {services.map((service, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 2 }}
              className="flex flex-col justify-between max-w-sm w-full bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-black relative m-4 min-h-[350px]" // Устанавливаем минимальную высоту для карточек
            >
              <div className="flex flex-col h-full">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 flex-grow">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 px-5 py-4 flex justify-center mt-auto">
                <Link
                  to={service.link}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition text-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Services;
