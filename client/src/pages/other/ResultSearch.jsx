import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFileDownload, FaUserGraduate, FaIdCard, FaBookOpen, FaLayerGroup } from 'react-icons/fa';
import axios from 'axios';
import { jsPDF } from 'jspdf';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const ResultSearch = () => {
    const [query, setQuery] = useState('');
    const [semester, setSemester] = useState('');
    const [branch, setBranch] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleSearch = async (e) => {
        if (e) e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/results/search`, {
                params: { query, semester, branch }
            });
            setResults(response.data);
            setSearched(true);
        } catch (error) {
            console.error("Error searching results", error);
        } finally {
            setLoading(false);
        }
    };

    const downloadResultPDF = (student) => {
        const doc = new jsPDF('p', 'mm', 'a4');
        const pageWidth = doc.internal.pageSize.getWidth();

        // Header
        doc.setFont('times', 'bold');
        doc.setFontSize(22);
        const header1 = "Darbhanga College Of Engineering, Darbhanga";
        doc.text(header1, (pageWidth - doc.getTextWidth(header1)) / 2, 20);

        doc.setFontSize(16);
        const header2 = "Mabbi, Darbhanga – 846005";
        doc.text(header2, (pageWidth - doc.getTextWidth(header2)) / 2, 28);

        doc.line(20, 35, pageWidth - 20, 35);

        // Title
        doc.setFontSize(18);
        const title = "STATEMENT OF MARKS";
        doc.text(title, (pageWidth - doc.getTextWidth(title)) / 2, 50);

        // Student Info Table style
        doc.setFontSize(12);
        doc.setFont('times', 'normal');
        
        let y = 65;
        const drawRow = (label, value) => {
            doc.setFont('times', 'bold');
            doc.text(label, 30, y);
            doc.setFont('times', 'normal');
            doc.text(": " + value, 80, y);
            y += 10;
        };

        drawRow("Name", student.name);
        drawRow("Registration No.", student.registrationNo);
        drawRow("Roll No.", student.rollNo);
        drawRow("Branch", student.branch);
        drawRow("Semester", student.semester);
        drawRow("SGPA", student.sgpa.toString());
        drawRow("CGPA", student.cgpa.toString());
        drawRow("Status", student.status);

        // Footer
        const footerY = 250;
        doc.line(20, footerY - 10, pageWidth - 20, footerY - 10);
        doc.setFont('times', 'italic');
        doc.setFontSize(10);
        doc.text("Generated on: " + new Date().toLocaleString(), 30, footerY);
        doc.setFont('times', 'bold');
        doc.text("Controller of Examinations", pageWidth - 70, footerY);

        doc.save(`Result_${student.registrationNo}.pdf`);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#133b5c] mb-4">Exam Results</h1>
                        <p className="text-gray-600 max-w-lg mx-auto">Access your academic performance records. Search by name or registration number.</p>
                    </motion.div>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-3xl shadow-xl p-6 mb-12">
                    <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative md:col-span-2">
                            <FaSearch className="absolute left-4 top-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Registration No or Student Name..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#133b5c] outline-none transition-all"
                            />
                        </div>
                        <select
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#133b5c] outline-none"
                        >
                            <option value="">All Semesters</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={s}>{s}th Semester</option>)}
                        </select>
                        <select
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#133b5c] outline-none"
                        >
                            <option value="">All Branches</option>
                            {[
                                "COMPUTER SCIENCE AND ENGINEERING",
                                "CIVIL ENGINEERING",
                                "Computer Science and Engineering(Cyber Security)",
                                "ELECTRICAL AND ELECTRONICS ENGINEERING",
                                "MECHANICAL ENGINEERING",
                                "FIRE TECHNOLOGY AND SAFETY",
                                "Power System"
                            ].map(b => (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </select>
                        <div className="md:col-span-4 flex justify-center mt-4">
                            <button
                                type="submit"
                                className="bg-[#133b5c] text-white px-12 py-3 rounded-xl font-bold hover:bg-[#c6b677] transition-all shadow-lg active:scale-95 flex items-center gap-2"
                            >
                                {loading ? "Searching..." : "Find My Result"}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Results List */}
                <AnimatePresence>
                    {searched && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {results.length > 0 ? (
                                results.map((student) => (
                                    <motion.div
                                        key={student._id}
                                        whileHover={{ y: -5 }}
                                        className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
                                    >
                                        <div className="bg-[#133b5c] p-6 text-white flex justify-between items-center">
                                            <div>
                                                <h3 className="text-xl font-bold">{student.name}</h3>
                                                <p className="text-sm opacity-80">{student.registrationNo}</p>
                                            </div>
                                            <FaUserGraduate size={32} className="opacity-30" />
                                        </div>
                                        <div className="p-6 grid grid-cols-2 gap-4">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <FaIdCard className="text-[#133b5c]" />
                                                <span>Roll: {student.rollNo}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <FaBookOpen className="text-[#133b5c]" />
                                                <span>Sem: {student.semester}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 col-span-2">
                                                <FaLayerGroup className="text-[#133b5c]" />
                                                <span>{student.branch}</span>
                                            </div>
                                            <div className="mt-4 p-4 bg-gray-50 rounded-2xl col-span-2 flex justify-around items-center border border-gray-200">
                                                <div className="text-center">
                                                    <p className="text-xs text-gray-500 uppercase tracking-wider">SGPA</p>
                                                    <p className="text-2xl font-bold text-[#133b5c]">{student.sgpa}</p>
                                                </div>
                                                <div className="w-px h-8 bg-gray-300"></div>
                                                <div className="text-center">
                                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Status</p>
                                                    <p className={`text-lg font-bold ${student.status === 'Pass' ? 'text-green-600' : 'text-red-500'}`}>
                                                        {student.status}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => downloadResultPDF(student)}
                                                className="mt-4 col-span-2 w-full py-4 bg-[#c6b677] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#133b5c] transition-all"
                                            >
                                                <FaFileDownload /> Download Marksheet (PDF)
                                            </button>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center text-gray-500 bg-white rounded-3xl shadow-inner border-2 border-dashed border-gray-200">
                                    <p className="text-xl">No results found for your query.</p>
                                    <p className="text-sm mt-2">Try checking your Registration Number or Name again.</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ResultSearch;
