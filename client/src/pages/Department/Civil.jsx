import React from "react";
import DepartmentTemplate from "./DepartmentTemplate";
import { departmentData } from "../../data/departmentData";

const Civil = () => {
  return <DepartmentTemplate data={departmentData.civil} />;
};

export default Civil;