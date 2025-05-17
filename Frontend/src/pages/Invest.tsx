import PageBreadcrumb from "../components/common/PageBreadCrumb";
import ComponentCard from "../components/common/ComponentCard";
import Button from "../components/ui/button/Button";
import AccountMetrics from "../components/InvestElements/AccountMetrics";
import MonthlyTarget from "../components/InvestElements/MonthlyTarget";
import RedButton from "../components/ui/button/ButtonRed";
import PopupGoals from "../components/InvestElements/PopupGoals";
export default function Invest() {
  return (
    <div className="">
      <PageBreadcrumb pageTitle="Invest" />

      <div className="h-auto rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl  dark:text-white/90">
              Daily Investment Plan
            </h1>
            <Button size="md" variant="primary">
              <h1 className="text-xl">+ Set New Target</h1>
            </Button>
          </div>
          <div className="mb-4 grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 space-y-6 xl:col-span-7">
              <AccountMetrics />
              <div className="rounded-2xl h-[36%] border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Description
                    </span>
                    <h4 className="mt-2 font-bold text-gray-800  dark:text-white/90">
                      3,782
                    </h4>
                  </div>
                </div>
              </div>
              <RedButton size="md" variant="primary">
                <h1 className="text-xl bg-red">Cancel Plan</h1>
              </RedButton>
            </div>
            <div className="col-span-12 xl:col-span-5">
              <MonthlyTarget />
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12 mt-12">
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl  dark:text-white/90">Goals</h1>
            <Button size="md" variant="primary">
              <h1 className="text-xl">+ Add Goals</h1>
            </Button>
          </div>

          <ComponentCard title="Laptop" className="h-auto mb-4">
            <div className="mb-8 grid grid-cols-12 gap-4 md:gap-6">
              <div className="col-span-12 space-y-6 xl:col-span-7">
                <AccountMetrics />
                <div className="rounded-2xl h-[36%] border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Description
                      </span>
                      <h4 className="mt-2 font-bold text-gray-800  dark:text-white/90">
                        3,782
                      </h4>
                    </div>
                  </div>
                </div>
                <div >
                <RedButton size="md" variant="primary">
                  <h1 className="text-xl bg-red">Cancel Plan</h1>
                </RedButton>
                </div>
              </div>
              <div className="col-span-12 xl:col-span-5">
                <MonthlyTarget />
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
      <PopupGoals/>
    </div>
    
  );
}
