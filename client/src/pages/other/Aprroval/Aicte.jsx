import React, { useState, useEffect } from "react";
import api from "../../../services/api";

const Aicte = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const { data } = await api.get('/document?category=aicte');
        setDocuments(data);
      } catch (error) {
        console.error("Error fetching AICTE documents:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocuments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">

        {/* 🔹 Title */}
        <h1 className="text-2xl font-bold font-serif text-[#133b5c] mb-6">
          AICTE Extension of Approvals (EoA)
        </h1>

        {/* 🔹 Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            {/* Table Header */}
            <thead>
              <tr className="bg-[#133b5c] text-white text-left">
                <th className="py-4 px-6 uppercase tracking-widest text-xs font-bold font-serif">SL#</th>
                <th className="py-4 px-6 uppercase tracking-widest text-xs font-bold font-serif">
                  ACADEMIC YEAR / DOCUMENT TITLE
                </th>
                <th className="py-4 px-6 uppercase tracking-widest text-xs font-bold font-serif text-center">
                  ACTION
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr><td colSpan="3" className="py-20 text-center text-gray-400 italic">Retrieving official records...</td></tr>
              ) : documents.length === 0 ? (
                <tr><td colSpan="3" className="py-20 text-center text-gray-400 italic">No AICTE documents found in the archive.</td></tr>
              ) : (
                documents.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="py-4 px-6 text-gray-400 font-mono text-sm">{(index + 1).toString().padStart(2, '0')}</td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-[#133b5c] group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      >
                        Download PDF
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default Aicte;
