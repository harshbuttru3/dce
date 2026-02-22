import React from "react";

const Hostel = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Hostel Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5"
          alt="Hostel"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            College Hostel
          </h1>
        </div>
      </div>

      {/* 🔹 Hostel Details */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-10">

          {/* 🏠 About Hostel */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-semibold mb-4">About Hostel</h2>
            <p className="text-gray-600 leading-relaxed">
              Our college hostel provides a safe and comfortable living 
              environment for students. The hostel is well-maintained 
              with modern facilities to ensure students can focus on 
              their academic growth.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Facilities:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>24/7 Security</li>
                <li>Wi-Fi Enabled Rooms</li>
                <li>Clean Drinking Water</li>
                <li>Common Study Hall</li>
                <li>Mess Facility</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Hostel Timings:</h3>
              <p className="text-gray-600">
                Entry Time: 6:00 AM – 9:00 PM
              </p>
            </div>
          </div>

          {/* 👨‍💼 Warden Section */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center text-center">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Hostel Warden"
              className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
            />
            <h2 className="text-2xl font-semibold">Mr. Amit Sharma</h2>
            <p className="text-gray-500 mb-4">Hostel Warden</p>
            <p className="text-gray-600">
              The hostel warden ensures discipline, safety, and 
              well-being of all students residing in the hostel.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hostel;