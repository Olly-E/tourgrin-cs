import { useMutation } from "@tanstack/react-query";

import { fetchData } from "@/app/utils/fetchData";

import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { transformError } from "../utils/utils";

interface SubscribeResponse {
  responseBody: string;
  status: boolean;
  responseMessage: string;
}
export const useSubscribe = () => {
  return useMutation<SubscribeResponse, AxiosError, { email: string }>({
    mutationFn: (payload) =>
      fetchData<{ email: string }>("/subscriber-submit", "POST", payload),
    onError: (error) => {
      toast.error(transformError(error), {
        position: "bottom-center",
      });
    },
    onSuccess: (response) => {
      if (!response.status) {
        toast.error(response.responseBody, {
          position: "bottom-center",
        });
        return;
      }

      toast.success(response.responseMessage, {
        position: "bottom-center",
      });
    },
  });
};
