import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import ComponentCard from "../components/common/ComponentCard";
import Button from "../components/ui/button/Button";
export default function Goals() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Goals" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl">Goal Based Investing</h1>
            <Button size="md" variant="primary">
              <h1 className="text-xl">+ Add Goals</h1>
            </Button>
          </div>
      
        

        <ComponentCard title="Laptop">
          
        </ComponentCard>
      </div>
      </div>
    </div>
  );
}
