import React from "react";

const facultyData = [
  {
    name: "Dr. Amit Sharma",
    designation: "Professor",
    img: "https://via.placeholder.com/200",
  },
  {
    name: "Prof. Neha Verma",
    designation: "Associate Professor",
    img: "https://via.placeholder.com/200",
  },
  {
    name: "Mr. Rahul Singh",
    designation: "Assistant Professor",
    img: "https://via.placeholder.com/200",
  },
];
const syllabusLinks = [
  { sem: 1, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 2, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 3, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 4, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 5, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 6, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 7, link: "https://beubiharsyllabus.blogspot.com/" },
  { sem: 8, link: "https://beubiharsyllabus.blogspot.com/" },
];

const Cse = () => {
  return (
    <div className=" min-h-screen text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Logo + Heading */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721291.png"
            alt="CSE Logo"
            className="w-24 mb-4"
          />
          <h1 className="text-4xl font-bold text-center">
            Computer Science & Engineering
          </h1>
          <p className="text-lg mt-2 text-gray-200 text-center">
            Innovating the Future with Technology
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            About Department
          </h2>
          <p className="leading-relaxed">
            The Computer Science & Engineering Department focuses on 
            cutting-edge technologies including Artificial Intelligence, 
            Machine Learning, Data Science, Web Development, and Cyber Security. 
            Our mission is to produce skilled engineers ready for global challenges.
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
              Dr. Rohit Verma
            </h3>
            <p>
              Dr. Rohit Verma has 16+ years of experience in cyber security
              research and ethical hacking. Under his guidance, the department
              has achieved excellence in cyber competitions and industry
              collaborations.
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
            {syllabusLinks.map((items) => (
              <a
                key={items.sem}
                href={items.link}
                className="bg-primary text-white text-center py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Semester {items.sem}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cse;