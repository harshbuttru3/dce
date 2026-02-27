import React, { useEffect } from 'react';
import { Cpu, Globe, GraduationCap, Laptop, Terminal, ExternalLink, Download } from 'lucide-react';

const CDac = () => {
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

    const courses = [
        {
            title: "Embedded Systems Design",
            duration: "6 Months",
            focus: "Microcontrollers, RTOS, Device Drivers",
            icon: <Cpu className="text-[#c6b677]" />
        },
        {
            title: "Advanced Computing (DAC)",
            duration: "6 Months",
            focus: "Java, .NET, Database, Web Tech",
            icon: <Laptop className="text-[#c6b677]" />
        },
        {
            title: "Big Data Analytics",
            duration: "4 Months",
            focus: "Hadoop, Spark, Data Mining",
            icon: <Terminal className="text-[#c6b677]" />
        },
        {
            title: "IT Infrastructure & Security",
            duration: "5 Months",
            focus: "Networking, Linux, Ethical Hacking",
            icon: <Globe className="text-[#c6b677]" />
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#133b5c]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center px-6 max-w-5xl pt-20">
                    <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-white text-xs font-bold uppercase tracking-widest">DCE x C-DAC Collaboration</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 uppercase tracking-tight">C-DAC Center</h1>
                    <p className="text-[#c6b677] text-lg md:text-2xl font-light mb-10 max-w-3xl mx-auto italic">
                        "Pioneering Advanced Computing Excellence in Bihar."
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-[#c6b677] text-[#133b5c] px-8 py-3 rounded-sm font-bold shadow-xl hover:bg-white transition-all flex items-center gap-2">
                            <GraduationCap size={20} /> Enroll Now
                        </button>
                        <a href="https://www.cdac.in" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white backdrop-blur-md px-8 py-3 rounded-sm font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                            Official Website <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Collaboration Overview */}
            <section className="py-24 px-8 md:px-16 container mx-auto bg-white">
                <div className="flex flex-col lg:flex-row gap-20 reveal">
                    <div className="lg:w-3/5">
                        <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">About the Program</span>
                        <h2 className="text-4xl font-serif font-bold text-[#133b5c] mb-8 leading-tight">Empowering Youth with Advanced Computational Skills</h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                            <p>
                                DCE Darbhanga has partnered with the Centre for Development of Advanced Computing (C-DAC) to establish a premier training center. This collaboration aims to provide industry-standard certification and skill development in the field of high-end computing.
                            </p>
                            <p>
                                The center provides access to advanced resources, supercomputing architectures, and specialized faculty training programs, making our students industry-ready for the global IT market.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-2/5">
                        <div className="bg-[#f8f9fa] p-10 rounded-3xl border border-gray-100 shadow-inner">
                            <h4 className="text-[#133b5c] font-bold mb-6 flex items-center gap-2"><div className="w-2 h-10 bg-[#c6b677] rounded-full"></div> Key Objectives</h4>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-[#133b5c] text-white flex-shrink-0 flex items-center justify-center text-[10px] mt-1">01</div>
                                    <p className="text-gray-500 text-sm">To bridge the gap between academic curriculum and high-tech industry requirements.</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-[#133b5c] text-white flex-shrink-0 flex items-center justify-center text-[10px] mt-1">02</div>
                                    <p className="text-gray-500 text-sm">Promote research and development in indigenous technology and supercomputing.</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-[#133b5c] text-white flex-shrink-0 flex items-center justify-center text-[10px] mt-1">03</div>
                                    <p className="text-gray-500 text-sm">Provide globally recognized certification through rigorous training and evaluation.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Catalog */}
            <section className="py-24 bg-[#133b5c] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-8 md:px-16 relative z-10 reveal">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#c6b677]">Training Portfolio</h2>
                        <p className="text-white/60">Specialized postgraduate and diploma programs for engineering aspirants.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {courses.map((course, i) => (
                            <div key={i} className="flex gap-8 bg-white/5 p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group items-center">
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-4xl group-hover:bg-white group-hover:text-[#133b5c] transition-all transform group-hover:rotate-6">
                                    {course.icon}
                                </div>
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-2xl font-bold text-[#c6b677] group-hover:text-white transition-colors">{course.title}</h4>
                                        <span className="text-[10px] bg-[#c6b677] text-[#133b5c] px-3 py-1 rounded-full font-bold uppercase tracking-widest">{course.duration}</span>
                                    </div>
                                    <p className="text-white/50 text-sm leading-relaxed mb-4">{course.focus}</p>
                                    <button className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">Course Syllabus <Download size={14} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section className="py-24 px-8 md:px-16 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 reveal">
                    <div className="bg-[#f8f9fa] p-12 rounded-3xl text-center">
                        <h4 className="text-4xl font-bold text-[#133b5c] mb-2 italic">Param</h4>
                        <p className="text-[#c6b677] font-bold uppercase tracking-widest text-xs mb-6">Supercomputing Access</p>
                        <p className="text-gray-500 text-sm italic font-light">"Access to India's fastest computational architectures for research and high-end training."</p>
                    </div>
                    <div className="bg-[#133b5c] p-12 rounded-3xl text-center text-white">
                        <h4 className="text-4xl font-bold text-[#c6b677] mb-2 italic">Industry</h4>
                        <p className="text-white/50 font-bold uppercase tracking-widest text-xs mb-6">Placement Linkage</p>
                        <p className="text-white/70 text-sm italic font-light">"Dedicated placement support within C-DAC's vast ecosystem of technology partners."</p>
                    </div>
                    <div className="bg-[#f8f9fa] p-12 rounded-3xl text-center">
                        <h4 className="text-4xl font-bold text-[#133b5c] mb-2 italic">Faculty</h4>
                        <p className="text-[#c6b677] font-bold uppercase tracking-widest text-xs mb-6">Expert Mentorship</p>
                        <p className="text-gray-500 text-sm italic font-light">"Mentorship by C-DAC scientists and engineers with real-world implementation experience."</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CDac;
