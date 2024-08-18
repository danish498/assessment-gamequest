import apiClient from "@/lib/apiClient";

export const getProductDetailsData = async (id: number | string) => {
  try {
    const response = await apiClient.get(`/products/${id}`);

    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
