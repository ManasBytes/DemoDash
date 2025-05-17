import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import DropzoneComponent from "../components/form/form-elements/DropZone";
import InputGroup from "../components/form/form-elements/InputGroup";
import TextAreaInput from "../components/form/form-elements/TextAreaInput";
import Label from "../components/form/Label";
import Button from "../components/ui/button/Button";

export default function Support() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Support" />
      <div className="min-h-auto rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
      
          <InputGroup />
           <TextAreaInput />
          <div className="mt-4">
            <Label>Attach Documents</Label>
          <DropzoneComponent />
          </div>
          <div className="flex justify-center mt-6">
          <Button size="md" variant="primary">
            <h1 className="text-xl">Submit</h1>
          </Button>
          </div>
      </div>
    </div>
  );
}
