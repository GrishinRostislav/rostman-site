import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const trajectories = [
    {
        country: "Kazakhstan",
        phase: "The Foundation",
        description: "Sysadmin of large-scale corporate networks numbering over 200 nodes. Crucially, forged a rigorous academic foundation via a Master's degree in Radio Engineering and Telecommunications."
    },
    {
        country: "Israel",
        phase: "The Integration",
        description: "Architected high-budget automation deployments in Tel Aviv. Handled the programming logic of cutting-edge 'smart buildings' and navigated complex, multi-layered network stacks."
    },
    {
        country: "Canada",
        phase: "The Optimization",
        description: "Adapting an international portfolio of best practices to meet and exceed North American compliance, security, and operational efficiency standards."
    }
];

const ConsultingExperience = () => {
    return (
        <section className="py-24 bg-[#0B0F19] text-white border-t border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

                {/* Left side text */}
                <div className="lg:w-1/3">
                    <FaGlobe className="text-5xl text-teal-500 mb-6" />
                    <h2 className="text-sm font-bold tracking-widest text-teal-500 uppercase mb-3">Trajectory</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Global Experience.</h3>
                    <p className="text-gray-400 leading-relaxed font-light mb-8">
                        Technical debt is a universal language. From managing hundreds of nodes in Central Asia to executing elite smart-building logic in the Middle East, the operational methodologies have been forged, tested, and polished worldwide.
                    </p>
                </div>

                {/* Right side timeline */}
                <div className="lg:w-2/3 relative">
                    {/* Connecting line */}
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal-500 via-blue-500 to-transparent hidden sm:block"></div>

                    <div className="space-y-12">
                        {trajectories.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative sm:pl-16"
                            >
                                {/* Circle marker */}
                                <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-[#0B0F19] shadow-[0_0_10px_rgba(20,184,166,0.8)] hidden sm:block z-10"></div>

                                <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl hover:bg-gray-800 hover:border-gray-600 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                        <h4 className="text-2xl font-bold text-white flex items-center gap-2">
                                            <FaMapMarkerAlt className="text-teal-500 text-lg" />
                                            {item.country}
                                        </h4>
                                        <span className="text-xs font-mono tracking-widest text-blue-400 uppercase mt-2 sm:mt-0 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                                            {item.phase}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ConsultingExperience;
