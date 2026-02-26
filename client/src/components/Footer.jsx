import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Using FaXTwitter for modern X logo

const Footer = () => {
    return (
        <footer className="w-full font-sans flex flex-col md:flex-row min-h-[400px]">

            {/* ================= LEFT SECTION (Blue) ================= */}
            <div className="md:w-[35%] w-full bg-[#133b5c] text-white p-10 md:p-14 lg:p-16 flex flex-col justify-between">

                <div>
                    {/* Logo Area */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-serif tracking-wider font-semibold">
                            <span className="text-yellow-500 italic pr-1">DCE</span> DARBHANGA
                        </h2>
                        <div className="flex items-center mt-2">
                            <div className="h-px bg-white/30 flex-1"></div>
                            <span className="px-3 text-xs tracking-widest uppercase opacity-90 font-light">Thrive. For life.</span>
                            <div className="h-px bg-white/30 flex-1"></div>
                        </div>
                    </div>

                    {/* Contact Details with separators */}
                    <div className="space-y-4 mt-12 text-sm lg:text-[15px] font-light tracking-wide text-white/90">

                        <p className="pb-4 border-b border-white/20 hover:text-white transition-colors">
                            Mabbi, Darbhanga, Bihar – India
                        </p>

                        <p className="py-4 border-b border-white/20 hover:text-white transition-colors">
                            +91-XXXXX-XXXXX
                        </p>

                        <p className="py-4 border-b border-white/20 hover:text-white transition-colors">
                            info@dcedarbhanga.org
                        </p>

                    </div>
                </div>

                {/* Social Icons */}
                <div className="mt-16">
                    <h4 className="text-sm font-semibold tracking-wide mb-4">Follow Us</h4>
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


            {/* ================= RIGHT SECTION (Dark Gray) ================= */}
            <div className="md:w-[65%] w-full bg-[#1e1e1e] text-white/90 p-10 md:p-14 lg:p-16 flex flex-col relative">

                {/* Link Grids */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 grow">

                    {/* Column 1 - Main Links */}
                    <div className="flex flex-col space-y-4 text-sm lg:text-[15px] tracking-wide font-light">
                        <Link to="/about" className="hover:text-yellow-500 transition-colors w-max">About Us</Link>
                        <Link to="/academics" className="hover:text-yellow-500 transition-colors w-max">Academics</Link>
                        <Link to="/corporate-resource-centre" className="hover:text-yellow-500 transition-colors w-max">Corporate Resource Centre</Link>
                        <Link to="/facilities" className="hover:text-yellow-500 transition-colors w-max">Facilities</Link>
                        <Link to="/campus-life" className="hover:text-yellow-500 transition-colors w-max">Campus Life</Link>
                        <Link to="/research" className="hover:text-yellow-500 transition-colors w-max">Research</Link>
                        <Link to="/internationalisation" className="hover:text-yellow-500 transition-colors w-max">Internationalisation</Link>
                        <Link to="/blog" className="hover:text-yellow-500 transition-colors w-max">Blog</Link>
                    </div>

                    {/* Column 2 - Quick Links (Part 1) */}
                    <div className="flex flex-col space-y-4 text-sm lg:text-[15px] tracking-wide font-light">
                        <h3 className="font-semibold text-white mb-2 tracking-wider text-base">Quick Links</h3>
                        <Link to="/grievance" className="hover:text-yellow-500 transition-colors">Student Grievance Handling<br />Mechanism</Link>
                        <Link to="/privacy-policy" className="hover:text-yellow-500 transition-colors">Privacy and Security Policy</Link>
                        <Link to="/academic-bank" className="hover:text-yellow-500 transition-colors">Academic Bank of Credits</Link>
                        <Link to="/internal-committee" className="hover:text-yellow-500 transition-colors">Internal Committee</Link>
                        <Link to="/ombudsperson" className="hover:text-yellow-500 transition-colors">Ombudsperson</Link>
                    </div>

                    {/* Column 3 - Quick Links (Part 2) */}
                    <div className="flex flex-col space-y-4 text-sm lg:text-[15px] tracking-wide pt-0 sm:pt-9 font-light">
                        <Link to="/rti" className="hover:text-yellow-500 transition-colors">RTI Disclosure</Link>
                        <Link to="/public-disclosure" className="hover:text-yellow-500 transition-colors">Public Self Disclosure</Link>
                        <Link to="/certificate-verification" className="hover:text-yellow-500 transition-colors">Digital Certificate Verification<br />& WES</Link>
                        <Link to="/library" className="hover:text-yellow-500 transition-colors">Library</Link>
                        <Link to="/nad" className="hover:text-yellow-500 transition-colors">National Academic<br />Depository (NAD)</Link>
                    </div>

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
