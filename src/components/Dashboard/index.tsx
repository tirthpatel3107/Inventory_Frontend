import React, { useEffect, useState } from "react";
import "./Dashboard.scss";

// Component
import EmployeeSummary from "./EmployeeSummary/EmployeeSummary";
import HardwareSummary from "./HardwareSummary/HardwareSummary";

// API
import { getEmployeeDashboard } from "../../utils/api/service/employeeService";
import { getHardwareDashboard } from "../../utils/api/service/hardwareService";

// Chart
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
ChartJS.register(CategoryScale);

const Dashboard = () => {
  const [employeeDashboardData, setEmployeeDashboardData] = useState({});
  const [hardwareDashboardData, setHardwareDashboardData] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await getEmployeeDashboard();
      setEmployeeDashboardData(data?.data ?? []);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getHardwareDashboard();
      setHardwareDashboardData(data?.data ?? []);
    })();
  }, []);

  return (
    <React.Fragment>
      <div className="Dashboard">
        <h3 className="m0 mb-30">Employee Summary</h3>
        <EmployeeSummary data={employeeDashboardData} />

        <h3 className="m0 mt-30 mb-30">Hardware Summary</h3>
        <HardwareSummary data={hardwareDashboardData} />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
