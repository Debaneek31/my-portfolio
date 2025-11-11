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
            company: "Skill Nation",
            role: "Business Intelligence Using Power BI",
            duration: "August 2024",
            type: "Bhubaneswar, Odisha, India",
            logo: "https://skillnation.ai/wp-content/uploads/2023/08/SN_logo-17-1024x415.png",
            color: "bg-blue-500",
            achievements: [
                {
                    icon: <Wrench className="w-4 h-4" />,
                    text: <>
                        Successfully completed a hands-on workshop on {" "}
                        <a
                            href="https://drive.google.com/file/d/1FxoEOPoRMY8SVMjb_FiBPYvrhKk6pPm2/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                        >
                            Business Intelligence 
                        </a>{" "}
                        using Microsoft Power BI
                    </>
                },
                {
                    icon: <Code className="w-4 h-4" />,
                    text: "Learned to create interactive dashboards and visual reports for effective data storytelling."
                },
                {
                    icon: <Package className="w-4 h-4" />,
                    text: "Gained practical skills in data modeling, DAX functions, and real-time analytics."
                },
                {
                    icon: <Shield className="w-4 h-4" />,
                    text: "Explored techniques to transform raw data into actionable business insights."
                },
                /* {
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
                }, */
                {
                    icon: <BarChart3 className="w-4 h-4" />,
                    text: "Strengthened understanding of data visualization and decision-making using Power BI tools."
                }
            ]
        },
          {
            company: "Scaler Topics",
            role: "Completed Python and SQL for Data Science",
            duration: "May 2024 – July 2024",
            type: "Bhubaneswar, Odisha, India",
            logo: "https://pbs.twimg.com/profile_images/1439832757761306631/zWTKZBLb_400x400.png",
            color: "bg-blue-500",
            achievements: [
                {
                    icon: <Wrench className="w-4 h-4" />,
                    text: <>
                        Completed an industry-oriented course focused on{" "}
                        <a
                            href="https://moonshot.scaler.com/s/sl/cQClo9wVjJ?_gl=1*ztdxwq*_gcl_aw*R0NMLjE3MTQzMTc0NjMuQ2p3S0NBanc1N2V4QmhBc0Vpd0FhSXhhWnZBUHZlSUFQcENpX2FDdUJVMUZ3TE0xTFlyRjhjQjdwRENnUFA5dUJmZFhQaFRSUldRa3Zob0NTTUlRQXZEX0J3RQ..*_gcl_au*MTk3Mjk5NTcyNi4xNzIxODc5MDMx*FPAU*NjE5OTUxOTQzLjE3MjA3ODUxNzE.*_ga*MTMyMjE0MjgwNC4xNzEyOTg5NDAz*_ga_53S71ZZG1X*MTcyMTg3OTAzMS43OC4xLjE3MjE4NzkwNTkuMC4wLjUzNjI0ODAwMA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                        >
                            Python programming and SQL for Data Science
                        </a>{" "}
                        .
                    </>
                },
                {
                    icon: <Code className="w-4 h-4" />,
                    text: "Gained hands-on experience in data manipulation, analysis, and visualization using Python libraries like Pandas, NumPy, and Matplotlib."
                },
                {
                    icon: <Package className="w-4 h-4" />,
                    text: "Learned to write efficient SQL queries for data extraction, aggregation, and optimization"
                },
                {
                    icon: <Shield className="w-4 h-4" />,
                    text: "Addressed critical VAPT (Vulnerability Assessment and Penetration Testing) issues in RevUp, significantly improving the product's security and compliance standards"
                },
                /* {
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
                }, */
                {
                    icon: <BarChart3 className="w-4 h-4" />,
                    text: "Strengthened foundational knowledge essential for data-driven decision-making and machine learning applications."
                }
            ]
        },
        {
            company: "NASSCOM",
            role: "Certificate of Big Data",
            duration: "Nov 2023 – Dec 2023",
            type: "Khordha, West Bengal, India",
            logo: "https://nasscom.in/themes/custom/nasscomredesigntheme/images/logo.svg",
            color: "bg-green-500",
            achievements: [
                {
                    icon: <Database className="w-4 h-4" />,
                    text: "Collect, validate, and manage data from field and system sources to support monitoring of many big data of various e-commerce platform."
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
            company: "Technoxian World Robotic Championship",
            role: "2nd Runner Up Drone Competition",
            duration: "July 2023",
            type: "Noida, Uttar Pradesh, India",
            logo: "https://www.technoxian.com/images/technoxian-social.png",
            color: "bg-blue-500",
            achievements: [
                {
                    icon: <Wrench className="w-4 h-4" />,
                    text: <>
                        Secured{" "}
                        <a
                            href="https://revup.reverieinc.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                        >
                            2nd Runner-Up
                        </a>{" "}
                        in the prestigious Technoxian World Robotics Championship held in Noida, 2023.
                    </>
                },
                {
                    icon: <Code className="w-4 h-4" />,
                    text: "Competed in the Drone category against teams from 21+ countries, including Russia, China, and the Middle East."
                },
                {
                    icon: <Package className="w-4 h-4" />,
                    text: "Represented our college and demonstrated strong technical and teamwork skills in drone design and operation."
                },
                {
                    icon: <Shield className="w-4 h-4" />,
                    text: "Successfully designed, programmed, and executed drone challenges under international competition standards."
                },
                /* {
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
                }, */
                {
                    icon: <BarChart3 className="w-4 h-4" />,
                    text: "Gained valuable experience in robotics, automation, and real-time problem solving on a global platform."
                }
            ]
        },
          {
            company: "Edu Fabrica",
            role: "Student",
            duration: "July 2022",
            type: "IIT Bhubaneswar, Odisha, India",
            logo: "https://edufabrica.net/_next/static/media/Logo.6324fde1.jpg",
            color: "bg-blue-500",
            achievements: [
                {
                    icon: <Wrench className="w-4 h-4" />,
                    text: <>
                        Completed a comprehensive {" "}
                        <a
                            href="https://fsp-assessment-certificates.s3-ap-southeast-1.amazonaws.com/DebaneekChhotaray-126356375.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                        >
                            Data Science course
                        </a>{" "}
                        conducted by IIT Bhubaneswar in collaboration with Edu Fabrica.
                    </>
                },
                {
                    icon: <Code className="w-4 h-4" />,
                    text: "Gained practical knowledge of Python, SQL, and data visualization tools for real-world data analysis."
                },
                {
                    icon: <Package className="w-4 h-4" />,
                    text: "Learned key concepts of Machine Learning, Data Cleaning, and Statistical Modeling."
                },
                {
                    icon: <Shield className="w-4 h-4" />,
                    text: "Worked on hands-on projects that strengthened analytical and problem-solving skills."
                },
                /* {
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
                } */,
                {
                    icon: <BarChart3 className="w-4 h-4" />,
                    text: "Collaborated in the development of an Admin Dashboard that provides detailed visualizations of user activity, system performance, and usage analytics to support better decision-making"
                }
            ]
        },
    ];

    const allSkills = [
        "React.js", "Next.js", "Node.js", "Pandas", "MongoDB",
        "JavaScript", "Git", "Matplotlib", "Numpy", "Tailwind CSS",
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
                   {/*  <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-mono mb-6 shadow-lg shadow-cyan-500/20">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        <Briefcase className="w-4 h-4" />
                        <span className="text-emerald-400">$</span>
                        <span>work_experience</span>
                    </div> */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Certificates
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


                {/* Certificate Modal */}

            </div>
        </div>
    );
};

export default WorkExperience;
