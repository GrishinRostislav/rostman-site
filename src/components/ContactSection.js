import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-premium-dark text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Let’s Discuss Your Next Project
                </h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    I am currently available for new opportunities in systems integration, network architecture, and security engineering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Phone */}
                    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                        <FaPhone className="text-3xl text-premium-accent mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Call Me</h3>
                        <a href="tel:7805990885" className="text-gray-300 hover:text-white transition-colors">780-599-0885</a>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                        <FaEnvelope className="text-3xl text-premium-accent mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Email Me</h3>
                        <a href="mailto:grishin.rost@gmail.com" className="text-gray-300 hover:text-white transition-colors">grishin.rost@gmail.com</a>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                        <FaMapMarkerAlt className="text-3xl text-premium-accent mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Location</h3>
                        <span className="text-gray-300">Edmonton, AB</span>
                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    <a href="https://wa.me/17805990885" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-500 transition-colors text-3xl">
                        <FaWhatsapp />
                    </a>
                    {/* Add LinkedIn if available, placeholder for now or remove if not in resume */}
                    <a href="mailto:grishin.rost@gmail.com" className="text-gray-400 hover:text-white transition-colors text-3xl">
                        <FaEnvelope />
                    </a>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Rostislav Grishin. All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
