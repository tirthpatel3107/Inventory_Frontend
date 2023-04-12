import { useEffect, useState } from "react";
import { Box, Card } from "@mui/material";

import { Pie } from "react-chartjs-2";
import { colorCombination } from "../../../utils/colorCombination";

// Component
import ModernCard from "../../CommonStructure/ModernCard";

const HardwareSummary = ({ data }: any) => {
  // For Total Devices
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(data?.typeWiseCount ?? []);
  }, [data]);

  const userData = {
    labels: chartData.map((data: any) => data._id),
    datasets: [
      {
        label: " Count ",
        data: chartData.map((data: any) => data.count),
        backgroundColor: colorCombination,
      },
    ],
  };

  // For In stock Devices
  const [chartData2, setChartData2] = useState([]);

  useEffect(() => {
    setChartData2(data?.inStockWiseCount ?? []);
  }, [data]);

  const userData2 = {
    labels: chartData2.map((data: any) => data._id),
    datasets: [
      {
        label: " Count ",
        data: chartData2.map((data: any) => data.count),
        backgroundColor: colorCombination,
      },
    ],
  };
  return (
    <>
      <Box className="HardwareWrapper">
        <Box className="LeftPart">
          <Card className="uniqueCard">
            <Box className="p-20 chart">
              <h4 className="m0 mb15">Total Devices</h4>
              <Pie data={userData} />
            </Box>
          </Card>
          <Card className="uniqueCard">
            <Box className="p-20 chart">
              <h4 className="m0 mb15">In-stock Devices</h4>
              <Pie data={userData2} />
            </Box>
          </Card>
        </Box>
        <Box className="RightPart">
          <ModernCard
            title="Total Hardware"
            count={data?.totalHardware ?? ""}
          />
          <ModernCard
            title="In-Stock Hardware"
            count={data?.inStockHardware ?? ""}
          />
          <ModernCard
            title="Assign Hardware"
            count={data?.assignHardware ?? ""}
          />
          <ModernCard
            title="Damage Hardware"
            count={data?.damageHardware ?? ""}
          />
        </Box>
      </Box>
    </>
  );
};

export default HardwareSummary;
