import React, { useState, useEffect } from 'react';
import { Link2, ArrowRight } from 'lucide-react';
import api from '../../services/api';

const ImportantLinksPage = () => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await api.get("/important-links");
                setLinks(response.data);
            } catch (error) {
                console.error("Error fetching links:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLinks();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#133b5c] mb-4">Important Links</h1>
                    <div className="w-24 h-1 bg-[#c6b677] mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Access essential institutional resources, external portals, and quick links for students and faculty.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#133b5c]"></div>
                    </div>
                ) : links.length === 0 ? (
                    <div className="bg-white p-12 rounded-3xl shadow-sm text-center border border-gray-100">
                        <Link2 size={48} className="text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-500">No Links Available</h3>
                        <p className="text-gray-400 mt-2">Check back later for updated institutional links.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {links.map((link, i) => (
                            <a 
                                key={link._id} 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full animate-fade-in-up"
                                style={{animationDelay: `${i * 50}ms`}}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-red-50 text-red-600 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                        <Link2 size={24} />
                                    </div>
                                    <span className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100 uppercase tracking-widest">{new Date(link.date).toLocaleDateString()}</span>
                                </div>
                                <h2 className="text-lg font-bold text-[#133b5c] mb-2 group-hover:text-[#c6b677] transition-colors">
                                    {link.title}
                                </h2>
                                <div className="mt-auto pt-6 flex items-center text-sm font-bold text-[#133b5c] group-hover:text-[#1a4b73]">
                                    Access Resource <ArrowRight size={16} className="ml-2 py-px transform group-hover:translate-x-2 transition-transform duration-300" />
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImportantLinksPage;
