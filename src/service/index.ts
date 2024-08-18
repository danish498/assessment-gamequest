import apiClient from "@/lib/apiClient";

export const getTrendingProduct = async () => {
  try {
    const response = await apiClient.get("/products?limit=10");

    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
