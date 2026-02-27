import React from "react";

const Aicte = () => {
  const academicYears = [
    { id: 9, year: "2025–2026", file: "/pdfs/2025-2026.pdf" },
    { id: 8, year: "2024–2025", file: "/pdfs/2024-2025.pdf" },
    { id: 7, year: "2023–2024", file: "/pdfs/2023-2024.pdf" },
    { id: 6, year: "2022–2023", file: "/pdfs/2022-2023.pdf" },
    { id: 5, year: "2021–2022", file: "/pdfs/2021-2022.pdf" },
    { id: 4, year: "2020–2021", file: "/pdfs/2020-2021.pdf" },
    { id: 3, year: "2019–2020", file: "/pdfs/2019-2020.pdf" },
    { id: 2, year: "2018–2019", file: "/pdfs/2018-2019.pdf" },
    { id: 1, year: "2017–2018", file: "/pdfs/2017-2018.pdf" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">

        {/* 🔹 Title */}
        <h1 className="text-2xl font-semibold mb-6">
          AICTE Banner
        </h1>

        {/* 🔹 Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">

            {/* Table Header */}
            <thead>
              <tr className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-left">
                <th className="py-3 px-4">SL#</th>
                <th className="py-3 px-4">
                  ACADEMIC YEAR (CLICK TO DOWNLOAD)
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {academicYears.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0
                      ? "bg-gray-200"
                      : "bg-gray-100"
                  }`}
                >
                  <td className="py-3 px-4">{item.id}</td>
                  <td className="py-3 px-4">
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {item.year}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default Aicte;