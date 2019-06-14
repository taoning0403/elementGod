<template>
  <div class="order-list">
    <div
      class="goods-order"
      v-for="(list,index) in 3"
      :key="index"
    >
      <div class="ordercard-body">
        <img src="https://fuss10.elemecdn.com/e/17/27fa41fc2b03b1b8c2d794a5cf139jpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="">
        <div class="ordercard-content">
          <div class="ordercard-head">
            <p class="title">
              <a href="#" class="name">汉堡王</a>
              <span class="status">订单已送达</span>
            </p>
            <p class="time">xx时xx分钟前</p>
          </div>

          <div class="ordercard-detail">
            <p class="productname">王道川蜀鸡翅等两件商品</p>
            <span class="price">￥25</span>
          </div>
        </div>
      </div>
      <div class="ordercard-bottom">
        <router-link class="cardbutton" to="/checkout/checkout">再来一单</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Bill',
  props: {
    tabs: Object
  }
}
</script>

<style lang="less">
@import '~@/styles/common/mixins.less';
  .order-list {
    height: calc(100% - 50px);
    overflow-y: auto;
    background: #f5f5f5;
    .goods-order {
      height: 142px;
      padding: 15px 0 0 15px;
      margin-top: 10px;
      background: #fff;
      img{
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      .ordercard-body {
        height: 92px;
        display: flex;
        .ordercard-content{

          height: 47px;
          padding: 0 12px 10px 0;
          box-sizing: border-box;
          flex: 1;
          .ordercard-head {
            .border-bottom;
            height: 45px;
            .title{
              display: flex;
              justify-content: space-between;
            }
            a {
              font-size: 18px;
              color: #333;
            }
            span{
              font-size: 14px;
              color: #333;
            }
          }
          .time{
            font-size: 12px;
            color: #999;
            margin-top: 2px;
          }
        }
        .ordercard-detail{
          height: 45px;
          padding: 15px 12px 15px 0;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          .productname{
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
  }
  .ordercard-bottom{
    display: flex;
    border-top: 1px solid #eee;
    padding: 2.666667vw 4.266667vw;
    justify-content: flex-end;
    .cardbutton{
      padding: 1.333333vw 2.666667vw;
      border: 1px solid #2395ff;
      border-radius: .533333vw;
      background-color: transparent;
      outline: none;
      font-size: .346667rem;
      color: #2395ff;
      margin-left: 2vw;
    }
  }
</style>

