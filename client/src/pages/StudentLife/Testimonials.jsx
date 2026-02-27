import React, { useEffect } from 'react';
import { Quote, Star, User, GraduationCap, MessageSquare, Play } from 'lucide-react';

const Testimonials = () => {
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

    const testimonialData = [
        {
            name: "Rahul Kumar",
            batch: "Class of 2024",
            branch: "Computer Science & Engineering",
            company: "Adobe",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
            text: "DCE Darbhanga provided me with the perfect foundation. The faculty's mentorship and the competitive environment helped me land a Dream offer at Adobe. The culture here is truly transformative."
        },
        {
            name: "Sneha Kumari",
            batch: "Class of 2023",
            branch: "Civil Engineering",
            company: "L&T Construction",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
            text: "The labs and industrial tours at DCE gave me practical exposure that textbooks couldn't. I'm proud to be an alumna of an institution that actually cares about student outcomes."
        },
        {
            name: "Aryan Singh",
            batch: "Class of 2025",
            branch: "Mechanical Engineering",
            company: "Tata Motors",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
            text: "Participating in national Level competitions through DCE's technical clubs was a turning point. It's not just a college; it's a launchpad for future engineers."
        }
    ];

    const alumniQuotes = [
        "The best 4 years of my life! The faculty is world-class.",
        "DCE creates leaders, not just engineers. Forever grateful.",
        "A campus that feels like home and a curriculum that prepares you for the world."
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#133b5c]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 animate-zoom-in"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center px-6 max-w-5xl pt-20">
                    <div className="reveal">
                        <MessageSquare className="text-[#c6b677] mx-auto mb-6" size={48} />
                        <span className="text-[#c6b677] font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Student Voices</span>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 uppercase tracking-tight italic">Success Stories</h1>
                        <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto">
                            Hear from the students and alumni who have walked our halls and are now leading in their respective fields.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Main Testimonial Cards */}
            <section className="py-24 px-8 md:px-16 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {testimonialData.map((item, i) => (
                        <div key={i} className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 relative reveal group hover:-translate-y-4 transition-all duration-500">
                            <div className="absolute inset-x-0 -top-8 flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-[#133b5c] flex items-center justify-center shadow-xl group-hover:bg-[#c6b677] transition-colors">
                                    <Quote className="text-white group-hover:text-[#133b5c] transition-colors" size={24} />
                                </div>
                            </div>
                            <div className="pt-8 text-center sm:text-left">
                                <div className="flex justify-center sm:justify-start gap-1 mb-6 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-500 text-lg leading-relaxed italic mb-10 font-light">
                                    "{item.text}"
                                </p>
                                <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#c6b677]">
                                        <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#133b5c]">{item.name}</h4>
                                        <p className="text-[#c6b677] text-xs font-bold uppercase tracking-widest">{item.branch}</p>
                                        <div className="flex items-center gap-2 text-gray-400 text-[10px] mt-1">
                                            <GraduationCap size={12} /> {item.batch} | <span className="font-bold text-[#133b5c]/50">{item.company}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Featured Video Section Placeholder */}
            <section className="py-24 bg-[#f8f9fa] reveal overflow-hidden">
                <div className="container mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2">
                        <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Visual Stories</span>
                        <h2 className="text-4xl font-serif font-bold text-[#133b5c] mb-8 leading-tight">Watch Our Alumni Share Their Journey</h2>
                        <ul className="space-y-6 mb-12">
                            <li className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded-full bg-[#133b5c] text-white flex-shrink-0 flex items-center justify-center text-[10px] mt-1">01</div>
                                <p className="text-gray-500 text-lg font-light">Campus life and student activities.</p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-6 h-6 rounded-full bg-[#133b5c] text-white flex-shrink-0 flex items-center justify-center text-[10px] mt-1">02</div>
                                <p className="text-gray-500 text-lg font-light">Career guidance and placement preparation.</p>
                            </li>
                        </ul>
                        <button className="bg-[#133b5c] text-white px-10 py-4 rounded-sm font-bold shadow-xl hover:bg-[#c6b677] transition-all">Explore All Videos</button>
                    </div>
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-[#c6b677] rounded-[3rem] rotate-3 translate-x-4 translate-y-4 -z-10 opacity-20"></div>
                        <div className="relative aspect-video rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-50" alt="Video cover" />
                            <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-2xl">
                                    <Play size={40} fill="currentColor" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Marquee Quotes */}
            <section className="py-20 bg-[#133b5c] overflow-hidden border-y border-white/10 reveal">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...alumniQuotes, ...alumniQuotes].map((quote, i) => (
                        <div key={i} className="flex items-center gap-8 px-12">
                            <Quote className="text-[#c6b677]/30" size={32} />
                            <span className="text-white text-3xl md:text-5xl font-serif font-light italic opacity-80">{quote}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Lasting Impact Section */}
            <section className="py-24 text-center reveal">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-[#c6b677]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10">
                            <User className="text-[#133b5c]" size={40} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#133b5c] mb-6">Leave Your Legacy</h2>
                        <p className="text-gray-500 text-lg font-light italic leading-relaxed mb-10">
                            "Are you a current student or an alumnus with a story to share? We'd love to spotlight your successes and experiences on this page."
                        </p>
                        <button className="text-[#133b5c] font-bold uppercase tracking-[0.3em] text-xs hover:text-[#c6b677] transition-all underline underline-offset-8">
                            Submit Your Testimonial
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
