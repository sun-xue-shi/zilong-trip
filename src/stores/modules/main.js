import { defineStore } from "pinia";

//得到当天和第二天时间（默认当天入住，第二天离开）
const today = new Date();
const tomorrow = new Date().setDate(today.getDate() + 1);

const useMainStore = defineStore("mian", {
  state: () => ({
    today: today,
    tomorrow: tomorrow,
    isLoading: false,
  }),
});

export default useMainStore;
