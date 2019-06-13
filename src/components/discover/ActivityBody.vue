<template>
  <div class="activity-body">
    <!-- 暂写params方式，官网实际要用路由拦截在路由处直接设置query参数 -->
    <router-link
      v-for="(Exchan) in exchangeItem"
      :key="Exchan.id"
      class="discover-gift"
      :to="{
        name: 'ActivityBody',
        params: {
          exchangeId: 0
        }
      }"
    >
      <img
        :src="Exchan.giftImg" alt=""
        class="gift-img"
      >
      <div class="gift-content">
        <p class="gift-subtitle">{{ Exchan.giftSubtitle }}</p>
        <div class="gift-price">
          <span class="prices">{{ Exchan.prices }}</span>
          <i class="prices-onsale">{{ Exchan.pricesOnsale }}</i>
        </div>
      </div>
      <span class="gift-title">{{ Exchan.giftTitle }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ActivityBody',

  props: {
    exchangeItem: Array
  }
}
</script>


<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';
  .activity-body{
    height: auto !important;
    // min-height: 195px;
    box-sizing: border-box;
    padding: 12px 0 15px 15px;
    display: flex;
    .discover-gift{
      flex: 0 0 auto;
      width: 111px;
      height: 167px;
      margin: 0 6px 0 0;
      position: relative;
      .gift-img{
        width: 111px;
        height: 110px;
        margin-bottom: 9px;
      }
      .gift-content{
        width: 111px;
        height: 44px;
        .gift-subtitle{
          height: 15px;
          font-size: 14px;
          margin-bottom: 5px;
          color: #333;
        }
        .gift-price{
          height: 24px;
          .prices{
            color: rgb(243, 104, 11);
            font-size: 14px;
            line-height: 24px;
            margin-right: 2px;
          }
          .prices-onsale{
            color: rgb(165, 164, 164);
            font-size: 8px;
            text-decoration: line-through;
          }
        }
      }
      .gift-title{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 49px;
        height: 19px;
        line-height: 19px;
        font-size: 10px;
        color: #fff;
        background-color: #555;
        padding: 0 1px;
        text-align: center;
      }
    }
  }
</style>

