import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Unified Automation Inc.",
        location: "Edmonton, AB",
        role: "Lead Systems Technician & Integration Specialist",
        period: "Oct 2025 – Present",
        description: null,
        details: [
            "High-Level Integration: Configure and program Enterprise Access Control systems (AXIS A1710-B, Camera Station) and CDVI. Specialized in complex server-side configuration and logical programming.",
            "IT & Cloud Infrastructure: Manage VPS on OVHcloud for remote system diagnostics and secure VPN tunneling. Responsible for the health of 50+ endpoints (IoT controllers, IP cameras, network sensors).",
            "Workflow Automation (Dev): Developed custom automated digital workflows (using Python/AI) that reduced technical incident response time by ~25%."
        ]
    },
    {
        company: "Signature Technology Integrations",
        location: "Edmonton, AB",
        role: "Security Systems Specialist & Integration Lead",
        period: "Mar 2025 – Oct 2025",
        description: null,
        details: [
            "Legacy System Takeovers (Reverse Engineering): Specialized in diagnosing and restructuring undocumented legacy infrastructure. Successfully diagnosed and mapped \"blind\" systems where no schematics existed.",
            "Hybrid Cloud Ecosystems: Acted as Technical Lead for 20+ commercial projects, commissioning Brivo (Cloud Access Control) integrated with DSC Neo (Intrusion) panels.",
            "Code Compliance: Ensured all installations strictly adhered to Alberta electrical codes and safety standards."
        ]
    },
    {
        company: "Top Audio",
        location: "Herzliya, Israel",
        role: "Senior Automation Integrator & Team Lead",
        period: "Jan 2022 – Oct 2024",
        description: null,
        details: [
            "Showroom-Quality Rack Engineering: Engineered and fabricated complex 42U AV rack systems. Focused on meticulous cable management, thermal optimization, and strict adherence to schematics.",
            "Advanced Logic Programming: Lead Programmer for luxury ecosystems. Specialized in Philips Dynalite (DyNet/DALI protocols) and Control4 automation logic (HVAC, Lighting, AV).",
            "Technical Mentorship: Mentored junior installers on termination standards and rack dressing, reducing post-installation support tickets by 30%.",
            "AV-over-IP Architecture: Deployed high-bandwidth video distribution systems backed by enterprise-grade networks (Araknis/Cisco) ensuring zero latency."
        ]
    },
    {
        company: "O-me",
        location: "Jerusalem, Israel",
        role: "Network Implementation Engineer",
        period: "Nov 2019 – Jan 2022",
        description: null,
        details: [
            "Network Architecture: Designed and deployed 150+ robust network infrastructures for SMB clients using Cisco Meraki, Fortinet, and Ubiquiti.",
            "Scripting & Automation: Implemented Python configuration scripts to automate router provisioning, reducing deployment time by 40% and eliminating manual errors.",
            "Infrastructure Build: Oversaw end-to-end installation of structured cabling (Cat6/Fiber) and server rack build-outs."
        ]
    },
    {
        company: "KAHANE",
        location: "Netanya, Israel",
        role: "Smart Home Systems Engineer",
        period: "Dec 2016 – Nov 2019",
        description: null,
        details: [
            "Philips Dynalite Engineering: Specialized in commissioning complex lighting control systems using DALI and Relay protocols. Integrated lighting panels into broader BMS (Building Management Systems).",
            "Full-Stack Automation: Deployed and programmed unified Control4 ecosystems in 70+ properties, integrating AV, HVAC, Shades, and Alarm systems.",
            "Network Traffic Engineering: Configured VLANs and subnets to physically separate AV traffic from guest data, ensuring stability for media streaming."
        ]
    },
    {
        company: "Rostman",
        location: "Kazakhstan",
        role: "IT Systems Engineer (Freelance)",
        period: "Mar 2010 – May 2016",
        description: null,
        details: [
            "IT Infrastructure Consulting: Designed, deployed, and administered robust Windows Server and Linux environments for SMB clients.",
            "System Administration: Managed virtualization (Hyper-V), Active Directory, and implemented Shell scripting for automated system maintenance."
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
