<template>
  <div class="detail">
    <tab-control
      ref="tabControlRef"
      @onTabclick="tabClick"
      class="tabs"
      v-if="showTabControl"
      :title="names"
    />
    <van-nav-bar
      title="详情"
      left-text="首页"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <!-- main部分不发生变化就不触发更新(v-memo) -->
  <div class="main" v-if="mainPart" v-memo="[mainPart]">
    <!-- 轮播图组件 -->
    <detail-swiper :swiper-data="mainPart?.topModule.housePicture.housePics" />
    <!-- 顶部信息 -->
    <detail-info
      name="描述"
      :ref="getSectionRef"
      :top-infos="mainPart?.topModule"
    />
    <!-- 房屋设施 -->
    <detail-facility
      name="设施"
      :ref="getSectionRef"
      :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility"
    />
    <detail-landlord
      name="房东"
      :ref="getSectionRef"
      :landlord-data="mainPart.dynamicModule.landlordModule"
    />
    <detail-comment
      name="评论"
      :ref="getSectionRef"
      :comment-data="mainPart.dynamicModule.commentModule"
    />
    <detail-notice
      name="须知"
      :ref="getSectionRef"
      :notice-data="mainPart.dynamicModule.rulesModule"
    />
    <detail-map
      name="周边"
      :ref="getSectionRef"
      :position="mainPart.dynamicModule.positionModule"
    />
    <detail-intor :priceIntro="mainPart.introductionModule" />
  </div>
  <div class="footer">
    <img src="@/assets/images/detail/icon_ensure.png" alt="" />
    <div class="text">滓槞出行, 永无止境!</div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { getDetailInfos } from "@/service";
import { computed, ref, watch } from "vue";
import detailSwiper from "./cpns/detail-swiper_01.vue";
import detailInfo from "./cpns/detail-infos_02.vue";
import detailFacility from "./cpns/detail-facility_03.vue";
import detailLandlord from "./cpns/detail-landlord_04.vue";
import detailComment from "./cpns/detail-comment_05.vue";
import detailNotice from "./cpns/detail-notice_06.vue";
import detailMap from "./cpns/detail-map_07.vue";
import detailIntor from "./cpns/detail-intor_08.vue";
import tabControl from "../../components/tab-control/tabControl.vue";
import useScroll from "@/hooks/useScroll";

const route = useRoute();
const router = useRouter();
const houseId = route.params.id;

//发送网络请求获取数据
const detailInfos = ref({});
getDetailInfos(houseId).then((res) => {
  detailInfos.value = res.data.data;
});
const mainPart = computed(() => detailInfos.value.mainPart);

const onClickLeft = () => {
  router.back();
};

//scrollTop大于300显示TabControl
const { scrollTop } = useScroll();
const showTabControl = computed(() => {
  return scrollTop.value > 300;
});

const tabControlRef = ref();
const sectionEls = ref({});

//
const getSectionRef = (value) => {
  //卸载时会再次执行，此时value为null，不执行下面代码
  if (!value) return;
  //$el获取对应DOM元素
  const name = value.$el.getAttribute("name"); // getAttribute获取name的属性值
  // console.log(name);
  //将name属性值与对应DOM元素绑定？？？
  sectionEls.value[name] = value.$el;
};

//得到names数组，上面通过title绑定并传到tab-control组件
const names = computed(() => {
  return Object.keys(sectionEls.value); //返回属性名组成的数组
});

// 子组件传递过来的点击事件
let isClick = false;
let currentDistance = -1;

const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index];
  // console.log(key);
  const el = sectionEls.value[key];
  // console.log(el);
  // 元素距离顶部的距离
  let distance = el.offsetTop;
  // console.log(distance);
  if (index !== 0) {
    // 因为ref绑定的是组件，.value只能拿到组件，而这里想要组件的根元素距离父元素的距离，
    // 所以再 .$el可以拿到组件的根元素
    distance = distance - tabControlRef.value.$el.offsetHeight;
  }

  isClick = true;
  currentDistance = distance;

  window.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

//监听页面滚动，滚动时匹配对应的tabControl索引
watch(scrollTop, (newValue) => {
  //如果已经滚动到对应位置
  if (newValue === currentDistance) {
    isClick = false;
  }

  //如果是手动点击，则不执行以下代码，避免tabControl挨个跳
  if (isClick) return;

  //获取所有区域的 offsetTop
  const els = Object.values(sectionEls.value); //返回属性值组成的数组（el）
  // console.log(els);
  const values = els.map((el) => el.offsetTop); //得到el的offsetTop组成的数组
  // console.log(values);

  //根据 newValue 匹配想要的 索引
  let index = values.length - 1;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44) {
      index = i - 1;
      break;
    }
  }
  tabControlRef.value?.setActive(index);
});
</script>

<style lang="less" scoped>
.footer {
  text-align: center;
  img {
    width: 40%;
  }
  .text {
    margin-top: 15px;
    margin-bottom: 30px;
    color: #7688a7;
  }
}
</style>
