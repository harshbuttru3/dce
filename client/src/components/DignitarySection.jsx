import React from 'react';

const DignitarySection = () => {
    const dignitaries = [
        {
            name: "Shri Nitish Kumar",
            title: "Hon'ble Chief Minister, Bihar - cum - Hon'ble Chancellor",
            subtitle: "Bihar Engineering University, Patna",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xM7uK-pY-yX6S_96c2-y2o6l_9o0c-w-2A&s" // Official-looking portrait
        },
        {
            name: "Shri Sunil Kumar",
            title: "Hon'ble Minister",
            subtitle: "Dept. of Science, Technology and Technical Education, Govt. of Bihar",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61fIq2W_x_Z2hN_C9qU_E8c0O-C_y-kK_6A&s" // Official-looking portrait
        },
        {
            name: "Prof. Suresh Kant Verma",
            title: "Vice Chancellor",
            subtitle: "Bihar Engineering University, Patna",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVv6f9h4g9C9P6z_v8x0I_C0V7F_C_u_v-kA&s" // Official-looking portrait
        }
    ];

    return (
        <section className="bg-white py-12 px-6 lg:px-16 border-b border-gray-100">
            <div className="max-w-7xl mx-auto space-y-16">
                {dignitaries.map((dignitary, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-10 group animate-fade-in relative">
                        {/* Image Container with Custom Frame */}
                        <div className="relative w-44 h-52 md:w-40 md:h-48 shrink-0">
                            {/* Decorative frame from the reference image */}
                            <div className="absolute -inset-2 border border-[#133b5c]/20 rounded-sm"></div>
                            {/* Corner Accents - Using Theme Blue */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#133b5c]"></div>
                            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#133b5c]"></div>
                            
                            <img 
                                src={dignitary.image} 
                                alt={dignitary.name} 
                                className="w-full h-full object-cover rounded-sm shadow-md relative z-10 transition-all duration-700"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col text-center md:text-left justify-center pt-4">
                            <h3 className="text-[#133b5c] text-4xl md:text-5xl font-bold font-sans mb-3 tracking-tight group-hover:text-[#c6b677] transition-colors duration-300">
                                {dignitary.name}
                            </h3>
                            <p className="text-gray-700 text-xl md:text-2xl font-semibold mb-2 leading-tight">
                                {dignitary.title}
                            </p>
                            <p className="text-[#c6b677] text-xl italic font-serif font-medium">
                                {dignitary.subtitle}
                            </p>
                        </div>
                        
                        {/* Separator line except for last item */}
                        {index !== dignitaries.length - 1 && (
                            <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-100/80 hidden md:block"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DignitarySection;
