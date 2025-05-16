import PageBreadcrumb from "../components/common/PageBreadCrumb";
import ComponentCard from "../components/common/ComponentCard";

export default function Invest() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Invest" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
      <div className="space-y-6">
        <ComponentCard title="Daily Inestment Plan">
          
        </ComponentCard>
        <ComponentCard title="Round Up Inestment Plan">
          
        </ComponentCard>
      </div>
      </div>
    </div>
  );
}
