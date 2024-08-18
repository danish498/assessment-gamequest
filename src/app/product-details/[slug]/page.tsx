import ProductDetails from "@/features/product-details/Main";
import React from "react";

const ProductDetailsPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <ProductDetails params={params} />
    </>
  );
};

export default ProductDetailsPage;
