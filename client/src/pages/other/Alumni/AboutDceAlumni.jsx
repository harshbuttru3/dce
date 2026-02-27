import React from "react";

const AboutDceAlumni = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Banner */}
      <div className="relative">
        <img
          src="/images/alumni-banner.jpg"
          alt="DCE Alumni"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            DCE Alumni Association
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* 🔹 About Alumni Section */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Message to Our Esteemed Alumni
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Dear Alumni,
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            As a fellow alumnus and the current Faculty Coordinator, I am delighted to reconnect with our esteemed alumni community. Our alma mater continues to flourish, and I am proud to be part of its growth.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Having experienced the transformative journey that our college offers firsthand, I understand the special bond we share. We have all walked the same paths, sat in the same classrooms, and embarked on a journey that has shaped our lives. Now, as a member of the faculty, I have the privilege of contributing to the education and development of the next generation.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            It is crucial for us to maintain a strong connection between our esteemed alumni and the institution. Your achievements and experiences are a testament to the exceptional education you received here. We take immense pride in your accomplishments, and we hope you feel the same pride in being associated with your alma mater.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I invite you to actively engage with your alma mater through various avenues. Consider sharing your expertise and insights by conducting guest lectures and workshops, where your industry experiences can inspire and guide current students. Become a mentor to offer support and guidance to students as they navigate their academic and professional journeys.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Additionally, attend alumni networking events to reconnect with old friends, expand your professional network, and collaborate on exciting projects.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Your involvement and contributions will greatly enrich the lives of current students and strengthen our alumni network. Please reach out to our Alumni Relations Office for more information on how to get involved.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            We eagerly await your participation and look forward to reconnecting with you at our upcoming events.
          </p>

          <div className="text-gray-800 font-medium">
            Warm regards,<br />
            <strong>Vinayak Jha</strong><br />
            Faculty Coordinator<br />
            DCE Alumni Cell
          </div>

          <div className="mt-6 text-sm text-gray-600">
            📧 For any queries: alumnidcedarbhanga@gmail.com <br />
            🌐 Facebook: 
            <a
              href="https://www.facebook.com/dcedarbhangaalumni?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 ml-1 hover:underline"
            >
              Visit Page
            </a>
          </div>
        </div>

        {/* 🔹 Alumni List PDF Section */}
        <div className="bg-white p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            List of Alumni
          </h2>

          <div className="w-full h-[600px]">
            <iframe
              src="/pdfs/alumni-list.pdf"
              title="Alumni List PDF"
              className="w-full h-full border rounded-lg"
            ></iframe>
          </div>

          <div className="text-center mt-4">
            <a
              href="/pdfs/alumni-list.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Download Alumni List PDF
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutDceAlumni;