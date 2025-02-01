export const setQueryParam = (key: string, value: string) => {
  const params = new URLSearchParams(window.location.search);
  params.set(key, value);

  return params;
};
