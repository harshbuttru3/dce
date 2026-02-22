import React from "react";

const Internship = () => {
  const internshipStats = [
    { title: "Students Placed in Internships", value: "250+" },
    { title: "Companies Collaborated", value: "40+" },
    { title: "Paid Internships", value: "120+" },
    { title: "Industry Tie-ups", value: "15+" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Internship"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Internship Program
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* 🔹 About Internship */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            About Internship Program
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Internship Program at DCE Darbhanga provides students with
            real-world industry exposure and practical learning experience.
            Through collaborations with reputed organizations, students
            gain hands-on training, industry insights, and professional
            development opportunities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The program focuses on enhancing technical skills, communication,
            teamwork, and problem-solving abilities, ensuring students are
            industry-ready and confident to take on future challenges.
          </p>
        </div>

        {/* 🔹 Internship Opportunities */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Internship Opportunities
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Software Development Internships</li>
            <li>Core Engineering Internships (CE, ME, EEE)</li>
            <li>Research & Development Internships</li>
            <li>Government & PSU Internships</li>
            <li>Startup & Entrepreneurship Internships</li>
          </ul>
        </div>

        {/* 🔹 Internship Process */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Internship Process
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Company Registration & Opportunity Announcement</li>
            <li>Student Application & Resume Submission</li>
            <li>Shortlisting & Interview Process</li>
            <li>Selection & Offer Letter</li>
            <li>Internship Completion & Certification</li>
          </ol>
        </div>

        {/* 🔹 Internship Statistics */}
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Internship Highlights
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {internshipStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-2xl font-bold text-blue-600">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 Internship Coordinator */}
        <div className="bg-white p-8 rounded-xl text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
          <img
            src="/images/internship-coordinator.jpg"
            alt="Internship Coordinator"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
          />
          <h3 className="text-xl font-semibold">
            Mr. Vivek Kumar
          </h3>
          <p className="text-gray-500 mb-2">
            Internship Coordinator
          </p>
          <p className="text-gray-600 text-sm">
            📧 vivek@dce.edu.in
          </p>
          <p className="text-gray-600 text-sm">
            📱 +91-9000000000
          </p>
        </div>

      </div>
    </div>
  );
};

export default Internship;