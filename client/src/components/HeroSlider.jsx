import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: 'https://www.dce-darbhanga.org/wp-content/uploads/2022/11/ScreenshotX2024-05-17X205451.png',
        title: 'Welcome to DCE Darbhanga',
        subtitle: 'Nurturing Engineers for the Future'
    },
    {
        id: 2,
        image: 'data:image/jpeg;base64,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',
        title: 'State of the Art Facilities',
        subtitle: 'Labs, Library, and Research Centers'
    },
    {
        id: 3,
        image: 'https://www.dce-darbhanga.org/wp-content/uploads/2022/11/con.png',
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
        <div className="relative h-screen overflow-hidden bg-gray-900">
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
                    <div className="absolute inset-0 flex flex-col items-start justify-end text-left text-white px-8 pb-32 md:px-16 md:pb-40 w-full md:w-2/3">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 transform transition-transform duration-700 translate-y-0 leading-tight uppercase tracking-wider">{slide.title}</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold"><span className="text-yellow-400">{slide.subtitle.split('–')[0]}</span> {slide.subtitle.includes('–') ? `– ${slide.subtitle.split('–')[1]}` : ''}</p>
                    </div>
                </div>
            ))}

            {/* Subtitle logic here assumes we want to highlight the first part if there's a dash, otherwise it just prints it all. The GD screenshot highlights "Admissions Open" in yellow */}

            {/* Pagination Dots - Bottom Right */}
            <div className="absolute bottom-8 right-8 md:right-16 flex items-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`transition-all duration-300 flex items-center justify-center font-bold text-xs ${index === current
                                ? 'w-6 h-6 bg-transparent text-white border border-gray-400 rounded-full'
                                : 'w-2 h-2 bg-gray-400 rounded-full hover:bg-gray-300'
                            }`}
                    >
                        {index === current ? index + 1 : ''}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
