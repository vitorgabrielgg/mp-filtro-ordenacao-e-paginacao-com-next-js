export const deleteQueryParam = (key: string) => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    params.delete(key);

    return params;
  }
};
