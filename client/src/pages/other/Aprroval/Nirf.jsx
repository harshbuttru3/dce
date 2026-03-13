import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { FileText, Download, ExternalLink, Award } from 'lucide-react';

const Nirf = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const { data } = await api.get('/document?category=nirf');
        setDocuments(data);
      } catch (error) {
        console.error("Error fetching NIRF data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocuments();
  }, []);

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
          <div className="bg-amber-50 p-3 rounded-2xl text-amber-600">
            <Award size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#133b5c]">NIRF Participation & Data</h1>
            <p className="text-gray-400 text-sm">National Institutional Ranking Framework Records</p>
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-gray-400 italic">Syncing with NIRF database...</div>
        ) : documents.length === 0 ? (
          <div className="py-20 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-serif italic">No NIRF records available in the archive yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {documents.map((doc) => (
              <div key={doc._id} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all group flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-[#133b5c] group-hover:text-white transition-all">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#133b5c]">{doc.title}</h4>
                    <p className="text-xs text-amber-600 font-black uppercase tracking-widest mt-1">Official Submission</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#133b5c] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#1a4b73] transition-all shadow-lg"
                  >
                    <Download size={18} /> View Report
                  </a>
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white text-gray-400 rounded-xl hover:text-[#133b5c] transition-all border border-gray-100"
                  >
                    <ExternalLink size={20} />
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

export default Nirf;