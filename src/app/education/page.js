'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Award, GraduationCap, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';


const educationData = [
    {
        institution: "Einstein Academy of Technology and Management",
        degree: "B. Tech in Computer Science & Engineering",
        score: "CGPA: 8.25",
        duration: "2025",
        location: "Bhubaneswar, Odisha",
        logo: "🎓",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
        borderColor: "border-purple-200",
        iconColor: "text-purple-600",
        type: "Undergraduate",
        image: "https://images.squarespace-cdn.com/content/v1/57713a8e2994cae381dd86fe/75119539-209d-48e4-83e9-4134ada499d7/iter+gate.jpg?format=2500w"
    },
    {
        institution: "St. Xavier International School",
        degree: "Class XII",
        score: "Percentage: 66%",
        duration: "2021",
        location: "Patia, Bhubaneswar, Odisha",
        logo: "🏫",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
        borderColor: "border-blue-200",
        iconColor: "text-blue-600",
        type: "Higher Secondary",
        image: "https://stxavierskedargouri.in/wp-content/uploads/2025/06/3.png"
    },
    {
        institution: "Carmel English Medium School (CBSE)",
        degree: "Class X",
        score: "Percentage: 75%",
        duration: "2019",
        location: "Khordha, Odisha",
        logo: "🏛️",
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
        borderColor: "border-emerald-200",
        iconColor: "text-emerald-600",
        type: "Secondary",
        image: "https://images.jdmagicbox.com/comp/jatani/a9/9999px674.x674.110411144249.d2a9/catalogue/carmel-english-school-arugul-jatani-cbse-schools-TLHlub7Ph4.jpg"
    }
    
];

export default function EnhancedEducationPage() {
    const [hoveredCard, setHoveredCard] = useState(null);
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
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-mono mb-6 shadow-lg shadow-cyan-500/20">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        <BookOpen className="w-4 h-4" />
                        <span className="text-emerald-400">$</span>
                        <span>education_history</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Educational Journey
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 font-mono max-w-2xl mx-auto leading-relaxed">
                        Exploring the milestones that shaped my academic foundation and technical expertise
                    </p>
                </div>



                {/* Timeline */}
                <div className={`relative transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Animated timeline line - hidden on mobile */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50 rounded-full shadow-lg"></div>

                    {/* Mobile timeline line - visible on mobile */}
                    <div className="lg:hidden absolute left-6 md:left-8 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50 rounded-full shadow-lg"></div>

                    {educationData.map((edu, index) => (
                        <div key={index} className="mb-16 last:mb-0">
                            {/* Desktop Layout */}
                            <div className={`hidden lg:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                {/* Content Card */}
                                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                    <div
                                        className="group relative bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-[1.02]"
                                        onMouseEnter={() => setHoveredCard(index)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        {/* Institution Image */}
                                        <div className="mb-4 overflow-hidden rounded-lg border border-slate-700/50">
                                            <img
                                                src={edu.image}
                                                alt={`${edu.institution} campus`}
                                                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Card Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-2xl">{edu.logo}</span>
                                                    <span className="px-2 py-1 text-xs font-mono font-semibold text-cyan-400 bg-slate-700/50 border border-cyan-500/30 rounded-lg">
                                                        {edu.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                    {edu.institution}
                                                </h3>
                                                <p className="text-base font-semibold text-slate-300 mb-3">{edu.degree}</p>
                                            </div>
                                        </div>

                                        {/* Score Badge */}
                                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-4 shadow-lg shadow-cyan-500/30">
                                            <Award className="w-4 h-4" />
                                            <span className="font-mono">{edu.score}</span>
                                        </div>

                                        {/* Details */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1.5 rounded-lg border border-slate-600/50">
                                                <Calendar className="w-4 h-4 text-cyan-400" />
                                                <span className="text-slate-300 font-mono text-sm">{edu.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1.5 rounded-lg border border-slate-600/50">
                                                <MapPin className="w-4 h-4 text-cyan-400" />
                                                <span className="text-slate-300 font-mono text-sm">{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Timeline Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-xl shadow-cyan-500/50 border-4 border-slate-900 flex items-center justify-center transform hover:scale-125 transition-transform duration-300">
                                        <span className="text-xl">{edu.logo}</span>
                                    </div>
                                    {/* Pulse effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
                                </div>

                                {/* Empty space for layout */}
                                <div className="w-5/12"></div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="lg:hidden relative pl-16 md:pl-20">
                                {/* Mobile Timeline Node */}
                                <div className="absolute left-6 md:left-8 transform -translate-x-1/2 z-10">
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-xl shadow-cyan-500/50 border-4 border-slate-900 flex items-center justify-center">
                                        <span className="text-lg">{edu.logo}</span>
                                    </div>
                                </div>

                                {/* Mobile Content Card */}
                                <div
                                    className="group relative bg-slate-800/60 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 shadow-xl hover:border-cyan-500/50 transition-all duration-300"
                                >
                                    {/* Mobile Institution Image */}
                                    <div className="mb-4 overflow-hidden rounded-lg border border-slate-700/50">
                                        <img
                                            src={edu.image}
                                            alt={`${edu.institution} campus`}
                                            className="w-full h-32 sm:h-40 object-cover"
                                        />
                                    </div>

                                    {/* Mobile Card Header */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xl">{edu.logo}</span>
                                            <span className="px-2 py-1 text-xs font-mono font-semibold text-cyan-400 bg-slate-700/50 border border-cyan-500/30 rounded-lg">
                                                {edu.type}
                                            </span>
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-sm sm:text-base font-semibold text-slate-300 mb-2">{edu.degree}</p>
                                    </div>

                                    {/* Mobile Score Badge */}
                                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold mb-4 shadow-lg shadow-cyan-500/30">
                                        <Award className="w-3 h-3" />
                                        <span className="font-mono">{edu.score}</span>
                                    </div>

                                    {/* Mobile Details */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1.5 rounded-lg border border-slate-600/50">
                                            <Calendar className="w-4 h-4 text-cyan-400" />
                                            <span className="text-slate-300 font-mono text-xs">{edu.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1.5 rounded-lg border border-slate-600/50">
                                            <MapPin className="w-4 h-4 text-cyan-400" />
                                            <span className="text-slate-300 font-mono text-xs">{edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 shadow-xl hover:border-cyan-500/50 transition-all duration-300 max-w-2xl mx-auto">
                        <GraduationCap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Ready for the Next Chapter
                            </span>
                        </h3>
                        <p className="text-slate-300 mb-6 font-mono">
                            Undergraduate in Computer Science & Engineering, ready to apply my knowledge in real-world challenges.
                        </p>
                        <div className="flex items-center justify-center gap-2 bg-slate-700/50 px-4 py-2 rounded-lg border border-emerald-500/30 inline-flex">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-emerald-400 font-mono text-sm">status: available_for_opportunities</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}