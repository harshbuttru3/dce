import React from "react";

const facultyData = [
  {
    name: "Dr. Arvind Singh",
    designation: "Professor - Structural Engineering",
    img: "https://via.placeholder.com/200",
  },
  {
    name: "Prof. Kavita Sharma",
    designation: "Associate Professor - Geotechnical Engineering",
    img: "https://via.placeholder.com/200",
  },
  {
    name: "Mr. Sandeep Yadav",
    designation: "Assistant Professor - Environmental Engineering",
    img: "https://via.placeholder.com/200",
  },
];

const syllabuslink = [
  { sem: 1, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 2, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 3, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 4, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 5, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 6, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 7, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 8, link: "https://beubiharsyllabus.blogspot.com/" },
];

const Civil = () => {
  return (
    <div className="min-h-screen text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Logo + Heading */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://plus.unsplash.com/premium_vector-1720708762827-7500cca467e2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Civil Engineering Logo"
            className="w-24 mb-4 rounded-full"
          />
          <h1 className="text-4xl font-bold text-center">
            Civil Engineering Department
          </h1>
          <p className="text-lg mt-2 text-gray-200 text-center">
            Building the Nation with Strong Foundations
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            About Department
          </h2>
          <p className="leading-relaxed">
            The Civil Engineering Department focuses on infrastructure 
            development, structural design, transportation systems, 
            environmental sustainability, and construction technology. 
            Our students are trained to design and build safe and durable 
            structures for society.
          </p>
        </div>

        {/* HOD Section */}
        <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://via.placeholder.com/250"
            alt="HOD"
            className="w-56 h-56 object-cover rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Head of Department
            </h2>
            <h3 className="text-xl font-medium mb-3">
              Dr. Rajiv Kumar
            </h3>
            <p>
              Dr. Rajiv Kumar has over 20 years of experience in structural 
              and environmental engineering. Under his leadership, the 
              department has produced highly skilled engineers working in 
              government and private sectors.
            </p>
          </div>
        </div>

        {/* Faculty Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Faculty
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {facultyData.map((faculty, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300"
              >
                <img
                  src={faculty.img}
                  alt={faculty.name}
                  className="w-40 h-40 mx-auto object-cover rounded-full mb-4 shadow-md"
                />
                <h3 className="text-xl font-semibold">{faculty.name}</h3>
                <p className="text-gray-600">{faculty.designation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Syllabus Section */}
        <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Syllabus (All Semesters)
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {syllabuslink.map((item) => (
              <a
                key={item.sem}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-center py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Semester {item.sem}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Civil;