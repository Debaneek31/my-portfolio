'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, MessageSquare, Smartphone, Calendar, Monitor, Users, Shield, Bell, Zap, Database, Globe, FolderOpen, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';


const Projects = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const canvasRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

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

    const projects = [
        {
            id: 1,
            title: "Krishi Sahayata",
            description: "AI-powered farming assistance platform with real-time alerts and vernacular language support",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript", "Twilio", "OpenMeteo", "Email.js"],
            features: [
                "SMS alerts and local voice-over features for real-time farming assistance",
                "AI chatbot with vernacular input and text-to-speech (TTS) support",
                "Aadhar-based claim tracking for government subsidy status monitoring"
            ],
            category: "Full Stack",
            icon: <Smartphone className="w-6 h-6" />,
            gradient: "from-green-500 to-emerald-600",
            demoLink: "https://krishi-shayata-staging.vercel.app/login", // Replace with actual demo link
            githubLink: "https://github.com/om-666/KrishiShayataStaging" // Replace with actual GitHub link
        },
        {
            id: 2,
            title: "Eventia",
            description: "Comprehensive event management platform with real-time tracking and automated communications",
            technologies: ["React.js", "Spring Boot", "Tailwind CSS", "MongoDB", "Email.js"],
            features: [
                "Intuitive platform for event creation, management, and real-time tracking",
                "Automated email notifications for event changes and announcements",
                "Seamless RSVP functionality and communication tools for attendee engagement"
            ],
            category: "Full Stack",
            icon: <Calendar className="w-6 h-6" />,
            gradient: "from-purple-500 to-indigo-600",
            githubLink: "https://github.com/souravmishra7456/Eventia" // Replace with actual GitHub link
        },
        {
            id: 3,
            title: "Dev Excuse API",
            description: "The Ultimate Developer Excuse API. Never run out of creative excuses again. Our API provides 100+ developer-tested excuses for every situation, categorized and searchable.",
            technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express.js"],
            features: [
                "Provides over 100 developer-tested excuses via a REST API.",
                "Features include random excuses, category filtering, and keyword search.",
                "Interactive API documentation built with Next.js and Tailwind CSS."
            ],
            category: "Full Stack",
            icon: <Code className="w-6 h-6" />,
            gradient: "from-yellow-500 to-orange-600",
            demoLink: "https://excuses-one.vercel.app/",
            githubLink: "https://github.com/souravmishra7456/excuses"
        },
        {
            id: 4,
            title: "Digital Marketing",
            description: "Secure remote desktop access software with administrative controls and real-time communication",
            technologies: ["Canva", "SEO", ""],
            features: [
                "Remote desktop access for secure machine control over network",
                "Admin controls for managing user settings and system configurations",
                "Real-time communication and data transfer using Java sockets"
            ],
            category: "Desktop Application",
            icon: <Monitor className="w-6 h-6" />,
            gradient: "from-blue-500 to-cyan-600",
            githubLink: "https://github.com/souravmishra7456/networkdesktopmanager" // Replace with actual GitHub link
        }
    ];

    const getTechIcon = (tech) => {
        const techIcons = {
            'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
            'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            'Java (Swing)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            'Java Sockets': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        };
        return techIcons[tech] || null;
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Full Stack':
                return <Globe className="w-4 h-4" />;
            case 'Desktop Application':
                return <Monitor className="w-4 h-4" />;
            default:
                return <Code className="w-4 h-4" />;
        }
    };

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

            <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                   {/*  <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-mono mb-6 shadow-lg shadow-cyan-500/20">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        <FolderOpen className="w-4 h-4" />
                        <span className="text-emerald-400">$</span>
                        <span>featured_projects</span>
                    </div> */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 font-mono max-w-2xl mx-auto">
                        A showcase of innovative solutions built with modern technologies,
                        from AI-powered farming assistance to comprehensive event management platforms.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {projects.map((project, projectIndex) => (
                        <div 
                            key={project.id} 
                            className="group bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-1"
                            style={{ transitionDelay: `${projectIndex * 100}ms` }}
                        >
                            {/* Project Header */}
                            <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 p-6 border-b border-slate-700/50">
                                <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30 text-white">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h2>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-cyan-400">{getCategoryIcon(project.category)}</span>
                                                <span className="text-sm text-slate-400 font-mono">{project.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => window.open(project.githubLink, '_blank')}
                                            className="w-10 h-10 bg-slate-700/50 hover:bg-slate-700 border border-slate-600/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                            title="View on GitHub"
                                        >
                                            <Github className="w-5 h-5 text-slate-300 hover:text-cyan-400 transition-colors" />
                                        </button>
                                        {project.demoLink && (
                                            <button
                                                onClick={() => window.open(project.demoLink, '_blank')}
                                                className="w-10 h-10 bg-slate-700/50 hover:bg-slate-700 border border-slate-600/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                                title="Live Demo"
                                            >
                                                <ExternalLink className="w-5 h-5 text-slate-300 hover:text-cyan-400 transition-colors" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <p className="text-slate-300 leading-relaxed font-mono text-sm">{project.description}</p>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Features */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-cyan-400" />
                                        <span>Key Features</span>
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 group/item">
                                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                                <span className="text-slate-300 leading-relaxed text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                        <Database className="w-5 h-5 text-cyan-400" />
                                        <span>Technologies Used</span>
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => {
                                            const techIcon = getTechIcon(tech);
                                            return (
                                                <div 
                                                    key={index} 
                                                    className="flex items-center gap-2 bg-slate-700/50 px-3 py-2 rounded-lg border border-slate-600/50 hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-300 group/tech"
                                                >
                                                    {techIcon && (
                                                        <img
                                                            src={techIcon}
                                                            alt={`${tech} logo`}
                                                            className="w-4 h-4 object-contain group-hover/tech:scale-110 transition-transform"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                            }}
                                                        />
                                                    )}
                                                    <span className="text-xs font-medium text-slate-300 font-mono group-hover/tech:text-cyan-400 transition-colors">{tech}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`mt-16 relative bg-gradient-to-r from-blue-600/90 via-cyan-600/90 to-purple-600/90 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 shadow-2xl text-white text-center transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10 rounded-xl">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `
                                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)
                            `
                        }}></div>
                    </div>

                    <div className="relative z-10">
                        <Rocket className="w-12 h-12 mx-auto mb-4 text-cyan-200 animate-pulse" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in My Work?</h3>
                        <p className="text-cyan-100 leading-relaxed mb-6 max-w-2xl mx-auto font-mono">
                            These projects represent my passion for creating innovative solutions that solve real-world problems.
                            I'm always excited to discuss new opportunities and collaborate on interesting projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/Debaneek31"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg"
                            >
                                <Github className="w-4 h-4" />
                                View All Projects
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <Link
                                href="/contact"
                                className="group bg-slate-800/60 border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Get In Touch
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;