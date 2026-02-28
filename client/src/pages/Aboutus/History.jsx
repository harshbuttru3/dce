import React, { useEffect } from 'react';

const History = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col font-sans bg-[#f4f4f4] overflow-x-hidden">
      {/* Page header section */}
      <div className="w-full bg-white py-12 px-8 md:px-16 border-b border-gray-100 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#133b5c] mb-4 uppercase tracking-tight animate-slide-in-down">About Institute</h1>
        </div>
      </div>

      {/* Top Banner Section */}
      <div className="flex flex-col md:flex-row w-full bg-[#f4f4f4] relative overflow-hidden md:overflow-visible">
        {/* Left Side Container */}
        <div className="w-full md:w-5/12 p-8 md:p-16 flex flex-col justify-center z-20 reveal">
          {/* Main Large Text */}
          <h2 className="text-[#133b5c] text-2xl md:text-4xl font-medium leading-tight max-w-md mb-12 transform hover:scale-105 transition-transform duration-500">
            Darbhanga College of Engineering is an internationally acclaimed and premier institution of higher education in Bihar.
          </h2>

          {/* Overlapping Gold/Tan Box - Positioned below the large text but overlapping the image */}
          <div className="bg-[#c6b677] p-8 md:p-10 w-full md:w-[130%] shadow-xl relative md:z-30 hover:shadow-2xl transition-shadow duration-500">
            <p className="text-white text-sm font-medium leading-relaxed mb-6">
              It is committed to delivering quality education that encourages research, innovation and meaningful extension work. Recognized by AICTE, the institute has been a beacon of academic excellence in Bihar, reflecting its strong academic standards and student-centric ethos.
            </p>
            <p className="text-white text-sm font-medium leading-relaxed">
              Guided by core values of intellectual excellence, collegiality, diversity and integrity, DCE aspires to be a global leader in the 21st century engineering education landscape. It is continuously evolving to meet modern technological demands.
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-7/12 min-h-[300px] md:min-h-[600px] z-10 animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
            alt="Institute Campus"
            className="w-full h-full object-cover shadow-inner hover:scale-110 transition-transform duration-1000"
          />
        </div>
      </div>

      {/* Stats/Awards Section Grid */}
      <div className="w-full bg-[#f4f4f4] py-16 px-4 md:px-12 flex justify-center reveal">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="bg-[#002f6c] text-white p-8 flex flex-col justify-between min-h-[250px]">
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">APPROVED BY AICTE</h3>
              <p className="text-sm leading-snug">All India Council for Technical Education Approval</p>
            </div>
            <div className="mt-8">
              <div className="border border-white/20 p-2 inline-block">
                <span className="font-bold text-xl">AICTE</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#002f6c] text-white p-8 flex flex-col justify-between min-h-[250px]">
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">AFFILIATED BEU</h3>
              <p className="text-sm leading-snug">Bihar Engineering University</p>
            </div>
            <div className="mt-8">
              <div className="bg-red-600 text-white p-2 text-center text-xs font-bold w-16">
                BEU PATNA
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#002f6c] text-white p-8 flex flex-col justify-between min-h-[250px]">
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">ESTABLISHED 2008</h3>
              <p className="text-sm leading-snug">Legacy of Excellence</p>
            </div>
            <div className="mt-8">
              <div className="bg-pink-600 text-white p-2 flex items-center justify-center font-bold text-xl w-16 h-16">
                DCE
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#002f6c] text-white p-8 flex flex-col justify-between min-h-[250px]">
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4 uppercase tracking-wide">Government<br />Institution</h3>
              <p className="text-sm leading-snug">Under Dept of Science & Technology</p>
            </div>
            <div className="mt-8 text-yellow-400 font-bold text-lg flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                DST
              </div>
              BIHAR
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section (New) */}
      <div className="w-full flex flex-col md:flex-row bg-white">
        {/* Left Side - Vision (Gold Box) */}
        <div className="w-full md:w-5/12 bg-[#c6b677] p-12 md:p-20 lg:p-24 flex flex-col justify-center">
          <h2 className="text-white text-3xl md:text-4xl font-serif font-bold mb-8">Vision</h2>
          <p className="text-white text-lg md:text-xl leading-relaxed font-light italic">
            "To develop competent and socially responsible engineers equipped with strong technical knowledge, innovative thinking, and a commitment to lifelong learning. The institution strives to inspire students to pursue higher studies, research, and entrepreneurship while addressing the evolving and sustainable needs of industry, society, and the global community."
          </p>
        </div>

        {/* Right Side - Mission */}
        <div className="w-full md:w-7/12 p-12 md:p-20 lg:p-24 bg-white flex flex-col justify-center">
          <h2 className="text-[#133b5c] text-3xl md:text-4xl font-serif font-bold mb-8">Mission</h2>
          <ul className="space-y-8">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#133b5c] mt-2 shrink-0"></div>
              <div>
                <h4 className="text-[#133b5c] font-bold text-lg mb-1">M1 — Academic Excellence</h4>
                <p className="text-gray-600 font-light leading-relaxed">To create a high-quality teaching and learning environment supported by modern pedagogical practices, digital tools, and outcome-based education.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#133b5c] mt-2 shrink-0"></div>
              <div>
                <h4 className="text-[#133b5c] font-bold text-lg mb-1">M2 — Research & Higher Studies</h4>
                <p className="text-gray-600 font-light leading-relaxed">To encourage intellectual curiosity, research aptitude, and preparation for higher education through mentorship, innovation, and project-based learning.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#133b5c] mt-2 shrink-0"></div>
              <div>
                <h4 className="text-[#133b5c] font-bold text-lg mb-1">M3 — Industry Collaboration</h4>
                <p className="text-gray-600 font-light leading-relaxed">To build strong partnerships with industry and professional bodies for internships, training, real-world exposure, and enhanced professional competence.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#133b5c] mt-2 shrink-0"></div>
              <div>
                <h4 className="text-[#133b5c] font-bold text-lg mb-1">M4 — Ethics & Social Responsibility</h4>
                <p className="text-gray-600 font-light leading-relaxed">To instill humanitarian values, ethical practices, leadership qualities, and a sense of responsibility towards society, the nation, and the global ecosystem.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Extended Institutional Focus Section (Optional) */}
      <div className="w-full bg-[#f4f4f4] py-20 px-4 flex flex-col items-center">
        <h2 className="text-[#133b5c] text-3xl font-serif font-bold mb-12 text-center uppercase tracking-wider underline underline-offset-8 decoration-[#c6b677]">Extended Institutional Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#c6b677] flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
            <p className="text-gray-700 font-medium italic">Promote innovation, startups, and entrepreneurship culture</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#133b5c] flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
            <p className="text-gray-700 font-medium italic">Encourage interdisciplinary learning and emerging technologies</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#c6b677] flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏘️</div>
            <p className="text-gray-700 font-medium italic">Strengthen digital infrastructure and smart campus initiatives</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#133b5c] flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
            <p className="text-gray-700 font-medium italic">Support holistic student development including technical, cultural, and leadership skills</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#c6b677] flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌿</div>
            <p className="text-gray-700 font-medium italic">Foster sustainability awareness and environmentally responsible engineering practices</p>
          </div>
        </div>
      </div>

      {/* Bottom Text Area */}
      <div className="w-full bg-[#f4f4f4] py-12 px-4 flex flex-col items-center text-center">
        <h3 className="text-[#4b6b9e] text-lg font-medium mb-8">Government Approved & Affiliated</h3>

        <div className="max-w-4xl text-gray-500 text-sm space-y-6 leading-relaxed">
          <p>
            Darbhanga College of Engineering built with advanced technology spread over a lush campus is situated in Mabbi, Darbhanga. It offers comprehensive facilities for engineering students including laboratories, libraries, and hostels.
          </p>
          <p>
            The concept of an education hub offering B.tech programs in various disciplines followed by strong placement records. Encompassing major engineering branches like Civil, Mechanical, Computer Science, and Electrical & Electronics, holding approvals from AICTE and affiliated to Bihar Engineering University, Patna.
          </p>
        </div>

        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mt-16 text-xs text-gray-500 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden grayscale opacity-70">
              <img src="/Tlogo.png" alt="Bihar Govt" className="w-8 h-8 object-contain" />
            </div>
            <p>Department of Science, Tech &<br />Technical Education, Govt. of Bihar</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 border border-gray-300 flex items-center justify-center p-1 grayscale opacity-70">
              <span className="font-bold text-[10px] text-center">AICTE</span>
            </div>
            <p>All India Council for<br />Technical Education</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 border border-gray-300 flex items-center justify-center grayscale opacity-70">
              <span className="font-bold text-[10px]">BEU</span>
            </div>
            <p>Bihar Engineering<br />University, Patna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
