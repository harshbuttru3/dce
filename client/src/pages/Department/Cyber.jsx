import React from "react";
import DepartmentTemplate from "./DepartmentTemplate";
import { departmentData } from "../../data/departmentData";

const Cyber = () => {
  return <DepartmentTemplate data={departmentData.cyber} />;
};

export default Cyber;