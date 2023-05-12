import { defineStore } from "pinia";
import { getHotSuggest } from "@/service";
import { getCategories } from "@/service";
import { getHouseList } from "@/service";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    hotSuggest: {},
    houseList: [],
    currentPage: 1,
  }),
  actions: {
    async getHotSuggestData() {
      const res = await getHotSuggest();
      this.hotSuggests = res.data.data;
    },
    async getCategoryData() {
      const res = await getCategories();
      this.categories = res.data.data;
    },
    async getHouseListData() {
      const res = await getHouseList(this.currentPage);
      this.houseList.push(...res.data.data);
      this.currentPage++;
    },
  },
});

export default useHomeStore;
