import { NextPageWithLayout } from "../page";

import AdminLogin from "../../modules/AdminLogin";

const AdminLoginPage: NextPageWithLayout = () => {
  return <AdminLogin />;
};
AdminLoginPage.getLayout = (page) => page;

export default AdminLoginPage;
