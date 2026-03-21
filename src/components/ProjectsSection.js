import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "NeuroLang App",
        category: "Software Development",
        description: "Developing a language-learning mobile application.",
        tags: ["NeuroLang", "Mobile App"],
    },
    {
        title: "Cloud Infrastructure Lab",
        category: "Infrastructure",
        description: "Managing a Linux VPS (OVHcloud) hosting private CRM and VPN (WireGuard/OpenVPN).",
        tags: ["OVHcloud", "Linux VPS", "WireGuard", "OpenVPN"],
    },
    {
        title: "Security Hardening",
        category: "Security",
        description: "Implementing service obfuscation and custom firewall rules for edge services.",
        tags: ["Firewall", "Obfuscation", "Security"],
    },
    {
        title: "Automation",
        category: "Scripting",
        description: "Python scripts for automated system health reports and diagnostics.",
        tags: ["Python", "Automation", "Diagnostics"],
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Projects (Professional Hobbies)
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

                <div className="mt-16 text-center">
                    <a href="/portfolio-gallery" className="inline-block bg-premium-accent hover:bg-sky-400 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] text-lg border-2 border-premium-accent">
                        View Full Case & Portfolio Gallery
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
