<template>
  <div class="map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="gaode" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue";
import { onMounted, ref } from "vue";

const prpos = defineProps({
  position: {
    type: Object,
    default: () => {},
  },
});

const mapRef = ref();

const markerContent =
  "" +
  '<div class="custom-content-marker">' +
  '   <img src="//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png">' +
  '   <div class="close-btn" onclick="clearMarker()">X</div>' +
  "</div>";

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "「d8e4520e057451e2f69d2f414a69d43a」",
  };
  AMapLoader.load({
    key: "1f009e58fea082cfd2657847bdea8f43", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JS API 的版本，缺省时默认为 1.4.15
    plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    AMapUI: {
      // 是否加载 AMapUI，缺省不加载
      version: "1.1", // AMapUI 版本
      plugins: ["overlay/SimpleMarker"], // 需要加载的 AMapUI ui插件
    },
    Loca: {
      // 是否加载 Loca， 缺省不加载
      version: "2.0", // Loca 版本
    },
  })
    .then((AMap) => {
      const map = new AMap.Map(mapRef.value, {
        viewMode: "2D", // 默认使用 2D 模式
        zoom: 11, //初始化地图层级
        center: [prpos.position.longitude, prpos.position.latitude], //初始化地图中心点
      });
      const marker = new AMap.Marker({
        position: [prpos.position.longitude, prpos.position.latitude],
        content: markerContent, // 将 html 传给 content
        offset: new AMap.Pixel(-13, -30), // 以 icon 的 [center bottom] 为原点
      });
      map.add(marker);
    })
    .catch((e) => {
      console.error(e); //加载错误提示
    });
});
</script>

<style scoped lang="less">
.gaode {
  height: 200px;
}
</style>
