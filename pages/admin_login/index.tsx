import AdminLogin from "../../modules/AdminLogin";
import { NextPageWithLayout } from "../page";

const AdminLoginPage: NextPageWithLayout = () => {
  return <AdminLogin />;
};
AdminLoginPage.getLayout = (page) => page;

export default AdminLoginPage;
