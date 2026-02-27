import React, { useEffect } from 'react';
import { Mic2, Headphones, Users, MessageSquare, Award, Download } from 'lucide-react';

const LanguageLab = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const features = [
        {
            title: "Interactive Software",
            description: "State-of-the-art language learning software for phonetic training and accent neutralization.",
            icon: <Mic2 size={32} />
        },
        {
            title: "Audio-Visual Systems",
            description: "High-fidelity headphones and recording equipment for precise self-evaluation.",
            icon: <Headphones size={32} />
        },
        {
            title: "Soft Skills Training",
            description: "Dedicated modules for group discussions, mock interviews, and presentation skills.",
            icon: <MessageSquare size={32} />
        },
        {
            title: "Collaborative Learning",
            description: "Structured environment for pair and group activities to build confidence.",
            icon: <Users size={32} />
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#133b5c]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center px-6 pt-20">
                    <span className="text-[#c6b677] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Skill Development Center</span>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Language Laboratory</h1>
                    <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        Empowering students with superior communication skills and linguistic precision.
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 px-8 md:px-16 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center reveal">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-serif font-bold text-[#133b5c] mb-8">Nurturing Global Communication</h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                            <p>
                                The Language Lab at Darbhanga College of Engineering is a state-of-the-art facility designed to help students master the English language and develop professional communication skills.
                            </p>
                            <p>
                                Equipped with the latest Orell Digital Language Lab (ODLL) software, the facility provides an immersive environment for students to improve their listening, speaking, reading, and writing (LSRW) skills.
                            </p>
                            <div className="flex items-center gap-4 text-[#133b5c] font-bold">
                                <Award className="text-[#c6b677]" />
                                <span>Certification from Industry Partners</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                        <div className="bg-[#f8f9fa] p-8 rounded-2xl shadow-sm border-b-4 border-[#c6b677]">
                            <p className="text-4xl font-bold text-[#133b5c]">30+</p>
                            <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Workstations</p>
                        </div>
                        <div className="bg-[#133b5c] p-8 rounded-2xl shadow-xl text-white">
                            <p className="text-4xl font-bold text-[#c6b677]">100%</p>
                            <p className="text-xs uppercase tracking-widest text-white/50 mt-2">Student Access</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-[#133b5c] text-white">
                <div className="container mx-auto px-8 md:px-16 reveal">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">Core Facilities</h2>
                        <p className="text-white/60">Comprehensive resources for professional linguistic development.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                                <div className="text-[#c6b677] mb-6 group-hover:scale-110 transition-transform">
                                    {f.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-[#c6b677]">{f.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed font-light">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Modules */}
            <section className="py-24 px-8 md:px-16 container mx-auto">
                <div className="max-w-4xl mx-auto reveal">
                    <h2 className="text-3xl font-serif font-bold text-[#133b5c] text-center mb-16">Training Modules</h2>
                    <div className="space-y-4">
                        {["Phonetics & Pronunciation", "Vocabulary Building", "Group Discussion Techniques", "Personal Interview Preparation", "Resume Writing Workshops"].map((item, i) => (
                            <div key={i} className="flex items-center gap-6 p-6 bg-[#f8f9fa] rounded-xl border border-gray-100 hover:border-[#c6b677] transition-all">
                                <span className="w-10 h-10 rounded-full bg-[#133b5c] text-white flex items-center justify-center font-bold">{i + 1}</span>
                                <span className="text-lg text-[#133b5c] font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#c6b677] text-center">
                <h2 className="text-3xl font-serif font-bold text-[#133b5c] mb-6">Start Your Journey to Fluency</h2>
                <button className="bg-[#133b5c] text-white px-10 py-4 rounded-sm font-bold shadow-xl hover:bg-white hover:text-[#133b5c] transition-all flex items-center gap-2 mx-auto">
                    <Download size={20} /> Download Lab Guidelines
                </button>
            </section>
        </div>
    );
};

export default LanguageLab;
