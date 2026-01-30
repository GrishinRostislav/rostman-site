import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
// import Footer from "./components/Footer"; // Replaced by ConditionalFooter
import ScrollToTop from "./components/ScrollToTop";
import FloatingContactButton from "./components/FloatingContactButton";
import ConditionalFooter from "./components/ConditionalFooter";

// New Portfolio Components
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";

// Keep old pages accessible via routes if needed
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactPage from "./pages/Contacts";
import SmartHomePage from "./pages/SmartHomePage";
import SecurityCamerasPage from "./pages/SecurityCamerasPage";
import NetworkPage from "./pages/NetworkPage";
import AudioVideoPage from "./pages/AudioVideoPage";
import SupportPage from "./pages/SupportPage";
import Privacy from "./pages/PrivacyPage";
import ComputerRepairPage from "./pages/ComputerRepairPage";
import PortfolioGallery from "./components/PortfolioGallery";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white flex flex-col font-sans">
        <Header />

        <Routes>
          {/* Main Portfolio Page */}
          <Route path="/" element={
            <>
              <HeroSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <EducationSection />
              <ContactSection />
            </>
          } />

          {/* Legacy/Detailed Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy" element={<Privacy />} />

          <Route path="/services/smart-home" element={<SmartHomePage />} />
          <Route path="/services/security-cameras" element={<SecurityCamerasPage />} />
          <Route path="/services/network" element={<NetworkPage />} />
          <Route path="/services/audio-video" element={<AudioVideoPage />} />
          <Route path="/services/computer-repair" element={<ComputerRepairPage />} />
          <Route path="/portfolio-gallery" element={<PortfolioGallery />} />
        </Routes>

        <FloatingContactButton />
        <ConditionalFooter />
      </div>
    </Router>
  );
}

export default App;
