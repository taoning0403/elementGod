<template>
  <!-- 限时好礼部分 -->
  <div class="activity-body">
    <!-- 暂写params方式，官网实际要用路由拦截在路由处直接设置query参数 -->
    <router-link
      v-for="(Exchan, index) in exchangeItem"
      :key="index"
      class="discover-gift"
      :to="{
        name: 'ActivityBody',
        params: {
          exchangeId: 0
        }
      }"
    >
      <img
        :src="Exchan.image_hash | getPartsImg" alt=""
        class="gift-img"
      >
      <div class="gift-content">
        <p class="gift-subtitle">{{ Exchan.title }}</p>
        <div class="gift-price">
          <span class="prices">{{ Exchan.points_required }} 金币</span>
          <i class="prices-onsale">￥{{ Exchan.original_price }}</i>
        </div>
      </div>
      <span class="gift-title">{{ Exchan.corner_marker }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ActivityBody',
  data () {
    return {
      // exchangeItem: null，
    }
  },
  props: {
    exchangeItem: Array
  },

  filters: {
    getPartsImg (value) {
      let newPartsImg = ''
      let PartsImgs = value.split('')
      PartsImgs.splice(1,0,'/')
      PartsImgs.splice(4,0,'/')
      PartsImgs = PartsImgs.join('')
      newPartsImg = `https://fuss10.elemecdn.com/${PartsImgs}.jpeg?imageMogr/format/webp/`
      return newPartsImg
    }
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
    flex-wrap: wrap;
    // & a:nth-child(4){
    //   // display: none;
    // }
    // & a:nth-child(5){
    //   // display: none;
    // }
    // & a:nth-child(6){
    //   // display: none;
    // }
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
          font-size: 12px;
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

