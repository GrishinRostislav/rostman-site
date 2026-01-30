import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Unified Automation",
        location: "Edmonton, Alberta, Canada",
        role: "Systems Integration Specialist",
        period: "Oct 2025 - Present",
        description: "High-Level Integration: Configure and program AXIS A1710-B network door controllers & AXIS Camera Station.",
        details: [
            "Infrastructure Management: Support 100+ endpoints (IoT, IP cameras, network sensors).",
            "Workflow Automation: Developed automated digital workflows reducing incident response time by ~25%.",
            "Skills: AXIS Camera Station, VPS, OVHcloud, CDVI"
        ]
    },
    {
        company: "Signature Technology Integrations",
        location: "Edmonton, Alberta, Canada",
        role: "Security Systems Specialist",
        period: "Apr 2025 - Oct 2025",
        description: "Managed complex 'system takeovers' for commercial clients, diagnosing and restructuring legacy systems without documentation.",
        details: [
            "Commissioned hybrid security ecosystems (DSC Neo, Brivo), serving as the technical lead for 20+ commercial sites.",
            "Ensured compliance with local safety codes and standards."
        ]
    },
    {
        company: "Top Audio",
        location: "Herzliya, Tel Aviv District, Israel",
        role: "Senior Automation Integrator & Team Lead",
        period: "Jan 2022 - Oct 2024",
        description: "Lead Integrator for luxury residential projects, handling advanced programming for Control4 and Philips Dynalite.",
        details: [
            "High-End Rack Build: Designed and fabricated complex 42U AV racks involving Multi-Zone Audio Matrices and Video-over-IP.",
            "Leadership & QA: Mentored junior technicians on installation best practices, reducing post-installation support tickets by 30%.",
            "System Commissioning: Handling advanced programming for Control4 and Philips Dynalite (Lighting & HVAC logic).",
            "Client Handover: Managed final system walkthroughs and user training for high-net-worth clients."
        ]
    },
    {
        company: "O-me",
        location: "Jerusalem, Israel",
        role: "Network Implementation Engineer",
        period: "Nov 2019 - Jan 2022",
        description: "Designed and deployed 150+ networks for residential and SMB clients using Cisco and UniFi.",
        details: [
            "Project Coordination: Coordinated with cross-functional teams to ensuring full-cycle project delivery from design to handover.",
            "Automation: Implemented configuration scripts to automate router setup, reducing deployment time by 40%.",
            "Infrastructure: Supervised the build of structured cabling and server racks to support smart ecosystems."
        ]
    },
    {
        company: "KAHANE",
        location: "Netania, Tel Aviv, Israel",
        role: "Smart Home Systems Engineer",
        period: "Dec 2016 - Nov 2019",
        description: "Specialized in Philips Dynalite commissioning and Control4 ecosystems.",
        details: [
            "Lighting & Energy Automation: Programmed complex DALI/Relay logic for high-load environments and integrated lighting panels.",
            "Integration Logic: Deployed Control4 ecosystems in 70+ properties, unifying AV, HVAC, Shades, and Alarm systems.",
            "Network Segmentation: Configured VLANs and subnets to separate AV traffic from guest networks.",
            "Design Collaboration: Collaborated directly with architects to translate design requirements into technical schematics and rack layouts."
        ]
    },
    {
        company: "Rostman",
        location: "Kazakhstan",
        role: "IT Systems Engineer (Freelance)",
        period: "Mar 2010 - May 2016",
        description: "Built and maintained Windows/Linux server infrastructure for small businesses.",
        details: [
            "Managed data backup strategies and system upgrades.",
            "Provided high-level technical support and client training."
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
