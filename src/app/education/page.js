'use client';

import React, { useState } from 'react';
import { MapPin, Calendar, Award, GraduationCap } from 'lucide-react';

const educationData = [
    {
        institution: "Siksha 'O' Anusandhan (ITER)",
        degree: "B. Tech in Computer Science & Engineering",
        score: "CGPA: 8.87",
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
        institution: "St. Xavier's High School (CBSE)",
        degree: "Class XII",
        score: "Percentage: 91.2%",
        duration: "2021",
        location: "Bhubaneswar, Odisha",
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
        score: "Percentage: 95%",
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
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                        <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
                        Educational Journey
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Exploring the milestones that shaped my academic foundation and technical expertise
                    </p>
                </div>



                {/* Timeline */}
                <div className="relative">
                    {/* Animated timeline line - hidden on mobile */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-blue-400 to-emerald-400 rounded-full shadow-lg"></div>

                    {/* Mobile timeline line - visible on mobile */}
                    <div className="lg:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-purple-400 via-blue-400 to-emerald-400 rounded-full shadow-lg"></div>

                    {educationData.map((edu, index) => (
                        <div key={index} className="mb-16 last:mb-0">
                            {/* Desktop Layout */}
                            <div className={`hidden lg:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                {/* Content Card */}
                                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                    <div
                                        className={`group relative ${edu.bgColor} backdrop-blur-sm rounded-3xl p-8 border-2 ${edu.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${hoveredCard === index ? 'ring-4 ring-blue-200' : ''
                                            }`}
                                        onMouseEnter={() => setHoveredCard(index)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        {/* Institution Image */}
                                        <div className="mb-6 overflow-hidden rounded-2xl">
                                            <img
                                                src={edu.image}
                                                alt={`${edu.institution} campus`}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Card Header */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="text-3xl">{edu.logo}</span>
                                                    <span className={`px-3 py-1 text-xs font-semibold ${edu.iconColor} bg-white/50 rounded-full`}>
                                                        {edu.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                                                    {edu.institution}
                                                </h3>
                                                <p className="text-lg font-semibold text-slate-700 mb-3">{edu.degree}</p>
                                            </div>
                                        </div>

                                        {/* Score Badge */}
                                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${edu.color} text-white px-4 py-2 rounded-full text-lg font-bold mb-6 shadow-lg`}>
                                            <Award className="w-5 h-5" />
                                            {edu.score}
                                        </div>

                                        {/* Details */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-slate-600">
                                                <Calendar className="w-5 h-5" />
                                                <span className="font-medium">{edu.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-600">
                                                <MapPin className="w-5 h-5" />
                                                <span className="font-medium">{edu.location}</span>
                                            </div>
                                        </div>

                                        {/* Hover Effect Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* Desktop Timeline Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-full shadow-xl border-4 border-white flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-2xl">{edu.logo}</span>
                                    </div>
                                    {/* Pulse effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} rounded-full animate-ping opacity-20`}></div>
                                </div>

                                {/* Empty space for layout */}
                                <div className="w-5/12"></div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="lg:hidden relative pl-20">
                                {/* Mobile Timeline Node */}
                                <div className="absolute left-8 transform -translate-x-1/2 z-10">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${edu.color} rounded-full shadow-xl border-4 border-white flex items-center justify-center`}>
                                        <span className="text-lg">{edu.logo}</span>
                                    </div>
                                </div>

                                {/* Mobile Content Card */}
                                <div
                                    className={`group relative ${edu.bgColor} backdrop-blur-sm rounded-3xl p-6 border-2 ${edu.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300`}
                                >
                                    {/* Mobile Institution Image */}
                                    <div className="mb-4 overflow-hidden rounded-xl">
                                        <img
                                            src={edu.image}
                                            alt={`${edu.institution} campus`}
                                            className="w-full h-32 sm:h-40 object-cover"
                                        />
                                    </div>

                                    {/* Mobile Card Header */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">{edu.logo}</span>
                                            <span className={`px-2 py-1 text-xs font-semibold ${edu.iconColor} bg-white/50 rounded-full`}>
                                                {edu.type}
                                            </span>
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-sm sm:text-base font-semibold text-slate-700 mb-2">{edu.degree}</p>
                                    </div>

                                    {/* Mobile Score Badge */}
                                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${edu.color} text-white px-3 py-1.5 rounded-full text-sm font-bold mb-4 shadow-lg`}>
                                        <Award className="w-4 h-4" />
                                        {edu.score}
                                    </div>

                                    {/* Mobile Details */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span className="font-medium">{edu.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                                            <MapPin className="w-4 h-4" />
                                            <span className="font-medium">{edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-20">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready for the Next Chapter</h3>
                        <p className="text-slate-600 mb-6">
                            Undergraduate in Computer Science & Engineering, ready to apply my knowledge in real-world challenges.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                Available for opportunities
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}