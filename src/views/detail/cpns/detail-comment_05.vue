<template>
  <div class="comment">
    <detail-section
      title="热门评论"
      :more-text="`查看全部${commentData.totalCount}条评论`"
    >
      <div class="header">
        <div class="left">
          <div class="score">{{ commentData.overall }}</div>
          <div class="middle">
            <div class="scoreTitle" v-if="commentData.scoreTitle">
              {{ commentData.scoreTitle }}
            </div>
            <div class="count">{{ commentData.totalCount }}条评论</div>
            <van-rate v-model="scoreValue" :size="10" readonly allow-half />
          </div>
        </div>

        <div class="right">
          <template v-for="(item, index) in commentData.subScores" :key="index">
            <div class="subScores">
              {{ item }}
            </div>
          </template>
        </div>
      </div>
      <div class="tags">
        <template
          v-for="(item, index) in commentData.commentTagVo"
          :key="index"
        >
          <div
            class="text"
            :style="{
              color: item.color,
              backgroundColor: item.backgroundColor,
            }"
          >
            {{ item.text }}
          </div>
        </template>
      </div>
      <div class="content">
        <div class="profile">
          <img :src="commentData.comment.userAvatars" alt="" />
          <div class="user">
            <span class="name">{{ commentData.comment.userName }}</span>
            <span class="time">{{ commentData.comment.checkInDate }}</span>
          </div>
        </div>
        <div class="dec">
          {{ commentData.comment.commentDetail }}
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue";
import { ref } from "vue";
const props = defineProps({
  commentData: {
    type: Object,
    default: () => ({}),
  },
});

const scoreValue = ref(props.commentData.overall);
</script>

<style scoped lang="less">
.comment {
  .header {
    display: flex;
    justify-content: space-between;
    .left {
      position: relative;
      display: flex;
      flex: 1;

      .score {
        width: 33%;
        text-align: center;
        font-size: 40px;
        border-radius: 5%;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0px;
          width: 33%;
          height: 5px;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
          border-radius: 5px;
        }
      }
      .middle {
        font-size: 11px;
        padding-top: 12px;
        padding-left: 8px;
        line-height: 12px;
        .count {
          margin-top: 5px;
          color: #9b9b9b;
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;
      .subScores {
        font-size: 12px;
        color: #666;
        padding-right: 8px;
      }
    }
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 10px;
    .text {
      padding: 3px 5px;
      margin-right: 8px;
      margin-bottom: 8px;
      border-radius: 10px;
      font-size: 13px;
    }
  }

  .content {
    background-color: #f5f7fa;
    padding: 10px;
    border-radius: 10px;
    .profile {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .user {
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        .name {
          font-size: 13px;
        }
        .time {
          margin-top: 5px;
          color: #9b9b9b;
          font-size: 12px;
        }
      }
    }
    .dec {
      margin-top: 10px;
      line-height: 20px;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
