import React from 'react';
import { Monitor, Cpu, Zap, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const departments = [
  { id: 1, name: 'Computer Science & Engineering', icon: <Monitor size={48} />, intakes: 60, head: "Dr. A. Kumar", path: "/cse" },
  { id: 2, name: 'Civil Engineering', icon: <PenTool size={48} />, intakes: 60, head: "Dr. B. Singh", path: "/civil" },
  { id: 3, name: 'Mechanical Engineering', icon: <Cpu size={48} />, intakes: 60, head: "Dr. C. Roy", path: "/mechanical" },
  { id: 4, name: 'Electrical & Electronics Engineering', icon: <Zap size={48} />, intakes: 60, head: "Dr. D. Jha", path: "/eee" },
  { id: 5, name: 'Computer Science & Engineering (Cyber Security)', icon: <Monitor size={48} />, intakes: 65, head: "Dr. C.K. Jha", path: "/cyber" },
];

const Departments = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-4">
          Academic Departments
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary flex gap-6 items-center"
            >
              <div className="text-primary bg-gray-100 p-4 rounded-full">
                {dept.icon}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {dept.name}
                </h3>

                <p className="text-sm text-gray-600">
                  <strong>Intake:</strong> {dept.intakes} Students
                </p>

                <p className="text-sm text-gray-600">
                  <strong>HOD:</strong> {dept.head}
                </p>

                <Link
                  to={dept.path}
                  className="mt-3 inline-block text-secondary text-sm font-semibold hover:underline"
                >
                  View Details →
                </Link>
          
              </div>
            </div>
          ))}
        </div>
      </div>
          
    </div>
  );
};

export default Departments;