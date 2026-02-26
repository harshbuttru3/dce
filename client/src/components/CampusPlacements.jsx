import React from 'react';
import { ChevronRight, ChevronLeft, Info } from 'lucide-react';

const CampusPlacements = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row min-h-screen lg:min-h-[600px] font-sans overflow-hidden">

            {/* Left Panel - Placement Stats & Image Overlay */}
            <div className="lg:w-[65%] w-full relative bg-[#133b5c] text-white flex flex-col justify-between overflow-hidden">

                {/* Background Image with Deep Blue Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
                        alt="Students"
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    {/* Linear gradient to darken the bottom for logos and right edge for transition */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a2339] via-transparent to-transparent opacity-90"></div>
                </div>

                {/* Top Content Area */}
                <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-2xl">
                    <h4 className="text-gray-300 tracking-wide text-sm md:text-base font-light mb-2">Campus Placements</h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6">
                        PLACEMENT SUPPORT AT<br />DCE DARBHANGA
                    </h2>

                    <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-md mb-8">
                        Our dedicated career advisory and placement team
                        provides comprehensive career counselling to identify
                        the unique and distinctive goals
                    </p>

                    <div className="border border-white/50 rounded-full p-2 inline-flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#133b5c] transition-colors">
                        <ChevronRight size={18} />
                    </div>
                </div>

                {/* Bottom Stats & Logos Area */}
                <div className="relative z-10 p-8 md:p-12 lg:px-16 pt-0">

                    {/* Stats Row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-16 mb-12">
                        {/* Stat 1 */}
                        <div className="flex items-center gap-4">
                            <span className="text-5xl md:text-6xl font-serif tracking-tight">460</span>
                            <span className="text-sm text-gray-300 leading-tight max-w-[80px]">companies participated</span>
                        </div>

                        {/* Divider Line (hidden on very small screens) */}
                        <div className="hidden sm:block w-px h-12 bg-white/20"></div>

                        {/* Stat 2 */}
                        <div className="flex items-center gap-4">
                            <span className="text-5xl md:text-6xl font-serif tracking-tight">1788</span>
                            <span className="text-sm text-gray-300 leading-tight max-w-[100px]">drives hosted on campus</span>
                        </div>
                    </div>

                    {/* Partner Logos Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-6 opacity-80 border-t border-white/10 pt-8 mt-auto">
                        {/* Logo Placeholders (Using Text/Simple SVGs for now, should replace with actual images) */}
                        <div className="font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-1">
                            <span className="text-sky-400">tcs</span> <span className="text-xs font-normal leading-none">TATA<br />CONSULTANCY<br />SERVICES</span>
                        </div>
                        <div className="font-bold text-lg md:text-xl font-sans">
                            Tech<br />Mahindra
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-white flex items-center justify-center font-bold text-xs">
                            wipro
                        </div>
                        <div className="text-5xl md:text-7xl font-sans font-light leading-none">
                            &gt;
                        </div>
                        <div className="font-black text-2xl md:text-3xl tracking-tighter">
                            NIIT
                        </div>
                    </div>

                </div>
            </div>


            {/* Right Panel - Gold Testimonial Block */}
            <div className="lg:w-[35%] w-full bg-[#c8b472] p-8 md:p-12 flex flex-col text-white relative">

                {/* Large Quotation Mark */}
                <div className="text-6xl font-serif font-black mb-4 opacity-90 leading-none">
                    &ldquo;
                </div>

                {/* Testimonial Text */}
                <p className="text-sm lg:text-base leading-relaxed mb-10 w-11/12 opacity-90">
                    A heartfelt thank you to DCE Darbhanga and the placement team for their invaluable support in my placement journey. <Info size={14} className="inline ml-1 text-white/70" />
                </p>

                {/* Alumni Details */}
                <div className="space-y-1 text-sm font-medium opacity-90">
                    <p>Alumni Name: <span className="font-bold">Deepakshi</span></p>
                    <p>Course: <span className="font-bold">B.Tech (CSE)</span></p>
                    <p>Batch: <span className="font-bold">2020-24</span></p>
                </div>

                {/* Placed Company Logo */}
                <div className="mt-6 mb-8 text-blue-900 font-black text-3xl font-serif italic tracking-tighter">
                    KPMG
                </div>

                {/* Alumni Photo */}
                <div className="w-48 h-40 bg-gray-200 mb-6 overflow-hidden mt-auto shadow-md">
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                        alt="Alumni Portrait"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Carousel Controls */}
                <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full border border-white/70 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#c8b472] transition-colors">
                        <ChevronLeft size={16} />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/70 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#c8b472] transition-colors">
                        <ChevronRight size={16} />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default CampusPlacements;
