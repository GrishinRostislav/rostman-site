import React, { useState, useEffect } from "react";
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

const categories = ["All", "Smart Home", "Network", "Security", "Audio/Video"];

const PortfolioGallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredImages, setFilteredImages] = useState(allImages);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Filter Logic
    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredImages(allImages);
        } else {
            setFilteredImages(allImages.filter(img => img.category === selectedCategory));
        }
    }, [selectedCategory]);

    // Modal Navigation
    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
    };

    return (
        <section className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-4">
                        Project Gallery
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A curated collection of my work in automation, network infrastructure, and security systems.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                    ? "bg-premium-accent text-white shadow-lg"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-style Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {filteredImages.map((img, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={img.src} // Use Src as key
                                className="group relative cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-white pb-[75%] sm:pb-0 sm:h-64"
                                onClick={() => setSelectedImageIndex(index)}
                            >
                                <img
                                    src={img.src}
                                    alt={getTextFromFilename(img.src)}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                                        View Project
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImageIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                            onClick={() => setSelectedImageIndex(null)} // Close on background click
                        >
                            <button
                                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
                                onClick={() => setSelectedImageIndex(null)}
                            >
                                <FaTimes size={32} />
                            </button>

                            <button
                                className="absolute left-4 text-white hover:text-gray-300 p-2 hidden sm:block"
                                onClick={handlePrev}
                            >
                                <FaChevronLeft size={40} />
                            </button>

                            <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                                <motion.img
                                    key={selectedImageIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    src={filteredImages[selectedImageIndex].src}
                                    alt="Gallery Preview"
                                    className="w-full h-full max-h-[85vh] object-contain rounded-md"
                                />
                                <div className="mt-4 text-center">
                                    <p className="text-white text-lg font-medium">
                                        {filteredImages[selectedImageIndex].category} Project
                                    </p>
                                    <p className="text-gray-400 text-sm capitalize">
                                        {getTextFromFilename(filteredImages[selectedImageIndex].src)}
                                    </p>
                                </div>
                            </div>

                            <button
                                className="absolute right-4 text-white hover:text-gray-300 p-2 hidden sm:block"
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
