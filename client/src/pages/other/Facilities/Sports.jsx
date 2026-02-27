import React from "react";

const sportsData = [
  {
    name: "Cricket",
    img: "https://images.unsplash.com/photo-1593766788306-28561086694e",
  },
  {
    name: "Tennis",
    img: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827",
  },
  {
    name: "Volleyball",
    img: "https://images.unsplash.com/photo-1592656094267-764a45160876",
  },
  {
    name: "Badminton",
    img: "https://images.unsplash.com/photo-1708312604109-16c0be9326cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chess",
    img: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793",
  },
  {
    name: "Carrom",
    img: "https://images.unsplash.com/photo-1709914371506-2eaf11fd6d64?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "BasketBall",
    img: "https://images.unsplash.com/photo-1627627256672-027a4613d028?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Athletics",
    img: "https://images.unsplash.com/photo-1502904550040-7534597429ae",
  },
];

const Sports = () => {
  return (
    <div className="bg-white min-h-screen text-primary">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            DCE Sports Activities
          </h1>
          <p className="text-lg text-gray-600">
            DCE believes in holistic development. Along with academics, 
            we strongly encourage students to participate in sports and 
            extracurricular activities for physical fitness and teamwork.
          </p>
        </div>

        {/* Sports Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Sports at DCE
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sportsData.map((sport, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
              >
                <img
                  src={sport.img}
                  alt={sport.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-primary">
                    {sport.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sports Incharge Section */}
        <div className="shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-gray-800 rounded-2xl  p-8 flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://via.placeholder.com/250"
            alt="Sports Incharge"
            className="w-100 h-56 object-cover rounded-xl shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Sports Incharge
            </h2>
            <h3 className="text-xl font-medium mb-3">
              Mr. Ajay Kumar
            </h3>
            <p className="leading-relaxed">
              Mr. Ajay Kumar supervises all sports activities at DCE and ensures 
              proper training facilities for students. Under his guidance, 
              DCE teams regularly participate in inter-college tournaments 
              and achieve outstanding performance at district and state levels.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sports;