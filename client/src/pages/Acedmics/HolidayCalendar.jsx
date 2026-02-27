import React, { useEffect } from 'react';
import { Calendar, Download, Info } from 'lucide-react';

const holidays = [
    { date: "01 Jan 2026", occasion: "New Year's Day", day: "Thursday" },
    { date: "14 Jan 2026", occasion: "Makar Sankranti", day: "Wednesday" },
    { date: "26 Jan 2026", occasion: "Republic Day", day: "Monday" },
    { date: "05 Feb 2026", occasion: "Basant Panchami", day: "Thursday" },
    { date: "26 Feb 2026", occasion: "Maha Shivaratri", day: "Thursday" },
    { date: "13 Mar 2026", occasion: "Holi", day: "Friday" },
    { date: "14 Mar 2026", occasion: "Holi", day: "Saturday" },
    { date: "27 Mar 2026", occasion: "Ram Navami", day: "Friday" },
    { date: "31 Mar 2026", occasion: "Eid-ul-Fitr*", day: "Tuesday" },
    { date: "10 Apr 2026", occasion: "Good Friday", day: "Friday" },
    { date: "14 Apr 2026", occasion: "Ambedkar Jayanti", day: "Tuesday" },
    { date: "01 May 2026", occasion: "May Day", day: "Friday" },
    { date: "07 Jun 2026", occasion: "Eid-ul-Zuha*", day: "Sunday" },
    { date: "07 Jul 2026", occasion: "Muharram*", day: "Tuesday" },
    { date: "15 Aug 2026", occasion: "Independence Day", day: "Saturday" },
    { date: "28 Aug 2026", occasion: "Janamashtami", day: "Friday" },
    { date: "05 Sep 2026", occasion: "Eid-e-Milad*", day: "Saturday" },
    { date: "02 Oct 2026", occasion: "Gandhi Jayanti", day: "Friday" },
    { date: "19 Oct 2026", occasion: "Maha Ashtami", day: "Monday" },
    { date: "20 Oct 2026", occasion: "Maha Navami", day: "Tuesday" },
    { date: "21 Oct 2026", occasion: "Vijaya Dashami", day: "Wednesday" },
    { date: "31 Oct 2026", occasion: "Deepawali", day: "Saturday" },
    { date: "15 Nov 2026", occasion: "Chhath Puja", day: "Sunday" },
    { date: "16 Nov 2026", occasion: "Chhath Puja", day: "Monday" },
    { date: "25 Dec 2026", occasion: "Christmas Day", day: "Friday" },
];

const HolidayCalendar = () => {
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
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Hero Section */}
                <div className="bg-[#133b5c] rounded-3xl p-10 md:p-16 mb-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#c6b677]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#c6b677] p-3 rounded-2xl shadow-lg shadow-black/20">
                                <Calendar className="text-[#133b5c]" size={32} />
                            </div>
                            <span className="text-[#c6b677] font-bold uppercase tracking-[0.3em] text-xs">Administrative</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic text-white">Holiday List 2026</h1>
                        <p className="text-white/70 max-w-2xl text-lg font-light leading-relaxed">
                            Institutional holiday schedule for the academic year 2026. Please note that dates marked with (*) are subject to the appearance of the moon.
                        </p>
                        <button className="mt-10 bg-[#c6b677] text-[#133b5c] px-8 py-3 rounded-sm font-bold shadow-xl hover:bg-white transition-all flex items-center gap-2 group">
                            <Download size={20} className="group-hover:translate-y-1 transition-transform" /> Download PDF
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#133b5c] text-white">
                                    <th className="px-8 py-6 uppercase tracking-widest text-xs font-bold font-serif">SL No.</th>
                                    <th className="px-8 py-6 uppercase tracking-widest text-xs font-bold font-serif">Occasion / Festival</th>
                                    <th className="px-8 py-6 uppercase tracking-widest text-xs font-bold font-serif">Date</th>
                                    <th className="px-8 py-6 uppercase tracking-widest text-xs font-bold font-serif">Day</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {holidays.map((holiday, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-8 py-5 text-gray-400 font-mono text-sm">{(index + 1).toString().padStart(2, '0')}</td>
                                        <td className="px-8 py-5">
                                            <span className="font-bold text-[#133b5c] group-hover:text-[#c6b677] transition-colors">{holiday.occasion}</span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex flex-col">
                                                <span className="text-gray-600 font-medium">{holiday.date}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${holiday.day === 'Sunday' ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500'}`}>
                                                {holiday.day}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Note Section */}
                <div className="mt-12 bg-white p-8 rounded-3xl border border-dashed border-gray-200 flex gap-6 items-start shadow-sm">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-500 flex-shrink-0">
                        <Info size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#133b5c] mb-2">Important Note:</h4>
                        <p className="text-gray-500 text-sm italic leading-relaxed">
                            Local holidays/restricted holidays will be notified separately by the Principal's office. The college administration reserves the right to modify the holiday list if requested by university or government authorities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolidayCalendar;
