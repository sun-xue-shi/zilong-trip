import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();

class myRequest {
  //构造函数初始化
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    // 请求拦截器;
    this.instance.interceptors.request.use(
      (config) => {
        //发送请求前-->显示正在加载
        mainStore.isLoading = true;
        return config;
      },
      (err) => {
        return err;
      }
    );

    // 响应拦截器;
    this.instance.interceptors.response.use(
      (res) => {
        // 请求成功拿到响应数据后-->关闭加载中的显示
        mainStore.isLoading = false;
        return res;
      },
      (err) => {
        mainStore.isLoading = false;
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.instance({ ...config, method: "get" });
  }

  post(config) {
    return this.instance({ ...config, method: "post" });
  }
}

export default new myRequest(BASE_URL, TIMEOUT);
