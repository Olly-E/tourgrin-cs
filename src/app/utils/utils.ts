import { AxiosError } from "axios";

export const transformError = (error: AxiosError) => {
  const errorMessage = (error.response?.data as AxiosError).message;
  if (Array.isArray(errorMessage)) {
    return errorMessage[0];
  }
  return errorMessage;
};
