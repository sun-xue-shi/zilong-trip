import dayjs from "dayjs";

export function formatDate(date) {
  return dayjs(date).format("MM月DD日");
}

export function getStayDays(nowDate, newDate) {
  return dayjs(nowDate).diff(newDate, "day");
}
