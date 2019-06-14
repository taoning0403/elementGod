<template>
  <div class="activity-recommend">
    <router-link
    v-for="(activity) in activityItem"
    tag="section"
    :key="activity.id"
    :to="{
      name: 'shopDetails',
      params: {
        activityId: activity.id
      }
    }"
    class="recommend-item"
    >
      <img
        :src="activity.imgSrc"
        class="recommend-img"
      >
      <div class="recommend-titles">
        <h2 class="titles-title">{{ activity.title }}</h2>
        <p class="titles-content">
          <span>{{ activity.onSale }}</span>
          <span>{{ activity.Praise }}</span>
        </p>
      </div>
      <div class="recommend-price">
        <span>
          <i>&yen;</i>
          <span class="prices">{{ activity.prices }}</span>
        </span>
        <div class="price-box">
          <span>{{ activity.pricesFav }}</span>
        </div>
      </div>
      <div class="recommend-shop">
        <div>
          <i class="el-icon-potato-strips"></i>
          <span>{{ activity.shopName }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'ActivityRecommend',

  props: {
    activityItem: Array
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';

  .activity-recommend{
    display: flex;
    height: auto;
    flex-wrap: wrap;
    justify-content: space-around;
    .recommend-item{
      width: 172px;
      height: 265px;
      margin: 2px;
      border: 1px dotted rgb(236, 228, 228);
      .recommend-img{
        width: 172px;
        height: 172px;
      }
      .recommend-titles{
        width: 154px;
        height: 32px;
        margin: 0 8px 0 10px;
        padding: 4px 0 0 0;
        .titles-title{
          font-size: 18px;
          font-weight: 800;
          padding-bottom: 4px;
        }
        .titles-content{
          font-size: 12px;
          color: rgb(102, 97, 97);
        }
      }
      .recommend-price{
        width: 154px;
        height: 22px;
        margin: 0 8px 0 10px;
        padding: 1px 0 1px 0;
        color: rgb(228, 98, 37);
        display: flex;
        align-items: center;
        .prices{
          font-weight: 600px;
          font-size: 16px;
        }
        .price-box{
          width: 54px;
          height: 13px;
          border: 1px solid rgb(240, 119, 7);
          font-size: 8px;
          text-align: center;
          line-height: 13px;
          border-radius: 4px;
          margin-left: 4px;
        }
      }
      .recommend-shop{
        width: 154px;
        height: 33px;
        margin: 0 8px 0 10px;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: rgb(146, 136, 136);
        border-top: 1px dotted rgb(194, 190, 190);
      }
    }
  }
</style>
