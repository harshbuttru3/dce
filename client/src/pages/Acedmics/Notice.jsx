import React, { useState, useEffect } from 'react';
import { Calendar, FileText, ArrowRight } from 'lucide-react';
import api from '../../services/api';

const Notice = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await api.get("/notices");
                setNotices(response.data);
            } catch (error) {
                console.error("Error fetching notices:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchNotices();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#133b5c] mb-4">Event Notices</h1>
                    <div className="w-24 h-1 bg-[#c6b677] mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Stay updated with the latest events, announcements, and important notices from Darbhanga College of Engineering.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#133b5c]"></div>
                    </div>
                ) : notices.length === 0 ? (
                    <div className="bg-white p-12 rounded-3xl shadow-sm text-center border border-gray-100">
                        <FileText size={48} className="text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-500">No Notices Available</h3>
                        <p className="text-gray-400 mt-2">Check back later for updates and announcements.</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {notices.map((notice, i) => (
                            <div key={notice._id} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group flex flex-col md:flex-row gap-6 md:items-center animate-fade-in-up" style={{animationDelay: `${i * 100}ms`}}>
                                <div className="shrink-0 flex flex-col items-center justify-center bg-blue-50/50 rounded-xl p-4 min-w-[100px] border border-blue-100">
                                    <span className="text-2xl font-black text-[#133b5c]">{new Date(notice.date || notice.createdAt).getDate()}</span>
                                    <span className="text-sm font-bold text-[#c6b677] uppercase tracking-wider">{new Date(notice.date || notice.createdAt).toLocaleString('default', { month: 'short' })}</span>
                                    <span className="text-xs text-gray-400 font-medium">{new Date(notice.date || notice.createdAt).getFullYear()}</span>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-[#133b5c] group-hover:text-[#c6b677] transition-colors mb-2">
                                        {notice.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {notice.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} /> Posted on {new Date(notice.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                                <div className="shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-6 flex items-center">
                                    <a 
                                        href={notice.fileUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#133b5c] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1a4b73] transition-all w-full justify-center md:w-auto text-sm"
                                    >
                                        View File <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notice;
