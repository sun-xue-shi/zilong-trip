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
      this.houseList.push(...res.data.data); //将获取到的数组拍平?
      //请求一次获取数据页加1
      this.currentPage++;
    },
  },
});

export default useHomeStore;
