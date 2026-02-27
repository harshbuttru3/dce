import React from "react";
import DepartmentTemplate from "./DepartmentTemplate";
import { departmentData } from "../../data/departmentData";

const Cse = () => {
  return <DepartmentTemplate data={departmentData.cse} />;
};

export default Cse;