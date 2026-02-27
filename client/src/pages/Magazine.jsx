import React, { useEffect } from 'react';
import { FaFilePdf } from 'react-icons/fa';

const Magazine = () => {
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

    const magazineData = [
        {
            title: "UNIBUZZ Jan 2025",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "UNIBUZZ July 2024",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "UNIBUZZ Jan 2024",
            image: "https://images.unsplash.com/photo-1523050853064-dbad323b7ff3?q=80&w=600&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "UNIBUZZ July 2023",
            image: "https://images.unsplash.com/photo-1509062522246-373b1d7973d6?q=80&w=600&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "UNIBUZZ Jan 2023",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "UNIBUZZ July 2022",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
            link: "#"
        }
    ];

    return (
        <div className="w-full bg-[#f8f9fa] min-h-screen pt-28 pb-20 px-4 md:px-12 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-16 reveal">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#133b5c] uppercase tracking-wide inline-block relative pb-4">
                        MAGAZINE
                        <span className="absolute bottom-0 left-0 w-32 h-1 bg-[#c6b677]"></span>
                    </h1>
                </div>

                {/* Magazine Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {magazineData.map((mag, index) => (
                        <div key={index} className="group reveal bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden border-b border-gray-100">
                                <img
                                    src={mag.image}
                                    alt={mag.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                            </div>

                            {/* Info Section */}
                            <div className="p-6">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="relative">
                                        <h3 className="text-[#133b5c] font-medium text-lg lg:text-xl group-hover:text-sky-700 transition-colors">
                                            {mag.title}
                                        </h3>
                                        <div className="mt-4 w-20 h-0.5 bg-[#c6b677]/40 group-hover:w-full transition-all duration-500"></div>
                                    </div>
                                    <a
                                        href={mag.link}
                                        className="bg-[#c00] p-2.5 rounded-sm shadow-md hover:bg-red-700 hover:scale-110 active:scale-95 transition-all"
                                        title="Download PDF"
                                    >
                                        <FaFilePdf className="text-white text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Magazine;
