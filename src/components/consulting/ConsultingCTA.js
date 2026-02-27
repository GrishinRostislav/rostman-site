import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';

const ConsultingCTA = () => {
    return (
        <section id="audit" className="py-24 bg-gradient-to-br from-gray-900 via-[#0B0F19] to-teal-900 border-t border-gray-800 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 blur-3xl transform skew-x-12 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center p-4 bg-teal-500/10 rounded-full border border-teal-500/30 mb-8 mx-auto shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                        <FaRocket className="text-3xl text-teal-400" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Audit Your Technical Department.
                    </h2>

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        Edmonton-based technical departments often hemorrhage capital through inefficient routing, absent documentation, and manual diagnostic truck rolls. Let's fix your architecture before it scales poorly.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                        <a href="mailto:grishin.rost@gmail.com" className="bg-gray-800/80 hover:bg-teal-900/40 border border-gray-700 hover:border-teal-500/50 p-6 rounded-2xl transition-all group flex flex-col items-center gap-3 shadow-lg">
                            <FaEnvelope className="text-2xl text-teal-400 group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-gray-200">grishin.rost@gmail.com</span>
                        </a>

                        <a href="tel:+17805990885" className="bg-gray-800/80 hover:bg-teal-900/40 border border-gray-700 hover:border-teal-500/50 p-6 rounded-2xl transition-all group flex flex-col items-center gap-3 shadow-lg">
                            <FaPhoneAlt className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-gray-200">780-599-0885</span>
                        </a>

                        <div className="bg-gray-800/80 border border-gray-700 p-6 rounded-2xl flex flex-col items-center gap-3 shadow-lg cursor-default">
                            <FaMapMarkerAlt className="text-2xl text-indigo-400" />
                            <span className="font-medium text-gray-200">Edmonton, AB</span>
                        </div>
                    </div>

                    <a href="mailto:grishin.rost@gmail.com?subject=Technical Audit Inquiry" className="inline-block px-10 py-5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-extrabold text-lg transition-all shadow-[0_0_30px_rgba(13,148,136,0.5)] hover:shadow-[0_0_40px_rgba(20,184,166,0.8)] transform hover:-translate-y-1">
                        Schedule a Whiteboard Session
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ConsultingCTA;
