import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHome, FaChartLine, FaCode } from 'react-icons/fa';

const expertiseVectors = [
    {
        icon: <FaShieldAlt className="text-4xl text-teal-400 mb-6" />,
        title: "IT & Network Security",
        description: "Designing fault-tolerant, isolated networks (VLAN, VPN, Fortinet, Cisco) to logically segregate and protect vulnerable IoT ecosystems from broader enterprise infrastructure.",
        highlights: ["VLAN/VPN Segregation", "Fortinet & Cisco Meraki", "Fault-Tolerant Architectures"]
    },
    {
        icon: <FaHome className="text-4xl text-blue-400 mb-6" />,
        title: "Smart Systems & IoT",
        description: "Deep, protocol-level mastery of enterprise and ultra-luxury automation environments. Architecting systems that unify disparate sub-systems into single cohesive entities.",
        highlights: ["Control4", "Philips Dynalite", "Access Control & Surveillance"]
    },
    {
        icon: <FaChartLine className="text-4xl text-indigo-400 mb-6" />,
        title: "Operational Efficiency",
        description: "Drastically reducing OpEx via programmatic remote monitoring and management (RMM), effectively eliminating unnecessary truck rolls and minimizing field downtime.",
        highlights: ["Truck-Roll Elimination", "RMM Implementation", "SLA Optimization"]
    },
    {
        icon: <FaCode className="text-4xl text-purple-400 mb-6" />,
        title: "Software & Automation",
        description: "Leveraging Python to automate technical reporting, diagnostic analytics, and routine network health checks, completely removing human error from maintenance algorithms.",
        highlights: ["Python Scripting", "Diagnostic Analytics", "Automated Reporting"]
    }
];

const ConsultingExpertise = () => {
    return (
        <section id="expertise" className="py-24 bg-[#111827] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-teal-500 uppercase mb-3">Core Vectors</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white">Domains of Expertise</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {expertiseVectors.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-2xl p-10 border border-gray-700 hover:border-teal-500/50 transition-colors shadow-lg group relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative z-10">
                                {item.icon}
                                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                                <p className="text-gray-400 mb-8 leading-relaxed font-light">{item.description}</p>

                                <ul className="space-y-3">
                                    {item.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-center text-sm font-medium text-gray-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-3"></span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsultingExpertise;
