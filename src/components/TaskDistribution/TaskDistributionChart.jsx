import React, { useState, lazy, Suspense } from "react";

// Import Chart component dynamically
const Chart = lazy(() => import("react-apexcharts"));

const TaskDistributionChart = () => {
  const [state] = useState({
    series: [14, 23, 21, 17],
    options: {
      labels: ['API', 'Frontend', 'Backend', 'Design'],
      colors: ["#B8C8DB", "#A1AADB", "#BA68C8", "#8E72C8"],
      fill: {
        opacity: 0.9,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Chart
        options={state.options}
        series={state.series}
        height="390"
        type="polarArea"
      />
    </Suspense>
  );
};

export default TaskDistributionChart;
