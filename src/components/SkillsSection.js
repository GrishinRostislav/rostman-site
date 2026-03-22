import React from "react";
import { FaNetworkWired, FaServer, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Networking & Security",
        icon: <FaNetworkWired className="text-4xl text-blue-500 mb-4" />,
        skills: ["Cisco Meraki & Aruba", "Fortinet (FortiGate)", "VLAN Segmentation", "L2/L3 Troubleshooting", "VPN (WireGuard/OpenVPN)"],
    },
    {
        category: "Infrastructure & Hardware",
        icon: <FaServer className="text-4xl text-green-500 mb-4" />,
        skills: ["42U Rack Design", "Low-Voltage Deployment", "Access Control & Surveillance", "Power Distribution", "Docker"],
    },
    {
        category: "OT & Integration",
        icon: <FaShieldAlt className="text-4xl text-red-500 mb-4" />,
        skills: ["Modbus", "BACnet", "Control4", "Philips Dynalite", "Complex integration ecosystems"],
    },
    {
        category: "Systems & Tools",
        icon: <FaLightbulb className="text-4xl text-yellow-500 mb-4" />,
        skills: ["Linux (Ubuntu)", "RMM Deployment", "Proactive Monitoring", "Remote Support & Diagnostics", "Python Automation"],
    },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Technical Expertise
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive skillset bridging the physical and digital worlds of building technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-premium-accent"
                        >
                            <div className="flex justify-center">{category.icon}</div>
                            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                                {category.category}
                            </h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                                        <span className="mr-2 text-premium-accent mt-1">•</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
