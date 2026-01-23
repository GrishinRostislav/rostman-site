import React from "react";
import { FaGraduationCap, FaCertificate, FaBookOpen } from "react-icons/fa";

const EducationSection = () => {
    return (
        <section id="education" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
                    Education & Certifications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Degree */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-premium-accent">
                        <div className="flex items-center mb-4">
                            <FaGraduationCap className="text-3xl text-premium-accent mr-3" />
                            <h3 className="text-xl font-bold text-gray-800">Master’s Degree (M.Eng.)</h3>
                        </div>
                        <p className="text-gray-700 font-semibold">Radio-engineering, Electronics and Telecommunications</p>
                        <p className="text-gray-500 text-sm mb-2">Almaty University of Power Engineering & Telecommunications</p>
                        <p className="text-gray-400 text-xs">2010 – 2012 (Equivalent to Canadian Master’s)</p>
                    </div>

                    {/* Certifications & Training */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500">
                        <div className="flex items-center mb-4">
                            <FaCertificate className="text-3xl text-green-500 mr-3" />
                            <h3 className="text-xl font-bold text-gray-800">Professional Development</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaBookOpen className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <span className="block font-semibold text-gray-700">CompTIA Network+</span>
                                    <span className="text-sm text-gray-500">Exam Preparation In Progress</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaBookOpen className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <span className="block font-semibold text-gray-700">Cisco Certified Network Associate (CCNA)</span>
                                    <span className="text-sm text-gray-500">Currently Studying</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaCertificate className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <span className="block font-semibold text-gray-700">Control4 Advanced Programmer</span>
                                    <span className="text-sm text-gray-500">Certified Training Course</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaCertificate className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <span className="block font-semibold text-gray-700">Cisco Meraki</span>
                                    <span className="text-sm text-gray-500">Training Course</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
