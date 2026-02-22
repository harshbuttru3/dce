import React from "react";
import { FaBook, FaBell, FaBuilding, FaCalendarAlt, FaFileAlt, FaClipboardList } from "react-icons/fa";

const Students = () => {
  const studentServices = [
    {
      title: "Syllabus",
      icon: <FaBook />,
      description: "Access updated syllabus for all branches and semesters.",
      link: "/syllabus",
    },
    {
      title: "Notices",
      icon: <FaBell />,
      description: "Check latest announcements and circulars.",
      link: "/notices",
    },
    {
      title: "Departments",
      icon: <FaBuilding />,
      description: "Explore department details and faculty information.",
      link: "/departments",
    },
    {
      title: "Academic Calendar",
      icon: <FaCalendarAlt />,
      description: "View academic schedule and important dates.",
      link: "/calendar",
    },
    {
      title: "Results",
      icon: <FaClipboardList />,
      description: "Access semester results and examination updates.",
      link: "/results",
    },
    {
      title: "Forms & Downloads",
      icon: <FaFileAlt />,
      description: "Download important forms and documents.",
      link: "/downloads",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Student Portal</h1>
        <p className="mt-3 text-sm">
          Access all academic resources and student services in one place.
        </p>
      </div>

      {/* 🔹 Services Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {studentServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition duration-300"
            >
              <div className="text-blue-600 text-3xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>

              <a
                href={service.link}
                className="inline-block mt-4 text-blue-600 text-sm font-medium hover:underline"
              >
                Explore →
              </a>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Students;