import React, { useState, useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import NoticeBoard from '../components/NoticeBoard';
import api from '../services/api';
import { FaUniversity, FaQuoteLeft } from "react-icons/fa";
import CampusLife from '../components/CampusLife';
import SocialWall from '../components/SocialWall';
import CampusPlacements from '../components/CampusPlacements';
import DignitarySection from '../components/DignitarySection';

const Home = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [importantLinks, setImportantLinks] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Fetch latest 8 images
        const imgRes = await api.get('/images');
        setGalleryImages(imgRes.data.slice(0, 8));

        // Fetch important links
        const linkRes = await api.get('/important-links');
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

  const importantResources = [
    {
      title: 'Centres of Excellence',
      description: 'Advanced labs and innovation hubs for practical learning and research excellence.',
      image: 'https://www.dce-darbhanga.org/wp-content/uploads/2025/03/1674801903636.png',
      url: '/programmes/c-dac',
    },
    {
      title: 'NPTEL',
      description: 'Access certification courses from IITs and IISc to strengthen technical skills.',
      image: 'https://bcebakhtiyarpur.ac.in/wp-content/uploads/2026/01/nptel-1024x199-2.png',
      url: 'https://nptel.ac.in/localchapter/statistics/3410',
    },
    {
      title: 'AICTE Internship',
      description: 'Explore verified internships and industry opportunities through AICTE portal.',
      image: 'https://www.dce-darbhanga.org/wp-content/uploads/2023/05/internship-concept-chart-keywords-icons-260nw-253848799.webp',
      url: 'https://internship.aicte-india.org/',
    },
    {
      title: 'NIRF',
      description: 'National Institutional Ranking Framework Ministry of Education Government of India.',
      image: 'https://www.dce-darbhanga.org/wp-content/uploads/2023/02/nirf-full.png',
      url: 'https://www.dce-darbhanga.org/nirf/about-nirf/',
    },
    {
      title: 'Grievance Redressal System',
      description: 'Grievance Redress And Monitoring System is an online web-enabled system over internet.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYYsL2aqAvN1UeKlrsQiLF7EvHbh6THuYkg&s',
      url: '#',
    },
  ];


  return (
    <div className="bg-gray-100 flex flex-col ">
      {/*Slider image  */}
      <div><HeroSlider /></div>

      {/* ================= DIGNITARIES SECTION ================= */}
      <DignitarySection />


         {/* ================= SECRETARY MESSAGE SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 pb-16 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          {/* Left Area - Message Text */}
          <div className="w-full md:w-2/3 flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-[#133b5c] text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Message from the Secretary
            </h2>

            <div className="text-gray-600 md:text-lg space-y-3 font-light">
             <p>
  At DCE Darbhanga, our commitment is to provide every student with a supportive and progressive academic environment where talent is nurtured with care and discipline.
</p>
<p>
  We believe true education goes beyond classrooms. It is about building character, strengthening values, and preparing young professionals to contribute meaningfully to society and the nation. I encourage all students to remain focused, embrace continuous learning, and uphold the spirit of integrity and excellence in every step of their journey.
</p>
<p>
  Together, let us strive to create a culture of innovation, academic distinction and responsibility that will guide our institution toward a brighter future because your potential is truely limitless.
</p>
            </div>
          </div>

          {/* Right Area - Secretary Photo */}
          <div className="grid w-full md:w-1/3 justify-center md:justify-center order-1 md:order-2">
            <div className="flex relative group justify-center">
              <div className="absolute inset-0 bg-[#c6b677] -translate-x-4 translate-y-4 rounded-xl -z-10 transition-transform duration-300 group-hover:-translate-x-6 group-hover:translate-y-6"></div>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99-ZMZeEtYlFVdT-HN3Hz0f_i64Zf76D67g&s"
                alt="Principal"
                className="w-64 h-80 md:w-72 md:h-auto object-cover rounded-xl shadow-lg border border-gray-100 relative z-10"
              />
            </div>

            <div className="mt-10 border-l-4 border-[#c6b677] pl-4 text-left">
              <h4 className="text-xl font-bold text-gray-800 tracking-wide">Secretary Name</h4>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">Secretary, DCE Darbhanga</p>
            </div>
          </div>

        </div>
      </div>
        {/* ================= PRINCIPAL MESSAGE SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

          {/* Left Area - Principal Photo */}
          <div className="grid w-full md:w-1/3 justify-center md:justify-center">
            <div className="flex relative group justify-center">
              {/* Decorative Background Box */}
              <div className="absolute inset-0 bg-[#c6b677] translate-x-4 translate-y-4 rounded-xl -z-10 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>

              <img
                src="/chandan-sir.jpeg"
                alt="Principal"
                className="w-64 h-80 md:w-72 md:h-auto object-cover rounded-xl shadow-lg border border-gray-100 relative z-10"
              />
            </div>
               <div className="mt-10 border-l-4 border-[#c6b677] pl-4">
              <h4 className="text-xl font-bold text-gray-800 tracking-wide">Prof. (Dr.) Chandan Kumar</h4>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">Principal, DCE Darbhanga</p>
            </div>
          </div>

          {/* Right Area - Message Text */}
          <div className="w-full md:w-2/3 flex flex-col justify-center">

            <h2 className="text-[#133b5c] text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Message from the Principal
            </h2>

            <div className="text-gray-600 md:text-lg space-y-3 font-light">
              <p>
                Welcome to DCE Darbhanga. Empowering young minds with robust technical knowledge and instilling an innovative spirit has always been the cornerstone of our philosophy.
              </p>
              <p>
                In today's rapidly evolving global landscape, engineers are the architects of the future. We strive to create an academic ecosystem that nurtures creativity, critical thinking, and a passion for excellence. Our dedicated faculty and state-of-the-art facilities ensure that our students are not just industry-ready, but are visionary leaders who can construct solutions for tomorrow's complex challenges.
              </p>
              <p>
                As you embark on this exciting journey with us, I urge you to dream big, work tirelessly, and remember that your potential is truly limitless.
              </p>
            </div>
          
          </div>

        </div>
      </div>

      
      <div className='parent-container '>
        <div className="relative grid md:grid-cols-2 gap-6 px-6 py-6">

          {/* ================= EVENTS (SLIDER) ================= */}
          <NoticeBoard />

          {/* ================= IMPORTANT LINNKSS ================= */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="bg-[#133b5c] text-[#c6b677] p-3 flex justify-between items-center border-b-2 border-[#c6b677]">
              <h2 className="font-bold text-lg flex items-center gap-2 text-white">Important Link</h2>
              <a href="#" className="text-xs text-[#c6b677] hover:text-white transition-colors px-2 py-1">View all</a>
            </div>

            <div className="space-y-4 text-sm p-4">
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

        </div>

      </div>
    

      {/* ================= CAMPUS LIFE SECTION ================= */}
      <CampusLife />

      {/* ================= SOCIAL WALL SECTION ================= */}
      <SocialWall />

      {/* ================= CAMPUS PLACEMENTS SECTION ================= */}
      {/* <CampusPlacements /> */}

      {/* ================= IMPORTANT RESOURCES SECTION ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#133b5c]">Important Resources</h2>
            <span className="text-[#c6b677] text-sm tracking-wider uppercase">Quick Access</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
            {importantResources.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-xl shadow-lg ring-1 ring-white/10 group min-h-[180px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute p-5 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:backdrop-blur-[2px] group-hover:bg-black/45 transition-all duration-300">
                  <p className="text-white text-sm leading-relaxed text-center rounded-md px-3 max-w-[90%]">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-[#133b5c]/85 border-t border-[#c6b677]/50 px-4 py-3 flex items-center justify-between">
                  <p className="text-white text-sm font-medium leading-tight">{item.title}</p>
                  <span className="text-[#c6b677] text-lg">›</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
