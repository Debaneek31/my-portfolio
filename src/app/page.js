"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Github,
  ArrowRight,
  Download,
  ExternalLink,
  Linkedin,
  X,
  Code2,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const canvasRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Intersection Observer for About section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    // Animated binary background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binaryChars = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(15, 23, 42, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#3b82f6";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text =
          binaryChars[Math.floor(Math.random() * binaryChars.length)];
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
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sourav Mishra Resume.pdf";
    link.download = "Sourav_Mishra_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const codeSnippets = [
    {
      lang: "JS",
      code: "const developer = new Developer();",
      color: "text-yellow-400",
    },
    { lang: "PY", code: "def build_amazing_things():", color: "text-blue-400" },
    {
      lang: "TS",
      code: "interface Innovation { code: string; }",
      color: "text-cyan-400",
    },
  ];

  const techIcons = [
    { Icon: Code2, label: "Full Stack", color: "text-blue-500" },
    { Icon: Terminal, label: "DevOps", color: "text-green-500" },
    { Icon: Database, label: "Database", color: "text-purple-500" },
    { Icon: Cloud, label: "Cloud", color: "text-cyan-500" },
    { Icon: Cpu, label: "Systems", color: "text-red-500" },
    { Icon: Zap, label: "Performance", color: "text-yellow-500" },
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
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Navbar />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Main Hero Section */}
        <div className="min-h-screen flex flex-col justify-start items-center text-center pt-16 md:pt-20 pb-4 relative">
          <div
            className={`w-full transition-all duration-1000 ${isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                <Typewriter
                  words={["Hi, I'm Debaneek"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            {/* About Section */}
            <div
              ref={aboutRef}
              className="w-full px-4 sm:px-6 lg:px-8 py-3 md:py-4"
            >
              <div className="max-w-7xl mx-auto">
                <div
                  className={`bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${isAboutVisible
                    ? "opacity-100 translate-y-0 shadow-cyan-500/10"
                    : "opacity-0 translate-y-10"
                    } hover:shadow-cyan-500/20 hover:border-cyan-500/30`}
                >
                  <div className="grid md:grid-cols-[60%_40%] gap-0">
                    {/* Left Column - Text Content */}
                    <div
                      className="p-4 md:p-5 lg:p-6 flex flex-col justify-center min-h-[320px] md:min-h-[380px]"

                    >
                      <h2
                        className={`text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2.5 md:mb-3 transition-all duration-1000 delay-200 ${isAboutVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-10"
                          }`}
                      >
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                          About me
                        </span>
                      </h2>

                      <div className="space-y-1.5 md:space-y-2 text-slate-300 leading-snug">
                        <p
                          className={`text-xs md:text-sm lg:text-base transition-all duration-1000 delay-300 ${isAboutVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                            }`}
                        >
                          I'm{" "}
                          <span className="text-cyan-400 font-semibold">
                            Debaneek Chhotaray
                          </span>
                          , a passionate full-stack developer based in India
                          with expertise in building modern web applications and
                          innovative solutions.
                        </p>

                        <p
                          className={`text-xs md:text-sm lg:text-base transition-all duration-1000 delay-400 ${isAboutVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                            }`}
                        >
                          Over the years, my focus has shifted towards creating
                          high-performance, scalable applications using
                          cutting-edge technologies like React, Next.js,
                          Node.js, and cloud platforms.
                        </p>

                        <p
                          className={`text-xs md:text-sm lg:text-base transition-all duration-1000 delay-500 ${isAboutVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                            }`}
                        >
                          I specialize in crafting responsive websites, web
                          applications, and systems that help businesses grow
                          and scale. My work is centered on creating solutions
                          that drive conversions, enable seamless user
                          experiences, and deliver measurable results through
                          clean, efficient code.
                        </p>
                      </div>

                      {/* Tech badges */}
                      <div
                        className={`mt-3 md:mt-4 flex flex-wrap gap-1.5 md:gap-2 transition-all duration-1000 delay-600 ${isAboutVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                          }`}
                      >
                        {["Full Stack", "React", "Next.js", "Node.js"].map(
                          (tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 md:px-3 py-0.5 md:py-1 bg-slate-700/50 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-medium hover:border-cyan-500/60 hover:bg-slate-700/70 hover:scale-110 transition-all duration-300 cursor-default"
                              style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Right Column - Image */}
                    <div
                      className={`relative h-[320px] md:h-[380px] group transition-all duration-1000 delay-300 ${isAboutVisible
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 translate-x-10 scale-95"
                        } flex items-center justify-center overflow-hidden`}
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>

                      <img
                        src="/ronnie1.jpg"
                        alt="Debaneek Chhotaray"
                        className="w-full h-full object-cover relative z-20 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Overlay gradient for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none z-10"></div>

                      {/* Border glow on hover */}
                      <div className="absolute inset-0 border-4 border-cyan-500/0 group-hover:border-cyan-500/20 transition-all duration-500 pointer-events-none z-30 rounded-r-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tech Icons Grid */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-3xl mx-auto">
              {techIcons.map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center gap-2 p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <tech.Icon
                    className={`w-8 h-8 ${tech.color} group-hover:scale-125 transition-transform`}
                  />
                  <span className="text-xs text-slate-400 font-mono">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
              <button
                onClick={() => setIsConnectModalOpen(true)}
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <Mail size={20} className="relative z-10" />
                <span className="relative z-10">Let's Connect</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={handleDownload}
                className="group bg-slate-800/60 backdrop-blur-sm border-2 border-slate-600 text-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-700/60 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
            </div>

          </div>
        </div>

        {/* Skills Showcase Section */}
        <div
          className={`py-20 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Tech Stack & Expertise
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "TypeScript",
                "MongoDB",
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="text-2xl font-bold text-cyan-400 mb-2 font-mono">
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div
          className={`py-20 transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="relative bg-gradient-to-r from-blue-600/90 via-cyan-600/90 to-purple-600/90 backdrop-blur-sm rounded-3xl p-12 text-center text-white overflow-hidden max-w-5xl mx-auto border border-cyan-400/30 shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)
                `,
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="mb-4">
                <Code2 className="w-16 h-16 mx-auto mb-4 text-cyan-200 animate-pulse" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Let's connect and discuss how
                we can work together to create innovative solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Start a Conversation
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/projects"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  View My Work
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Modal */}
      {isConnectModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          onClick={() => setIsConnectModalOpen(false)}
        >
          <div
            className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8 max-w-md w-full relative transition-all duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsConnectModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-white mb-6 text-center font-mono">
              <span className="text-cyan-400">$</span> connect --social
            </h3>
            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:debaneekchhotaray@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors border border-slate-600 hover:border-cyan-500/50 group"
              >
                <Mail size={24} className="text-cyan-400" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors font-mono">
                    debaneekchhotaray@gmail.com
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Debaneek31"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors border border-slate-600 hover:border-cyan-500/50 group"
              >
                <Github size={24} className="text-white" />
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <p className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors font-mono">
                    /Debaneek31
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/debaneek3112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors border border-slate-600 hover:border-cyan-500/50 group"
              >
                <Linkedin size={24} className="text-cyan-400" />
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">
                    Debaneek Chhotaray
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
