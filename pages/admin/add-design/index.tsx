import AdminLayout from "@/components/surfaces/AdminLayout";
import AddDesign from "@/modules/Admin/AddDesign";
import { NextPageWithLayout } from "../../page";
const AddDesignPage: NextPageWithLayout = () => {
  return (
    <AdminLayout>
      <AddDesign />
    </AdminLayout>
  );
};
AddDesignPage.getLayout = (page) => page;
export default AddDesignPage;
