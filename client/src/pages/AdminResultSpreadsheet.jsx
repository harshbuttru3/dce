import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, Save, Plus, Trash2, ChevronDown, 
    Download, Upload, Search, Filter, RefreshCw, 
    CheckCircle2, AlertCircle, Maximize2, Minimize2 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AdminResultSpreadsheet = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [fullScreen, setFullScreen] = useState(true);
    
    // Filter State
    const [semester, setSemester] = useState('1st Semester');
    const [branch, setBranch] = useState('COMPUTER SCIENCE AND ENGINEERING');
    
    // Grid Data State
    // Format: [{ registrationNo, name, rollNo, sgpa, cgpa, subjects: [{ name, marks }] }]
    const [rows, setRows] = useState([]);
    const [subjects, setSubjects] = useState(['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5']);
    const [activeCell, setActiveCell] = useState({ row: 0, col: 0 }); // Navigation tracking

    const branches = [
        "COMPUTER SCIENCE AND ENGINEERING",
        "CIVIL ENGINEERING",
        "Computer Science and Engineering(Cyber Security)",
        "ELECTRICAL AND ELECTRONICS ENGINEERING",
        "MECHANICAL ENGINEERING",
        "FIRE TECHNOLOGY AND SAFETY",
        "Power System"
    ];

    const semesters = ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester", "5th Semester", "6th Semester", "7th Semester", "8th Semester"];

    // Initialize/Fetch Data
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await api.get(`/results/search?semester=${semester}&branch=${branch}`);
            if (response.data.length > 0) {
                // Map existing data to our grid format
                const mapped = response.data.map(r => ({
                    ...r,
                    // Ensure subjects are mapped correctly
                    subjects: r.subjects || subjects.map(s => ({ name: s, total: 0 }))
                }));
                setRows(mapped);
                
                // If existing subjects are found, update the subject headers
                if (response.data[0].subjects?.length > 0) {
                    setSubjects(response.data[0].subjects.map(s => s.name));
                }
            } else {
                // Placeholder rows if no data found
                setRows(Array(5).fill(null).map(() => ({
                    registrationNo: '',
                    name: '',
                    rollNo: '',
                    semester: semester,
                    branch: branch,
                    sgpa: 0,
                    cgpa: 0,
                    status: 'Pass',
                    subjects: subjects.map(s => ({ name: s, total: 0 }))
                })));
            }
        } catch (error) {
            console.error("Error fetching results", error);
            setMessage({ type: 'error', text: 'Failed to load existing results.' });
        } finally {
            setLoading(false);
        }
    }, [semester, branch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleCellChange = (rowIndex, field, value, subIdx = null) => {
        const newRows = [...rows];
        if (subIdx !== null) {
            newRows[rowIndex].subjects[subIdx].total = value;
        } else {
            newRows[rowIndex][field] = value;
        }
        setRows(newRows);
    };

    const addRow = () => {
        setRows([...rows, {
            registrationNo: '',
            name: '',
            rollNo: '',
            semester: semester,
            branch: branch,
            sgpa: 0,
            cgpa: 0,
            status: 'Pass',
            subjects: subjects.map(s => ({ name: s, total: 0 }))
        }]);
    };

    const removeRow = (idx) => {
        setRows(rows.filter((_, i) => i !== idx));
    };

    const addSubject = () => {
        const subName = prompt("Enter Subject Name:");
        if (subName) {
            setSubjects([...subjects, subName]);
            setRows(rows.map(row => ({
                ...row,
                subjects: [...row.subjects, { name: subName, total: 0 }]
            })));
        }
    };

    const saveAll = async () => {
        setLoading(true);
        setMessage(null);
        try {
            // Filter out truly empty rows
            const dataToSave = rows.filter(r => r.registrationNo.trim() !== '' && r.name.trim() !== '');
            
            if (dataToSave.length === 0) {
                setMessage({ type: 'warning', text: 'Nothing to save. Please enter student details.' });
                setLoading(false);
                return;
            }

            const response = await api.post('/results/bulk-save', { results: dataToSave });
            setMessage({ type: 'success', text: response.data.message });
            fetchData(); // Refresh to get settled IDs etc
        } catch (error) {
            setMessage({ type: 'error', text: error.response?.data?.message || 'Error saving results.' });
        } finally {
            setLoading(false);
        }
    };

    // Keyboard Navigation
    const handleKeyDown = (e, r, c) => {
        if (e.key === 'ArrowUp' && r > 0) setActiveCell({ row: r - 1, col: c });
        if (e.key === 'ArrowDown' && r < rows.length - 1) setActiveCell({ row: r + 1, col: c });
        if (e.key === 'Tab') {
            // Standard tab behavior is usually fine, but we could customize
        }
    };

    return (
        <div className={`flex flex-col bg-gray-100 ${fullScreen ? 'fixed inset-0 z-[100]' : 'min-h-screen pt-20'}`}>
            {/* Toolbar */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate('/Admin')}
                        className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-600"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-[#133b5c] flex items-center gap-2">
                             Result Spreadsheet
                            <span className="text-xs font-normal bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full uppercase tracking-wider">Beta</span>
                        </h1>
                        <p className="text-xs text-gray-500">Fast, Excel-style batch entry for semester results</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <select 
                        value={branch} 
                        onChange={e => setBranch(e.target.value)}
                        className="bg-gray-50 border border-gray-200 text-xs font-bold p-2.5 rounded-xl outline-none focus:ring-2 focus:ring-[#133b5c]/20"
                    >
                        {branches.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                    <select 
                        value={semester} 
                        onChange={e => setSemester(e.target.value)}
                        className="bg-gray-50 border border-gray-200 text-xs font-bold p-2.5 rounded-xl outline-none focus:ring-2 focus:ring-[#133b5c]/20"
                    >
                        {semesters.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <div className="h-8 w-px bg-gray-200 mx-2"></div>
                    <button 
                        onClick={saveAll}
                        disabled={loading}
                        className="bg-[#133b5c] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-[#c6b677] transition-all disabled:opacity-50 shadow-lg shadow-blue-900/10 text-sm"
                    >
                        {loading ? <RefreshCw className="animate-spin" size={16} /> : <Save size={16} />}
                        Save Changes
                    </button>
                    <button 
                        onClick={() => setFullScreen(!fullScreen)}
                        className="p-2.5 hover:bg-gray-100 rounded-xl transition-all text-gray-600 border border-gray-200 bg-white"
                        title="Toggle Fullscreen"
                    >
                        {fullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                    </button>
                </div>
            </div>

            {/* Status Bar / Messages */}
            <AnimatePresence>
                {message && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`mx-6 mt-4 p-3 rounded-xl flex items-center gap-3 text-sm font-medium ${
                            message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' :
                            message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-100' :
                            'bg-amber-50 text-amber-700 border border-amber-100'
                        }`}
                    >
                        {message.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                        {message.text}
                        <button onClick={() => setMessage(null)} className="ml-auto opacity-50 hover:opacity-100">×</button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Grid Area */}
            <div className="flex-1 overflow-auto p-6">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 min-w-max">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-[10px] uppercase font-bold tracking-widest border-b border-gray-200">
                            <tr>
                                <th className="p-3 w-12 border-r border-gray-200">#</th>
                                <th className="p-3 min-w-[150px] border-r border-gray-200 text-left">Registration No.</th>
                                <th className="p-3 min-w-[200px] border-r border-gray-200 text-left">Student Name</th>
                                <th className="p-3 min-w-[120px] border-r border-gray-200 text-left">Roll No.</th>
                                {/* Subject Columns */}
                                {subjects.map((sub, idx) => (
                                    <th key={idx} className="p-3 min-w-[100px] border-r border-gray-200 text-center bg-blue-50/30 text-[#133b5c]">
                                        <div className="flex flex-col gap-1">
                                            <span>{sub}</span>
                                            <span className="text-[8px] font-normal opacity-60 italic">(Marks)</span>
                                        </div>
                                    </th>
                                ))}
                                <th className="p-3 w-20 border-r border-gray-200">SGPA</th>
                                <th className="p-3 w-20 border-r border-gray-200">CGPA</th>
                                <th className="p-3 w-28 border-r border-gray-200">Status</th>
                                <th className="p-3 w-16">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {rows.map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-gray-100 hover:bg-blue-50/10 transition-colors group">
                                    <td className="p-2 text-center text-xs text-gray-400 border-r border-gray-200 bg-gray-50/30">{rIdx + 1}</td>
                                    
                                    <td className="p-0 border-r border-gray-200">
                                        <input 
                                            type="text" 
                                            value={row.registrationNo}
                                            onChange={(e) => handleCellChange(rIdx, 'registrationNo', e.target.value)}
                                            className="w-full h-full p-3 text-xs outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-400 font-medium"
                                            placeholder="21105..."
                                        />
                                    </td>
                                    
                                    <td className="p-0 border-r border-gray-200">
                                        <input 
                                            type="text" 
                                            value={row.name}
                                            onChange={(e) => handleCellChange(rIdx, 'name', e.target.value)}
                                            className="w-full h-full p-3 text-xs outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-400 font-bold text-[#133b5c]"
                                            placeholder="Student Name"
                                        />
                                    </td>

                                    <td className="p-0 border-r border-gray-200">
                                        <input 
                                            type="text" 
                                            value={row.rollNo}
                                            onChange={(e) => handleCellChange(rIdx, 'rollNo', e.target.value)}
                                            className="w-full h-full p-3 text-xs outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-400"
                                            placeholder="21CSE01"
                                        />
                                    </td>

                                    {/* Subject Marks Inputs */}
                                    {row.subjects.map((sub, sIdx) => (
                                        <td key={sIdx} className="p-0 border-r border-gray-200 bg-blue-50/5">
                                            <input 
                                                type="number" 
                                                value={sub.total}
                                                onChange={(e) => handleCellChange(rIdx, 'total', e.target.value, sIdx)}
                                                className="w-full h-full p-3 text-xs text-center outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-400 font-bold"
                                                min="0" max="100"
                                            />
                                        </td>
                                    ))}

                                    <td className="p-0 border-r border-gray-200">
                                        <input 
                                            type="number" 
                                            step="0.01"
                                            value={row.sgpa}
                                            onChange={(e) => handleCellChange(rIdx, 'sgpa', e.target.value)}
                                            className="w-full h-full p-3 text-xs text-center outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-400 font-bold text-[#133b5c]"
                                        />
                                    </td>

                                    <td className="p-0 border-r border-gray-200">
                                        <input 
                                            type="number" 
                                            step="0.01"
                                            value={row.cgpa}
                                            onChange={(e) => handleCellChange(rIdx, 'cgpa', e.target.value)}
                                            className="w-full h-full p-3 text-xs text-center outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-400 font-bold"
                                        />
                                    </td>

                                    <td className="p-0 border-r border-gray-200">
                                        <select 
                                            value={row.status}
                                            onChange={(e) => handleCellChange(rIdx, 'status', e.target.value)}
                                            className={`w-full h-full p-3 text-xs outline-none focus:bg-blue-50 font-bold ${row.status === 'Pass' ? 'text-green-600' : 'text-red-500'}`}
                                        >
                                            <option value="Pass">Pass</option>
                                            <option value="Fail">Fail</option>
                                            <option value="Promoted">Promoted</option>
                                            <option value="Pending">Pending</option>
                                        </select>
                                    </td>

                                    <td className="p-0 text-center">
                                        <button 
                                            onClick={() => removeRow(rIdx)}
                                            className="p-3 text-red-200 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                            title="Delete Row"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                    {/* Add More Controls */}
                    <div className="p-4 bg-gray-50 flex items-center gap-4">
                        <button 
                            onClick={addRow}
                            className="flex items-center gap-2 text-xs font-bold text-[#133b5c] bg-white border border-gray-200 px-4 py-2 rounded-xl hover:border-[#133b5c] transition-all shadow-sm"
                        >
                            <Plus size={14} /> Add Row
                        </button>
                        <button 
                            onClick={addSubject}
                            className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-white border border-blue-100 px-4 py-2 rounded-xl hover:bg-blue-50 transition-all shadow-sm"
                        >
                            <Plus size={14} /> Add Subject Column
                        </button>
                        <p className="ml-auto text-[10px] text-gray-400 italic">Tip: Use Tab to navigate. Rows with empty registration or name are ignored during save.</p>
                    </div>
                </div>
            </div>

            {/* Sub-Footer */}
            <div className="bg-white border-t border-gray-200 px-8 py-3 flex text-[10px] text-gray-400 font-bold uppercase tracking-widest gap-8">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Connected</span>
                <span>Rows: {rows.length}</span>
                <span>Subjects: {subjects.length}</span>
                <span className="ml-auto">Spreadsheet Mode v1.2</span>
            </div>
        </div>
    );
};

export default AdminResultSpreadsheet;
