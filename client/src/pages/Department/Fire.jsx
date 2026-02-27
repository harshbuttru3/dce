import React from "react";
import DepartmentTemplate from "./DepartmentTemplate";
import { departmentData } from "../../data/departmentData";

const Fire = () => {
    return <DepartmentTemplate data={departmentData.fire} />;
};

export default Fire;
