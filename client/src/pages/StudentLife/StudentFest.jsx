import React, { useEffect } from 'react';
import { Camera, Music, Trophy, Star, Heart, Calendar, Image as ImageIcon } from 'lucide-react';

const StudentFest = () => {
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

    const festHighlights = [
        {
            title: "Cultural Extravaganza",
            desc: "Mesmerizing dance performances, musical nights, and theatrical plays that showcase Bihar's rich heritage.",
            icon: <Music size={32} />
        },
        {
            title: "Technical Symposium",
            desc: "Robotics competitions, hackathons, and guest lectures by industry pioneers during 'DCE TechFest'.",
            icon: <Star size={32} />
        },
        {
            title: "Sports Meet",
            desc: "Inter-departmental championships in cricket, football, and athletics fostering team spirit.",
            icon: <Trophy size={32} />
        }
    ];

    const memories = [
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514525253361-bee8d4074da7?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=1000&auto=format&fit=crop"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#133b5c]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 animate-zoom-in"></div>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center px-6 max-w-5xl pt-20">
                    <div className="reveal">
                        <span className="text-[#c6b677] font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Unforgettable Moments</span>
                        <h1 className="text-4xl md:text-8xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Student Fest</h1>
                        <p className="text-[#c6b677] text-lg md:text-2xl font-light italic max-w-2xl mx-auto">
                            "Where creativity meets technology and memories are etched forever."
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Overview & Highlights */}
            <section className="py-24 px-8 md:px-16 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 reveal">
                        <span className="text-yellow-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Celebration of Life</span>
                        <h2 className="text-4xl font-serif font-bold text-[#133b5c] mb-8 leading-tight">Celebrating Talent, Innovation, and Unity</h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                            <p>
                                Every year, Darbhanga College of Engineering transforms into a hub of cultural and technical brilliance. Our annual student fest is a testament to the diverse talents of our students.
                            </p>
                            <p>
                                From breathtaking artistic performances to high-stakes technical battles, the fest provides a platform for students to step out of their academic shells and shine on the big stage.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-1 gap-8 reveal delay-300">
                        {festHighlights.map((item, i) => (
                            <div key={i} className="flex gap-6 p-8 bg-[#f8f9fa] rounded-2xl border border-gray-100 hover:border-[#c6b677] transition-all group">
                                <div className="text-[#133b5c] group-hover:text-[#c6b677] transition-colors">
                                    {item.icon}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-[#133b5c]">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Memories Gallery (Masonry style placeholder) */}
            <section className="py-24 bg-[#133b5c] text-white reveal">
                <div className="container mx-auto px-8 md:px-16 text-center">
                    <div className="mb-16">
                        <ImageIcon className="text-[#c6b677] mx-auto mb-6" size={48} />
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 italic text-[#c6b677]">Captured Memories</h2>
                        <p className="text-white/60 uppercase tracking-widest text-xs font-bold">A journey through our lens</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {memories.map((img, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer">
                                <img
                                    src={img}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt={`Fest Memory ${i + 1}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#133b5c] to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Camera className="text-[#c6b677]" size={32} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-16 border border-[#c6b677] text-[#c6b677] px-8 py-3 rounded-sm font-bold hover:bg-[#c6b677] hover:text-[#133b5c] transition-all">
                        View Full Gallery
                    </button>
                </div>
            </section>

            {/* 4. Upcoming Events Placeholder */}
            <section className="py-24 px-8 md:px-16 container mx-auto">
                <div className="bg-[#f8f9fa] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-inner reveal">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#c6b677]/5 rounded-full -ml-32 -mt-32"></div>
                    <Calendar className="text-[#133b5c] mx-auto mb-8" size={64} />
                    <h2 className="text-4xl font-serif font-bold text-[#133b5c] mb-6 italic">Next Edition Loading...</h2>
                    <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto italic mb-10">
                        "Stay tuned for the most anticipated event of the year. Our student council is hard at work planning something spectacular."
                    </p>
                    <div className="flex justify-center gap-4">
                        <div className="bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-100">
                            <p className="text-3xl font-bold text-[#133b5c]">120</p>
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Days Left</p>
                        </div>
                        <div className="bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-100">
                            <p className="text-3xl font-bold text-[#133b5c]">08</p>
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Departments</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Heartbeat Section */}
            <section className="py-20 bg-[#c6b677] text-center reveal">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <Heart className="text-[#133b5c] fill-[#133b5c] animate-pulse" />
                    <span className="text-[#133b5c] font-bold uppercase tracking-[0.4em] text-xs">The Heartbeat of DCE</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#133b5c] italic">Join the Celebration</h2>
            </section>
        </div>
    );
};

export default StudentFest;
