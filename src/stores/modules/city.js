import { defineStore } from "pinia";
import { getAllCity } from "@/service";

const useCityStore = defineStore("city", {
  state: () => ({
    allCitys: {},
    currentCity: { cityName: "武汉" },
  }),
  actions: {
    async allCitysData() {
      const res = await getAllCity();
      this.allCitys = res.data.data;
    },
  },
});

export default useCityStore;
