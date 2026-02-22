import React from "react";

const Aboutplacement = () => {
const teamMembers = [
  {
    name: "Mr. Prafulla Chandra",
    role: "Training & Placement Officer",
    email: "prafuldce@gmail.com",
    phone: "+91-8884911159",
    image: "/images/prafulla.jpg",
  },
  {
    name: "Mr. Mazharul Haque",
    role: "Departmental Coordinator (EEE)",
    email: "mazhar0964@gmail.com",
    phone: "7903340957",
    image: "/images/mazharul.jpg",
  },
  {
    name: "Mr. Zoheb Hasan",
    role: "Departmental Coordinator (CSE)",
    email: "zohebhasan54@gmail.com",
    phone: "+91-9910513260",
    image: "/images/zoheb.jpg",
  },
  {
    name: "Mr. Ishant Kumar",
    role: "Departmental Coordinator (CE)",
    email: "ishant.bit.2013@gmail.com",
    phone: "+91-8340206796",
    image: "/images/ishant.jpg",
  },
  {
    name: "Mr. Md. Alimullah Anwar",
    role: "Departmental Coordinator (ME)",
    email: "alimullah.anwar@gmail.com",
    phone: "+91-7722043755",
    image: "/images/alimullah.jpg",
  },
  {
    name: "Mr. Vishal Kumar",
    role: "Departmental Coordinator (ME)",
    email: "vk20june@gmail.com",
    phone: "+91-8809656233",
    image: "/images/vishal.jpg",
  },
];

const volunteers = [
  {
    name: "Prity Kumari",
    branch: "Civil Engineering",
    email: "pritykumari18dce@gmail.com",
    phone: "Not Available",
    image: "/images/prity.jpg",
  },
  {
    name: "Kishan Seth",
    branch: "Civil Engineering",
    email: "kishanseth27dce@gmail.com",
    phone: "8434501903",
    image: "/images/kishan.jpg",
  },
  {
    name: "Prakash Kaushal",
    branch: "CSE",
    email: "pkaushal41119@gmail.com",
    phone: "9431803564",
    image: "/images/prakash.jpg",
  },
  {
    name: "Aditi Vats",
    branch: "CSE",
    email: "aditivats002@gmail.com",
    phone: "Not Available",
    image: "/images/aditi.jpg",
  },
  {
    name: "Akash Kumar",
    branch: "Mechanical Engineering",
    email: "akashkumar909769@gmail.com",
    phone: "7464049009",
    image: "/images/akash.jpg",
  },
  {
    name: "Varsha Kumari",
    branch: "Mechanical Engineering",
    email: "varshakumari852002@gmail.com",
    phone: "Not Available",
    image: "/images/varsha.jpg",
  },
  {
    name: "Aman Kishor Mahto",
    branch: "EEE",
    email: "amanakash258@gmail.com",
    phone: "9304019434",
    image: "/images/aman.jpg",
  },
  {
    name: "Pragya Pushp",
    branch: "EEE",
    email: "pushppragya@gmail.com",
    phone: "Not Available",
    image: "/images/pragya.jpg",
  },
  {
    name: "Manish Kumar",
    branch: "CSE",
    email: "manishkmrjhamuzz@gmail.com",
    phone: "7255964983",
    image: "/images/manish.jpg",
  },
];
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYWluaW5nfGVufDB8fDB8fHww"
          alt="Placement"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Training & Placement Cell
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* 🔹 About Section */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            About Placement Cell
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            DCE, Darbhanga with its glorious past, has been rendering
            remarkable service to the nation and engineering fraternity
            by nurturing youthful talent from Bihar and beyond. Our
            well-placed alumni stand as proud testimony to the excellence
            of the institution, making their mark both in India and abroad.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            In today’s fast-changing technological era, where challenges
            are complex and expectations are high, we remain committed
            to preparing our students with cutting-edge knowledge and
            practical exposure.
          </p>

          <p className="text-gray-700 leading-relaxed">
            DCE not only strengthens technical skills but also nurtures
            leadership, innovation, and determination to solve real-world
            problems. We warmly invite recruiters to visit our campus and
            explore the potential of our talented students.
          </p>
        </div>

        {/* 🔹 Placement Team */}
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Placement Team
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">📧 {member.email}</p>
              <p className="text-gray-600 text-sm">📱 {member.phone}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Volunteers */}
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Student Volunteers
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <img
                src={volunteer.image}
                alt={volunteer.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold">{volunteer.name}</h3>
              <p className="text-gray-500 mb-2">{volunteer.branch}</p>
              <p className="text-gray-600 text-sm">📧 {volunteer.email}</p>
              <p className="text-gray-600 text-sm">📱 {volunteer.phone}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Aboutplacement;