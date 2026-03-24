import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFileDownload, FaUserGraduate, FaIdCard, FaBookOpen, FaLayerGroup } from 'react-icons/fa';
import axios from 'axios';
import { jsPDF } from 'jspdf';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const ResultSearch = () => {
    const [registrationNo, setRegistrationNo] = useState('');
    const [studentName, setStudentName] = useState('');
    const [semester, setSemester] = useState('');
    const [branch, setBranch] = useState('');
    const [batch, setBatch] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleSearch = useCallback(async (e) => {
        if (e) e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/results/search`, {
                params: { registrationNo, name: studentName, semester, branch, batch }
            });
            setResults(response.data);
            setSearched(true);
        } catch (error) {
            console.error("Error searching results", error);
        } finally {
            setLoading(false);
        }
    }, [semester, branch, batch, registrationNo, studentName, API_URL]);

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
        doc.text(title, (pageWidth - doc.getTextWidth(title)) / 2, 45);

        // Student Details Table
        doc.setLineWidth(0.5);
        doc.rect(20, 55, pageWidth - 40, 40); // Detail box
        
        // Horizontal lines
        doc.line(20, 65, pageWidth - 20, 65);
        doc.line(20, 75, pageWidth - 20, 75);
        doc.line(20, 85, pageWidth - 20, 85);
        
        // Vertical lines (except for the branch row)
        doc.line(pageWidth / 2, 55, pageWidth / 2, 75); // Top two rows
        doc.line(pageWidth / 2, 85, pageWidth / 2, 95); // Bottom row (Semester/Date)

        doc.setFontSize(9);
        doc.setFont('times', 'bold');
        
        // Row 1
        doc.text("NAME", 25, 62);
        doc.text("ROLL NO.", pageWidth/2 + 5, 62);
        
        // Row 2
        doc.text("REGISTRATION NO.", 25, 72);
        doc.text("STATUS", pageWidth/2 + 5, 72);
        
        // Row 3
        doc.text("BRANCH", 25, 82);
        
        // Row 4
        doc.text("SEMESTER", 25, 92);
        doc.text("DATE", pageWidth/2 + 5, 92);
        
        doc.setFont('times', 'normal');
        doc.text(student.name, 70, 62);
        doc.text(student.rollNo, pageWidth/2 + 45, 62);
        
        doc.text(student.registrationNo, 70, 72);
        doc.text(student.status, pageWidth/2 + 45, 72);
        
        doc.text(student.branch, 70, 82);
        
        doc.text(student.semester, 70, 92);
        doc.text(new Date().toLocaleDateString(), pageWidth/2 + 45, 92);

        // Subject Table
        if (student.subjects && student.subjects.length > 0) {
            let tableY = 105;
            doc.setFont('times', 'bold');
            doc.setFontSize(14);
            doc.text("Subject-wise Performance", 20, tableY);
            tableY += 8;

            // Table Header
            doc.setFontSize(10);
            doc.setFillColor(19, 59, 92); // #133b5c
            doc.rect(20, tableY - 5, pageWidth - 40, 8, 'F');
            doc.setTextColor(255, 255, 255);
            doc.text("Subject Name", 25, tableY);
            doc.text("Maximum", pageWidth - 70, tableY);
            doc.text("Obtained", pageWidth - 45, tableY);
            
            doc.setTextColor(0, 0, 0);
            tableY += 8;

            student.subjects.forEach((sub) => {
                doc.text(sub.name, 25, tableY);
                doc.text("100", pageWidth - 65, tableY);
                doc.text(sub.total.toString(), pageWidth - 40, tableY);
                doc.line(20, tableY + 2, pageWidth - 20, tableY + 2);
                tableY += 8;
            });
        }

        // Footer
        const footerY = 285;
        doc.line(20, footerY - 10, pageWidth - 20, footerY - 10);
        doc.setFont('times', 'italic');
        doc.setFontSize(10);
        doc.text("This is a computer generated document. Generated on: " + new Date().toLocaleString(), 20, footerY);
        doc.setFont('times', 'bold');
        doc.text("DCE Exam Cell", pageWidth - 50, footerY);

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
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
                    <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="relative group">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1 block">Registration Number</label>
                            <div className="relative">
                                <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-[#133b5c] transition-colors" />
                                <input
                                    type="text"
                                    placeholder="e.g. 21105..."
                                    value={registrationNo}
                                    onChange={(e) => setRegistrationNo(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-[#133b5c]/5 focus:border-[#133b5c] outline-none transition-all text-sm font-medium"
                                />
                            </div>
                        </div>

                        <div className="relative group">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1 block">Student Name</label>
                            <div className="relative">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-[#133b5c] transition-colors" />
                                <input
                                    type="text"
                                    placeholder="e.g. John Doe"
                                    value={studentName}
                                    onChange={(e) => setStudentName(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-[#133b5c]/5 focus:border-[#133b5c] outline-none transition-all text-sm font-medium"
                                />
                            </div>
                        </div>
                        <div className="group">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1 block">Semester</label>
                            <select
                                value={semester}
                                onChange={(e) => setSemester(e.target.value)}
                                className="w-full px-4 py-3.5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-[#133b5c]/5 focus:border-[#133b5c] outline-none transition-all text-sm font-medium"
                            >
                                <option value="">All Semesters</option>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={s}>{s}th Semester</option>)}
                            </select>
                        </div>

                        <div className="group">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1 block">Batch</label>
                            <select
                                value={batch}
                                onChange={(e) => setBatch(e.target.value)}
                                className="w-full px-4 py-3.5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-[#133b5c]/5 focus:border-[#133b5c] outline-none transition-all text-sm font-medium"
                            >
                                <option value="">All Batches</option>
                                {["2020-24", "2021-25", "2022-26", "2023-27", "2024-28", "2025-29"].map(b => (
                                    <option key={b} value={b}>{b}</option>
                                ))}
                            </select>
                        </div>

                        <div className="group lg:col-span-2">
                             <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1 block">Branch / Discipline</label>
                             <select
                                 value={branch}
                                 onChange={(e) => setBranch(e.target.value)}
                                 className="w-full px-4 py-3.5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-[#133b5c]/5 focus:border-[#133b5c] outline-none transition-all text-sm font-medium text-ellipsis"
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
                        </div>
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
                                            <div className="mt-4 p-4 bg-gray-50 rounded-2xl col-span-2 flex justify-center items-center border border-gray-200">
                                                <div className="text-center">
                                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Status</p>
                                                    <p className={`text-lg font-bold ${student.status === 'Pass' ? 'text-green-600' : 'text-red-500'}`}>
                                                        {student.status}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Subject Table in Card */}
                                            {student.subjects && student.subjects.length > 0 && (
                                                <div className="col-span-2 mt-4 overflow-hidden border border-gray-100 rounded-xl">
                                                    <table className="w-full text-left bg-gray-50/50">
                                                        <thead className="bg-gray-100 text-[10px] uppercase font-bold text-gray-500">
                                                            <tr>
                                                                <th className="px-4 py-2">Subject</th>
                                                                <th className="px-4 py-2 text-right">Marks</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            {student.subjects.map((sub, idx) => (
                                                                <tr key={idx} className="text-xs text-gray-600">
                                                                    <td className="px-4 py-2 font-medium">{sub.name}</td>
                                                                    <td className="px-4 py-2 text-right font-bold text-[#133b5c]">{sub.total}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}

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
