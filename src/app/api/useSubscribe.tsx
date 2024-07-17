import { useMutation } from "@tanstack/react-query";

import { fetchData } from "@/app/utils/fetchData";

import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { transformError } from "../utils/utils";

export const useSubscribe = () => {
  return useMutation<Response, AxiosError, { email: string }>({
    mutationFn: (payload) =>
      fetchData<{ email: string }>("/subscriber-submit", "POST", payload),
    onError: (error) => {
      toast.error(transformError(error), {
        position: "bottom-center",
      });
    },
  });
};
