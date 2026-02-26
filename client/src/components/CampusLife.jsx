import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CampusLife = () => {
    return (
        <section className="w-full bg-[#f4f4f4] pt-16 pb-0 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-l-2 border-gray-300 pl-6 space-y-4 md:space-y-0 relative">

                    {/* Main Titles */}
                    <div>
                        <span className="text-gray-600 tracking-wide text-lg sm:text-xl font-light">Campus Life</span>
                        <h2 className="text-[#00338d] text-3xl sm:text-4xl lg:text-5xl font-serif mt-1 max-w-xl leading-snug">
                            A COMMUNITY OF<br />POSSIBILITIES
                        </h2>
                    </div>
                </div>
            </div>

            {/* Grid Layout Container */}
            <div className="w-full max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[40vh]">

                    {/* Block 1: Left Main Image (Spans 2 rows, roughly 5 cols wide) */}
                    <div className="col-span-1 md:col-span-5 row-span-2 relative group cursor-pointer overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop"
                            alt="Events and Celebrations"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                            <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">Events & Celebrations</h3>
                            <div className="bg-transparent border border-white rounded-full p-2 text-white hover:bg-white hover:text-black transition-colors">
                                <ChevronRight size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Center Column Wrapper */}
                    <div className="col-span-1 md:col-span-3 row-span-2 flex flex-col">

                        {/* Block 2: Center Top Image */}
                        <div className="flex-1 relative group cursor-pointer overflow-hidden h-[300px] md:h-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?q=80&w=1000&auto=format&fit=crop"
                                alt="Art & Culture"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                <h3 className="text-[#dcb15b] text-lg font-semibold tracking-wide">Art & Culture</h3>
                                <div className="bg-transparent border border-white rounded-full p-1.5 text-white hover:bg-white hover:text-black transition-colors">
                                    <ChevronRight size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Block 3: Center Bottom Menu */}
                        <div className="flex-1 bg-[#15428f] p-6 sm:p-8 flex flex-col justify-center h-[300px] md:h-1/2">
                            <ul className="space-y-4">
                                {[
                                    { label: "Sports", path: "/campus-life/sports" },
                                    { label: "Innovation & Entrepreneurship", path: "/campus-life/innovation" },
                                    { label: "Magazine", path: "/campus-life/magazine" },
                                    { label: "360° Virtual Tour", path: "/campus-life/tour" }
                                ].map((item, index) => (
                                    <li key={index} className="border-b border-white/20 pb-3 last:border-0 last:pb-0">
                                        <Link to={item.path} className="text-white hover:text-sky-300 transition-colors text-sm sm:text-base font-medium flex items-center group">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Right Column Wrapper */}
                    <div className="col-span-1 md:col-span-4 row-span-2 flex flex-col">

                        {/* Top Row Split */}
                        <div className="flex h-[300px] md:h-1/2">
                            {/* Block 4: Facilities Left */}
                            <div className="flex-1 relative group cursor-pointer overflow-hidden border-r border-white/30 border-b">
                                <img
                                    src="https://images.unsplash.com/photo-1596417772648-527fbdd47a3e?q=80&w=1000&auto=format&fit=crop"
                                    alt="Campus Facilities"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <h3 className="text-white text-sm sm:text-base font-bold tracking-wide w-1/2">Campus Facilities</h3>
                                    <div className="bg-transparent border border-white rounded-full p-1.5 text-white hover:bg-white hover:text-black transition-colors">
                                        <ChevronRight size={14} />
                                    </div>
                                </div>
                            </div>

                            {/* Block 5: Facilities Right */}
                            <div className="flex-1 relative group cursor-pointer overflow-hidden border-b border-white/30">
                                <img
                                    src="https://images.unsplash.com/photo-1560523160-754a9e425192?q=80&w=1000&auto=format&fit=crop"
                                    alt="Academic Facilities"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <h3 className="text-white text-sm sm:text-base font-bold tracking-wide w-1/2">Academic Facilities</h3>
                                    <div className="bg-transparent border border-white rounded-full p-1.5 text-white hover:bg-white hover:text-black transition-colors">
                                        <ChevronRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Block 6: Right Bottom Large Image */}
                        <div className="flex-1 relative group cursor-pointer overflow-hidden h-[300px] md:h-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop"
                                alt="Community Focus"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CampusLife;
