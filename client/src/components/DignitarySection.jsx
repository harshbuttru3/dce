import React from 'react';

const DignitarySection = () => {
    const dignitaries = [
        {
            name: "Shri Nitish Kumar",
            title: "Hon'ble Chief Minister, Bihar - cum - Hon'ble Chancellor",
            subtitle: "Bihar Engineering University, Patna",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nitish_Kumar_working_crop.jpg/330px-Nitish_Kumar_working_crop.jpg",
            message: "Our vision is to transform Bihar into a hub of technical excellence and innovation. By strengthening our engineering institutions, we are empowering the youth to lead the state's progress and contribute to the nation's development."
        },
        {
            name: "Shri Sunil Kumar",
            title: "Hon'ble Minister",
            subtitle: "Dept. of Science, Technology and Technical Education, Govt. of Bihar",
            image: "https://dst.bihar.gov.in/images/minister.jpg",
            message: "We are committed to providing state-of-the-art infrastructure and a research-oriented environment in our technical colleges. Our goal is to ensure that every student is equipped with the skills needed for the global industry."
        },
        {
            name: "Prof. Suresh Kant Verma",
            title: "Vice Chancellor",
            subtitle: "Bihar Engineering University, Patna",
            image: "https://beupatna.ac.in/Static/Images/vc.jpg",
            message: "As the Chancellor of Bihar Engineering University, I am focused on academic excellence, interdisciplinary research, and fostering a culture of continuous learning across all our affiliated colleges."
        }
    ];

    return (
        <div className="bg-gray-50">
            {dignitaries.map((dignitary, index) => (
                <section key={index} className={`max-w-7xl mx-auto px-4 py-16 lg:py-20 border-b border-gray-200 last:border-0`}>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                        
                        {/* Photo Area (Alternating sides for visual interest, or consistent if preferred) */}
                        {/* To strictly match Principal theme, we'll keep photo on one side but can check if alternating is better. 
                            The user said "like this theme", so we'll match the Principal which has photo on left. 
                            Wait, Secretary had photo on RIGHT. Principal on LEFT. 
                            Let's keep them consistent or follow the Secretary/Principal pattern. 
                            I'll follow the Principal's pattern: Photo on Left. */}
                        
                        <div className={`grid w-full md:w-1/3 justify-center md:justify-center ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                            <div className="flex relative group justify-center">
                                {/* Decorative Background Box */}
                                <div className={`absolute inset-0 bg-[#c6b677] ${index % 2 !== 0 ? '-translate-x-4 translate-y-4 group-hover:-translate-x-6' : 'translate-x-4 translate-y-4 group-hover:translate-x-6'} rounded-xl -z-10 transition-transform duration-300 group-hover:translate-y-6`}></div>

                                <img
                                    src={dignitary.image}
                                    alt={dignitary.name}
                                    className="w-64 h-80 md:w-72 md:h-auto object-cover rounded-xl shadow-lg border border-gray-100 relative z-10"
                                />
                            </div>
                            
                            <div className={`mt-10 border-l-4 border-[#c6b677] pl-4 ${index % 2 !== 0 ? 'text-left md:text-right md:border-l-0 md:border-r-4 md:pr-4 md:pl-0' : 'text-left'}`}>
                                <h4 className="text-xl font-bold text-gray-800 tracking-wide">{dignitary.name}</h4>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">{dignitary.title}</p>
                            </div>
                        </div>

                        {/* Message Text Area */}
                        <div className={`w-full md:w-2/3 flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                            <h2 className={`text-[#133b5c] text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 ${index % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                                {index === 0 ? "Message from the Chancellor" : index === 1 ? "Message from the Minister" : "Message from the Vice Chancellor"}
                            </h2>

                            <div className={`text-gray-600 md:text-lg space-y-3 font-light ${index % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                                <p>{dignitary.message}</p>
                                <p className="text-[#c6b677] font-medium italic">{dignitary.subtitle}</p>
                            </div>
                        </div>

                    </div>
                </section>
            ))}
        </div>
    );
};

export default DignitarySection;
