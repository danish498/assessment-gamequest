import React from "react";
import ProductDetails from "@/features/product-details/Main";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GameQuest | Product  Details",
  description: "Details of the Products",
};

const ProductDetailsPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <ProductDetails params={params} />
    </>
  );
};

export default ProductDetailsPage;
