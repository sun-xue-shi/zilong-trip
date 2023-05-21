export const getURL = (image) => {
  //第一个参数url必须要用字符串拼接的方式，vite中new URL(url,import.meta.url).href
  //为固定用法，后面系统了解
  return new URL(`../assets/images/${image}`, import.meta.url).href;
};
