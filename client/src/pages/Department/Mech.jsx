import React from "react";
import DepartmentTemplate from "./DepartmentTemplate";
import { departmentData } from "../../data/departmentData";

const Mech = () => {
  return <DepartmentTemplate data={departmentData.mechanical} />;
};

export default Mech;