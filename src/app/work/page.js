'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Calendar, MapPin, Code, Shield, FileText,
    BarChart3, Wrench, Package, Database, BarChart4, FileSpreadsheet, X, Briefcase, Award
} from 'lucide-react';
import Navbar from '@/components/Navbar';


const WorkExperience = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const canvasRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        // Prevent body scroll when modal is open
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    useEffect(() => {
        // Close modal on ESC key press
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && isModalOpen) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isModalOpen]);

    useEffect(() => {
        // Animated binary background
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const binaryChars = '01';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function draw() {
            ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#3b82f6';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const workExperiences = [
        {
            company: "KPMG India",
            role: "Analyst – G & PS (GovTech)",
            duration: "Aug 2025 – Present",
            type: "Kolkata, West Bengal, India",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLvx1x8oeXs-DidUVmNti1LMUwkdDG3Fn0Q&s",
            color: "bg-green-500",
            achievements: [
                {
                    icon: <Database className="w-4 h-4" />,
                    text: "Collect, validate, and manage data from field and system sources to support monitoring of government health schemes."
                },
                {
                    icon: <BarChart4 className="w-4 h-4" />,
                    text: "Generate periodic reports, dashboards, and visual summaries using tools like Power BI/Tableau for stakeholder decision-making."
                },
                {
                    icon: <Shield className="w-4 h-4" />,
                    text: "Ensure data accuracy, consistency, and integrity across multiple systems and platforms."
                },
                {
                    icon: <FileSpreadsheet className="w-4 h-4" />,
                    text: "Maintain and enhance MIS tools, templates, and workflows to improve operational efficiency."
                },
                {
                    icon: <Wrench className="w-4 h-4" />,
                    text: "Assist in troubleshooting data-related issues and support performance monitoring and evaluation activities."
                }
            ]
        },
        {
            company: "Reverie Language Technologies",
            role: "Product Engineer Intern",
            duration: "August 2024 – May 2025",
            type: "Bengaluru, Karnataka, India",
            logo: "https://revup.reverieinc.com/logo.svg",
            color: "bg-blue-500",
            achievements: [
                {
                    icon: <Wrench className="w-4 h-4" />,
                    text: <>
                        Built an interactive API Playground -{" "}
                        <a
                            href="https://revup.reverieinc.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                        >
                            RevUp
                        </a>{" "}
                        that allows users and developers to test and explore Reverie's APIs in real time, improving engagement and understanding of API capabilities
                    </>
                },
                {
                    icon: <Code className="w-4 h-4" />,
                    text: "Developed a dynamic and responsive web application using Next.js, delivering an optimized front-end experience across various devices and screen sizes"
                },
                {
                    icon: <Package className="w-4 h-4" />,
                    text: "Developed and published modular NPM packages for Reverie's APIs, which formed the basis for creating developer-friendly JavaScript SDKs, simplifying integration and enhancing accessibility across multiple programming environments"
                },
                {
                    icon: <Shield className="w-4 h-4" />,
                    text: "Addressed critical VAPT (Vulnerability Assessment and Penetration Testing) issues in RevUp, significantly improving the product's security and compliance standards"
                },
                {
                    icon: <FileText className="w-4 h-4" />,
                    text: <>
                        Authored comprehensive and easy-to-follow{" "}
                        <a
                            href="https://docs.reverieinc.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                        >
                            Reverie's API documentation
                        </a>{" "}
                        using Mintlify, ensuring smooth onboarding and integration for developers through clear examples and structured content.
                    </>
                },
                {
                    icon: <BarChart3 className="w-4 h-4" />,
                    text: "Collaborated in the development of an Admin Dashboard that provides detailed visualizations of user activity, system performance, and usage analytics to support better decision-making"
                }
            ]
        },
    ];

    const allSkills = [
        "React.js", "Next.js", "Node.js", "Express.js", "MongoDB",
        "JavaScript", "Git", "Jira", "Mintlify", "Tailwind CSS",
        "MS Excel", "Power BI", "Tableau", "SQL"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
            {/* Animated Binary Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-30"
                style={{ zIndex: 0 }}
            />

            {/* Code Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ zIndex: 1 }}>
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <Navbar />

            <div className="relative z-10 max-w-5xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-mono mb-6 shadow-lg shadow-cyan-500/20">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        <Briefcase className="w-4 h-4" />
                        <span className="text-emerald-400">$</span>
                        <span>work_experience</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Work Experience
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 font-mono">
                        Professional journey & career progression
                    </p>
                </div>

                {/* Timeline Container */}
                <div className={`relative transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50 md:left-8"></div>

                    <div className="space-y-12">
                        {workExperiences.map((experience, index) => (
                            <div key={index} className="relative group">
                                {/* Timeline Dot */}
                                <div className="absolute left-3 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-500/50 z-10 md:left-5 group-hover:scale-125 transition-transform duration-300"></div>

                                {/* Experience Card */}
                                <div className="ml-12 md:ml-16">
                                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group">
                                        <div className="p-6 pb-4">
                                            <div className="flex items-start justify-between flex-wrap gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-700/50 border border-slate-600/50 flex items-center justify-center p-2">
                                                            {experience.company === "KPMG India" ? (
                                                                <img
                                                                    src={experience.logo}
                                                                    alt={`${experience.company} Logo`}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={experience.logo}
                                                                    alt={`${experience.company} Logo`}
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            )}
                                                        </div>

                                                        <div>
                                                            <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
                                                            <a
                                                                href={experience.company === "KPMG India" ? "https://home.kpmg/in/en/home.html" : "https://www.reverieinc.com"}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-lg text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-1 group/link"
                                                            >
                                                                {experience.company}
                                                                <span className="text-xs opacity-0 group-hover/link:opacity-100 transition-opacity">↗</span>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm">
                                                        <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1.5 rounded-lg border border-slate-600/50">
                                                            <Calendar className="w-4 h-4 text-cyan-400" />
                                                            <span className="font-mono">{experience.duration}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1.5 rounded-lg border border-slate-600/50">
                                                            <MapPin className="w-4 h-4 text-cyan-400" />
                                                            <span className="font-mono">{experience.type}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div className="px-6 pb-6">
                                            <div className="mb-3">
                                                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Achievements</span>
                                            </div>
                                            <ul className="space-y-3">
                                                {experience.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-3 group/item">
                                                        <div className="text-cyan-400 mt-0.5 group-hover/item:scale-110 transition-transform">
                                                            {achievement.icon}
                                                        </div>
                                                        <p className="text-slate-300 text-sm leading-relaxed flex-1">
                                                            {achievement.text}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className={`mt-12 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
                    <h3 className="text-lg font-bold text-white mb-6 text-center">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Technical Skills & Technologies
                        </span>
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {allSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg text-sm font-mono border border-slate-600/50 hover:border-cyan-500/50 hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Internship Certificate Section */}
                <div className={`mt-12 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8 hover:border-cyan-500/50 transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
                    <div className="text-center mb-6">
                        <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Internship Certificate
                            </span>
                        </h3>
                        <p className="text-sm text-slate-400 font-mono">Reverie Language Technologies</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Modal Trigger Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 flex items-center justify-center gap-2 overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            <FileText size={18} className="relative z-10" />
                            <span className="relative z-10">View Certificate</span>
                        </button>

                        {/* Download Button */}
                        <a
                            href="/InternshipCertificate_SouravMishra.pdf"
                            download
                            className="group bg-slate-700/50 border-2 border-slate-600 text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center gap-2"
                        >
                            <span>Download Certificate</span>
                        </a>
                    </div>
                </div>

                {/* Certificate Modal */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
                        onClick={() => setIsModalOpen(false)}
                        onScroll={(e) => e.stopPropagation()}
                    >
                        <div
                            className="bg-slate-800 border border-slate-700 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-5xl relative transition-all duration-300 flex flex-col"
                            style={{ 
                                maxHeight: 'calc(100vh - 1rem)',
                                maxWidth: 'calc(100vw - 1rem)',
                                margin: 'auto'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-slate-700 flex-shrink-0">
                                <h3 className="text-white font-mono text-xs sm:text-sm md:text-base">
                                    <span className="text-cyan-400">$</span> view_certificate
                                </h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-slate-400 hover:text-white transition-colors p-1.5 sm:p-2 hover:bg-slate-700 rounded-lg flex-shrink-0"
                                    aria-label="Close modal"
                                >
                                    <X size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </button>
                            </div>

                            {/* Modal Body - Scrollable */}
                            <div 
                                className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 md:p-6"
                                style={{
                                    minHeight: '200px'
                                }}
                            >
                                <div className="rounded-lg border border-slate-700 overflow-hidden bg-slate-900/50 flex items-center justify-center w-full">
                                    <img
                                        src="/image.png"
                                        alt="Internship Certificate"
                                        className="w-full h-auto object-contain"
                                        style={{ 
                                            maxWidth: '100%',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-3 sm:p-4 md:p-6 border-t border-slate-700 flex-shrink-0 flex justify-center">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkExperience;
