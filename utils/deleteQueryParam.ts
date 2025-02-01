export const deleteQueryParam = (key: string) => {
  const params = new URLSearchParams(window.location.search);
  params.delete(key);

  return params;
};
