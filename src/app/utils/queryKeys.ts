export const socialMediaKeys = {
  all: ["socialMedia"] as const,
  lists: () => [...socialMediaKeys.all, "list"] as const,
  list: (id: string) => [...socialMediaKeys.all, "list", id] as const,
  details: () => [...socialMediaKeys.all, "detail"] as const,
  detail: (id: string) => [...socialMediaKeys.details(), id] as const,
};
