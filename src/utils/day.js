import dayjs from "dayjs";

export function formatDate(date, formatStr = "MM月DD日") {
  return dayjs(date).format(formatStr);
}

export function getStayDays(nowDate, newDate) {
  return dayjs(nowDate).diff(newDate, "day");
}
