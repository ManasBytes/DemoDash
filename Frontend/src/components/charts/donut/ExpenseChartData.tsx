// charts/ExpenseCategoryChartBlock.tsx
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const ExpenseData = {
  series: [4000, 2500, 1200, 1500, 800],
  options: {
    chart: {
      type: "donut",
    },
    labels: ["Food", "Transport", "Subscriptions", "Shopping", "Others"],
    dataLabels: {
      enabled: false, // Disable default label display
    },
    legend: {
      position: "bottom",
    },
    colors: ["#F97316", "#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"],
    tooltip: {
    y: {
      formatter: () => '', // remove value from tooltip
    },
    custom: ({ series, seriesIndex, w }) => {
      const label = w.globals.labels[seriesIndex];
      const color = w.config.colors[seriesIndex];
      return `
        <div style="padding: 6px 10px; display: flex; align-items: center;">
          <div style="width: 10px; height: 10px; border-radius: 50%; background: ${color}; margin-right: 8px;"></div>
          <span style="font-size: 14px;">${label}</span>
        </div>
      `;
    },
  },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 280,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  } as ApexOptions,
};

export default function ExpenseChartData() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6 mt-6 pb-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Expense Breakdown
      </h2>
      <ReactApexChart
        options={ExpenseData.options}
        series={ExpenseData.series}
        type="donut"
        height={300}
      />
    </div>
  );
}
