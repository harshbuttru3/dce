import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileDownload, FaArrowLeft, FaArrowRight, FaIdCard, FaUser, FaHistory, FaScroll } from 'react-icons/fa';
import { jsPDF } from 'jspdf';

const BonafideForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        rollNo: '',
        regNo: '', // Added back
        session: '',
        semester: '',
        department: '',
        purpose: '',
        gender: 'Male'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => setStep(2);
    const handlePrev = () => setStep(1);

    const getYearFromSemester = (sem) => {
        const s = parseInt(sem);
        if (isNaN(s)) return '______';
        if (s <= 2) return '1st';
        if (s <= 4) return '2nd';
        if (s <= 6) return '3rd';
        if (s <= 8) return '4th';
        return '______';
    };

    const downloadPDF = () => {
        const doc = new jsPDF('p', 'mm', 'a4');
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        // 1. Header - Centered, Bold, Underlined
        doc.setTextColor(0, 0, 0);
        doc.setFont('times', 'bold');
        
        doc.setFontSize(22);
        const header1 = "Darbhanga College Of Engineering, Darbhanga";
        const w1 = doc.getTextWidth(header1);
        doc.text(header1, (pageWidth - w1) / 2, 20);
        doc.line((pageWidth - w1) / 2, 21, (pageWidth + w1) / 2, 21);

        doc.setFontSize(16);
        const header2 = "Mabbi, Darbhanga – 846005";
        const w2 = doc.getTextWidth(header2);
        doc.text(header2, (pageWidth - w2) / 2, 28);
        doc.line((pageWidth - w2) / 2, 29, (pageWidth + w2) / 2, 29);

        // 2. Letter No and Date
        doc.setFontSize(12);
        doc.setFont('times', 'normal');
        doc.text("Letter No. .................", 20, 40);
        doc.text(`Date ${new Date().toLocaleDateString()}`, pageWidth - 50, 40);

        // 3. Centered Logo
        try {
            const logoImg = "/dce_logo.png";
            doc.addImage(logoImg, 'PNG', (pageWidth - 25) / 2, 45, 25, 25);
        } catch (e) {
            console.error("Logo addition failed", e);
        }

        // 4. Document Title - Centered, Bold, Underlined
        doc.setFontSize(18);
        doc.setFont('times', 'bold');
        const title = "BONAFIDE CERTIFICATE";
        const titleWidth = doc.getTextWidth(title);
        doc.text(title, (pageWidth - titleWidth) / 2, 85);
        doc.line((pageWidth - titleWidth) / 2, 87, (pageWidth + titleWidth) / 2, 87);

        // 5. Body Text - Dynamic Bold Inputs
        doc.setFontSize(13);
        const margin = 20;
        const textWidth = pageWidth - (margin * 2);
        let currentX = margin;
        let currentY = 105;
        const lineHeight = 8;

        const year = getYearFromSemester(formData.semester);
        const namePrefix = formData.gender === 'Female' ? 'Miss' : 'Mr.';

        // Define segments: [text, isBold]
        const segments = [
            ["This is to certify that ", false],
            [`${namePrefix} ${formData.name || '____________'}`, true],
            [", So/Do:- ", false],
            [`${formData.fatherName || '____________'}`, true],
            [", Roll No.- ", false],
            [`${formData.rollNo || '____________'}`, true],
            [", Registration No. - ", false],
            [`${formData.regNo || '____________'}`, true],
            [", Session - ", false],
            [`${formData.session || '____________'}`, true],
            [", Branch - ", false],
            [`${formData.department || '____________________'}`, true],
            [", is studying in this college in B.Tech. ", false],
            [`${formData.semester || '______'}`, true],
            [" Sem. (", false],
            [`${year}`, true],
            [" Year).", false]
        ];

        segments.forEach(([text, isBold]) => {
            doc.setFont('times', isBold ? 'bold' : 'normal');
            const words = text.split(' ');
            
            words.forEach((word, index) => {
                const spacing = index === words.length - 1 ? "" : " ";
                const wordWithSpace = word + spacing;
                const wordWidth = doc.getTextWidth(wordWithSpace);

                if (currentX + wordWidth > pageWidth - margin) {
                    currentX = margin;
                    currentY += lineHeight;
                }

                doc.text(wordWithSpace, currentX, currentY);
                currentX += wordWidth;
            });
        });

        // Add Purpose line
        currentX = margin;
        currentY += lineHeight + 5;
        doc.setFont('times', 'normal');
        doc.text("This certificate is issued for the purpose of ", currentX, currentY);
        currentX += doc.getTextWidth("This certificate is issued for the purpose of ");
        doc.setFont('times', 'bold');
        doc.text(formData.purpose || '_________________________', currentX, currentY);

        // 6. Signature Area - On the right
        const footerY = pageHeight - 60;
        doc.setFont('times', 'bold');
        doc.text("Assistant Registrar/ Registrar", pageWidth - 75, footerY);
        doc.text("DCE, Darbhanga", pageWidth - 55, footerY + 6);

        doc.save(`Bonafide_${formData.rollNo}.pdf`);
    };

    const inputClasses = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#133b5c] focus:border-transparent transition-all outline-none bg-gray-50";
    const labelClasses = "block text-sm font-bold text-gray-700 mb-2 ml-1 uppercase tracking-wider";

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#133b5c] mb-4">Bonafide Certificate</h1>
                    <p className="text-gray-500 font-light max-w-lg mx-auto italic">Apply for your official college bonafide certificate by providing the required details below.</p>
                </div>

                {/* Progress Bar */}
                <div className="flex items-center justify-center mb-12 gap-4">
                    <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#133b5c]' : 'text-gray-400'}`}>
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${step >= 1 ? 'border-[#133b5c] bg-[#133b5c] text-white' : 'border-gray-300'}`}>1</span>
                        <span className="font-bold hidden sm:inline">Fill Details</span>
                    </div>
                    <div className="w-12 h-0.5 bg-gray-300"></div>
                    <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#133b5c]' : 'text-gray-400'}`}>
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${step >= 2 ? 'border-[#133b5c] bg-[#133b5c] text-white' : 'border-gray-300'}`}>2</span>
                        <span className="font-bold hidden sm:inline">Review & Download</span>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 ? (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className={labelClasses}>Full Name</label>
                                    <div className="relative">
                                        <FaUser className="absolute left-4 top-4 text-gray-400" />
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="As per records" className={`${inputClasses} pl-12`} />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClasses}>Father's Name</label>
                                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Gender</label>
                                    <select name="gender" value={formData.gender} onChange={handleChange} className={inputClasses}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>University Roll No.</label>
                                    <div className="relative">
                                        <FaIdCard className="absolute left-4 top-4 text-gray-400" />
                                        <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} className={`${inputClasses} pl-12`} />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClasses}>Registration No.</label>
                                    <div className="relative">
                                        <FaIdCard className="absolute left-4 top-4 text-gray-400" />
                                        <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} className={`${inputClasses} pl-12`} />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClasses}>Department / Branch</label>
                                    <select name="department" value={formData.department} onChange={handleChange} className={inputClasses}>
                                        <option value="">Select Branch</option>
                                        <option value="Computer Science and Engineering">CSE</option>
                                        <option value="Civil Engineering">Civil</option>
                                        <option value="Mechanical Engineering">Mechanical</option>
                                        <option value="Electrical & Electronics Engineering">EEE</option>
                                        <option value="Fire Technology and Safety">Fire Tech</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>Academic Session</label>
                                    <div className="relative">
                                        <FaHistory className="absolute left-4 top-4 text-gray-400" />
                                        <input type="text" name="session" value={formData.session} onChange={handleChange} placeholder="e.g. 2023-27" className={`${inputClasses} pl-12`} />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClasses}>Current Semester</label>
                                    <input type="text" name="semester" value={formData.semester} onChange={handleChange} placeholder="e.g. 5" className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Purpose of Certificate</label>
                                    <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} placeholder="e.g. Internship" className={inputClasses} />
                                </div>
                            </div>
                            <div className="mt-12 flex justify-end">
                                <button
                                    onClick={handleNext}
                                    className="bg-[#133b5c] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#c6b677] transition-all shadow-xl active:scale-95"
                                >
                                    Review Certificate <FaArrowRight />
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="flex flex-col gap-8">
                                {/* Certificate Preview Container */}
                                <div className="bg-white shadow-2xl p-1 md:p-8 rounded-3xl overflow-x-auto">
                                    <div 
                                        ref={certificateRef}
                                        style={{ 
                                            minWidth: '800px',
                                            padding: '40px',
                                            backgroundColor: '#ffffff',
                                            fontFamily: 'times, serif',
                                            color: '#000000',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {/* Header */}
                                        <div style={{ marginBottom: '30px' }}>
                                            <h1 style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'underline', margin: '0' }}>Darbhanga College Of Engineering, Darbhanga</h1>
                                            <h2 style={{ fontSize: '18px', fontWeight: 'bold', textDecoration: 'underline', marginTop: '5px' }}>Mabbi, Darbhanga – 846005</h2>
                                        </div>

                                        {/* Info Row */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', padding: '0 20px' }}>
                                            <span>Letter No. .................</span>
                                            <span>Date: {new Date().toLocaleDateString()}</span>
                                        </div>

                                        {/* Logo */}
                                        <div style={{ margin: '20px 0' }}>
                                            <img src="/dce_logo.png" alt="DCE Logo" style={{ width: '80px', margin: '0 auto' }} />
                                        </div>

                                        {/* Title */}
                                        <div style={{ marginBottom: '40px' }}>
                                            <h2 style={{ fontSize: '20px', fontWeight: 'bold', textDecoration: 'underline' }}>BONAFIDE CERTIFICATE</h2>
                                        </div>

                                        {/* Body */}
                                        <div style={{ fontSize: '16px', lineHeight: '2', textAlign: 'justify', padding: '0 40px', marginBottom: '60px' }}>
                                            <p>
                                                This is to certify that {formData.gender === 'Female' ? 'Miss' : 'Mr.'} <strong>{formData.name || '____________'}</strong>, 
                                                So/Do:- <strong>{formData.fatherName || '____________'}</strong>, 
                                                Roll No.- <strong>{formData.rollNo || '____________'}</strong>, 
                                                Registration No. – <strong>{formData.regNo || '____________'}</strong>, 
                                                Session – <strong>{formData.session || '____________'}</strong>, 
                                                Branch – <strong>{formData.department || '____________________'}</strong>, 
                                                is studying in this college in B.Tech. <strong>{formData.semester || '______'}</strong> Sem. (<strong>{getYearFromSemester(formData.semester)}</strong> Year).
                                            </p>
                                        </div>

                                        {/* Footer */}
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 40px' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Assistant Registrar/ Registrar</p>
                                                <p style={{ fontWeight: 'bold' }}>DCE, Darbhanga</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row justify-between gap-4">
                                    <button
                                        onClick={handlePrev}
                                        className="text-gray-500 font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                                    >
                                        <FaArrowLeft /> Back to Edit
                                    </button>
                                    <button
                                        onClick={downloadPDF}
                                        className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-green-700 transition-all shadow-xl active:scale-95"
                                    >
                                        <FaFileDownload size={20} /> Download PDF
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default BonafideForm;
