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

    const downloadPDF = () => {
        const doc = new jsPDF('p', 'mm', 'a4');
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        // 1. Remove Borders (User requested to remove boundary)
        // No doc.rect calls here anymore

        // 2. Add Logo (Black & White preferred if possible, otherwise normal)
        try {
            const logoImg = "/dce_logo.png";
            doc.addImage(logoImg, 'PNG', 15, 15, 22, 22);
        } catch (e) {
            console.error("Logo addition failed", e);
        }

        // 3. College Header (Black & White)
        doc.setTextColor(0, 0, 0); // Pure Black
        doc.setFont('times', 'bold');
        doc.setFontSize(22); // Reduced slightly to avoid clipping
        doc.text("DARBHANGA COLLEGE OF ENGINEERING", 42, 22);
        
        doc.setFontSize(10);
        doc.setFont('times', 'bold');
        doc.text("A Government Engineering College under DST, Govt. of Bihar", 42, 28);
        doc.setFont('times', 'normal');
        doc.text("Lal Sahpur, Mabbi Belauna, Darbhanga - 846005", 42, 33);

        // 4. Header Line (Black)
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.5);
        doc.line(15, 40, pageWidth - 15, 40);

        // 5. Document Title
        doc.setFontSize(18);
        doc.setFont('times', 'bold');
        const title = "BONAFIDE CERTIFICATE";
        const titleWidth = doc.getTextWidth(title);
        doc.text(title, (pageWidth - titleWidth) / 2, 55);
        doc.line((pageWidth - titleWidth) / 2, 57, (pageWidth + titleWidth) / 2, 57);

        // 6. Body Text
        doc.setFontSize(13);
        doc.setFont('times', 'normal');
        doc.setTextColor(0, 0, 0);

        const margin = 20;
        const textWidth = pageWidth - (margin * 2);
        const startY = 80;

        const bodyContent = `This is to certify that Mr./Ms. ${formData.name || '____________'}, Son/Daughter of ${formData.fatherName || '____________'}, bearing University Roll No. / Reg No. ${formData.rollNo || '____________'} is a bonafide student of ${formData.department || '____________________'} department of this college during the academic session ${formData.session || '____________'}. He/She is presently studying in ${formData.semester || '______'} semester.`;

        const purposeText = `This certificate is issued for the purpose of ${formData.purpose || '_________________________'}.`;

        const splitBody = doc.splitTextToSize(bodyContent, textWidth);
        doc.text(splitBody, margin, startY, { lineHeightFactor: 1.8 });

        const nextY = startY + (splitBody.length * 10) + 10;
        doc.text(purposeText, margin, nextY);

        // 7. Signatures and Date
        const footerY = pageHeight - 50;
        
        doc.setFontSize(12);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, margin, footerY);
        doc.text(`Place: Darbhanga`, margin, footerY + 6);

        const sigX = pageWidth - 65;
        doc.line(sigX, footerY, pageWidth - 15, footerY);
        doc.setFont('times', 'bold');
        doc.text("Principal / Registrar", sigX + 5, footerY + 6);
        doc.setFont('times', 'normal');
        doc.text("DCE Darbhanga", sigX + 11, footerY + 12);

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
                                        style={{ 
                                            minWidth: '700px',
                                            width: '100%',
                                            backgroundColor: '#ffffff',
                                            border: '10px double #133b5c',
                                            padding: '64px',
                                            position: 'relative',
                                            fontFamily: 'Georgia, serif',
                                            color: '#000000'
                                        }}
                                    >
                                        {/* Watermark Background */}
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            opacity: 0.03,
                                            pointerEvents: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 0
                                        }}>
                                            <img src="/dce_logo.png" alt="watermark" style={{ width: '400px' }} />
                                        </div>

                                        <div style={{ position: 'relative', zIndex: 10 }}>
                                            {/* College Header */}
                                            <div style={{
                                                textAlign: 'center',
                                                marginBottom: '40px',
                                                borderBottom: '2px solid #0f172a',
                                                paddingBottom: '32px'
                                            }}>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '24px',
                                                    marginBottom: '16px'
                                                }}>
                                                    <img src="/dce_logo.png" alt="DCE Logo" style={{ width: '96px', height: '96px' }} />
                                                    <div style={{ textAlign: 'left' }}>
                                                        <h1 style={{
                                                            fontSize: '30px',
                                                            fontWeight: 'bold',
                                                            color: '#133b5c',
                                                            textTransform: 'uppercase',
                                                            lineHeight: '1.2',
                                                            margin: 0
                                                        }}>Darbhanga College of Engineering</h1>
                                                        <p style={{
                                                            fontSize: '14px',
                                                            fontWeight: '600',
                                                            color: '#334155',
                                                            letterSpacing: '0.05em',
                                                            margin: '4px 0 0 0'
                                                        }}>A Government Engineering College under DST, Govt. of Bihar</p>
                                                        <p style={{
                                                            fontSize: '12px',
                                                            color: '#475569',
                                                            marginTop: '4px',
                                                            margin: '4px 0 0 0'
                                                        }}>Lal Sahpur, Mabbi Belauna, Darbhanga - 846005</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Document Title */}
                                            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                                                <h2 style={{
                                                    fontSize: '30px',
                                                    fontWeight: 'bold',
                                                    textDecoration: 'underline',
                                                    textDecorationThickness: '2px',
                                                    textUnderlineOffset: '8px',
                                                    color: '#000000',
                                                    margin: 0
                                                }}>BONAFIDE CERTIFICATE</h2>
                                            </div>

                                            {/* Body Text */}
                                            <div style={{
                                                fontSize: '20px',
                                                lineHeight: '2.2',
                                                textAlign: 'justify',
                                                marginBottom: '80px',
                                                padding: '0 16px',
                                                color: '#1e293b'
                                            }}>
                                                <p style={{ margin: 0 }}>
                                                    This is to certify that Mr./Ms. <span style={{ fontWeight: 'bold', borderBottom: '1px dotted #000', padding: '0 8px' }}>{formData.name || '____________'}</span>, 
                                                    Son/Daughter of <span style={{ fontWeight: 'bold', borderBottom: '1px dotted #000', padding: '0 8px' }}>{formData.fatherName || '____________'}</span>, 
                                                    bearing University Roll No. <span style={{ fontWeight: 'bold', borderBottom: '1px dotted #000', padding: '0 8px' }}>{formData.rollNo || '____________'}</span> 
                                                    is a bonafide student of <span style={{ fontWeight: 'bold', borderBottom: '1px dotted #000', padding: '0 8px' }}>{formData.department || '____________________'}</span> 
                                                    department of this college during the academic session <span style={{ fontWeight: 'bold', borderBottom: '1px dotted #000', padding: '0 8px' }}>{formData.session || '____________'}</span>.
                                                    He/She is presently studying in <span style={{ fontWeight: 'bold', borderBottom: '1px dotted #000', padding: '0 8px' }}>{formData.semester || '______'}</span> semester.
                                                </p>
                                                <p style={{ marginTop: '32px', margin: '32px 0 0 0' }}>
                                                    This certificate is issued for the purpose of <span style={{ fontWeight: 'bold', borderBottom: '1px dotted #000', padding: '0 8px' }}>{formData.purpose || '_________________________'}</span>.
                                                </p>
                                            </div>

                                            {/* Signatures */}
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-end',
                                                marginTop: '96px',
                                                padding: '0 16px',
                                                fontWeight: 'bold',
                                                color: '#000000'
                                            }}>
                                                <div style={{ textAlign: 'left' }}>
                                                    <p style={{ margin: 0 }}>Date: {new Date().toLocaleDateString()}</p>
                                                    <p style={{ margin: 0 }}>Place: Darbhanga</p>
                                                </div>
                                                <div style={{ textAlign: 'center' }}>
                                                    <div style={{ width: '160px', height: '40px', marginBottom: '8px' }}></div>
                                                    <p style={{ borderTop: '1px solid #000', paddingTop: '8px', margin: 0 }}>Principal / Registrar</p>
                                                    <p style={{ fontSize: '14px', margin: 0 }}>DCE Darbhanga</p>
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
