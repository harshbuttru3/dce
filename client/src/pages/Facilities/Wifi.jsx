import React from "react";

const Wifi = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 WiFi Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190"
          alt="WiFi Facility"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Campus WiFi Facility
          </h1>
        </div>
      </div>

      {/* 🔹 WiFi Details */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">

          {/* 🌐 About WiFi */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-semibold mb-4">About WiFi Facility</h2>
            <p className="text-gray-600 leading-relaxed">
              Our campus provides high-speed WiFi connectivity across
              academic blocks, library, hostel, and administrative areas.
              Students and faculty can access the internet for research,
              online classes, and project development.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>High-Speed Broadband</li>
                <li>Secure Login Authentication</li>
                <li>24/7 Connectivity</li>
                <li>Wide Campus Coverage</li>
                <li>Technical Support</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Availability:</h3>
              <p className="text-gray-600">
                Available 24 Hours for Students & Staff
              </p>
            </div>
          </div>

          {/* 👨‍💻 Network Admin Section */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center text-center">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Network Administrator"
              className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
            />
            <h2 className="text-2xl font-semibold">Mr. Ankit Mishra</h2>
            <p className="text-gray-500 mb-4">Network Administrator</p>
            <p className="text-gray-600">
              Responsible for maintaining network security, internet speed,
              and providing technical assistance for connectivity issues.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Wifi;