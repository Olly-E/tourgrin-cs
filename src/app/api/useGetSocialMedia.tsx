import { useQuery } from "@tanstack/react-query";

import { socialMediaKeys } from "../utils/queryKeys";
import { SocialMediaLinksData } from "../types";
import { fetchData } from "../utils/fetchData";

interface SocialMediaResponse {
  status: string;
  responseMessage: string;
  responseBody: SocialMediaLinksData[];
}

export const useGetSocialMedia = () => {
  return useQuery<SocialMediaResponse>({
    queryKey: socialMediaKeys.all,
    queryFn: async () => fetchData(`/fetch-settings`),
  });
};
