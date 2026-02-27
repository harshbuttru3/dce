import React from "react";
import DepartmentTemplate from "./DepartmentTemplate";
import { departmentData } from "../../data/departmentData";

const PowerSystem = () => {
    return <DepartmentTemplate data={departmentData.power_system} />;
};

export default PowerSystem;
