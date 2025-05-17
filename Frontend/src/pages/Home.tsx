import ExpenseMetrics from "../components/DashboardElements/ExpenseMetrics";
import MonthlySalesChart from "../components/DashboardElements/DailyExpenseChart";
import StatisticsChart from "../components/DashboardElements/StatisticsChart";
import MonthlyTarget from "../components/DashboardElements/MonthlyTarget";
import RecentOrders from "../components/DashboardElements/RecentTransactions";

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
