import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNavigation } from '../services/api';
import { Menu, X, ChevronDown } from 'lucide-react';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosHome } from "react-icons/io";

import { FaQuestionCircle, FaSearch } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { BiMessageSquareDetail } from "react-icons/bi"


const Header = () => {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  // mobile view menu
  const [topheader, setTopheader] = useState(false);
  const opentop = () => {
    setTopheader((prev) => !prev);

  }


  // useEffect(() => {
  //     fetchNavigation().then(setNavItems);
  // }, []);

  const toggleDropdown = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const StaticNavItems = [
    {
      label: "Institute",
      children: [
        {
          label: "About",
          children: [
            { label: "About Institute", path: "/about/institute" },
            { label: "Vision", path: "/about/vision" },
            { label: "Infrastructure", path: "/about/infrastructure" },
            { label: "Contact Us", path: "/about/contact-us" },
          ]
        },
        { label: "Magazine", path: "/magazine" },
        { label: "NIRF", path: "/nirf" },
        { label: "T&P", path: "/t-and-p" },
        { label: "MITTIE", path: "/institute/mittie" },
      ]
    },
    {
      label: "Academics",
      children: [
        {
          label: "Department",
          children: [
            { label: "Computer Science & Engineering", path: "/department/cse" },
            { label: "Cyber Security", path: "/department/cse-cyber-security" },
            { label: "Civil Engineering", path: "/department/ce" },
            { label: "Mechanical Engineering", path: "/department/me" },
            { label: "Electrical & Electronics Engineering", path: "/department/eee" },
            { label: "Fire Safety & Technology", path: "/department/fst" },
          ]
        },
        {
          label: "Programmes",
          children: [
            { label: "LANGUAGE LAB", path: "/programmes/language-lab" },
            { label: "C DAC", path: "/programmes/c-dac" }
          ]
        },
        { label: "Academic Calendar", path: "/academic-calendar" },
        { label: "Rules and Regulation", path: "/rules" },
        { label: "Admission", path: "/admission" },
        { label: "Fee Structure", path: "/fee-structure" },
      ]
    },
    {
      label: "Student Life",
      children: [
        { label: "Student Fest", path: "/student-fest" },
        {
          label: "Student Society",
          children: [
            { label: "KALA & KALAKAR", path: "/student-society/kala-and-kalakar" }
          ]
        },
        { label: "Testimonial", path: "/testimonial" },
      ]
    },
    {
      label: "Approval",
      children: [
        { label: "AICTE", path: "/approval/aicte" },
        { label: "NIRF", path: "/approval/nirf" },
        { label: "BEU", path: "/approval/beu" },
      ]
    },
    {
      label: "Login",
      children: [
        { label: "Admin", path: "/admin" },
        { label: "Coordinator", path: "/coordinator" },
      ]
    }
  ];

  const [navItems, setNavItems] = useState(StaticNavItems);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Blur Overlay when nav bar option is hovered */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-md z-40 transition-all duration-300 ${hoveredNav ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      ></div>

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/30 backdrop-blur-lg shadow-sm border-b border-gray-200/30' : 'bg-transparent'}`}>
        <div className={`w-full px-4 md:px-8 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'pt-6 pb-2'}`}>
          <Link to="/" className="flex items-center gap-2 md:gap-4 shrink-0 animate-slide-in-down">
            <div className="bg-transparent flex items-center justify-center">
              <img src="https://i.imageupload.app/dd3b1dc01f02a2400117.png" alt="DceLogo" className='w-12 h-12 md:w-16 md:h-16' />
            </div>
            <div>
              <h1 className={`text-[12px] sm:text-[14px] md:text-xl font-bold uppercase tracking-wide transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Darbhanga College of Engineering</h1>
              <p className={`text-[10px] sm:text-xs transition-colors duration-300 ${isScrolled ? 'text-sky-700' : 'text-sky-300'}`}>Estd. 2008 &bull; Govt. of Bihar</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block ml-auto animate-slide-in-right">
            <ul className="flex items-center justify-end gap-6 xl:gap-8 text-sm font-semibold">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="group py-4 relative"
                  onMouseEnter={() => setHoveredNav(item.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <button
                    className={`transition-colors text-[14px] xl:text-[16px] uppercase tracking-wider whitespace-nowrap flex items-center gap-1 ${isScrolled ? 'text-gray-800 hover:text-sky-600' : 'text-white hover:text-sky-300'}`}
                  >
                    {item.label}
                    <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-sky-300 transition-all duration-300 group-hover:w-full"></span>

                  {/* Dropdown Menu - Mega Menu Style */}
                  <div className="absolute top-full right-0 bg-white/30 backdrop-blur-lg shadow-2xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 z-50 min-w-[280px] p-6 border-t-4 border-sky-800">
                    <h3 className="text-gray-900 font-bold mb-4 uppercase tracking-wider border-b border-gray-900/20 pb-2">{item.label}</h3>
                    <ul className="flex flex-col gap-3">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          {child.children ? (
                            <div className="relative group/sub">
                              <span className="text-gray-900 hover:text-sky-800 hover:bg-white/50 transition-colors text-[14px] py-1 px-2 -mx-2 rounded cursor-pointer flex items-center justify-between font-medium">
                                {child.label}
                                <ChevronDown size={14} className="rotate-90" />
                              </span>
                              <ul className="absolute top-0 right-full mr-4 bg-white/30 backdrop-blur-lg shadow-xl rounded-sm opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 min-w-[300px] p-4 border-r-4 border-sky-800 z-50">
                                {child.children.map(subChild => (
                                  <li key={subChild.label}>
                                    <Link
                                      to={subChild.path}
                                      className="text-gray-900 hover:text-sky-800 hover:bg-white/50 transition-colors text-[14px] block py-1 px-2 -mx-2 rounded font-medium"
                                    >
                                      {subChild.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <Link
                              to={child.path}
                              className="text-gray-900 hover:text-sky-800 hover:bg-white/50 transition-colors text-[14px] block py-1 px-2 -mx-2 rounded font-medium"
                            >
                              {child.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className={`lg:hidden p-2 ml-auto transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`} onClick={() => setMobileMenuOpen((prev) => !prev)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>


        {/* Mobile Navigation Dropdown */}
        <nav
          className={`
          ${mobileMenuOpen ? 'flex' : 'hidden'}
          lg:hidden
          absolute top-full left-0 w-full bg-black/95 flex-col max-h-[70vh] overflow-y-auto
        `}
        >
          <div className="container py-4">
            <ul className="flex flex-col text-sm font-semibold">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-gray-700 last:border-0 relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="text-white hover:text-sky-300 text-[16px] uppercase tracking-wider py-4 w-full flex justify-between items-center"
                  >
                    {item.label}
                    <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mobile Submenu */}
                  <ul className={`
                    ${activeDropdown === item.label ? 'block' : 'hidden'}
                    pl-4 pb-4 space-y-3
                `}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        {child.children ? (
                          <div>
                            <span className="text-gray-400 text-[15px] block py-1 font-bold">{child.label}</span>
                            <ul className="pl-4 space-y-2 mt-2 border-l border-gray-600">
                              {child.children.map(subChild => (
                                <li key={subChild.label}>
                                  <Link
                                    to={subChild.path}
                                    className="text-gray-300 hover:text-white text-[13px] block py-1"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subChild.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <Link
                            to={child.path}
                            className="text-gray-300 hover:text-white text-[14px] block py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        )}

                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </nav>

      </header>
    </>
  );
};

export default Header;
