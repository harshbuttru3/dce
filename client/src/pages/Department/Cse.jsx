import React from "react";
import DepartmentTemplate from "./DepartmentTemplate";
import { departmentData } from "../../data/departmentData";

const Cse = () => {
  console.log("CSe department");
  return <DepartmentTemplate data={departmentData.cse} />;
};

export default Cse;