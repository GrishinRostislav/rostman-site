import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Cloud Infrastructure Lab",
        category: "Cloud Infrastructure",
        description: "Managing a Linux VPS on OVHcloud to host a private CRM portal and operate a secure VPN gateway.",
        tags: ["OVHcloud", "Linux VPS", "VPN", "CRM"],
    },
    {
        title: "Security Hardening",
        category: "Network Security",
        description: "Implemented service obfuscation utilizing non-standard ports and deployed custom firewall rules to mitigate automated scanning.",
        tags: ["Firewall Rules", "Service Obfuscation", "Security"],
    },
    {
        title: "Systems Automation",
        category: "Scripting & Automation",
        description: "Developed Python scripts to automate system health reports and execute routine network diagnostic tasks.",
        tags: ["Python", "Automation", "Network Diagnostics"],
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Selected Case Studies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors border border-gray-700 hover:border-premium-accent"
                        >
                            <div className="text-sm text-premium-accent font-bold uppercase tracking-wider mb-2">
                                {project.category}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
