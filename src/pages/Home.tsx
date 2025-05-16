import ExpenseMetrics from "../components/dashboardElements/ExpenseMetrics";
import MonthlySalesChart from "../components/dashboardElements/DailyExpenseChart";
import StatisticsChart from "../components/dashboardElements/StatisticsChart";
import MonthlyTarget from "../components/dashboardElements/MonthlyTarget";
import RecentOrders from "../components/dashboardElements/RecentTransactions";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <ExpenseMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
