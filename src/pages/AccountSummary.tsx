import PageBreadcrumb from "../components/common/PageBreadCrumb";
import AccountMetrics from "../components/AccountElements/AccountMetrics"
import MonthlySalesChart from "../components/AccountElements/DailyExpenseChart"
import RecentOrders from "../components/AccountElements/ExpenseList"
import ComponentCard from "../components/common/ComponentCard";
import ExpenseChartData from "../components/charts/donut/ExpenseChartData";

export default function AccountSummary() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Account" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          
          <AccountMetrics/>

          <MonthlySalesChart />
          <RecentOrders />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <div className="min-h-auto rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Insights
          </h3>
                <h1>Ai Based Insights</h1>
                <h1>Ai Based Insights</h1>
                <h1>Ai Based Insights</h1>
          </div>
          <ExpenseChartData/>
        </div>


        
      </div>
    
      </div>
    </div>
    
  );
}