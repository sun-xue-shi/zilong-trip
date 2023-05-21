<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="infos">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate
            v-model="itemScore"
            color="#fff"
            :size="15"
            allow-half
            readonly
          />
          <div class="new">￥{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

//接收hot-content组件传来的数据
const prpos = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});

//精确到小数点显示星星评分
const itemScore = computed(() => {
  return Number(prpos.itemData.commentScore);
});
</script>

<style lang="less" scoped>
.house-item {
  width: 50%;
  .item-inner {
    position: relative;
    margin: 5px;
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }

    .infos {
      position: absolute;
      bottom: 0;
      padding: 10px;
      color: #fff;

      .summary {
        font-size: 12px;
      }

      .name {
        //多行文本溢出显示省略号
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>
