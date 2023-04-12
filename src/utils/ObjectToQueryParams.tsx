export const ObjectToQueryParams = (data: any) => {
  return (
    "?" +
    Object.keys(data)
      .map((key) => {
        return `${key}=${encodeURIComponent(data[key])}`;
      })
      .join("&")
  );
};
