import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Unified Automation Inc.",
        location: "Edmonton, AB",
        role: "Systems Integration Engineer",
        period: "Oct 2025 – Present",
        description: null,
        details: [
            "IoT Hardening: Configured AXIS/CDVI controllers in VLANs to mitigate lateral movement threats.",
            "Secure Remote Access: Managed private VPN infrastructure on OVHcloud VPS for encrypted diagnostics.",
            "Reliability: Maintained 99.9% uptime for 50+ enterprise endpoints via proactive monitoring.",
            "Automation: Developed custom workflows reducing incident response time by 25%."
        ]
    },
    {
        company: "Signature Technology Integrations",
        location: "Edmonton, AB",
        role: "Security & Network Integration Specialist",
        period: "Mar 2025 – Oct 2025",
        description: null,
        details: [
            "Cloud Ecosystems: Lead on 20+ commercial projects (Brivo Cloud + DSC Neo integration).",
            "Audit & Recovery: Reverse-engineered undocumented legacy environments for full operational integrity.",
            "Traffic Isolation: VLAN segmentation separating high-bandwidth security traffic from corporate data networks."
        ]
    },
    {
        company: "TopAudio",
        location: "Herzliya, Israel",
        role: "Senior Infrastructure & Automation Engineer",
        period: "Jan 2022 – Oct 2024",
        description: null,
        details: [
            "Architecture: Multi-layer VLAN segmentation for high-density AV/security environments.",
            "Vendor Integration: Fortinet, Cisco, Araknis in 42U rack deployments with thermal optimization.",
            "Service Optimization: Reduced site visits by 30% using OvrC/RMM proactive maintenance.",
            "Leadership: Mentored junior engineers and established technical standards."
        ]
    },
    {
        company: "O-me",
        location: "Jerusalem, Israel",
        role: "Network Implementation Engineer",
        period: "Nov 2019 – Jan 2022",
        description: null,
        details: [
            "Automation: Python CLI scripts reduced Cisco config time from 10m → 2m for 130 branches.",
            "Scaling: Deployed 150+ secure infrastructures using FortiGate, Aruba, Meraki.",
            "RF Engineering: Wi-Fi heatmapping and optimization for complex architectural structures."
        ]
    },
    {
        company: "Kahane",
        location: "Israel",
        role: "Network & Systems Integration Engineer",
        period: "Dec 2016 – Nov 2019",
        description: null,
        details: [
            "Engineered Philips Dynalite and Control4 ecosystems for 70+ properties with VLAN-based data isolation and firewall policies."
        ]
    },
    {
        company: "Rostman",
        location: "Kazakhstan",
        role: "IT Infrastructure Engineer (Freelance)",
        period: "Mar 2010 – May 2016",
        description: null,
        details: [
            "Managed Windows Server/Linux, Active Directory, Hyper-V virtualization for SMB clients.",
            "Designed disaster recovery protocols and automated backup strategies."
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
