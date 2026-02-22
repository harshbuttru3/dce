import React from "react";

const Facultystaff = () => {
  const facultyData = {
    CSE: [
      {
        name: "Dr. Amit Kumar",
        position: "Head of Department",
        email: "amit@dce.edu.in",
        phone: "+91-9876543210",
        image: "/images/faculty1.jpg",
      },
      {
        name: "Prof. Neha Singh",
        position: "Assistant Professor",
        email: "neha@dce.edu.in",
        phone: "+91-9123456789",
        image: "/images/faculty2.jpg",
      },
    ],

    Cyber: [
      {
        name: "Dr. Rahul Verma",
        position: "Assistant Professor",
        email: "rahul@dce.edu.in",
        phone: "+91-9988776655",
        image: "/images/faculty3.jpg",
      },
    ],

    EEE: [
      {
        name: "Dr. Suresh Yadav",
        position: "Associate Professor",
        email: "suresh@dce.edu.in",
        phone: "+91-9876501234",
        image: "/images/faculty4.jpg",
      },
    ],

    Civil: [
      {
        name: "Prof. Priya Kumari",
        position: "Assistant Professor",
        email: "priya@dce.edu.in",
        phone: "+91-9345678123",
        image: "/images/faculty5.jpg",
      },
    ],

    Mechanical: [
      {
        name: "Dr. Rajesh Singh",
        position: "Head of Department",
        email: "rajesh@dce.edu.in",
        phone: "+91-9765432101",
        image: "/images/faculty6.jpg",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Faculty & Staff
        </h1>

        {Object.keys(facultyData).map((branch, index) => (
          <div key={index} className="mb-12">

            {/* Branch Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">
              {branch} Department
            </h2>

            {/* Faculty Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {facultyData[branch].map((faculty, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition duration-300"
                >
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
                  />

                  <h3 className="text-lg font-semibold text-gray-800">
                    {faculty.name}
                  </h3>

                  <p className="text-sm text-blue-600 font-medium mt-1">
                    {faculty.position}
                  </p>

                  <p className="text-sm text-gray-600 mt-3">
                    📧 {faculty.email}
                  </p>

                  <p className="text-sm text-gray-600">
                    📱 {faculty.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Facultystaff;