import React from "react";

const Award = () => {
  const awards = [
    {
      title: "Excellence in Educational Leadership Award",
      givenBy: "Honourable Governor of Bihar",
      date: "March 2024",
      description:
        "Awarded for outstanding leadership and contribution towards technical education and academic excellence.",
      image: "/images/award1.jpg",
    },
    {
      title: "Best Engineering Institution Development Award",
      givenBy: "Honourable Minister of Education",
      date: "September 2023",
      description:
        "Recognized for continuous development of infrastructure, placement growth, and academic achievements.",
      image: "/images/award2.jpg",
    },
    {
      title: "National Academic Excellence Recognition",
      givenBy: "Honourable Chief Minister",
      date: "January 2022",
      description:
        "Honoured for elevating institutional standards and promoting innovation among students.",
      image: "/images/award3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Banner */}
      <div className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1664302656889-e0ff44331843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXdhcmQlMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3Dhttps://plus.unsplash.com/premium_photo-1664302656889-e0ff44331843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXdhcmQlMjBjZXJlbW9ueXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Awards"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Awards & Recognitions
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* 🔹 About Section */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Honour & Recognition
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our respected Principal has been honoured by distinguished
            personalities for exemplary leadership, academic excellence,
            and remarkable contribution to technical education.
            These recognitions reflect the institution’s dedication
            to quality education and innovation.
          </p>
        </div>

        {/* 🔹 Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-105 transition duration-300"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {award.title}
                </h3>

                <p className="text-gray-500 text-sm mb-1">
                  🎖 Given By: {award.givenBy}
                </p>

                <p className="text-gray-500 text-sm mb-3">
                  📅 {award.date}
                </p>

                <p className="text-gray-700 text-sm">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Award;