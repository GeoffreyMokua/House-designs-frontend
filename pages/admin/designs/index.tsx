import Designs from "@/modules/Admin/Designs";
import AdminLayout from "../../../components/surfaces/AdminLayout";
import { NextPageWithLayout } from "../../page";
export const getStaticProps = async () => {
  const res = await fetch(
    "https://house-designs-node-backend.onrender.com/designs"
  );
  const data = await res.json();
  return {
    props: { designs: data.data },
  };
};

const DesignsPage: NextPageWithLayout<{ designs: any }> = ({ designs }) => {
  return (
    <AdminLayout>
      <Designs designs={designs} />
    </AdminLayout>
  );
};

DesignsPage.getLayout = (page) => page;

export default DesignsPage;

