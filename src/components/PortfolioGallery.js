import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// --- Helper: Get Clean Title from Filename ---
function getTextFromFilename(filename) {
    const lastSlash = Math.max(filename.lastIndexOf('/'), filename.lastIndexOf('\\'));
    const nameOnly = lastSlash !== -1 ? filename.substring(lastSlash + 1) : filename;
    const lastDot = nameOnly.lastIndexOf('.');
    const cleanName = lastDot !== -1 ? nameOnly.substring(0, lastDot) : nameOnly;
    return cleanName.replace(/[-_]/g, ' ').toLowerCase();
}

// --- Import Images ---
function importAll(r) {
    return r.keys().map(r);
}

const networkImages = importAll(require.context("../assets/Network", false, /\.(png|jpe?g|svg)$/i));
const securityImages = importAll(require.context("../assets/SecurityCameras", false, /\.(png|jpe?g|svg)$/i));
const smartHomeImages = importAll(require.context("../assets/SmartHome", false, /\.(png|jpe?g|svg)$/i));
const avImages = importAll(require.context("../assets/AudioVideo", false, /\.(png|jpe?g|svg)$/i));

// --- Combine Data ---
const allImages = [
    ...networkImages.map(src => ({ src, category: "Network" })),
    ...securityImages.map(src => ({ src, category: "Security" })),
    ...smartHomeImages.map(src => ({ src, category: "Smart Home" })),
    ...avImages.map(src => ({ src, category: "Audio/Video" })),
];

const PortfolioGallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Modal Navigation
    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
    };

    return (
        <section className="min-h-screen bg-gray-50 py-12 px-2 sm:px-6 select-none" onContextMenu={(e) => e.preventDefault()}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-display mb-4">
                        Project Gallery
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A curated collection of my work in automation, network infrastructure, and security systems.
                    </p>
                </div>

                {/* Simple Grid (No Layout Animation for Performance) */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
                    {allImages.map((img, index) => (
                        <div
                            key={index}
                            className="group relative cursor-pointer rounded-lg overflow-hidden bg-gray-200 aspect-square"
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            <img
                                src={img.src}
                                alt={getTextFromFilename(img.src)}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Watermark Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                                <span className="text-white text-xs sm:text-sm font-bold rotate-45 select-none whitespace-nowrap">
                                    © Rostislav Grishin
                                </span>
                            </div>

                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImageIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4"
                            onClick={() => setSelectedImageIndex(null)}
                        >
                            <button
                                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
                                onClick={() => setSelectedImageIndex(null)}
                            >
                                <FaTimes size={32} />
                            </button>

                            <button
                                className="absolute left-4 text-white hover:text-gray-300 p-2 hidden sm:block z-50"
                                onClick={handlePrev}
                            >
                                <FaChevronLeft size={40} />
                            </button>

                            <div className="relative w-full max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                                {/* Watermark on Full Image */}
                                <div className="relative">
                                    <img
                                        src={allImages[selectedImageIndex].src}
                                        alt="Gallery Preview"
                                        className="max-w-full max-h-[80vh] object-contain rounded-md"
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                                        <p className="text-white/50 text-2xl sm:text-4xl font-bold rotate-[-12deg] select-none shadow-black drop-shadow-lg whitespace-nowrap">
                                            © Rostislav Grishin
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                                <p className="text-white text-lg font-medium drop-shadow-md">
                                    {allImages[selectedImageIndex].category}
                                </p>
                            </div>

                            <button
                                className="absolute right-4 text-white hover:text-gray-300 p-2 hidden sm:block z-50"
                                onClick={handleNext}
                            >
                                <FaChevronRight size={40} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PortfolioGallery;
