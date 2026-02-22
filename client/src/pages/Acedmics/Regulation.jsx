import React from "react";

const Regulation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold mb-4">
        Academic Regulation
      </h1>

      <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
        <iframe
          src="/regulation.pdf"
          title="Academic Regulation PDF"
          width="100%"
          height="600px"
        />
      </div>
    </div>
  );
};

export default Regulation;