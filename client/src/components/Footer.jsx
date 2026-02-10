import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-auto">
            <div className="container grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">DCE Darbhanga</h3>
                    <p className="text-gray-400 text-sm">
                        Mabbi, PO - Lal Sahpur,<br />
                        Darbhanga - 846005<br />
                        Bihar, India
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-accent">Quick Links</h4>
                    <ul className="text-sm space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Admission</a></li>
                        <li><a href="#" className="hover:text-white">Academic Calendar</a></li>
                        <li><a href="#" className="hover:text-white">Tenders</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-accent">Contact</h4>
                    <ul className="text-sm space-y-2 text-gray-400">
                        <li>Ph: 06272-255255</li>
                        <li>Email: dcedarbhanga@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-accent">Location</h4>
                    <div className="h-32 bg-gray-800 rounded flex items-center justify-center">
                        <span className="text-xs">Map Placeholder</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Darbhanga College of Engineering. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
