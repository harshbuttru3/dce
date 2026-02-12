import React from 'react';
import { FileText, Calendar } from 'lucide-react';

const notices = [
    { id: 1, text: "Registration for B.Tech 1st Semester (2025-29) started.", date: "2025-10-12" },
    { id: 2, text: "Mid-Semester exam schedule for 3rd and 5th Semester.", date: "2025-10-10" },
    { id: 3, text: "Holiday declared on 15th Oct due to local festival.", date: "2025-10-09" },
    { id: 4, text: "Scholarship applications open for OBC students.", date: "2025-10-05" },
    { id: 5, text: "Workshop on AI and Machine Learning scheduled next week.", date: "2025-10-01" },
];

const NoticeBoard = () => {
    return (
        <div className=" bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden h-full">
            <div className="bg-white text-blue-600 p-3 flex justify-between items-center">
                <h3 className="font-bold text-lg flex items-center gap-2">
                    <FileText size={20} /> Notice Board
                </h3>
                <button className="text-xs  hover:bg-sky-100 px-2 py-1 rounded transition-colors">
                    View All
                </button>
            </div>

            <div className="relative h-[300px] overflow-hidden p-2">
                {/* Simple vertical scrolling animation using Tailwind/CSS */}
                <div className="animate-marquee-vertical space-y-4">
                    {notices.concat(notices).map((notice, index) => (
                        <div key={`${notice.id}-${index}`} className="border-b border-gray-100 pb-2 last:border-0 hover:bg-gray-50 p-2 transition-colors cursor-pointer">
                            <div className="flex items-center gap-2 text-xs text-secondary font-semibold mb-1">
                                <Calendar size={12} /> {notice.date}
                            </div>
                            <p className="text-sm text-gray-700 hover:text-primary leading-snug">
                                {notice.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NoticeBoard;
