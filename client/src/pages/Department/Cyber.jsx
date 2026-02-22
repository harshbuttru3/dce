import React from "react";

const facultyData = [
  {
    name: "Dr. Ankit Mehra",
    designation: "Professor - Network Security",
    img: "https://via.placeholder.com/200",
  },
  {
    name: "Prof. Sneha Kapoor",
    designation: "Associate Professor - Ethical Hacking",
    img: "https://via.placeholder.com/200",
  },
  {
    name: "Mr. Vivek Rana",
    designation: "Assistant Professor - Cryptography",
    img: "https://via.placeholder.com/200",
  },
];
const  syllabuslink =[
  {sem: 1 , link:"https://beubiharsyllabus.blogspot.com/"},
  {sem: 2 , link:"https://beubiharsyllabus.blogspot.com/"},
    {sem: 3 , link:"https://beubiharsyllabus.blogspot.com/"},
  {sem: 4 , link:"https://beubiharsyllabus.blogspot.com/"},
    {sem: 5 , link:"https://beubiharsyllabus.blogspot.com/"},
  {sem: 6 , link:"https://beubiharsyllabus.blogspot.com/"},
    {sem: 7 , link:"https://beubiharsyllabus.blogspot.com/"},
  {sem: 8 , link:"https://beubiharsyllabus.blogspot.com/"},

]

const Cyber = () => {
  return (
    <div className=" min-h-screen text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Logo + Heading */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://t4.ftcdn.net/jpg/17/04/92/31/240_F_1704923129_OtvFLmOrYRMXm38Iv8PtD25SOr95v4G4.jpg"
            alt="Cyber Security Logo"
            className="w-30 mb-4 rounded-full"
          />
          <h1 className="text-4xl font-bold text-center">
            Cyber Security Department
          </h1>
          <p className="text-lg mt-2 text-gray-200 text-center">
            Securing the Digital World
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            About Department
          </h2>
          <p className="leading-relaxed">
            The Cyber Security Department focuses on protecting digital systems,
            networks, and data from cyber threats. Students gain expertise in
            ethical hacking, cryptography, digital forensics, and network security.
            Our curriculum prepares students to tackle real-world cyber attacks.
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
            {/* {[1,2,3,4,5,6,7,8].map((sem) => (
              <a
                key={sem}
                href="#"
                className="bg-primary text-white text-center py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Semester {sem}
              </a>
            ))} */}
            {syllabuslink.map((item) =>(
              <a target="_blank"
              key ={item.sem}
              href={item.link}
              className="bg-primary text-white text-center py-3 rounded-lg shadow-md hover:bg-blue-700 transition" >
                semester {item.sem}
              </a>

            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cyber;