import { useState, useEffect } from "react";
import { Box, Card } from "@mui/material";

// Chart
import { Doughnut, Pie } from "react-chartjs-2";
import { colorCombination } from "../../../utils/colorCombination";

// Component
import ModernCard from "../../CommonStructure/ModernCard";

const EmployeeSummary = ({ data }: any) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(data?.department ?? []);
  }, [data]);

  const workData = [
    { id: "Work From Home", count: data?.wfhEmployee },
    { id: "Work From Office", count: data?.wfoEmployee },
  ];

  // Department Wise Data
  const departmentData = {
    labels: chartData.map((data: any) => data._id),
    datasets: [
      {
        label: " Count ",
        data: chartData.map((data: any) => data.count),
        backgroundColor: colorCombination,
      },
    ],
  };

  // employeeWorkData - WFH OR WFO
  const employeeWorkData = {
    labels: workData.map((data: any) => data.id),
    datasets: [
      {
        label: " Count ",
        data: workData.map((data: any) => data.count),
        backgroundColor: colorCombination,
      },
    ],
  };

  return (
    <>
      <Box className="EmployeeWrapper">
        <Box className="LeftPart">
          <ModernCard
            title="Total Employee"
            count={data?.totalEmployee ?? ""}
          />
          <ModernCard
            title="Total Department"
            count={data?.totalEmployee ?? ""}
          />
          <ModernCard title="WFO Employee" count={data.wfoEmployee ?? ""} />
          <ModernCard title="WFH Employee" count={data.wfhEmployee ?? ""} />
        </Box>
        <Box className="RightPart">
          <Card className="uniqueCard">
            <Box className="p-20 chart">
              <h4 className="m0 mb15">Department Wise Employee</h4>
              <Pie data={departmentData} />
            </Box>
          </Card>

          <Card className="uniqueCard">
            <Box className="p-20 chart">
              <h4 className="m0 mb15">Work Location</h4>
              <Doughnut data={employeeWorkData} />
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default EmployeeSummary;
