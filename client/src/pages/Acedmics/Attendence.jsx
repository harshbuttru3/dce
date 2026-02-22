import React, { useEffect, useState } from "react";

const Attendence = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
    <div
      className={`text-primary text-2xl font-bold transform transition-all duration-700 ease-in-out
      ${show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
    >
      Attendance
      
    </div> <hr className="font-bold mt-2 text-primary text-2xl" /> </>
  );
};

export default Attendence;