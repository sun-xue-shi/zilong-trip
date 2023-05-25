import myRequest from "../request";

export function getAllCity() {
  return myRequest.get({
    url: "/city/all",
  });
}
