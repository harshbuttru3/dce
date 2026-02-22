import React from "react";

const Visit = () => {
  return (
    <div className="bg-white py-14 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Visit Us
        </h1>

        <div className="w-20 h-1 bg-blue-700 mt-3 mb-8"></div>

        {/* Address */}
        <div className="text-gray-700 text-lg leading-relaxed space-y-2 mb-10">
          <p>Darbhanga College of Engineering,</p>
          <p>Mabbi, P.O- Lal Sahpur, Via- P.T.C,</p>
          <p>Dist- Darbhanga-846005, State- Bihar</p>
          <p>Bihar – 846005</p>
          <p className="italic">
            (The campus is at Mabbi, beside NH-57)
          </p>
        </div>

        {/* Map Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Find Us on Map
        </h2>

        {/* Google Map Embed */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Darbhanga College of Engineering Location"
            src="https://www.google.com/maps?q=Darbhanga+College+of+Engineering,+Darbhanga&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Visit;
