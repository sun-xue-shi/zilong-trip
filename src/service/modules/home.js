import myRequest from "../request";

export function getHotSuggest() {
  return myRequest.get({
    url: "/home/hotSuggests",
  });
}

export function getCategories() {
  return myRequest.get({
    url: "/home/categories",
  });
}

export function getHouseList(currentPage) {
  return myRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage,
    },
  });
}
