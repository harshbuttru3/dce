import React, { useEffect } from 'react';
import { Calendar, Clock, Download, Info, ChevronRight } from 'lucide-react';

const academicEvents = [
  { event: "Commencement of Classes", odd: "01 July 2025", even: "02 Jan 2026" },
  { event: "First Mid-Semester Exam", odd: "25 Aug 2025", even: "15 Feb 2026" },
  { event: "Second Mid-Semester Exam", odd: "10 Oct 2025", even: "20 Mar 2026" },
  { event: "Last Date of Classes", odd: "15 Nov 2025", even: "10 May 2026" },
  { event: "End-Semester Theory Exam", odd: "01 Dec 2025", even: "20 May 2026" },
  { event: "Practical Examinations", odd: "18 Dec 2025", even: "05 Jun 2026" },
  { event: "Semester Break", odd: "25 Dec - 01 Jan", even: "15 Jun - 30 Jun" },
];

const Calender = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 reveal">
          <div className="md:w-2/3">
            <span className="text-[#c6b677] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Institutional Planning</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#133b5c] mb-6">Academic Calendar</h1>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl">
              The following schedule outlines the instructional and examination timelines for the academic year 2025-26 as per Bihar Engineering University (BEU) guidelines.
            </p>
          </div>
          <button className="bg-[#133b5c] text-white px-8 py-4 rounded-sm font-bold shadow-xl flex items-center gap-3 hover:bg-[#c6b677] transition-all group">
            Full Calendar 2025-26 <Download className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Semester Timing Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 reveal delay-200">
          <div className="bg-[#133b5c] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-[#c6b677] mb-6 font-bold uppercase tracking-widest text-xs">
                <Clock size={16} /> 20 Weeks Duration
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 italic text-white">Autumn (Odd) Semester</h3>
              <p className="text-white/60 mb-8 font-light italic">"Beginning of the academic journey focused on foundational and core excellence."</p>
              <div className="flex items-center gap-2 text-white font-bold group-hover:text-[#c6b677] transition-colors cursor-pointer">
                July — November <ChevronRight size={20} />
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#133b5c]/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-yellow-600 mb-6 font-bold uppercase tracking-widest text-xs">
                <Clock size={16} /> 20 Weeks Duration
              </div>
              <h3 className="text-3xl font-serif font-bold text-[#133b5c] mb-4 italic">Spring (Even) Semester</h3>
              <p className="text-gray-400 mb-8 font-light italic">"Advancing towards specialization and end-of-year practical implementations."</p>
              <div className="flex items-center gap-2 text-[#133b5c] font-bold group-hover:text-yellow-600 transition-colors cursor-pointer">
                January — May <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Schedule Table */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 reveal delay-400">
        <div className="p-8 bg-[#f8f9fa] border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <h4 className="text-[#133b5c] font-bold text-xl uppercase tracking-widest">Schedule of Activities</h4>
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-[#133b5c] rounded-full"></span>
            <span className="w-3 h-3 bg-[#c6b677] rounded-full"></span>
            <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#133b5c] text-white">
                <th className="px-8 py-6 uppercase tracking-widest text-xs font-bold font-serif">SL No.</th>
                <th className="px-8 py-6 uppercase tracking-widest text-xs font-bold font-serif">Activity / Milestone</th>
                <th className="px-8 py-6 uppercase tracking-widest text-xs font-bold font-serif bg-white/10 italic">Odd Semester</th>
                <th className="px-8 py-6 uppercase tracking-widest text-xs font-bold font-serif bg-white/5 italic">Even Semester</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {academicEvents.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-8 py-6 text-gray-300 font-mono">{(index + 1).toString().padStart(2, '0')}</td>
                  <td className="px-8 py-6">
                    <span className="font-bold text-[#133b5c]">{item.event}</span>
                  </td>
                  <td className="px-8 py-6 text-gray-500 font-medium">{item.odd}</td>
                  <td className="px-8 py-6 text-gray-400">{item.even}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Downloads & Important Links */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
        <div className="bg-white p-10 rounded-3xl border border-gray-100 flex gap-8 items-start hover:-translate-y-2 transition-all">
          <div className="bg-blue-50 p-4 rounded-2xl text-[#133b5c] flex-shrink-0">
            <Download size={32} />
          </div>
          <div>
            <h4 className="font-bold text-[#133b5c] text-lg mb-2">Detailed B.Tech Calendar</h4>
            <p className="text-gray-400 text-sm mb-6 italic leading-relaxed">Comprehensive timeline for all semesters including holiday list.</p>
            <button className="text-[#133b5c] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">Download PDF (2.1 MB) <ChevronRight size={14} /></button>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-gray-100 flex gap-8 items-start hover:-translate-y-2 transition-all">
          <div className="bg-yellow-50 p-4 rounded-2xl text-yellow-600 flex-shrink-0">
            <Download size={32} />
          </div>
          <div>
            <h4 className="font-bold text-[#133b5c] text-lg mb-2">Detailed M.Tech Calendar</h4>
            <p className="text-gray-400 text-sm mb-6 italic leading-relaxed">Specific schedule for postgraduate research and dissertations.</p>
            <button className="text-[#133b5c] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">Download PDF (1.8 MB) <ChevronRight size={14} /></button>
          </div>
        </div>
      </div>

      {/* University Note */}
      <div className="mt-24 p-12 bg-[#133b5c] rounded-3xl text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://beu-bih.ac.in/BEUP/images/logo.png')] opacity-5 bg-no-repeat bg-center scale-150 grayscale invert group-hover:scale-[2] transition-transform duration-[2s]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <Info className="text-[#c6b677] mb-6" size={40} />
          <p className="text-white/80 text-xl font-serif italic mb-8 max-w-3xl">
            "The academic calendar is approved by the Court of Bihar Engineering University, Patna and provides for at least 90 working days per semester."
          </p>
          <div className="h-[2px] w-32 bg-[#c6b677] mb-8"></div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-[0.5em]">Patna University Framework Integration</p>
        </div>
      </div>

    </div>
  );
};

export default Calender;