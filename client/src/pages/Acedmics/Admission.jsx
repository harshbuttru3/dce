import React from "react";

const Admission = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
          Admission
        </h1>

        {/* Admission Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          
          <p>
            Admission in <span className="font-semibold text-blue-600">
              Darbhanga College of Engineering (DCE)
            </span> for the four-year B.Tech. course is made through the 
            <span className="font-semibold">
              {" "}Bihar Combined Entrance Competitive Examination (B.C.E.C.E.)
            </span>{" "}
            conducted by the Bihar Combined Entrance Competitive Examination Board.
          </p>

          <p>
            Candidates desirous of seeking admission in DCE are advised to appear in 
            the Screening & Main Examination of B.C.E.C.E.
          </p>

          <p>
            Detailed information regarding eligibility criteria, important dates, 
            and the application process for B.C.E.C.E. is available in the official prospectus.
          </p>

        </div>

        {/* Highlight Box */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-700 mb-2">
            Official Website
          </h2>
          <p className="text-gray-700 mb-4">
            For more details about the admission process, please visit the official website of BCECE Board.
          </p>

          <a
            href="https://bceceboard.bihar.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Visit BCECE Board Website
          </a>
        </div>

      </div>
    </div>
  );
};

export default Admission;
