import apiClient from "@/lib/apiClient";

export const getAllCategories = async () => {
  try {
    const response = await apiClient.get("/products/categories");

    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const getCategoryByProduct = async (
  isAll: boolean,
  categoryName: string,
  isSort: boolean,
  sortBy: string,
  order: string,
  isSearched: boolean,
  debouncedSearch: string
) => {
  try {
    const response = await apiClient.get(
      isAll && isSort
        ? `/product?sortBy=${sortBy}&order=${order}`
        : isAll && isSearched
        ? `/products/search?q=${debouncedSearch}`
        : isAll
        ? "/products"
        : `/products/category/${categoryName}`
    );

    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
