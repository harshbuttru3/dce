import React from "react";

const Administration = () => {
  const rows = [
    { type: "section", title: "HEAD OF DEPARTMENT" },
    { section: "HOD", dept: "Civil Engineering", name: "Mr. Shyam Sundar Chaudhary", contact: "+91 94712 23162" },
    { section: "HOD", dept: "Mechanical Engineering", name: "Dr. Shashi Bhushan", contact: "+91 94139 35067" },
    { section: "HOD", dept: "Electrical & Electronics Engineering", name: "Dr. Anamika", contact: "Not Available" },
    { section: "HOD", dept: "Computer Science & Engineering", name: "Mr. Ajeet Kumar Gupta", contact: "+91 91228 29337" },
    { section: "HOD", dept: "Science & Humanities (1st Year)", name: "Dr. Chandan Kumar", contact: "Not Available" },

    { type: "section", title: "ACADEMIC SECTION" },
    { section: "Academic", dept: "Professor Incharge Academic-I", name: "Mr. Shyam Sundar Chaudhary", contact: "—" },
    { section: "Academic", dept: "Professor Incharge Academic-II", name: "Mr. Vinayak Kumar Jha", contact: "—" },
    { section: "Academic", dept: "Professor Incharge Admission-I", name: "Mr. Ajeet Kumar Gupta", contact: "—" },
    { section: "Academic", dept: "Professor Incharge Admission-II", name: "Mr. Nitish Kumar", contact: "—" },
    { section: "Academic", dept: "PG Coordinator", name: "Dr. Anamika", contact: "—" },

    { type: "section", title: "EXAM SECTION" },
    { section: "Exam", dept: "Controller of Exam-I", name: "Dr. Md. Asjad Mokhtar", contact: "+91 99999 14381" },
    { section: "Exam", dept: "Controller of Exam-II", name: "Mr. Prabhat Kumar", contact: "—" },

    { type: "section", title: "OFFICE SECTION" },
    { section: "Office", dept: "Professor Incharge Office", name: "Mr. Shyam Sundar Chaudhary", contact: "—" },

    { type: "section", title: "HOSTEL SECTION" },
    { section: "Hostel", dept: "Chief Warden", name: "Mr. Mayank Kumar Singh", contact: "—" },
    { section: "Hostel", dept: "Warden (V C Jha)", name: "Mr. Ankit Kumar", contact: "—" },
    { section: "Hostel", dept: "Warden (Shyama)", name: "Mrs. Shweta Kumari", contact: "—" },

    { type: "section", title: "OTHER SECTION" },
    { section: "Other", dept: "NBA Coordinator", name: "Dr. Anamika", contact: "—" },
    { section: "Other", dept: "Website Incharge", name: "Mr. Aditya Ray", contact: "—" },
  ];

  return (
    <div className="bg-white py-14 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          Administration
        </h1>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full text-sm md:text-base border-collapse">

            <thead>
              <tr className="bg-gradient-to-r from-blue-900 to-blue-600 text-white uppercase">
                <th className="py-4 px-6 text-left">Section</th>
                <th className="py-4 px-6 text-left">Responsibility / Department</th>
                <th className="py-4 px-6 text-left">Name of Faculty</th>
                <th className="py-4 px-6 text-left">Contact</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) =>
                row.type === "section" ? (
                  <tr key={index}>
                    <td
                      colSpan="4"
                      className="bg-gray-200 text-center font-semibold py-4 text-blue-800"
                    >
                      {row.title}
                    </td>
                  </tr>
                ) : (
                  <tr key={index} className="border-b hover:bg-gray-50 transition">
                    <td className="py-3 px-6">{row.section}</td>
                    <td className="py-3 px-6">{row.dept}</td>
                    <td className="py-3 px-6">{row.name}</td>
                    <td className="py-3 px-6 whitespace-nowrap">{row.contact}</td>
                  </tr>
                )
              )}
            </tbody>

          </table>
        </div>

        {/* ================= MOBILE CARD VIEW ================= */}
        <div className="md:hidden space-y-6">
          {rows.map((row, index) =>
            row.type === "section" ? (
              <h2
                key={index}
                className="bg-gray-200 text-blue-800 font-semibold text-center py-2 rounded"
              >
                {row.title}
              </h2>
            ) : (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-sm bg-gray-50"
              >
                <p><span className="font-semibold">Section:</span> {row.section}</p>
                <p><span className="font-semibold">Department:</span> {row.dept}</p>
                <p><span className="font-semibold">Name:</span> {row.name}</p>
                <p className="whitespace-nowrap">
                  <span className="font-semibold">Contact:</span> {row.contact}
                </p>
              </div>
            )
          )}
        </div>

      </div>
    </div>
  );
};

export default Administration;
