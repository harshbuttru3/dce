import React from "react";

const branches = [
  "Computer Science Engineering (CSE)",
  "Cyber Security",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical & Electronics Engineering (EEE)",
  "Fire and Safety Engineering",
];

const Syllabus = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-primary mb-8">
        Syllabus
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {branches.map((branch, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 
                       hover:shadow-xl hover:-translate-y-2 
                       transition-all duration-300 ease-in-out 
                       cursor-pointer"
          >
            <h2 className="text-lg font-semibold text-primary">
              {branch}
            </h2>

            <p className="text-sm text-primary mt-2">
              View detailed syllabus and course structure
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Syllabus;