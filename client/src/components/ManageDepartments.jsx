import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Plus, Edit2, Trash2, Save, X, ChevronDown, ChevronUp } from 'lucide-react';

const ManageDepartments = () => {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState(null);

    const [expandedDept, setExpandedDept] = useState(null);
    const [uploadingImage, setUploadingImage] = useState(false);

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo?.token;

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        setLoading(true);
        try {
            const res = await api.get('/departments');
            setDepartments(res.data);
        } catch (err) {
            setError("Failed to fetch departments.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchFullDepartment = async (slug) => {
        try {
            const res = await api.get(`/departments/${slug}`);
            return res.data;
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    const handleEdit = async (dept) => {
        const fullDept = await fetchFullDepartment(dept.slug);
        if (fullDept) {
            setFormData(fullDept);
            setEditingId(fullDept._id);
        }
    };

    const handleCancel = () => {
        setEditingId(null);
        setFormData(null);
    };

    const handleSave = async () => {
        try {
            if (editingId === "new") {
                await api.post('/departments', formData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            } else {
                await api.put(`/departments/${editingId}`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
            }
            fetchDepartments();
            handleCancel();
        } catch (err) {
            alert("Error saving department: " + (err.response?.data?.message || err.message));
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this department?")) return;
        try {
            await api.delete(`/departments/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchDepartments();
        } catch (err) {
            alert("Error deleting department.");
        }
    };

    const handleImageUpload = async (e, callback) => {
        const file = e.target.files[0];
        if (!file) return;

        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("title", `dept_asset_${Date.now()}`);

        setUploadingImage(true);
        try {
            const res = await api.post('/images', uploadData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            });
            callback(res.data.imageUrl);
        } catch (err) {
            console.error("Error uploading image:", err);
            alert("Failed to upload image.");
        } finally {
            setUploadingImage(false);
        }
    };

    const handleAddNew = () => {
        setEditingId("new");
        setFormData({
            name: "",
            slug: "",
            tagline: "",
            intake: 60,
            seatCapacity: 60,
            heroImage: "",
            backgroundImage: "",
            syllabusPdf: "",
            description: [""],
            hod: { name: "", designation: "", qualification: "", image: "", message: "", email: "" },
            programs: [],
            faculty: [],
            labs: [],
            placements: { highestPackage: "", averagePackage: "", link: "" },
            activities: [],
            achievements: []
        });
    };

    const updateFormData = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const updateHod = (field, value) => {
        setFormData(prev => ({
            ...prev,
            hod: { ...prev.hod, [field]: value }
        }));
    };

    const updateFaculty = (index, field, value) => {
        const newFaculty = [...formData.faculty];
        newFaculty[index][field] = value;
        updateFormData('faculty', newFaculty);
    };

    const addFaculty = () => {
        updateFormData('faculty', [...formData.faculty, { name: "", designation: "", specialization: "", image: "" }]);
    };

    const removeFaculty = (index) => {
        const newFaculty = formData.faculty.filter((_, i) => i !== index);
        updateFormData('faculty', newFaculty);
    };

    // Programs functionality
    const updateProgram = (index, field, value) => {
        const newPrograms = [...(formData.programs || [])];
        if (!newPrograms[index]) newPrograms[index] = {};
        newPrograms[index][field] = value;
        updateFormData('programs', newPrograms);
    };

    const addProgram = () => {
        updateFormData('programs', [...(formData.programs || []), { name: "", intake: 60, duration: "4 Years", eligibility: "", image: "" }]);
    };

    const removeProgram = (index) => {
        const newPrograms = (formData.programs || []).filter((_, i) => i !== index);
        updateFormData('programs', newPrograms);
    };

    // Labs functionality
    const updateLab = (index, field, value) => {
        const newLabs = [...(formData.labs || [])];
        if (!newLabs[index]) newLabs[index] = {};
        newLabs[index][field] = value;
        updateFormData('labs', newLabs);
    };

    const addLab = () => {
        updateFormData('labs', [...(formData.labs || []), { name: "", description: "", icon: "", image: "", tools: [] }]);
    };

    const removeLab = (index) => {
        const newLabs = (formData.labs || []).filter((_, i) => i !== index);
        updateFormData('labs', newLabs);
    };

    // Placements functionality
    const updatePlacements = (field, value) => {
        setFormData(prev => ({
            ...prev,
            placements: { ...(prev.placements || {}), [field]: value }
        }));
    };

    // Activities (Innovation & Research)
    const updateActivity = (index, field, value) => {
        const newActivities = [...(formData.activities || [])];
        if (!newActivities[index]) newActivities[index] = {};
        newActivities[index][field] = value;
        updateFormData('activities', newActivities);
    };
    const addActivity = () => {
        updateFormData('activities', [...(formData.activities || []), { title: "", description: "", icon: "FaFlask" }]);
    };
    const removeActivity = (index) => {
        const newActivities = (formData.activities || []).filter((_, i) => i !== index);
        updateFormData('activities', newActivities);
    };

    // Achievements (Student Pride)
    const updateAchievement = (index, field, value) => {
        const newAchievements = [...(formData.achievements || [])];
        if (!newAchievements[index]) newAchievements[index] = {};
        newAchievements[index][field] = value;
        updateFormData('achievements', newAchievements);
    };
    const addAchievement = () => {
        updateFormData('achievements', [...(formData.achievements || []), { title: "", student: "", year: new Date().getFullYear().toString() }]);
    };
    const removeAchievement = (index) => {
        const newAchievements = (formData.achievements || []).filter((_, i) => i !== index);
        updateFormData('achievements', newAchievements);
    };


    if (loading && !departments.length) return <div className="p-8 text-center text-gray-500">Loading departments...</div>;

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-[#133b5c]">Manage Departments</h2>
                        <p className="text-gray-400 text-sm mt-1">Add, edit, or remove academic departments and their details.</p>
                    </div>
                    {editingId === null && (
                        <button
                            onClick={handleAddNew}
                            className="bg-[#133b5c] text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-[#1a4b73] transition-colors"
                        >
                            <Plus size={18} /> Add Department
                        </button>
                    )}
                </div>

                {editingId !== null ? (
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-6">
                        <div className="flex justify-between items-center border-b pb-4">
                            <h3 className="text-xl font-bold text-[#133b5c]">{editingId === "new" ? "Add New Department" : "Edit Department"}</h3>
                            <button onClick={handleCancel} className="text-gray-500 hover:text-red-500"><X size={24} /></button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Department Name</label>
                                <input type="text" value={formData.name || ""} onChange={e => updateFormData('name', e.target.value)} className="w-full p-3 border rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Slug (URL Path)</label>
                                <input type="text" value={formData.slug || ""} onChange={e => updateFormData('slug', e.target.value)} className="w-full p-3 border rounded-xl" disabled={editingId !== "new"} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Tagline</label>
                                <input type="text" value={formData.tagline || ""} onChange={e => updateFormData('tagline', e.target.value)} className="w-full p-3 border rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Seat Capacity</label>
                                <input type="number" value={formData.seatCapacity || formData.intake || 60} onChange={e => { updateFormData('seatCapacity', parseInt(e.target.value)); updateFormData('intake', parseInt(e.target.value)); }} className="w-full p-3 border rounded-xl" />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-gray-500 uppercase flex justify-between">
                                    Background Image
                                    {uploadingImage && <span className="text-blue-500 text-xs animate-pulse">Uploading...</span>}
                                </label>
                                <div className="flex gap-4 items-center">
                                    {formData.backgroundImage && (
                                        <img src={formData.backgroundImage} alt="bg preview" className="h-12 w-20 object-cover rounded shadow" />
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e, (url) => updateFormData('backgroundImage', url))}
                                        className="w-full p-2 border rounded-xl text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        disabled={uploadingImage}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-gray-500 uppercase flex justify-between">
                                    Syllabus PDF Link
                                    {uploadingImage && <span className="text-blue-500 text-xs animate-pulse">Uploading...</span>}
                                </label>
                                <div className="flex gap-4 items-center">
                                    <input type="text" value={formData.syllabusPdf || ""} onChange={e => updateFormData('syllabusPdf', e.target.value)} placeholder="PDF URL" className="flex-1 p-3 border rounded-xl" />
                                    <input
                                        type="file"
                                        accept="application/pdf"
                                        onChange={(e) => handleImageUpload(e, (url) => updateFormData('syllabusPdf', url))}
                                        className="w-48 p-2 border rounded-xl text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                                        disabled={uploadingImage}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">About the Department (Description)</label>
                                <textarea
                                    value={(formData.description || []).join('\n\n')}
                                    onChange={e => updateFormData('description', e.target.value.split('\n\n'))}
                                    className="w-full p-3 border rounded-xl"
                                    rows="5"
                                    placeholder="Enter multiple paragraphs separated by a double newline..."
                                ></textarea>
                            </div>
                        </div>

                        {/* HOD Details */}
                        <div className="mt-8">
                            <h4 className="font-bold text-lg text-[#133b5c] mb-4">HOD Details</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="HOD Name" value={formData.hod?.name || ""} onChange={e => updateHod('name', e.target.value)} className="w-full p-3 border rounded-xl" />
                                <input type="text" placeholder="Designation" value={formData.hod?.designation || ""} onChange={e => updateHod('designation', e.target.value)} className="w-full p-3 border rounded-xl" />
                                <input type="text" placeholder="Email" value={formData.hod?.email || ""} onChange={e => updateHod('email', e.target.value)} className="w-full p-3 border rounded-xl" />

                                <div className="border rounded-xl p-2 flex items-center justify-between bg-white text-sm">
                                    <span className="text-gray-500 truncate mr-2">{formData.hod?.image ? 'HOD Image Uploaded' : 'No Image'}</span>
                                    <label className="cursor-pointer bg-blue-50 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-100 transition shrink-0">
                                        {uploadingImage ? '...' : 'Upload Image'}
                                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, (url) => updateHod('image', url))} disabled={uploadingImage} />
                                    </label>
                                </div>
                                <textarea placeholder="HOD Message" value={formData.hod?.message || ""} onChange={e => updateHod('message', e.target.value)} className="w-full p-3 border rounded-xl md:col-span-2" rows="3"></textarea>
                            </div>
                        </div>

                        {/* Academic Programs */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-bold text-lg text-[#133b5c]">Academic Programs</h4>
                                <button onClick={addProgram} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg flex items-center gap-1"><Plus size={14} /> Add Program</button>
                            </div>
                            <div className="space-y-4">
                                {(formData.programs || []).map((prog, idx) => (
                                    <div key={idx} className="flex gap-4 items-center bg-white p-4 border rounded-xl shadow-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 flex-1">
                                            <input type="text" placeholder="Degree Name" value={prog.name || ""} onChange={e => updateProgram(idx, 'name', e.target.value)} className="w-full p-2 border rounded-lg text-sm lg:col-span-2" />
                                            <input type="number" placeholder="Intake" value={prog.intake || ""} onChange={e => updateProgram(idx, 'intake', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                            <input type="text" placeholder="Duration (e.g. 4 Years)" value={prog.duration || ""} onChange={e => updateProgram(idx, 'duration', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                            <div className="border rounded-lg p-2 flex items-center justify-between text-xs bg-gray-50">
                                                <span className="truncate mr-2 text-gray-400">{prog.image ? 'Img Uploaded' : 'Program Image'}</span>
                                                <label className="cursor-pointer text-blue-600 font-bold hover:underline shrink-0">Upload<input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, (url) => updateProgram(idx, 'image', url))} disabled={uploadingImage} /></label>
                                            </div>
                                            <input type="text" placeholder="Eligibility (e.g. 10+2 PCM)" value={prog.eligibility || ""} onChange={e => updateProgram(idx, 'eligibility', e.target.value)} className="w-full p-2 border rounded-lg text-sm md:col-span-2 lg:col-span-5" />
                                        </div>
                                        <button onClick={() => removeProgram(idx)} className="text-red-500 p-2 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dedicated Laboratories */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-bold text-lg text-[#133b5c]">Dedicated Laboratories</h4>
                                <button onClick={addLab} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg flex items-center gap-1"><Plus size={14} /> Add Lab</button>
                            </div>
                            <div className="space-y-4">
                                {(formData.labs || []).map((lab, idx) => (
                                    <div key={idx} className="flex gap-4 items-center bg-white p-4 border rounded-xl shadow-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                                            <input type="text" placeholder="Lab Name" value={lab.name || ""} onChange={e => updateLab(idx, 'name', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                            <div className="border rounded-lg p-2 flex items-center justify-between text-sm bg-gray-50">
                                                <span className="truncate mr-2 text-gray-500">{lab.image ? 'Lab Photo Uploaded' : 'Upload Lab Photo'}</span>
                                                <label className="cursor-pointer bg-white border px-2 py-0.5 rounded text-xs text-blue-600 shadow-sm hover:bg-gray-50 shrink-0">Browse<input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, (url) => updateLab(idx, 'image', url))} disabled={uploadingImage} /></label>
                                            </div>
                                            <textarea placeholder="Lab Description" value={lab.description || ""} onChange={e => updateLab(idx, 'description', e.target.value)} className="w-full p-2 border rounded-lg text-sm md:col-span-2" rows="2"></textarea>
                                        </div>
                                        <button onClick={() => removeLab(idx)} className="text-red-500 p-2 hover:bg-red-50 rounded-lg h-full"><Trash2 size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Faculty Details */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-bold text-lg text-[#133b5c]">Faculty Members</h4>
                                <button onClick={addFaculty} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg flex items-center gap-1"><Plus size={14} /> Add Faculty</button>
                            </div>
                            <div className="space-y-4">
                                {(formData.faculty || []).map((fac, idx) => (
                                    <div key={idx} className="flex gap-4 items-center bg-white p-4 border rounded-xl shadow-sm">
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
                                            <input type="text" placeholder="Name" value={fac.name || ""} onChange={e => updateFaculty(idx, 'name', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                            <input type="text" placeholder="Designation" value={fac.designation || ""} onChange={e => updateFaculty(idx, 'designation', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                            <input type="text" placeholder="Specialization" value={fac.specialization || ""} onChange={e => updateFaculty(idx, 'specialization', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                            <div className="border rounded-lg p-2 flex items-center justify-between text-xs bg-gray-50">
                                                <span className="truncate mr-2 text-gray-400">{fac.image ? 'Img Uploaded' : 'Faculty Photo'}</span>
                                                <label className="cursor-pointer text-blue-600 font-bold hover:underline shrink-0">Upload<input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, (url) => updateFaculty(idx, 'image', url))} disabled={uploadingImage} /></label>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFaculty(idx)} className="text-red-500 p-2 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Placements */}
                        <div className="mt-8">
                            <h4 className="font-bold text-lg text-[#133b5c] mb-4">Placements</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <input type="text" placeholder="Highest Package (e.g. 10 LPA)" value={formData.placements?.highestPackage || ""} onChange={e => updatePlacements('highestPackage', e.target.value)} className="w-full p-3 border rounded-xl" />
                                <input type="text" placeholder="Average Package (e.g. 4 LPA)" value={formData.placements?.averagePackage || ""} onChange={e => updatePlacements('averagePackage', e.target.value)} className="w-full p-3 border rounded-xl" />
                                <input type="text" placeholder="Placement Record Link" value={formData.placements?.link || ""} onChange={e => updatePlacements('link', e.target.value)} className="w-full p-3 border rounded-xl" />
                            </div>
                        </div>

                        {/* Innovation & Research (Activities) */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-bold text-lg text-[#133b5c]">Innovation & Research (Activities)</h4>
                                <button onClick={addActivity} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg flex items-center gap-1"><Plus size={14} /> Add Activity</button>
                            </div>
                            <div className="space-y-4">
                                {(formData.activities || []).map((act, idx) => (
                                    <div key={idx} className="flex gap-4 items-center bg-white p-4 border rounded-xl shadow-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                                            <input type="text" placeholder="Activity Title" value={act.title || ""} onChange={e => updateActivity(idx, 'title', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                            <input type="text" placeholder="Icon Name (e.g. FaFlask)" value={act.icon || ""} onChange={e => updateActivity(idx, 'icon', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                            <textarea placeholder="Activity Description" value={act.description || ""} onChange={e => updateActivity(idx, 'description', e.target.value)} className="w-full p-2 border rounded-lg text-sm md:col-span-2" rows="2"></textarea>
                                        </div>
                                        <button onClick={() => removeActivity(idx)} className="text-red-500 p-2 hover:bg-red-50 rounded-lg h-full"><Trash2 size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Student Pride (Achievements) */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-bold text-lg text-[#133b5c]">Student Pride (Achievements)</h4>
                                <button onClick={addAchievement} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg flex items-center gap-1"><Plus size={14} /> Add Achievement</button>
                            </div>
                            <div className="space-y-4">
                                {(formData.achievements || []).map((ach, idx) => (
                                    <div key={idx} className="flex gap-4 items-center bg-white p-4 border rounded-xl shadow-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                                            <input type="text" placeholder="Award / Achievement Title" value={ach.title || ""} onChange={e => updateAchievement(idx, 'title', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                            <input type="text" placeholder="Student Name" value={ach.student || ""} onChange={e => updateAchievement(idx, 'student', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                            <input type="text" placeholder="Year" value={ach.year || ""} onChange={e => updateAchievement(idx, 'year', e.target.value)} className="w-full p-2 border rounded-lg text-sm" />
                                        </div>
                                        <button onClick={() => removeAchievement(idx)} className="text-red-500 p-2 hover:bg-red-50 rounded-lg h-full"><Trash2 size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 mt-8 pt-6 border-t">
                            <button onClick={handleCancel} className="px-6 py-2 border rounded-xl text-gray-600 hover:bg-gray-50">Cancel</button>
                            <button onClick={handleSave} className="px-6 py-2 bg-[#133b5c] text-white rounded-xl flex items-center gap-2 hover:bg-[#1a4b73]"><Save size={18} /> Save Department</button>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {departments.map(dept => (
                            <div key={dept._id || dept.slug} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all group relative">
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => handleEdit(dept)} className="p-2 bg-white text-blue-600 rounded-lg shadow hover:bg-blue-50"><Edit2 size={16} /></button>
                                    <button onClick={() => handleDelete(dept._id)} disabled={!dept._id} className="p-2 bg-white text-red-600 rounded-lg shadow hover:bg-red-50 disabled:opacity-50"><Trash2 size={16} /></button>
                                </div>
                                <h3 className="font-bold text-lg text-[#133b5c] pr-16">{dept.name}</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 mb-4">/{dept.slug}</p>
                                <p className="text-sm text-gray-600 line-clamp-2">{dept.tagline}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageDepartments;
