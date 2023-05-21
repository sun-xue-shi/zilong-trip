import dayjs from "dayjs";

//默认将时间戳转为xx月xx日格式
export function formatDate(date, formatStr = "MM月DD日") {
  return dayjs(date).format(formatStr);
}

export function getStayDays(nowDate, newDate) {
  return dayjs(nowDate).diff(newDate, "day");
}
