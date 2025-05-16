import PageBreadcrumb from "../components/common/PageBreadCrumb";
import AccountMetrics from "../components/AccountElements/AccountMetrics"
import MonthlySalesChart from "../components/AccountElements/DailyExpenseChart"
import RecentOrders from "../components/AccountElements/ExpenseList"
export default function AccountSummary() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Account" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <AccountMetrics/>

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    
      </div>
    </div>
    
  );
}