import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Импортируем Link для переходов
import { motion } from "framer-motion";

function Services() {
  return (
    <main id="services" className="py-10 bg-gray-50">
      <Helmet>
        <title>Our Services | Rostman Smart Solutions</title>
        <meta
          name="description"
          content="Explore our Smart Home, Surveillance, Networking, AV systems, and Computer Repair services tailored for homes and businesses in Canada."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h1 className="text-3xl font-bold text-center text-black mb-8">
          Our Services
        </h1>
        <p className="text-lg text-center text-gray-700 mb-10">
          We offer comprehensive smart solutions for your home and business — combining convenience, security, and cutting-edge technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[{
            title: "Smart Home",
            image: "/icons/smart_home.jpg",
            alt: "Smart Home Automation Installation",
            description: "Transform your home with advanced automation — control lighting, climate, security, and appliances via smartphone or voice.",
            link: "/services/smart-home" // Ссылка на страницу Smart Home
          },
          {
            title: "Video Surveillance",
            image: "/icons/cctv.jpg",
            alt: "Security Camera Installation and Monitoring",
            description: "Ensure safety with real-time monitoring, remote access, and 24/7 protection for your home and business.",
            link: "/services/video-surveillance" // Ссылка на страницу Video Surveillance
          },
          {
            title: "Network Solutions",
            image: "/icons/network.jpg",
            alt: "Professional Network Setup and Support",
            description: "Optimize connectivity with local network installation, fast setup, and corporate IT support.",
            link: "/services/network" // Ссылка на страницу Network
          },
          {
            title: "Audio & Video Systems",
            image: "/icons/av.jpg",
            alt: "Home Theater and Audio System Integration",
            description: "Premium sound and video integration for immersive home entertainment or professional use.",
            link: "/services/audio-video" // Ссылка на страницу Audio & Video
          },
          {
            title: "Computer Repair",
            image: "/icons/computer.jpg",
            alt: "Fast and Reliable Computer Repair Service",
            description: "Expert diagnostics, repair, and optimization to keep your computer systems running smoothly.",
            link: "/services/computer-repair" // Ссылка на страницу Computer Repair
          }].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 2, delay: index * 0.2 }}
              className="flex flex-col justify-between w-full max-w-[380px] mx-auto bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-black"
            >

              <div>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-56 object-cover"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-lg sm:text-xl font-bold font-sans leading-tight">{service.title}</h2>
                  <p className="text-sm text-gray-600 font-sans mt-1">{service.description}</p>
                </div>
              </div>

              <div className="bg-gray-100 px-5 py-4 flex justify-center sm:justify-between items-center mt-auto">
                <Link
                  to={service.link}
                  className="w-32 sm:w-auto bg-black text-white px-4 py-2 rounded-lg text-sm font-sans hover:bg-gray-800 transition text-center"
                >
                  More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Services;
