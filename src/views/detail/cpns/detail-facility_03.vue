<template>
  <div class="facility">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
        <template
          v-for="(item, index) in houseFacility.houseFacilitys"
          :key="item.groupId"
        >
          <!-- 判断只有索引在houseFacility.facilitySort 里面才展示 -->
          <div class="item" v-if="houseFacility.facilitySort?.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="" />
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <!-- 只截取前四个显示 -->
              <template
                v-for="(iten, i) in item.facilitys.splice(0, 4)"
                :key="i"
              >
                <div class="iten">
                  <i class="icon_check"></i>
                  <span class="text">{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue";

defineProps({
  houseFacility: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped lang="less">
.facility {
  .facility-inner {
    padding: 20px 0px 20px 20px;
    background-color: #f5f7fa;

    .item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 20px;

      .head {
        width: 20%;
        text-align: center;
        font-size: 13px;

        img {
          width: 22px;
          height: 22px;
          margin-bottom: 5px;
        }
      }
      .list {
        flex: 2;
        display: flex;
        flex-wrap: wrap;
        font-size: 13px;
        padding-left: 20px;
        .iten {
          display: flex;
          width: 50%;
          .text {
            margin-top: 6px;
          }
        }
      }
    }
  }
}
</style>
