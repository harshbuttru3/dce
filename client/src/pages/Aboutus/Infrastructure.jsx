import React, { useEffect } from 'react';

const Infrastructure = () => {
    useEffect(() => {
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

    return (
        <div className="w-full flex flex-col font-sans bg-[#f4f4f4] overflow-x-hidden">
            {/* Page Header */}
            <div className="w-full bg-white py-12 px-8 md:px-16 border-b border-gray-100 animate-fade-in">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#133b5c] mb-4 uppercase tracking-tight animate-slide-in-down">Campus Infrastructure</h1>
                </div>
            </div>

            {/* Hero Section / Overview */}
            <div className="flex flex-col md:flex-row w-full bg-white relative overflow-hidden">
                <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center z-20 reveal">
                    <h2 className="text-[#133b5c] text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight transform hover:translate-x-2 transition-transform duration-500">
                        Modern Campus for <br /> Future Engineers
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light mb-8">
                        Darbhanga College of Engineering (DCE) features a growing urban campus designed to support modern technical education. The institute combines academic facilities, residential infrastructure, and digital connectivity to create a practical learning environment.
                    </p>
                    <div className="border-l-4 border-yellow-500 pl-6 italic text-[#133b5c] font-medium text-lg">
                        “A developing government engineering campus focused on practical learning, digital access, and student-centric infrastructure.”
                    </div>
                </div>
                <div className="w-full md:w-1/2 min-h-[400px] animate-fade-in">
                    <img
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                        alt="Campus Overview"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                </div>
            </div>

            {/* Academic Infrastructure - Mixed Side Layout */}
            <div className="w-full flex flex-col md:flex-row bg-[#133b5c] text-white overflow-hidden">
                <div className="w-full md:w-1/2 h-[400px] md:h-auto order-2 md:order-1 reveal">
                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"
                        alt="Academic Block"
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-1000"
                    />
                </div>
                <div className="w-full md:w-1/2 p-12 md:p-24 order-1 md:order-2 flex flex-col justify-center reveal">
                    <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4">Learning Spaces</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">Academic Infrastructure</h2>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 group">
                            <div className="text-yellow-400 text-xl font-bold group-hover:scale-125 transition-transform">01.</div>
                            <p className="text-gray-200 group-hover:text-white transition-colors">Multiple academic blocks with spacious classrooms and seminar halls</p>
                        </li>
                        <li className="flex items-start gap-4 group">
                            <div className="text-yellow-400 text-xl font-bold group-hover:scale-125 transition-transform">02.</div>
                            <p className="text-gray-200 group-hover:text-white transition-colors">Department-specific laboratories for hands-on learning and research</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="text-yellow-400 text-xl font-bold">03.</div>
                            <p className="text-gray-200">Dedicated workshops for core engineering disciplines</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="text-yellow-400 text-xl font-bold">04.</div>
                            <p className="text-gray-200">Seminar and presentation spaces for technical events</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Library Section - Centered Content with Split Image */}
            <div className="w-full bg-white py-24 px-8 md:px-16 reveal">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <span className="text-[#133b5c]/50 font-bold uppercase tracking-widest text-xs mb-2 block">Knowledge Hub</span>
                        <h2 className="text-4xl font-serif font-bold text-[#133b5c] mb-8 border-b-2 border-yellow-500 pb-4 inline-block transform hover:translate-x-2 transition-transform">Libraries & Learning</h2>
                        <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                            DCE Library is the soul of the institution. It offers an extensive collection of textbook resources, journals, and digital assets tailored to satisfy the academic and research needs of students and faculty.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2 group cursor-pointer">
                                <h4 className="font-bold text-[#133b5c] group-hover:text-yellow-600 transition-colors">Central Library</h4>
                                <p className="text-sm text-gray-500">Engineering textbooks & print journals</p>
                            </div>
                            <div className="flex flex-col gap-2 group cursor-pointer">
                                <h4 className="font-bold text-[#133b5c] group-hover:text-yellow-600 transition-colors">Study Zones</h4>
                                <p className="text-sm text-gray-500">Quiet halls for focused reading</p>
                            </div>
                            <div className="flex flex-col gap-2 group cursor-pointer">
                                <h4 className="font-bold text-[#133b5c] group-hover:text-yellow-600 transition-colors">Digital Repository</h4>
                                <p className="text-sm text-gray-500">Online access to e-content</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop" className="rounded-xl shadow-lg h-64 w-full object-cover mt-8 hover:-translate-y-4 transition-transform duration-500" alt="Library 1" />
                        <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop" className="rounded-xl shadow-lg h-64 w-full object-cover hover:-translate-y-4 transition-transform duration-500" alt="Library 2" />
                    </div>
                </div>
            </div>

            {/* Digital Infrastructure - The Overlap Design from Screenshot 1 */}
            <div className="w-full bg-[#f4f4f4] py-24 px-8 overflow-hidden md:overflow-visible reveal">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative">
                    <div className="w-full md:w-1/2 z-20 md:pr-10">
                        <h2 className="text-[#133b5c] text-3xl font-serif font-bold mb-8 transform hover:translate-x-2 transition-transform">Digital & IT Infrastructure</h2>
                        <p className="text-gray-600 mb-12">Strengthening digital infrastructure and smart campus initiatives for a modern learning experience.</p>

                        {/* Overlapping Gold Box for IT list */}
                        <div className="bg-[#c6b677] p-10 md:w-[120%] shadow-2xl relative mb-12">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                    Computer center with networked systems
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                    Campus Wi-Fi (Academic & Residential)
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                    Smart classrooms & Projectors
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                    ICT support for portals & LMS
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[450px] relative z-10">
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                            alt="IT Labs"
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Residential & Student Life - Card Grid Section */}
            <div className="w-full bg-white py-24 px-8 text-center reveal">
                <h2 className="text-3xl font-serif font-bold text-[#133b5c] mb-16 uppercase tracking-widest underline underline-offset-8 decoration-yellow-500">Campus Life & Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {/* Facility Card 1 */}
                    <div className="group cursor-default reveal">
                        <div className="overflow-hidden rounded-xl mb-6 shadow-md relative h-64">
                            <img src="https://images.unsplash.com/photo-1555854817-5b2260d5bcc6?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Hostels" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h4 className="text-white font-bold text-xl uppercase tracking-wide group-hover:text-yellow-400 transition-colors">Residential Facilities</h4>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm italic group-hover:text-gray-800 transition-colors">Separate hostels for boys and girls with mess, dining, and recreational common rooms.</p>
                    </div>

                    {/* Facility Card 2 */}
                    <div className="group cursor-default reveal">
                        <div className="overflow-hidden rounded-xl mb-6 shadow-md relative h-64">
                            <img src="https://images.unsplash.com/photo-1541250848049-b4f71413cc30?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Sports" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h4 className="text-white font-bold text-xl uppercase tracking-wide group-hover:text-yellow-400 transition-colors">Sports & Events</h4>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm italic group-hover:text-gray-800 transition-colors">Auditorium, sports grounds, and indoor facilities supporting holistic development.</p>
                    </div>

                    {/* Facility Card 3 */}
                    <div className="group cursor-default reveal">
                        <div className="overflow-hidden rounded-xl mb-6 shadow-md relative h-64">
                            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Cafeteria" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h4 className="text-white font-bold text-xl uppercase tracking-wide group-hover:text-yellow-400 transition-colors">Campus Amenities</h4>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm italic group-hover:text-gray-800 transition-colors">Cafeteria, student activity spaces, and transportation access across the campus.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Final Text */}
            <div className="w-full bg-[#f4f4f4] py-16 px-4 flex flex-col items-center text-center reveal">
                <div className="max-w-4xl space-y-8 font-light text-gray-600 text-lg leading-relaxed italic">
                    <p className="hover:text-[#133b5c] transition-colors duration-500">DCE Darbhanga continues to invest in state-of-the-art facilities to ensure that every student has access to the tools they need for professional and academic success.</p>
                </div>
            </div>
        </div>
    );
};

export default Infrastructure;
