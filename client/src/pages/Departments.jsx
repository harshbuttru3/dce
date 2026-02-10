import React from 'react';
import { Monitor, Cpu, Zap, PenTool } from 'lucide-react';

const departments = [
    { id: 1, name: 'Computer Science & Engineering', icon: <Monitor size={48} />, intakes: 60, head: "Dr. A. Kumar" },
    { id: 2, name: 'Civil Engineering', icon: <PenTool size={48} />, intakes: 60, head: "Dr. B. Singh" },
    { id: 3, name: 'Mechanical Engineering', icon: <Cpu size={48} />, intakes: 60, head: "Dr. C. Roy" },
    { id: 4, name: 'Electrical & Electronics Engineering', icon: <Zap size={48} />, intakes: 60, head: "Dr. D. Jha" },
];

const Departments = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container">
                <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-4">Academic Departments</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {departments.map((dept) => (
                        <div key={dept.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary flex gap-6 items-center">
                            <div className="text-primary bg-gray-100 p-4 rounded-full">
                                {dept.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{dept.name}</h3>
                                <p className="text-sm text-gray-600"><strong>Intake:</strong> {dept.intakes} Students</p>
                                <p className="text-sm text-gray-600"><strong>HOD:</strong> {dept.head}</p>
                                <button className="mt-3 text-secondary text-sm font-semibold hover:underline">View Details &rarr;</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Departments;
