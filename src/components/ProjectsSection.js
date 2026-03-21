import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "NeuroLang App Development",
        category: "Software Development",
        description: "Architected and developed a robust cross-platform learning application focused on streamlined user interaction, leveraging modern front-end frameworks and scalable backend architecture.",
        tags: ["Software Engineering", "Frontend", "Backend", "UI/UX"],
    },
    {
        title: "Cloud Infrastructure & VPN",
        category: "Cloud Infrastructure & Security",
        description: "Designed, deployed, and managed a self-hosted Linux VPS on OVHcloud. Hardened the server boundary using advanced WireGuard cryptography and custom firewall policies to establish a highly secure remote access gateway.",
        tags: ["OVHcloud", "Linux VPS", "WireGuard", "Network Hardening"],
    },
    {
        title: "Systems Automation & Diagnostics",
        category: "Scripting & Automation",
        description: "Developed purpose-built Python scripts to automate comprehensive system health reporting, execute routine network diagnostic tasks, and detect infrastructure anomalies before failure.",
        tags: ["Python", "Automation Scripting", "Diagnostics", "Proactive RMM"],
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
