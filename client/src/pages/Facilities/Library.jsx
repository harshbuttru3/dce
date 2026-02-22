import React from "react";

const Centrallibrary = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Library Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          alt="Library"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            College Library
          </h1>
        </div>
      </div>

      {/* 🔹 Library Details */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-10">

          {/* 📚 About Library */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-semibold mb-4">About Library</h2>
            <p className="text-gray-600 leading-relaxed">
              Our college library provides a peaceful and resourceful 
              environment for students. It contains thousands of books 
              including academic textbooks, reference materials, journals, 
              and digital resources to support learning and research.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Facilities:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Reading Hall</li>
                <li>Digital Library</li>
                <li>Wi-Fi Enabled Area</li>
                <li>Newspapers & Magazines</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Timings:</h3>
              <p className="text-gray-600">Monday – Saturday: 9:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* 👨‍🏫 Incharge Section */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Library Incharge"
              className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
            />
            <h2 className="text-2xl font-semibold">Mr. Rajesh Kumar</h2>
            <p className="text-gray-500 mb-4">Library Incharge</p>
            <p className="text-gray-600">
              With over 15 years of experience, he ensures smooth functioning 
              of the library and supports students in research and academic growth.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Centrallibrary;