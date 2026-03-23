import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileDownload, FaArrowLeft, FaArrowRight, FaIdCard, FaUser, FaHistory, FaScroll } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const BonafideForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        fatherName: '',
        rollNo: '',
        session: '',
        semester: '',
        department: '',
        purpose: '',
        gender: 'Male'
    });

    const certificateRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => setStep(2);
    const handlePrev = () => setStep(1);

    const downloadPDF = async () => {
        const element = certificateRef.current;
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Bonafide_${formData.rollNo}.pdf`);
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
                                    <label className={labelClasses}>University Roll No. / Reg No.</label>
                                    <div className="relative">
                                        <FaIdCard className="absolute left-4 top-4 text-gray-400" />
                                        <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} className={`${inputClasses} pl-12`} />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClasses}>Department</label>
                                    <select name="department" value={formData.department} onChange={handleChange} className={inputClasses}>
                                        <option value="">Select Department</option>
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
                                        <input type="text" name="session" value={formData.session} onChange={handleChange} placeholder="e.g. 2021-25" className={`${inputClasses} pl-12`} />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClasses}>Current Semester</label>
                                    <input type="text" name="semester" value={formData.semester} onChange={handleChange} placeholder="e.g. 6th" className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Purpose of Certificate</label>
                                    <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} placeholder="e.g. Internship, Bank Loan" className={inputClasses} />
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
                                {/* Certificate Preview Container (What gets turned into PDF) */}
                                <div className="bg-white shadow-2xl p-1 md:p-8 rounded-3xl overflow-x-auto">
                                    <div 
                                        ref={certificateRef}
                                        className="min-w-[700px] w-full bg-white border-[10px] border-double border-[#133b5c] p-16 relative"
                                        style={{ 
                                            fontFamily: 'Georgia, serif',
                                            color: '#000000',      /* Explicitly use hex to avoid oklch issues */
                                            backgroundColor: '#ffffff'
                                        }}
                                    >
                                        {/* Watermark Background Optional */}
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                                            <img src="/dce_logo.png" alt="watermark" className="w-[400px]" />
                                        </div>

                                        <div className="relative z-10">
                                            {/* College Header */}
                                            <div className="text-center mb-10 border-b-2 border-slate-900 pb-8">
                                                <div className="flex items-center justify-center gap-6 mb-4">
                                                    <img src="/dce_logo.png" alt="DCE Logo" className="w-24 h-24" />
                                                    <div>
                                                        <h1 className="text-3xl font-bold uppercase leading-tight" style={{ color: '#133b5c' }}>Darbhanga College of Engineering</h1>
                                                        <p className="text-sm font-semibold tracking-wider" style={{ color: '#334155' }}>A Government Engineering College under DST, Govt. of Bihar</p>
                                                        <p className="text-xs mt-1" style={{ color: '#475569' }}>Lal Sahpur, Mabbi Belauna, Darbhanga - 846005</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Document Title */}
                                            <div className="text-center mb-12">
                                                <h2 className="text-3xl font-bold decoration-slice underline decoration-2 underline-offset-8 text-black">BONAFIDE CERTIFICATE</h2>
                                            </div>

                                            {/* Body Text */}
                                            <div className="text-xl leading-[2.2] text-justify mb-20 px-4" style={{ color: '#1e293b' }}>
                                                <p>
                                                    This is to certify that Mr./Ms. <span className="font-bold border-b border-dotted border-black px-2">{formData.name || '____________'}</span>, 
                                                    Son/Daughter of <span className="font-bold border-b border-dotted border-black px-2">{formData.fatherName || '____________'}</span>, 
                                                    bearing University Roll No. <span className="font-bold border-b border-dotted border-black px-2">{formData.rollNo || '____________'}</span> 
                                                    is a bonafide student of <span className="font-bold border-b border-dotted border-black px-2">{formData.department || '____________________'}</span> 
                                                    department of this college during the academic session <span className="font-bold border-b border-dotted border-black px-2">{formData.session || '____________'}</span>.
                                                    He/She is presently studying in <span className="font-bold border-b border-dotted border-black px-2">{formData.semester || '______'}</span> semester.
                                                </p>
                                                <p className="mt-8">
                                                    This certificate is issued for the purpose of <span className="font-bold border-b border-dotted border-black px-2">{formData.purpose || '_________________________'}</span>.
                                                </p>
                                            </div>

                                            {/* Signatures */}
                                            <div className="flex justify-between items-end mt-24 px-4 font-bold">
                                                <div className="text-left">
                                                    <p>Date: {new Date().toLocaleDateString()}</p>
                                                    <p>Place: Darbhanga</p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="w-40 h-10 mb-2"></div> {/* Placeholder for signature space */}
                                                    <p className="border-t border-black pt-2">Principal / Registrar</p>
                                                    <p className="text-sm">DCE Darbhanga</p>
                                                </div>
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
