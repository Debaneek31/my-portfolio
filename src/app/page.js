'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, ArrowRight, Download, ExternalLink, Linkedin, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import Link from "next/link";



export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sourav Mishra Resume.pdf';
    link.download = 'Sourav_Mishra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Navbar />

      <div className="relative z-10 w-full px-8 md:px-2">

        {/* Main Hero Section */}
        <div className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for opportunities
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 leading-snug text-center px-4 sm:px-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent break-words">
                <Typewriter
                  words={["Hi, I'm Debnath"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl text-slate-600 mb-6 font-light">
              Full Stack Developer
            </p>

            {/* Brief Description */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              A Computer Science Graduate passionate about building scalable web applications
              and innovative solutions using modern technologies.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
              <button onClick={() => setIsConnectModalOpen(true)} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                <Mail size={20} />
                Let's Connect
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleDownload}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 hover:border-slate-400 transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={20} />
                Resume
              </button>
            </div>


          </div>
        </div>

        {/* Final CTA */}
        <div className={`py-20 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's connect and discuss how we can work together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Mail size={20} />
                  Start a Conversation
                </Link>
                <Link
                  href="/projects"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isConnectModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          onClick={() => setIsConnectModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative transition-all duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsConnectModalOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Let's Connect</h3>
            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:mishra.sourav79@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 group"
              >
                <Mail size={24} className="text-blue-600" />
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-sm text-slate-500 group-hover:text-blue-600 transition-colors">mishra.sourav79@gmail.com</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/souravmishra7456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 group"
              >
                <Github size={24} className="text-slate-800" />
                <div>
                  <p className="font-semibold text-slate-800">GitHub</p>
                  <p className="text-sm text-slate-500 group-hover:text-slate-900 transition-colors">/souravmishra7456</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sourav456/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 group"
              >
                <Linkedin size={24} className="text-blue-700" />
                <div>
                  <p className="font-semibold text-slate-800">LinkedIn</p>
                  <p className="text-sm text-slate-500 group-hover:text-blue-700 transition-colors">Sourav Mishra</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
