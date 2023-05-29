<template>
  <div class="section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot>
        <h3>我是默认内容</h3>
      </slot>
    </div>
    <div class="footer" v-if="moreText.length">
      <span class="more">{{ moreText }}</span>
      <van-icon name="arrow" color="#ff9854" />
    </div>
  </div>
</template>

<script setup>
//接收detail.xxx.vue传来的title和moreText
defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
  moreText: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="less">
.section {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 15px 15px 20px 15px;
  border-top: 5px solid #f5f7fa;

  .header {
    // padding-bottom: 5px;
    border-bottom: 1px solid #f5f7fa;
  }
  .content {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .more {
      font-size: 15px;
      font-weight: 500;
      color: var(--primary-color);
    }
  }
}
</style>
