import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Unified Automation Inc.",
        location: "Edmonton, Canada",
        role: "Systems Integration & Security Specialist (Contract)",
        period: "Oct 2025 – Present",
        description: null,
        details: [
            "Executing field deployments of enterprise-grade access control, surveillance, and network systems.",
            "Improved system reliability by implementing VPN-based Remote Monitoring and Management (RMM).",
            "Standardizing documentation and labeling protocols for repeatable, high-quality installation results."
        ]
    },
    {
        company: "Signature Technology Integrations",
        location: "Edmonton, Canada",
        role: "Technical Operations Specialist (Contract)",
        period: "Mar 2025 – Oct 2025",
        description: null,
        details: [
            "Upgraded and stabilized legacy security and network systems for high-value commercial clients.",
            "Coordinated on-site tasks and provided field leadership for junior installer teams.",
            "Identified critical hardware bottlenecks and implemented streamlined process improvements."
        ]
    },
    {
        company: "Top Audio",
        location: "Herzliya, Israel",
        role: "Infrastructure & Network Security Engineer",
        period: "Jan 2022 – Oct 2024",
        description: null,
        details: [
            "Designed multi-layer VLAN architectures for high-density AV and security deployments to ensure strict traffic separation.",
            "Secured Fortinet, Cisco, and Araknis networking infrastructure within structured 42U rack systems.",
            "Automated proactive RMM monitoring workflows, reducing on-site emergency visits by 30%.",
            "Mentored junior engineers and formalized technical deployment documentation to enforce consistent security standards."
        ]
    },
    {
        company: "O-me",
        location: "Jerusalem, Israel",
        role: "Network Deployment Engineer",
        period: "Nov 2019 – Jan 2022",
        description: null,
        details: [
            "Co-led the rollout of secure network stacks for **100+ retail branches** across the region.",
            "Performed physical installation and remote configuration of FortiGate and Meraki appliances.",
            "Validated wireless coverage and ensured network segmentation across diverse site layouts."
        ]
    },
    {
        company: "KAHANE",
        location: "Netanya, Israel",
        role: "Systems Integration Engineer",
        period: "Dec 2016 – Nov 2019",
        description: null,
        details: [
            "Engineered and commissioned secure automation ecosystems for 70+ high-end properties.",
            "Integrated building protocols (KNX, Modbus, BACnet) into unified management platforms.",
            "Designed standardized rack architectures including power distribution and thermal management.",
            "Managed on-site installation teams and coordinated with third-party contractors (electricians, HVAC) to ensure project timelines."
        ]
    },
    {
        company: "Pharmacom",
        location: "Almaty, Kazakhstan",
        role: "System Administrator",
        period: "2013 – 2016",
        description: null,
        details: [
            "Managed IT infrastructure and server uptime for a network of 200+ pharmacy locations.",
            "Administered site-to-site VPN tunnels and critical internal accounting servers.",
            "Mass Migration: Replaced hardware in 25 branches within 13 days with zero operational downtime."
        ]
    },
    {
        company: "EAT",
        location: "Almaty, Kazakhstan",
        role: "IT Support / Help Desk",
        period: "2010 – 2013",
        description: null,
        details: [
            "Maintained office IT infrastructure and provided hardware/software support for local sites.",
            "Resolved critical system incidents and performed routine server maintenance."
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

                                    {/* Optional Description */}
                                    {exp.description && (
                                        <p className="italic text-gray-600 mb-4">{exp.description}</p>
                                    )}

                                    <ul className="space-y-2">
                                        {exp.details.map((detail, idx) => {
                                            // Bold the part before the first colon
                                            const parts = detail.includes(':') ? detail.split(':') : [detail];
                                            const label = parts.length > 1 ? parts[0] : null;
                                            const text = parts.length > 1 ? parts.slice(1).join(':') : detail;

                                            return (
                                                <li key={idx} className="text-gray-600 text-sm flex items-start">
                                                    <span className="mr-2 text-gray-400 mt-[2px]">-</span>
                                                    <span>
                                                        {label && <strong className="text-gray-800">{label}:</strong>}
                                                        {text}
                                                    </span>
                                                </li>
                                            );
                                        })}
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
