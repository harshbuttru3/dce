import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Layers } from 'lucide-react';

const SocialWall = () => {

    // Added 2 extra posts so the 3-item carousel has enough items to slide nicely
    const socialPosts = [
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
            caption: "The 7th Studometry Conference returns to DCE Darbhanga...",
            hasMultipleImages: false
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
            caption: "The School of Law at DCE Darbhanga, hosted an...",
            hasMultipleImages: true
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
            caption: "DCE Darbhanga presents IBM ICE Day 2026, organised by the...",
            hasMultipleImages: false
        },
        {
            id: 4,
            imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
            caption: "Students actively participating in the annual sports meet...",
            hasMultipleImages: true
        },
        {
            id: 5,
            imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
            caption: "Orientation programme for the incoming batch of 2024...",
            hasMultipleImages: false
        },
        {
            id: 6,
            imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop",
            caption: "Cultural festival highlights showing amazing student performances...",
            hasMultipleImages: true
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    // Responsive visible count: 1 on mobile, 3 on larger screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1);
            } else {
                setVisibleCount(3);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = socialPosts.length - visibleCount;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    // Automatic carousel
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3500); // Change slides every 3.5 seconds

        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="w-full bg-white py-16 font-sans overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative">

                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-[#333333] text-2xl md:text-3xl lg:text-[32px] font-medium tracking-tight pl-2">
                        DCE Darbhanga Social Wall
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative group">

                    {/* Left Navigation Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-4 md:-left-6 top-[40%] -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-2 md:p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-gray-100 transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 focus:opacity-100"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Cards Container with Hidden Overflow */}
                    <div className="overflow-hidden px-1 py-4 -my-4">
                        <div
                            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
                        >
                            {socialPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="shrink-0 px-3 md:px-4"
                                    style={{ width: `${100 / visibleCount}%` }}
                                >
                                    <div className="flex flex-col cursor-pointer group/card h-full">
                                        {/* Image Container */}
                                        <div className="w-full aspect-4/3 bg-gray-100 overflow-hidden relative mb-4 shadow-sm">
                                            <img
                                                src={post.imageUrl}
                                                alt="Social Media Post"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                                            />

                                            {/* Layers Icon for multiple images */}
                                            {post.hasMultipleImages && (
                                                <div className="absolute top-3 right-3 bg-black/40 p-1.5 rounded-sm backdrop-blur-sm">
                                                    <Layers size={16} className="text-white" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Caption */}
                                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium line-clamp-2 pr-2">
                                            {post.caption}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute -right-4 md:-right-6 top-[40%] -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-2 md:p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-gray-100 transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 focus:opacity-100"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                </div>

            </div>
        </section>
    );
};

export default SocialWall;
