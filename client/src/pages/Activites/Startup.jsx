import React from "react";

const Startup = () => {
  const startupTeam = [
    {
      name: "Mr. Ankit Kumar",
      role: "Faculty Incharge, Startup Cell",
      phone: "+91-7250840578",
      email: "ankitkr606@gmail.com",
      image: "/images/ankit.jpg",
    },
    {
      name: "Mr. Surya Prakash",
      role: "Startup Cell Coordinator",
      phone: "7004906223",
      email: "suryaind22@gmail.com",
      image: "/images/surya.jpg",
    },
  ];

  const advisors = [
    {
      name: "Sri Naveen Jha",
      post: "Chief Advisor",
      designation: "Sr. ALI Fellow, Harvard University",
      linkedin: "https://www.linkedin.com/in/naveenforchange/",
      image: "/images/naveen.jpg",
    },
    {
      name: "Sri Ajay Suman Shukla",
      post: "Advisor",
      designation: "Executive Director, Ek Soch Foundation",
      linkedin: "https://www.linkedin.com/in/ajay-suman-shukla-69534312/",
      image: "/images/ajay.jpg",
    },
    {
      name: "Sri Pradeep Kant Choudhary",
      post: "Advisor",
      designation: "Chairman, ANADI Foundation",
      linkedin: "https://www.linkedin.com/in/pradeep-kant-choudhary-0b825922b/",
      image: "/images/pradeep.jpg",
    },
    {
      name: "Sri Sanjeev Roy",
      post: "Advisor",
      designation: "National Expert, Higher Education Policy, EU & UK",
      linkedin: "https://www.linkedin.com/in/sanjeevroy/",
      image: "/images/sanjeev.jpg",
    },
    {
      name: "Sri Arvind Jha",
      post: "Advisor",
      designation: "Founder, Mithila Angel Network",
      linkedin: "https://www.linkedin.com/in/jalajboy/",
      image: "/images/arvind.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHN0YXJ0dXB8ZW58MHx8MHx8fDA%3D"
          alt="Startup Cell"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Start Up Cell & Incubation Cell
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* 🔹 About Startup Cell */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Startup Cell - DCE Darbhanga
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Startup Cell at Darbhanga College of Engineering (DCE)
            is a dedicated platform aimed at nurturing innovation and
            entrepreneurship among students and faculty. The cell provides
            mentorship, resources, and networking opportunities to help
            aspiring entrepreneurs transform their ideas into viable startups.
            By fostering a culture of creativity and risk-taking, the Startup
            Cell plays a pivotal role in shaping the next generation of
            innovators and leaders in the Mithila region.
          </p>
        </div>

        {/* 🔹 MIITIE Section */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            MIITIE (Mithila Institute of Inclusive Technological Innovation and Entrepreneurship)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            MIITIE is the flagship incubation center of DCE Darbhanga,
            focused on accelerating early-stage startups. With expert mentorship,
            state-of-the-art facilities, and strong industry networks,
            MIITIE supports startups from ideation to commercialization.
            The center is committed to driving economic development in the
            Mithila region by building a vibrant startup ecosystem.
          </p>
        </div>

        {/* 🔹 Startup Team */}
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Startup Cell Team
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {startupTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">📧 {member.email}</p>
              <p className="text-gray-600 text-sm">📱 {member.phone}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Advisors Section */}
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Advisors
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <img
                src={advisor.image}
                alt={advisor.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold">{advisor.name}</h3>
              <p className="text-gray-500">{advisor.post}</p>
              <p className="text-gray-600 text-sm mb-2">
                {advisor.designation}
              </p>
              <a
                href={advisor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                View LinkedIn Profile
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Startup;