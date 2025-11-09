'use client';

import React from 'react';
import { Github, ExternalLink, Code, MessageSquare, Smartphone, Calendar, Monitor, Users, Shield, Bell, Zap, Database, Globe } from 'lucide-react';

const Projects = () => {
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
            title: "Network Desktop Manager",
            description: "Secure remote desktop access software with administrative controls and real-time communication",
            technologies: ["Java (Swing)", "Java Sockets"],
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
        <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A showcase of innovative solutions built with modern technologies,
                        from AI-powered farming assistance to comprehensive event management platforms.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            {/* Project Header */}
                            <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold">{project.title}</h2>
                                            <div className="flex items-center gap-2 mt-1">
                                                {getCategoryIcon(project.category)}
                                                <span className="text-sm opacity-90">{project.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => window.open(project.githubLink, '_blank')}
                                            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-200"
                                            title="View on GitHub"
                                        >
                                            <Github className="w-5 h-5" />
                                        </button>
                                        {project.demoLink && (
                                            <button
                                                onClick={() => window.open(project.demoLink, '_blank')}
                                                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors duration-200"
                                                title="Live Demo"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <p className="text-white/90 leading-relaxed">{project.description}</p>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Features */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-yellow-500" />
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 text-gray-700">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <Database className="w-5 h-5 text-purple-500" />
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => {
                                            const techIcon = getTechIcon(tech);
                                            return (
                                                <div key={index} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                                                    {techIcon && (
                                                        <img
                                                            src={techIcon}
                                                            alt={`${tech} logo`}
                                                            className="w-4 h-4 object-contain"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                            }}
                                                        />
                                                    )}
                                                    <span className="text-sm font-medium text-gray-700">{tech}</span>
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
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
                    <p className="text-blue-100 leading-relaxed mb-6 max-w-2xl mx-auto">
                        These projects represent my passion for creating innovative solutions that solve real-world problems.
                        I'm always excited to discuss new opportunities and collaborate on interesting projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://github.com/souravmishra7456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                            <Github className="w-4 h-4" />
                            View All Projects
                        </a>

                        <a
                            href="https://sourav-portfolio-psi.vercel.app/contact"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-200 border border-blue-400 text-center"
                        >
                            Get In Touch
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;