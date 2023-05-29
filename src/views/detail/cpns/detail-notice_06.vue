<template>
  <div class="notice">
    <detail-section title="预定须知">
      <div class="orderRules">
        <template v-for="(item, index) in noticeData.orderRules" :key="index">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="intro">{{ item.introduction }}</span>
            <span class="tip" v-if="item.tips">查看说明</span>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue";

defineProps({
  noticeData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped lang="less">
.notice {
  .orderRules {
    .item {
      display: flex;
      padding: 10px 0;
      font-size: 12px;
      .title {
        width: 20%;
        color: #666;
      }
      .intro {
        flex: 1;
      }
    }
  }
}
</style>
