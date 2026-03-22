import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const EducationSection = () => {
    return (
        <section id="education" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
                    Education & Certifications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Details */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-premium-accent col-span-1 md:col-span-2 max-w-2xl mx-auto w-full">
                        <div className="flex items-center mb-4">
                            <FaGraduationCap className="text-3xl text-premium-accent mr-3" />
                            <h3 className="text-xl font-bold text-gray-800">Academic Degrees</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="mb-6">
                                <p className="text-gray-800 font-bold">Master of Engineering and Technologies <span className="font-normal">(Radio Engineering & Telecommunications)</span></p>
                                <p className="text-gray-500 text-sm">Almaty University of Power Engineering and Telecommunications (AUPET)</p>
                            </li>
                            <li>
                                <p className="text-gray-800 font-bold">AWS Solutions Architect Associate (SAA-C03) <span className="font-bold text-white bg-premium-accent px-2 py-0.5 rounded text-xs ml-2 uppercase tracking-wider">In Progress</span></p>
                                <p className="text-gray-500 text-sm">Amazon Web Services (AWS) Certification</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
