import React from "react";

const Computercenter = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Computer Center Banner */}
      <div className="relative">
        <img
          src="https://media.istockphoto.com/id/1740123848/photo/group-of-computers-in-computer-lab.webp?a=1&b=1&s=612x612&w=0&k=20&c=VsExICD3AuVECWYhW9mqJgYTaHLYWgrHw6dqhfzqm2o="
          alt="Computer Center"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Computer Center
          </h1>
        </div>
      </div>

      {/* 🔹 Computer Center Details */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">

          {/* 🖥 About Section */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-semibold mb-4">About Computer Center</h2>
            <p className="text-gray-600 leading-relaxed">
              The Computer Center provides modern computing facilities 
              for students and faculty. It supports programming labs, 
              research activities, project development, and online learning.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Facilities:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>High-Speed Internet</li>
                <li>Latest Software Tools</li>
                <li>Air-Conditioned Labs</li>
                <li>Projector & Smart Boards</li>
                <li>Printer & Scanner Access</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Lab Timings:</h3>
              <p className="text-gray-600">
                Monday – Saturday: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* 👨‍🏫 Incharge Section */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center text-center">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Computer Center Incharge"
              className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
            />
            <h2 className="text-2xl font-semibold">Dr. Vivek Singh</h2>
            <p className="text-gray-500 mb-4">Computer Center Incharge</p>
            <p className="text-gray-600">
              He supervises lab activities and ensures students get 
              access to modern technology for academic and project work.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Computercenter;