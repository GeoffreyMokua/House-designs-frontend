// import 'tailwindcss/tailwind.css';
import Designs from "../../modules/Designs";
import { NextPageWithLayout } from "../page";
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
  return <Designs designs={designs} />;
};

DesignsPage.getLayout = (page) => page;

export default DesignsPage;
