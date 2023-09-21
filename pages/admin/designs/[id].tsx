import SingleDesign from "@/modules/SingleDesign";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://house-designs-node-backend.onrender.com/designs"
  );
  const { data } = await res.json();

  const paths = data.map((design: any) => {
    return {
      params: { id: design.design_id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    `https://house-designs-node-backend.onrender.com/designs/${id}`
  );
  const data = await res.json();
  return {
    props: { design: data.data },
  };
};

const SingleDesignPage: React.FC<{ design: any }> = ({ design }) => {
  return <SingleDesign design={design} />;
};

export default SingleDesignPage;
