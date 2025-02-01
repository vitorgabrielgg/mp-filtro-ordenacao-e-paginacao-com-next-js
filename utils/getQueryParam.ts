export const getQueryParam = (key: string): string | null | undefined => {
  if (typeof window !== "undefined") {
    const params = new window.URLSearchParams(window.location.search);
    return params.get(key);
  }
};
