import React from "react";

const Bank = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔹 Bank Banner */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6"
          alt="Bank"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            College Bank Facility
          </h1>
        </div>
      </div>

      {/* 🔹 Bank Details */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">

          {/* 🏛 About Bank */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-semibold mb-4">About Bank</h2>
            <p className="text-gray-600 leading-relaxed">
              The college campus provides banking facilities for students 
              and staff. The bank offers easy access to financial services 
              such as account opening, fee payment, ATM services, and other 
              banking operations.
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Facilities:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Student Account Opening</li>
                <li>ATM Facility</li>
                <li>Online Banking Support</li>
                <li>Fee Payment Services</li>
                <li>Loan Assistance</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Working Hours:</h3>
              <p className="text-gray-600">
                Monday – Friday: 10:00 AM – 4:00 PM
              </p>
            </div>
          </div>

          {/* 👨‍💼 Bank Manager Section */}
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center text-center">
            <img
              src="https://randomuser.me/api/portraits/men/55.jpg"
              alt="Bank Manager"
              className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
            />
            <h2 className="text-2xl font-semibold">Mr. Sandeep Verma</h2>
            <p className="text-gray-500 mb-4">Branch Manager</p>
            <p className="text-gray-600">
              The branch manager ensures smooth banking operations 
              and assists students and staff with financial services.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Bank;