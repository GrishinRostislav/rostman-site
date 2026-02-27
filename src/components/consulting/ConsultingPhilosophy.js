import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLock, FaBookOpen } from 'react-icons/fa';

const philosophyPoints = [
    {
        icon: <FaBrain className="text-4xl text-teal-400 mb-4" />,
        title: "Logic Over Brute Force",
        description: "If a technical issue can be resolved remotely via VPN in 5 minutes, dispatching a technician to the site is a crime against corporate profitability. Efficient design dictates outcome."
    },
    {
        icon: <FaLock className="text-4xl text-blue-400 mb-4" />,
        title: "Security By Default",
        description: "Every IoT device, from a surveillance camera to an electronic lock, is a potential point of entry. System architecture must be built on a hardware-level 'Zero Trust' foundation."
    },
    {
        icon: <FaBookOpen className="text-4xl text-indigo-400 mb-4" />,
        title: "Documentation As An Asset",
        description: "A system that cannot be serviced without its original creator is fundamentally flawed. Standardized, rigorous documentation is the sole key to sustainable scaling and handoffs."
    }
];

const ConsultingPhilosophy = () => {
    return (
        <section className="py-24 bg-[#0B0F19] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-teal-500 uppercase mb-3">Core Principles</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white">Engineering Philosophy</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {philosophyPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-800/30 border border-gray-700 p-10 rounded-2xl hover:bg-gray-800/60 transition-colors group"
                        >
                            <div className="bg-gray-900/50 w-16 h-16 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg border border-gray-700/50">
                                {point.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4">{point.title}</h4>
                            <p className="text-gray-400 leading-relaxed font-light">{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsultingPhilosophy;
