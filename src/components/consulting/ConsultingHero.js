import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaCogs, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';

const ConsultingHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-gray-900 border-b border-gray-800 text-white overflow-hidden py-20 px-6 sm:px-12">
            {/* Background Tech Elements */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                        Strategic IT Consulting
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        Systems Integration <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                            Architect
                        </span>
                        <br /> &amp; Operational Expert.
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed font-light">
                        Bridging the gap between physical infrastructure, radio physics, software development, and core business logic.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a href="#audit" className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] text-center">
                            Request IT Audit
                        </a>
                        <a href="#expertise" className="px-8 py-4 bg-transparent border border-gray-600 hover:border-gray-400 rounded-lg text-white font-semibold transition-colors text-center">
                            Explore Expertise
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <div className="grid grid-cols-2 gap-6 relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-2xl rounded-full z-0"></div>

                        <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl z-10 transform translate-y-8 flex flex-col items-center text-center">
                            <FaCogs className="text-5xl text-teal-400 mb-4" />
                            <h3 className="font-bold text-lg">Hands-on Architecture</h3>
                            <p className="text-sm text-gray-400 mt-2">20 years of field experience combined with academic engineering rigor.</p>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl z-10 flex flex-col items-center text-center">
                            <FaShieldAlt className="text-5xl text-blue-400 mb-4" />
                            <h3 className="font-bold text-lg">Zero Trust Security</h3>
                            <p className="text-sm text-gray-400 mt-2">Securing everything from core network switches to perimeter IoT devices.</p>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl z-10 transform translate-y-8 flex flex-col items-center text-center">
                            <FaNetworkWired className="text-5xl text-indigo-400 mb-4" />
                            <h3 className="font-bold text-lg">Logical Isolation</h3>
                            <p className="text-sm text-gray-400 mt-2">Flawless VLAN & VPN segregation for ultimate reliability.</p>
                        </div>

                        <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl z-10 flex flex-col items-center text-center">
                            <FaServer className="text-5xl text-purple-400 mb-4" />
                            <h3 className="font-bold text-lg">OpEx Reduction</h3>
                            <p className="text-sm text-gray-400 mt-2">Eliminating unnecessary field visits through intelligent RMM deployment.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ConsultingHero;
