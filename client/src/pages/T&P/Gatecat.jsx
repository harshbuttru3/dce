import React from "react";

const Gatecat = () => {
  const gateStudents = [
    {
      name: "Aman Kumar",
      branch: "Computer Science Engineering",
      rank: "AIR 245",
      image: "/images/gate1.jpg",
    },
    {
      name: "Pragya Singh",
      branch: "Electrical Engineering",
      rank: "AIR 512",
      image: "/images/gate2.jpg",
    },
    {
      name: "Rohit Verma",
      branch: "Mechanical Engineering",
      rank: "AIR 389",
      image: "/images/gate3.jpg",
    },
    {
      name: "Sneha Kumari",
      branch: "Civil Engineering",
      rank: "AIR 610",
      image: "/images/gate4.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1606326608690-4e0281b1e588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RXhhbXxlbnwwfHwwfHx8MA%3D%3D"
          alt="GATE Qualified Students"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            GATE Qualified Students
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* 🔹 About Section */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our GATE Achievers
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">
            Our students have consistently achieved excellent ranks in the 
            Graduate Aptitude Test in Engineering (GATE). Their dedication, 
            strong academic foundation, and technical excellence reflect 
            the quality education provided at our institution.
          </p>
        </div>

        {/* 🔹 Students Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {gateStudents.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-105 transition duration-300"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold">{student.name}</h3>
              <p className="text-gray-500">{student.branch}</p>
              <p className="text-blue-600 font-semibold mt-2">
                🏆 {student.rank}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gatecat;