import React from "react";

const Seat = () => {
  const courses = [
    { id: 1, name: "M. Tech in Power System", intake: 30 },
    { id: 2, name: "B. Tech in Civil Engineering", intake: 90 },
    { id: 3, name: "B. Tech in Mechanical Engineering", intake: 60 },
    { id: 4, name: "B. Tech in Electrical & Electronics Engineering", intake: 60 },
    { id: 5, name: "B. Tech in Computer Science & Engineering", intake: 60 },
    { id: 6, name: "B. Tech in Computer Science & Engineering (Cyber Security)", intake: 60 },
    { id: 7, name: "B. Tech in Fire Technology and Safety", intake: 30 },
  ];

  return (
    <div className="bg-white py-14 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Approval and Affiliation
        </h1>

        <div className="w-20 h-1 bg-blue-700 mt-3 mb-6"></div>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          Darbhanga College of Engineering is approved by the All India Council 
          of Technical Education (AICTE) and affiliated to Bihar Engineering 
          University, Patna (Bihar).
        </p>

        {/* Table */}
        <div className="overflow-x-auto shadow-md rounded">
          <table className="min-w-full text-sm md:text-base border-collapse">

            <thead>
              <tr className="bg-green-600 text-white uppercase">
                <th className="py-4 px-6 text-left">SL#</th>
                <th className="py-4 px-6 text-left">Name of Department</th>
                <th className="py-4 px-6 text-left">Approved Intake</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={course.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-green-50"
                  } border-b`}
                >
                  <td className="py-3 px-6">{course.id}.</td>
                  <td className="py-3 px-6">{course.name}</td>
                  <td className="py-3 px-6 font-semibold">
                    {course.intake}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default Seat;
