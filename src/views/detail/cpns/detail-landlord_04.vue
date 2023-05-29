<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="intro">
        <div class="top" v-if="landlordData.topScroll">
          <img :src="landlordData.topScroll" alt="" />
        </div>
      </div>
      <div class="header">
        <div class="left">
          <div class="logo">
            <img :src="landlordData.hotelLogo" alt="" />
          </div>
          <div class="info">
            <div class="name">{{ landlordData.hotelName }}</div>
            <div class="text">
              <template
                v-for="(item, index) in landlordData.hotelTags"
                :key="index"
              >
                <div class="tag" :style="{ color: item.tagText.color }">
                  {{ item.tagText.text }}
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="right">联系房东</div>
      </div>
      <div class="bottom">
        <template
          v-for="(item, index) in landlordData.hotelSummary"
          :key="index"
        >
          <div class="item">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="introduction">{{ item.introduction }}</div>
            <div class="tip">{{ item.tip }}</div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue";
defineProps({
  landlordData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped lang="less">
.landlord {
  background-color: #fff;
  .intro {
    .top {
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    .left {
      display: flex;
      align-items: center;

      .logo {
        img {
          width: 50px;
          height: 50px;
        }
      }
      .info {
        .name {
          font-size: 15px;
          font-weight: 600;
          margin-block: 8px;
          padding-left: 10px;
        }
        .text {
          display: flex;
          flex-direction: row;
          font-size: 10px;
          .tag {
            padding: 0 10px;
            border-right: 1px solid;
            &:last-of-type {
              border-right: none;
            }
          }
        }
      }
    }
    .right {
      padding: 5px;
      color: #fff;
      font-size: 10px;
      border-radius: 5px;
      background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
    }
  }
  .bottom {
    display: flex;
    text-align: center;
    margin: 30px 0;
    .item {
      display: flex;
      flex-direction: column;
      flex: 1;
      .title,
      .tip {
        font-size: 11px;
        color: #9b9b9b;
      }
      .introduction {
        line-height: 30px;
        font-weight: 600;
      }
    }
  }
}
</style>
