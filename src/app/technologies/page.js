'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Wrench, Star, Terminal, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';


const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
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

    const skillCategories = {
        languages: {
            title: "Programming Languages",
            icon: <Code className="w-6 h-6" />,
            color: "from-blue-500 to-blue-600",
            skills: [
                { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                
            ]
        },
        web: {
            title: "Web Development",
            icon: <Globe className="w-6 h-6" />,
            color: "from-green-500 to-green-600",
            skills: [
                { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                { name: "Tailwind CSS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" },
                { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
            ]
        },
        databases: {
            title: "Databases",
            icon: <Database className="w-6 h-6" />,
            color: "from-purple-500 to-purple-600",
            skills: [
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
            ]
        },
        tools: {
            title: "Tools & Technologies",
            icon: <Wrench className="w-6 h-6" />,
            color: "from-orange-500 to-orange-600",
            skills: [
                { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Chrome DevTools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
                { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
                { name: "Power BI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
            ]
        }
    };

    const getAllSkills = () => {
        return Object.values(skillCategories).flatMap(category =>
            category.skills.map(skill => ({ ...skill, category: category.title }))
        );
    };

    const getFilteredSkills = () => {
        if (selectedCategory === 'all') {
            return getAllSkills();
        }
        return skillCategories[selectedCategory]?.skills.map(skill => ({
            ...skill,
            category: skillCategories[selectedCategory].title
        })) || [];
    };

    const categories = [
        { key: 'all', label: 'All Skills', icon: <Star className="w-4 h-4" /> },
        { key: 'languages', label: 'Languages', icon: <Code className="w-4 h-4" /> },
        { key: 'web', label: 'Web Dev', icon: <Globe className="w-4 h-4" /> },
        { key: 'databases', label: 'Databases', icon: <Database className="w-4 h-4" /> },
        { key: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> }
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

            <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-mono mb-6 shadow-lg shadow-cyan-500/20">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        <Terminal className="w-4 h-4" />
                        <span className="text-emerald-400">$</span>
                        <span>tech_stack</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Technical Skills
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 font-mono">Expertise across the full development stack</p>
                </div>

                {/* Category Filter */}
                <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                selectedCategory === category.key
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/50 scale-105'
                                    : 'bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:bg-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-400 shadow-md hover:shadow-lg'
                            }`}
                        >
                            <span className={selectedCategory === category.key ? 'text-white' : 'text-cyan-400'}>{category.icon}</span>
                            <span className="font-mono text-sm">{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Overview Cards */}
                {selectedCategory === 'all' && (
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {Object.entries(skillCategories).map(([key, category]) => (
                            <div 
                                key={key} 
                                className="group bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{category.title}</h3>
                                <p className="text-slate-400 text-sm font-mono">{category.skills.length} technologies</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Skills Grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {getFilteredSkills().map((skill, index) => (
                        <div 
                            key={index} 
                            className="group bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg p-5 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Skill Header */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center p-2 border border-slate-600/50 group-hover:border-cyan-500/50 transition-colors">
                                    <img
                                        src={skill.logo}
                                        alt={`${skill.name} logo`}
                                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const fallback = e.target.nextElementSibling;
                                            if (fallback) fallback.style.display = 'flex';
                                        }}
                                    />
                                    <div 
                                        className="w-8 h-8 bg-slate-600 rounded flex items-center justify-center text-xs font-bold text-cyan-400 font-mono" 
                                        style={{ display: 'none' }}
                                    >
                                        {skill.name.charAt(0)}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">{skill.name}</h3>
                                    {selectedCategory === 'all' && (
                                        <p className="text-xs text-slate-400 font-mono mt-1">{skill.category}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`mt-12 relative bg-gradient-to-r from-blue-600/90 via-cyan-600/90 to-purple-600/90 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 shadow-2xl text-white text-center transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10 rounded-xl">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `
                                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)
                            `
                        }}></div>
                    </div>

                    <div className="relative z-10">
                        <Cpu className="w-12 h-12 mx-auto mb-4 text-cyan-200 animate-pulse" />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Collaborate?</h3>
                        <p className="text-cyan-100 leading-relaxed mb-6 font-mono max-w-2xl mx-auto">
                            With expertise across the full development stack, I'm equipped to tackle complex projects
                            and deliver scalable solutions. Let's build something amazing together!
                        </p>
                        <Link 
                            href="/contact"
                            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors transform hover:scale-105 shadow-lg"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;