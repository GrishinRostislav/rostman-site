import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Unified Automation Inc.",
        location: "Edmonton, AB",
        role: "Systems Integration Specialist",
        period: "Oct 2025 – Present",
        description: "Systems engineering and high-level integration role.",
        details: [
            "Transitioned from standard installation to complex systems engineering.",
            "Configure and program AXIS A1710-B network door controllers & Camera Station.",
            "Manage 100+ endpoints including IoT controllers and IP cameras.",
            "Deploy and manage VPS on OVHcloud for remote tools and VPNs.",
            "Developed automated digital workflows, reducing incident response time by ~25%."
        ]
    },
    {
        company: "Signature Technology Integrations",
        location: "Edmonton, AB",
        role: "Security & Network Technician",
        period: "Mar 2025 – Oct 2025",
        description: "Commissioning hybrid security systems and legacy takeovers.",
        details: [
            "Commissioned DSC Neo and Brivo systems for 20+ commercial sites.",
            "Executed 'takeover' projects, diagnosing and reprogramming legacy systems without documentation.",
            "Ensured full compliance with local codes."
        ]
    },
    {
        company: "TopAudio",
        location: "Herzliya, Israel",
        role: "Senior Automation Integrator (Control4 & Dynalite)",
        period: "Jan 2022 – Oct 2024",
        description: "Lead integrator for luxury residential and commercial projects.",
        details: [
            "Programmed complex Control4 logic for lighting, HVAC, and AV.",
            "Dynalite Specialist: Commercial lighting controllers & DALI/DMX gateways.",
            "Implemented OvrC/Domotz monitoring, reducing support tickets by 30%.",
            "Mentored junior technicians on rack building and cable management."
        ]
    },
    {
        company: "O-me",
        location: "Jerusalem, Israel",
        role: "Network Implementation Engineer",
        period: "Nov 2019 – Jan 2022",
        description: "SMB network architecture and Wi-Fi optimization.",
        details: [
            "Architected SMB networks using Cisco Meraki and Fortinet.",
            "Configured Wi-Fi heatmaps for large concrete structures.",
            "Built full network racks with structured cabling."
        ]
    },
    {
        company: "KAHANE",
        location: "Netanya, Israel",
        role: "Smart Home Systems Engineer",
        period: "Dec 2016 – Nov 2019",
        description: "Large-scale system deployment and stakeholder management.",
        details: [
            "Deployed Control4 and Dynalite systems in 70+ properties.",
            "Collaborated directly with architects and interior designers.",
            "Configured automation scenarios for high-load environments."
        ]
    }
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
                    Professional Experience
                </h2>

                <div className="space-y-12 border-l-2 border-gray-200 ml-4 md:ml-0 md:pl-0">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Dot (Visible on mobile/desktop appropriately) */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-premium-accent border-2 border-white ring-2 ring-gray-100 md:hidden"></div>

                            <div className="md:flex gap-8 items-start">
                                {/* Timeline sidebar desktop */}
                                <div className="hidden md:block w-1/3 text-right sticky top-24 pt-2">
                                    <h3 className="font-bold text-lg text-gray-800">{exp.company}</h3>
                                    <p className="text-premium-accent font-medium">{exp.period}</p>
                                    <p className="text-gray-500 text-sm">{exp.location}</p>
                                </div>

                                {/* Content */}
                                <div className="md:w-2/3 pb-8 md:pb-0 md:border-l-2 md:border-gray-200 md:pl-8 relative">
                                    {/* Desktop Dot */}
                                    <div className="hidden md:block absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-premium-accent border-2 border-white ring-2 ring-gray-100"></div>

                                    <h3 className="md:hidden font-bold text-xl text-gray-800">{exp.company}</h3>
                                    <div className="md:hidden flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
                                        <span className="font-medium text-premium-accent">{exp.period}</span>
                                        <span>|</span>
                                        <span>{exp.location}</span>
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-700 mb-2">{exp.role}</h4>
                                    <p className="italic text-gray-600 mb-4">{exp.description}</p>

                                    <ul className="space-y-2">
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                                                <span className="mr-2 text-gray-400 mt-[2px]">-</span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
