import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: 'https://via.placeholder.com/1920x600/1a365d/ffffff?text=Darbhanga+College+of+Engineering',
        title: 'Welcome to DCE Darbhanga',
        subtitle: 'Nurturing Engineers for the Future'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/1920x600/c53030/ffffff?text=Academic+Excellence',
        title: 'State of the Art Facilities',
        subtitle: 'Labs, Library, and Research Centers'
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/1920x600/f6ad55/ffffff?text=Student+Activities',
        title: 'Vibrant Campus Life',
        subtitle: 'Sports, Culture, and Innovation'
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gray-900">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 transform transition-transform duration-700 translate-y-0">{slide.title}</h2>
                        <p className="text-xl md:text-2xl">{slide.subtitle}</p>
                    </div>
                </div>
            ))}

            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors">
                <ChevronLeft size={32} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors">
                <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === current ? 'bg-accent' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
