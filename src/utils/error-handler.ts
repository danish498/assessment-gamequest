import { AxiosError } from "axios";

// this is not import anywhere for now
export const handleRequestError = (error: AxiosError): Promise<AxiosError> => {
  // Log request error
  console.error("Request Error:", error);
  return Promise.reject(error);
};

export const handleResponseError = (error: AxiosError): Promise<AxiosError> => {
  // Log response error
  console.error("Response Error:", error);
  if (error.response) {
    // Handle specific response errors
    switch (error.response.status) {
      case 401:
        // Handle unauthorized error, maybe redirect to login
        break;
      case 403:
        // Handle forbidden error
        break;
      // Add more cases as needed
      default:
        break;
    }
  }
  return Promise.reject(error);
};
