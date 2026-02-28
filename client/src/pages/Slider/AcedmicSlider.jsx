import React from "react";
import { FileText, Calendar } from "lucide-react";

const academicData = [
  {
    id: 1,
    title: "Notice regarding Open Ph.D. Viva-voce exam",
    date: "04 Feb 2026",
  },
  {
    id: 2,
    title: "Web Development Cell Induction'26",
    date: "25 Jan 2026",
  },
  {
    id: 3,
    title: "Ph.D. Course Work Registration Notice",
    date: "20 Jan 2026",
  },
];

const AcademicSlider = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">

      {/* Header */}
      <div className="bg-[#133b5c] text-[#c6b677] p-3 flex justify-between items-center border-b-2 border-[#c6b677]">
        <h3 className="font-bold text-lg flex items-center gap-2 text-white">
          <FileText size={20} className="text-[#c6b677]" /> Academic Notice
        </h3>
        <button className="text-xs text-[#c6b677] hover:text-white px-2 py-1 rounded transition-colors">
          View All
        </button>
      </div>

      {/* Scrolling Area */}
      <div className="relative h-[300px] overflow-hidden p-2">
        <div className="animate-marquee-vertical space-y-4">

          {academicData.concat(academicData).map((notice, index) => (
            <div
              key={`${notice.id}-${index}`}
              className="border-b border-gray-100 pb-2 last:border-0 hover:bg-gray-50 p-2 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs text-[#133b5c] font-semibold mb-1">
                <Calendar size={12} className="text-[#c6b677]" /> {notice.date}
              </div>

              <p className="text-sm text-gray-700 hover:text-[#c6b677] leading-snug transition-colors">
                ⭐ {notice.title}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default AcademicSlider;
