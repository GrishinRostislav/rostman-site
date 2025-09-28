import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from "react-router-dom";

import CenterMessage from "./components/CenterMessage";
import ServiceButton from "./components/ServiceButton";
import ServiceCard from './components/ServiceCard';
import Modal from "./components/Modal"; 
import Header from "./components/Header";
import ComputerRepairText from "./components/ComputerRepairText"; 
import SmartHomeText from "./components/SmartHomeText";
import SecurityCamerasText from "./components/SecurityCamerasText";
import NetworkText from "./components/NetworkText";
import AudioVideo from "./components/AudioVideoText";
import GalleryNetwork from "./components/GalleryNetwork";
import GallerySecurity from "./components/GallerySecurity";
import GalleryAV from "./components/GalleryAV";
import GallerySmartHome from "./components/GallerySmartHome";
//import DiscountForm from "./components/DiscountForm";
//import DiscountButton from "./components/DiscountButton";
import AboutUs from "./components/AboutUs"; // Импортируем компонент "О нас"
import Services from "./components/Services";
import SmartHomePage from "./pages/SmartHomePage";
import SecurityCamerasPage from "./pages/SecurityCamerasPage";
import NetworkPage from "./pages/NetworkPage";
import AudioVideoPage from "./pages/AudioVideoPage";
import SupportPage from "./pages/SupportPage";
import Privacy from "./pages/PrivacyPage";
import ComputerRepairPage from "./pages/ComputerRepairPage";
import ContactPage from "./pages/Contacts";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingContactButton from "./components/FloatingContactButton";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); // для передачи инфы в модалку
  const [isDiscountButtonClicked, setIsDiscountButtonClicked] = useState(false); // Состояние для отслеживания клика по кнопке

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  // const handleDiscountButtonClick = () => {
  //   setIsDiscountButtonClicked(true); // Скрываем кнопку сразу
  //   openModal({
  //     title: "Claim a 10% Discount",
  //     text: <DiscountForm onClose={() => setIsModalOpen(false)} />
  //   });
  // };


  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center px-1 py-12 gap-1 mt-10">
        <Header />
       
        <Routes>
          {/* Маршруты */}
        <Route path="/about" element={<AboutUs />} /> {/* Обновленный маршрут */}
        <Route path="/services" element={<Services />} /> {/* Обновленный маршрут */}
        <Route path="/contact" element={<ContactPage />} /> {/* Обновленный маршрут */}
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<Privacy />} />


        <Route path="/services/smart-home" element={<SmartHomePage />} />
        <Route path="/services/security-cameras" element={<SecurityCamerasPage />} />
        <Route path="/services/network" element={<NetworkPage />} />
        <Route path="/services/audio-video" element={<AudioVideoPage />} />
        <Route path="/services/computer-repair" element={<ComputerRepairPage />} />

          <Route path="/" element={
            <>
              <div className="w-full flex items-center justify-center px-4 sm:px-0">
                <CenterMessage />
              </div>
              <div className="flex flex-wrap justify-center items-start p-4 sm:p-10">
                <ServiceCard
                  title="Smart Home"
                  subtext="Custom smart home systems tailored to your needs — lighting, climate, security, and more. Installed and configured by a professional you can trust."
                  image="/icons/smart_home.jpg"
                  delay={0.4}
                  link="/services/smart-home"
                />

                <ServiceCard
                  title="Security Cameras"
                  subtext="I help you protect what matters with high-quality video surveillance systems. Installation, configuration, and remote access — all handled for you."
                  image="/icons/cctv.jpg"
                  delay={0.6}
                  link="/services/security-cameras"
                />
                <ServiceCard
                  title="Network"
                  subtext="Fast and stable internet at home or in the office. I build, optimize, and fix networks so you stay connected."
                  image="/icons/network.jpg"
                  delay={0.8}
                  link="/services/network"
                />
                <ServiceCard
                  title="Audio & Video"
                  subtext="Immersive sound and visuals for your home or studio. From cabling to final setup, I take care of everything."
                  image="/icons/av.jpg"
                  delay={1.0}
                  link="/services/audio-video"
                />
                <ServiceCard
                  title="Computer Repair"
                  subtext="Slow laptop? Not turning on? I troubleshoot, repair, and improve performance — no fuss, just results."
                  image="/icons/computer.jpg"
                  delay={0.2}
                  link="/services/computer-repair"
                />
              </div>
              </>
          } />
        </Routes>

        {isModalOpen && (
          <Modal data={modalData} onClose={() => setIsModalOpen(false)} />
        )}

        {/* Отображаем кнопку скидки, только если она не была нажата */}
        {/*!isDiscountButtonClicked && (
          <DiscountButton onClick={handleDiscountButtonClick} />
        )*/}
      </div>
      <FloatingContactButton />
      <Footer />
    </Router>
  );
}

export default App;
