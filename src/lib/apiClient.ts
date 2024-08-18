import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { LocalStorageUtility } from "../utils/store-utils";
import { handleResponseError } from "@/utils/error-handler";

// Create an Axios instance for API requests
const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
apiClient.interceptors.request.use(
  async (config) => {
    const token = LocalStorageUtility.get("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): Promise<AxiosError> => handleResponseError(error)
);

export default apiClient;
