import myRequest from "../request";

export function getAllCity(houseId) {
  return myRequest.get({
    url: "/detail/infos",
    params: {
      houseId,
    },
  });
}
