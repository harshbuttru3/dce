import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Using FaXTwitter for modern X logo

const Footer = () => {
    return (
        <footer className="w-full font-sans flex flex-col md:flex-row min-h-[400px] relative bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed">

            {/* Dark overlay to ensure text remains readable */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* ================= LEFT SECTION (Glassy Blue) ================= */}
            <div className="md:w-[35%] w-full bg-[#133b5c]/70 backdrop-blur-md text-white p-10 md:p-14 lg:p-16 flex flex-col justify-between relative z-10 border-r border-white/10">

                <div>
                    {/* Logo Area */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-serif tracking-wider font-semibold drop-shadow-md">
                            <span className="text-yellow-400 italic pr-1">DCE</span> <span className="text-white">DARBHANGA</span>
                        </h2>
                    </div>

                    {/* Contact Details with separators */}
                    <div className="space-y-4 mt-8 text-sm lg:text-[15px] font-medium tracking-wide text-white drop-shadow-md">

                        <p className="pb-4 border-b border-white/30 hover:text-yellow-300 transition-colors leading-relaxed">
                            <span className="text-yellow-400 font-bold block mb-1">Darbhanga College of Engineering, Darbhanga</span>
                            P.O, Lal Sahpur, Mabbi Belauna,<br />
                            Darbhanga, Bihar 846005
                        </p>

                        <p className="py-4 border-b border-white/30 hover:text-yellow-300 transition-colors">
                            +91-XXXXX-XXXXX
                        </p>

                        <p className="py-4 border-b border-white/30 hover:text-yellow-300 transition-colors">
                            info@dcedarbhanga.org
                        </p>

                    </div>
                </div>

                {/* Social Icons */}
                <div className="mt-16 text-white drop-shadow-md">
                    <h4 className="text-sm font-bold tracking-wide mb-4 text-yellow-400">Follow Us</h4>
                    <div className="flex gap-3">
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-[#133b5c] flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all shadow-sm">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-[#133b5c] flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all shadow-sm">
                            <FaXTwitter size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-[#133b5c] flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all shadow-sm">
                            <FaYoutube size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-[#133b5c] flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all shadow-sm">
                            <FaLinkedinIn size={14} />
                        </a>
                    </div>
                </div>

            </div>


            {/* ================= RIGHT SECTION (Glassy Dark) ================= */}
            <div className="md:w-[65%] w-full bg-[#1e1e1e]/60 backdrop-blur-md text-white/90 p-10 md:p-14 lg:p-16 flex flex-col relative z-10">

                {/* Google Maps Location Embed */}
                <div className="w-full h-full mb-16 grow rounded-xl overflow-hidden border border-white/10 shadow-2xl relative min-h-[250px] md:min-h-0 bg-white/5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14352.09349603565!2d85.8858544!3d26.1555543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edc5c0d2e8e7a5%3A0x7d6b38c31a7f6f14!2sDarbhanga%20College%20of%20Engineering%2C%20Darbhanga!5e0!3m2!1sen!2sin!4v1709140001011!5m2!1sen!2sin"
                        className="absolute inset-0 w-full h-full border-0 grayscale invert-[0.9] contrast-[1.1] opacity-80 hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-700 ease-in-out"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="DCE Darbhanga Location"
                    ></iframe>
                </div>

                {/* Copyright Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs lg:text-sm text-gray-400 font-light mt-auto">
                    <p>© Copyright {new Date().getFullYear()} - DCE Darbhanga. All Rights Reserved.</p>
                    <p className="mt-2 sm:mt-0">Website Design and Development by Team DCE</p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
