export const getURL = (image) => {
  return new URL(`../assets/images/${image}`, import.meta.url).href;
};
