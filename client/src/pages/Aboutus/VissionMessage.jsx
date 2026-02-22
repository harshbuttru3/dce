import React from "react";

const VissionMessage = () => {
  return (
    <div className="bg-white py-12 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Vision & Mission
        </h1>

        {/* Divider */}
        <hr className="h-1 bg-primary border-none w-24 mx-auto mb-10" />

        {/* Image Section */}
        <div className="flex justify-center mb-10">
          <img
            src="https://www.dce-darbhanga.org/wp-content/uploads/2022/07/PolytropicServices_Vision-Mision_header.png"
            alt="Education Vision"
            className="rounded-lg shadow-lg w-full   object-cover"
          />
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Vision
          </h2>
          <p className="text-lg leading-relaxed">
            To bring forth holistic engineers with an impetus to higher
            studies to meet the sustainable requirement of industry and
            society – nationwide and globally.
          </p>
        </div>

        {/* Mission Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">
            Mission
          </h2>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              <span className="font-semibold text-primary">M1:</span> To
              provide quality teaching-learning ambience through advanced
              pedagogical methods.
            </p>

            <p>
              <span className="font-semibold text-primary">M2:</span> To
              facilitate learning environment for higher studies and research
              aptitude.
            </p>

            <p>
              <span className="font-semibold text-primary">M3:</span> To
              collaborate with related domain industries for enhancing
              professional expertise.
            </p>

            <p>
              <span className="font-semibold text-primary">M4:</span> To
              inculcate humanitarian ethics for self, society, nation and the
              world.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VissionMessage;
