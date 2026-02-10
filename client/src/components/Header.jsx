import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNavigation } from '../services/api';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [navItems, setNavItems] = useState([]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        fetchNavigation().then(setNavItems);
    }, []);

    const toggleDropdown = (label) => {
        if (activeDropdown === label) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(label);
        }
    };

    return (
        <header className="bg-white shadow-md relative z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 text-xs">
                <div className="container flex justify-between items-center">
                    <div className="flex gap-4">
                        <span>📞 06272-255255</span>
                        <span>✉️ dcedarbhanga@gmail.com</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-accent">Login</a>
                        <a href="#" className="hover:text-accent">Grievance</a>
                    </div>
                </div>
            </div>

            {/* Logo Section */}
            <div className="container py-4 flex items-center justify-between border-b border-gray-100">
                <Link to="/" className="flex items-center gap-4">
                    {/* Placeholder Logo */}
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-primary font-bold text-xl">DCE</div>
                    <div>
                        <h1 className="text-2xl font-bold text-primary uppercase">Darbhanga College of Engineering</h1>
                        <p className="text-sm text-gray-600">Under Dept. of Science, Technology & Technical Education, Govt. Of Bihar</p>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block bg-primary md:bg-white md:border-b border-gray-200`}>
                <div className="container">
                    <ul className="flex flex-col md:flex-row md:items-center text-sm font-medium">
                        {navItems.map((item) => (
                            <li key={item.label} className="relative group border-b md:border-none border-gray-700">
                                {item.children ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className="w-full md:w-auto text-left flex items-center justify-between px-4 py-3 md:py-4 text-white md:text-gray-700 hover:text-accent md:hover:bg-gray-50 md:group-hover:text-primary transition-colors"
                                        >
                                            {item.label}
                                            <ChevronDown size={16} className={`ml-1 transform transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Dropdown */}
                                        <ul className={`${activeDropdown === item.label ? 'block' : 'hidden'} md:absolute md:hidden md:group-hover:block top-full left-0 bg-gray-800 md:bg-white md:shadow-lg min-w-[200px] z-50`}>
                                            {item.children.map((child) => (
                                                <li key={child.label}>
                                                    <Link
                                                        to={child.path}
                                                        className="block px-6 py-2 text-gray-300 md:text-gray-700 hover:bg-gray-700 md:hover:bg-primary md:hover:text-white transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className="block px-4 py-3 md:py-4 text-white md:text-gray-700 hover:text-accent md:hover:bg-gray-50 md:group-hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
