import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Unified Automation Inc.",
        location: "Edmonton, Canada",
        role: "Systems Integration & Security Specialist",
        period: "Oct 2025 – Present",
        description: null,
        details: [
            "Deploying enterprise access control and surveillance systems; standardized project documentation for 100% repeatable results.",
            "Led the end-to-end installation of low-voltage cabling and network hardware, ensuring strict adherence to industry standards.",
            "Implemented VPN-based Remote Monitoring and Management (RMM), significantly increasing system reliability and remote support capabilities.",
            "Acted as the primary technical liaison between clients, facility managers, and third-party contractors to ensure precise project execution."
        ]
    },
    {
        company: "Signature Technology Integrations",
        location: "Edmonton, Canada",
        role: "Technical Operations Specialist",
        period: "Mar 2025 – Oct 2025",
        description: null,
        details: [
            "Stabilized legacy security networks for commercial clients and successfully managed on-site deployment schedules.",
            "Designed, assembled, and managed 42U network racks, integrating switching equipment with physical security systems.",
            "Identified hardware bottlenecks, optimizing system performance through targeted physical and network infrastructure upgrades.",
            "Trained and supervised junior installer teams on Layer 1/Level 2 troubleshooting and hardware deployment protocols."
        ]
    },
    {
        company: "Top Audio",
        location: "Herzliya, Israel",
        role: "Infrastructure & Network Security Engineer",
        period: "Jan 2022 – Oct 2024",
        description: null,
        details: [
            "Designed multi-layer VLAN architectures for high-density environments; secured Cisco, Aruba, and Fortinet network stacks in enterprise racks.",
            "Integrated complex OT protocols (Modbus, BACnet) to bridge physical building automation with IP networks.",
            "Automated proactive RMM monitoring workflows, reducing emergency on-site visits by 30%.",
            "Managed vendor relations with ISPs and authored standardized technical documentation for enterprise-grade infrastructure."
        ]
    },
    {
        company: "O-me",
        location: "Jerusalem, Israel",
        role: "Network Deployment Engineer",
        period: "Nov 2019 – Jan 2022",
        description: null,
        details: [
            "Co-led secure network stack rollout for 100+ retail branches.",
            "Configured and installed Cisco Meraki, FortiGate, and enterprise routing appliances across diverse site layouts.",
            "Ensured network segmentation and validated wireless coverage via site surveys."
        ]
    },
    {
        company: "KAHANE",
        location: "Netanya, Israel",
        role: "Systems Integration Engineer",
        period: "Dec 2016 – Nov 2019",
        description: null,
        details: [
            "Commissioned secure automation ecosystems for 70+ high-end properties.",
            "Integrated building protocols (Modbus, BACnet) into unified management platforms.",
            "Designed rack architectures including power distribution.",
            "Coordinated with third-party contractors (HVAC, electricians) to meet project timelines."
        ]
    },
    {
        company: "Pharmacom",
        location: "Almaty, Kazakhstan",
        role: "System Administrator",
        period: "2013 – 2016",
        description: null,
        details: [
            "Managed IT infrastructure for a network of 200+ pharmacy locations.",
            "Administered site-to-site VPN tunnels and critical internal accounting servers.",
            "Mass Migration: Replaced hardware in 25 branches within 13 days with zero downtime."
        ]
    },
    {
        company: "EAT",
        location: "Almaty, Kazakhstan",
        role: "IT Support Specialist",
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
