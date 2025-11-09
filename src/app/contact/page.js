'use client';

import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Mail, User, MessageSquare, Send, MapPin, Phone, Globe, Github, Linkedin, CheckCircle, Instagram, X, Twitter, MessageCircle, AtSign } from 'lucide-react';
import Navbar from '@/components/Navbar';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message should be at least 10 characters long';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const serviceID = 'service_xdqvuzs';
            const templateID = 'template_v9lu0dn';
            const publicKey = 'CkWn01oKTBPEPY_Tc';

            const result = await emailjs.send(serviceID, templateID, formData, publicKey);

            console.log('Email successfully sent!', result.status, result.text);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Oops! Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };


    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "debaneekchhotaray@gmail.com",
            href: "mailto:debaneekchhotaray@gmail.com"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Location",
            value: "Bhubaneswar, Odisha, India",
            href: "#"
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            label: "GitHub",
            href: "https://github.com/Debaneek31",
            color: "hover:text-cyan-400"
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/debaneek3112",
            color: "hover:text-cyan-400"
        },
        {
            icon: <Twitter className="w-5 h-5" />,
            label: "Twitter",
            href: "https://x.com/DebaneekC",
            color: "hover:text-cyan-400"
        }
    ];

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden flex items-center justify-center px-4">
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
                </div>

                <Navbar />
                
                <div className="relative z-10 max-w-md w-full bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                        <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 font-mono">
                        <span className="text-emerald-400">$</span> message_sent
                    </h2>
                    <p className="text-slate-300 mb-6 font-mono">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

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
                    <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg text-sm font-mono mb-6 shadow-lg shadow-cyan-500/20">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-emerald-400">$</span>
                        <span>get_in_touch</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 font-mono max-w-2xl mx-auto">
                        Thinking of a new project or partnership? Let’s turn your vision into reality 
                        Send me a message and let’s create something awesome!.
                    </p>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                            <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                                <AtSign className="w-5 h-5 text-cyan-400" />
                                <span>Send me a message</span>
                            </h2>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 font-mono">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 pr-3 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 font-mono ${errors.name ? 'border-red-500/50 bg-red-500/10' : 'border-slate-600/50'
                                                }`}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-400 font-mono">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 font-mono">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 pr-3 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 font-mono ${errors.email ? 'border-red-500/50 bg-red-500/10' : 'border-slate-600/50'
                                                }`}
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-400 font-mono">{errors.email}</p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 font-mono">
                                        Your Message
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3 pointer-events-none">
                                            <MessageSquare className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 pr-3 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 resize-none font-mono ${errors.message ? 'border-red-500/50 bg-red-500/10' : 'border-slate-600/50'
                                                }`}
                                            placeholder="Leave Feedback about the Website, Career Opportunities or Just to say hello etc."
                                        />
                                    </div>
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-400 font-mono">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-500 hover:to-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10"></div>
                                            <span className="relative z-10 font-mono">Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 relative z-10" />
                                            <span className="relative z-10 font-mono">Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Contact Details */}
                        <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center gap-2">
                                <Mail className="w-5 h-5 text-cyan-400" />
                                <span>Contact Information</span>
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 font-mono uppercase">{info.label}</p>
                                            {info.href !== "#" ? (
                                                <a href={info.href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-mono text-sm break-all">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-slate-300 font-mono text-sm">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center gap-2">
                                <Globe className="w-5 h-5 text-cyan-400" />
                                <span>Connect With Me</span>
                            </h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 hover:scale-110"
                                        title={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Response */}
                        <div className="bg-gradient-to-r from-blue-600/90 via-cyan-600/90 to-purple-600/90 backdrop-blur-sm rounded-xl border border-cyan-400/30 shadow-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-2 font-mono flex items-center gap-2">
                                <MessageCircle className="w-5 h-5 text-cyan-200" />
                                <span>Quick Response</span>
                            </h3>
                            <p className="text-cyan-100 text-sm leading-relaxed font-mono">
                                I typically respond to messages within 24 hours. For urgent inquiries,
                                feel free to reach out via email or my socials.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;