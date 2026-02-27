import React, { useEffect } from 'react';
import { BookOpen, UserCheck, ClipboardCheck, ArrowRight, Download, ExternalLink, Info } from 'lucide-react';

const Admission = () => {
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

        {/* Page Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-yellow-600 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Future Engineers</span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-[#133b5c] mb-6">Admission Process</h1>
          <p className="text-gray-500 text-lg md:text-xl font-light italic max-w-2xl mx-auto">
            "Your journey towards technological excellence starts here. Guided by merit, driven by innovation."
          </p>
        </div>

        {/* B.Tech Admission - THE CORE FLOW */}
        <div className="bg-[#133b5c] rounded-3xl p-10 md:p-20 text-white shadow-2xl mb-20 reveal">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="bg-[#c6b677] text-[#133b5c] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">Undergraduate Program</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#c6b677]">B.Tech Admission</h2>
              <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
                Admission to the four-year Bachelor of Technology (B.Tech) courses is handled through the <span className="text-[#c6b677] font-bold">UGEAC (Undergraduate Engineering Admission Counselling)</span> process, which is based on the <span className="text-[#c6b677] font-bold">JEE Main</span> scorecard.
              </p>
              <div className="space-y-6">
                {[
                  { step: "JEE Mains Exam", desc: "Appear for JEE Main examination conducted by NTA." },
                  { step: "UGEAC Registration", desc: "Register on the BCECE Board website for UGEAC counselling." },
                  { step: "Seat Allotment", desc: "Participate in online choice filling and merit-based seat allotment." },
                  { step: "Physical Reporting", desc: "Submit original documents at DCE Darbhanga for final verification." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center font-bold text-xs text-[#c6b677] flex-shrink-0">{i + 1}</span>
                    <div>
                      <h4 className="font-bold text-lg text-[#c6b677]">{item.step}</h4>
                      <p className="text-white/50 text-sm font-light italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c6b677] opacity-10 rounded-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3 text-white"><ClipboardCheck className="text-[#c6b677]" /> Required Documents</h3>
                <ul className="space-y-4 text-sm font-light text-white/80 italic">
                  <li className="flex gap-3"><ArrowRight size={14} className="text-[#c6b677] mt-1" /> JEE Main Scorecard & Admit Card</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="text-[#c6b677] mt-1" /> UGEAC Seat Allotment Letter</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="text-[#c6b677] mt-1" /> Class 10th & 12th Marksheets (Original)</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="text-[#c6b677] mt-1" /> CLC/DLC & Migration Certificates</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="text-[#c6b677] mt-1" /> Caste & Income Certificates (if applicable)</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="text-[#c6b677] mt-1" /> 6 Passport Size Photographs</li>
                </ul>
                <button className="mt-10 w-full bg-[#c6b677] text-[#133b5c] py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-white transition-all">
                  <Download size={18} /> Admission Booklet (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* M.Tech Admission - GATEWAY TO SPECIALIZATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 reveal">
            <span className="bg-[#133b5c] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">Postgraduate Program</span>
            <h3 className="text-3xl font-serif font-bold text-[#133b5c] mb-6 italic">M.Tech Admission</h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-8">
              Admission to M.Tech (Power System) is based on the <span className="text-[#133b5c] font-bold">GATE</span> score. Non-GATE candidates may be considered through university-level engineering entrance exams if seats remain vacant.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#133b5c] text-white px-6 py-3 rounded-sm font-bold text-sm flex items-center gap-2 hover:bg-[#c6b677] transition-all">
                PG Entrance Guide <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="bg-[#f8f9fa] p-12 rounded-3xl border border-dashed border-[#c6b677] flex items-center justify-center flex-col text-center reveal">
            <div className="p-4 bg-white rounded-full shadow-lg mb-6">
              <ExternalLink className="text-[#133b5c]" size={32} />
            </div>
            <h4 className="text-2xl font-serif font-bold text-[#133b5c] mb-3">Official Portal</h4>
            <p className="text-gray-400 text-sm mb-8 font-light italic">Candidates are advised to regularly check the official BCECE Board portal for counselling notifications.</p>
            <a href="https://bceceboard.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#133b5c] font-bold text-sm underline flex items-center gap-2 hover:text-[#c6b677]">
              bceceboard.bihar.gov.in <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Banner - SUPPORT */}
        <div className="bg-[#c6b677] p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 reveal">
          <div className="flex items-start gap-6">
            <div className="bg-[#133b5c] p-4 rounded-2xl text-white shadow-xl">
              <Info size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-serif font-bold text-[#133b5c] mb-1">Need Admission Support?</h4>
              <p className="text-[#133b5c]/70 font-bold uppercase tracking-[0.2em] text-xs">Principal's Office | Academic Cell</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#133b5c] text-white px-8 py-4 rounded-sm font-bold shadow-xl hover:scale-105 transition-all">
              Inquiry Form
            </button>
            <button className="bg-white text-[#133b5c] px-8 py-4 rounded-sm font-bold shadow-xl hover:scale-105 transition-all outline outline-1 outline-[#133b5c]/10">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admission;
