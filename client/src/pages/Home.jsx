import React from 'react';
import HeroSlider from '../components/HeroSlider';
import NoticeBoard from '../components/NoticeBoard';
import axios from 'axios';
import ImageModal from '../components/ImageModal';
import { FaUniversity } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

import AcademicSlider from './Slider/AcedmicSlider';

const Home = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [importantLinks, setImportantLinks] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Fetch latest 8 images
        const imgRes = await axios.get('http://localhost:5000/api/images');
        setGalleryImages(imgRes.data.slice(0, 8));

        // Fetch important links
        const linkRes = await axios.get('http://localhost:5000/api/important-links');
        setImportantLinks(linkRes.data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, []);

  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };


  return (
    <div className="bg-gray-100 flex flex-col ">
      {/*Slider image  */}
      <div><HeroSlider /></div>
      <div className='parent-container '>
        <div className="relative grid md:grid-cols-3 gap-6 px-6 py-12">

          {/* ================= NOTICE ================= */}
          <div className="bg-white rounded-xl shadow-md border p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Important links</h2>
              <a href="#" className="text-blue-600 text-sm">View all</a>
            </div>

            <div className="space-y-5 text-sm">
              {importantLinks.length > 0 ? (
                importantLinks.map((link) => (
                  <div key={link._id}>
                    <p className="font-medium">
                      ⭐ {link.title}
                    </p>
                    <p className="text-gray-500">{new Date(link.date).toLocaleDateString()}</p>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-red-600 text-xs">View Link</a>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No updates available.</p>
              )}
            </div>
          </div>


          {/* ================= EVENTS (SLIDER) ================= */}
          <NoticeBoard />


          {/* ================= ACADEMIC NOTICES (SLIDER) ================= */}
          <AcademicSlider />

        </div>

      </div>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-wide">
          <span className="block text-lg md:text-xl font-medium text-gray-500 mb-2">
            About
          </span>
          DCE Darbhanga
        </h2>

        <div className="w-24 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT CARD - ABOUT US */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition duration-300">

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-sky-100 p-4 rounded-xl text-primary text-2xl">
                <FaUniversity />
              </div>
              <h2 className="text-2xl font-bold text-primary tracking-wide">
                ABOUT US
              </h2>
            </div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Darbhanga College of Engineering (DCE), Darbhanga is a premier government engineering institution in Bihar, established in 2008,
            </p>

            <h3 className="font-semibold text-lg text-gray-800 mt-4">Vision</h3>
            <p className="text-sm text-gray-600 mt-2">
              committed to providing quality technical education, fostering innovation
            </p>

            <h3 className="font-semibold text-lg text-gray-800 mt-4">Mission</h3>
            <p className="text-sm text-gray-600 mt-2">
              developing skilled professionals for the nation.
            </p>

            <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-sm font-medium transition cursor-pointer">
              <a href="./about/history">Read More</a>

            </button>
          </div>


          {/* CENTER CARD - DIRECTOR */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center hover:shadow-lg transition duration-300">

            <div className="flex justify-center">
              <img
                src="/director.jpg"
                alt="Director"
                className="w-40 h-40 rounded-full object-cover border-4 border-sky-100 shadow"
              />
            </div>

            <span className="inline-block bg-primary text-white text-xs px-4 py-1 rounded-full mt-4">
              Director
            </span>

            <h2 className="text-2xl font-bold text-primary mt-4">
              Prof. chandan kumar
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              Director, D.C.E Darbhanga
            </p>

            <p className="text-sm text-gray-600 mt-2">
              director@Dce.in
            </p>

            <div className="flex gap-4 mt-6">
              <button className="flex-1 border border-sky-500 text-primary py-2 rounded-lg hover:bg-sky-50 transition">
                Email
              </button>

              <button className="flex-1 bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition">
                Profile
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Professor since 2001
            </p>
          </div>


          {/* RIGHT CARD - KNOW US */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition duration-300">

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-sky-100 p-4 rounded-xl text-primary text-2xl">
                <FaQuoteLeft />
              </div>
              <h2 className="text-2xl font-bold text-primary tracking-wide">
                KNOW US
              </h2>
            </div>

            <h3 className="font-semibold text-lg text-gray-800">
              About Director
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Prof. chandan kumar joined as Lecturer...
            </p>

            <h3 className="font-semibold text-lg text-gray-800 mt-6">
              Director's Message
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">

            </p>

            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 mt-6 text-sm text-gray-700">
              It is an honour to serve as the Principal of DCE Darbhanga. the institute holds a proud place in Bihar and continues to provide quality technological education to the youth.
            </div>

            <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-sm font-medium transition">
              Explore More
            </button>
          </div>

        </div>
      </div>
      <div className="bg-gray-100 flex flex-col overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Campus Gallery
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {galleryImages.length > 0 ? (
              galleryImages.map((img, index) => (
                <div
                  key={img._id}
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={img.imageUrl}
                    alt={img.title || "Campus"}
                    className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">Loading gallery...</p>
            )}

          </div>

        </div>
      </div>










      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <ImageModal
          images={galleryImages}
          currentIndex={selectedImageIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default Home;
