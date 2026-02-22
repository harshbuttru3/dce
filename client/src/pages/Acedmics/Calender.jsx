import React from "react";

const Calender = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-10 py-8">
      
      {/* Heading */}
      <h1 className="text-4xl font-medium text-gray-700">
        Academic Calendar
      </h1>

      {/* Blue Line */}
      <div className="w-full h-1 bg-blue-700 mt-4 mb-8"></div>

      {/* Content */}
      <div className="space-y-6 text-gray-700 text-lg leading-8">
        
        <ul className="list-disc pl-6 space-y-6">
          <li>
            The academic session is divided into two semesters each of 
            approximately 20 weeks duration: An Autumn/ Odd semester 
            (July-November) and a spring/ Even Semester (January-May).
          </li>

          <li>
            The Court of Bihar Engineering University, Patna will approve 
            the academic calendar consisting of schedule of activities for a 
            session inclusive of dates for registration, Mid-Semester and 
            End-Semester Examinations; inter-semester breaks. It will be 
            announced at the beginning of the semester. The academic 
            calendar shall usually provide for at least 90 working days 
            (including examination dates) in each semester, excluding 
            holidays and days when classes are suspended.
          </li>
        </ul>

        {/* Links Section */}
        <div className="space-y-4 pt-6">
          <p className="text-blue-600 hover:underline cursor-pointer">
            Academic Schedule for 3rd Semesters (Session 2025-2026) for 
            B.Tech (2024-2028 Batch)
          </p>

          <p className="text-blue-600 hover:underline cursor-pointer">
            Academic Schedule for 1st Semester for M.Tech for current 
            academic year (2025-26)
          </p>
        </div>

      </div>
    </div>
  );
};

export default Calender;