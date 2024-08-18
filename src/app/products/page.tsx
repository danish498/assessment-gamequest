import ProductList from "@/features/products-list/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GameQuest | Product List",
  description: "List of all the product with categories",
};
const ProductsListPage = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default ProductsListPage;
