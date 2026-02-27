import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

const About = () => {
  const location = useLocation();

  const links = [
    { name: "About Institute", path: "institute" },
    { name: "Infrastructure", path: "infrastructure" },
    { name: "Principal's Message", path: "principalmessage" },
    { name: "Administration", path: "administration" },
    { name: "Affiliations", path: "Seat" },
    { name: "Visit Us", path: "visit" },
    { name: "Contact Us", path: "contact-us" },
  ];

  const currentPage =
    links.find((link) => location.pathname.includes(link.path))?.name ||
    "About Us";

  return (
    <div className={`w-full bg-gray-50 min-h-screen ${location.pathname.includes('/institute') || location.pathname.includes('/infrastructure') || location.pathname.includes('/contact-us') ? 'pt-20' : ''}`}>

      {/* 🔵 Banner Section - Hide if on the 'institute', 'infrastructure', or 'contact-us' page */}
      {(!location.pathname.includes('/institute') && !location.pathname.includes('/infrastructure') && !location.pathname.includes('/contact-us')) && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-10 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">
                {currentPage}
              </h1>

              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <HiHome className="text-sky-500" />
                <span><a href="/" className="cursor-pointer text-sky-500 hover:underline">Home</a></span>
                <span>/</span>
                <span>{currentPage}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 text-gray-500 text-2xl">
              <span className="text-sm font-medium">Share:</span>
              <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
              <FaTwitter className="cursor-pointer hover:text-sky-500 transition" />
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Main Layout */}
      <div className={`max-w-7xl mx-auto ${location.pathname.includes('/institute') || location.pathname.includes('/infrastructure') || location.pathname.includes('/contact-us') ? 'px-0 py-0 max-w-none' : 'px-4 py-12'} gap-10 flex flex-wrap lg:flex-nowrap`}>

        {/* Sidebar - Hide if on the 'institute', 'infrastructure', or 'contact-us' page */}
        {(!location.pathname.includes('/institute') && !location.pathname.includes('/infrastructure') && !location.pathname.includes('/contact-us')) && (
          <div className="w-full lg:w-72 shrink-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-28">
              <h2 className="bg-gray-100 px-6 py-4 font-semibold text-gray-700 border-b">
                About Us
              </h2>

              <ul>
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`block px-6 py-3 border-b transition-all duration-200 ${location.pathname.includes(link.path)
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100"
                        }`}
                    >
                      » {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className={`flex-1 w-full ${location.pathname.includes('/institute') || location.pathname.includes('/infrastructure') || location.pathname.includes('/contact-us') ? 'bg-transparent shadow-none p-0' : 'bg-white rounded-lg shadow-md sm:p-10 p-4'}`}>
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default About;
