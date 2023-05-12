import { defineStore } from "pinia";

const startDate = new Date();
const endDate = new Date();
// 注意，这里不能使用startDate，否则就把之前的startDate改了，所以要再次 new Date()
endDate.setDate(endDate.getDate() + 1);

export const useMainStore = defineStore("mian", {
  state: () => ({
    startDate: startDate,
    endDate: endDate,
    isLoading: false,
  }),
});
