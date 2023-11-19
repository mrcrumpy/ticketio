export const chunkArray = (arr: any[], chunkSize: number) => {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (v, i) =>
    arr.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
};
