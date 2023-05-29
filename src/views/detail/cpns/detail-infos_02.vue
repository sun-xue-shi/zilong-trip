<template>
  <div class="house">
    <div class="name">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags" :key="index">
        <span
          class="tagText"
          v-if="item.tagText"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <span class="score">{{ topInfos?.commentBrief.overall }}</span>
        <span class="title">{{ topInfos?.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topInfos?.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">{{ topInfos?.commentBrief.totalCount }}条评论</span>
        <van-icon name="arrow" color="#ff9854" />
      </div>
    </div>
    <div class="position extra">
      <div class="left address">{{ topInfos?.nearByPosition.address }}</div>
      <div class="right">地图·周边</div>
      <van-icon name="arrow" color="#ff9854" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="less" scoped>
.house {
  padding: 15px 15px 30px 15px;
  .name {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .tags {
    margin-bottom: 10px;
    .tagText {
      padding: 0px 1px;
      margin-right: 3px;
      line-height: 20px;
    }
  }
  .comment {
    margin-bottom: 10px;
    .left {
      .score {
        padding-right: 5px;
        font-size: 20px;
        font-weight: 5000;
      }
      .title {
        font-size: 13px;
        font-weight: 500;
        padding-right: 5px;
      }
      .brief {
        font-size: 12px;
        color: #666;
      }
    }
    .right {
      .count {
        color: #ff9854;
        font-size: 13px;
      }
    }
  }
  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f7fa;
    padding: 12px 15px;
  }
  .position {
    .left {
      font-size: 14px;
      font-weight: 500;
      flex: 1;
    }
    .right {
      color: #ff9854;
      font-size: 13px;
    }
  }
}
</style>
