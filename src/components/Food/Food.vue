<template>
  <div class="checkout-food">
    <div class="food-container">
      <h3>汉堡王</h3>
      <ul>
        <li>
          <img src="https://fuss10.elemecdn.com/6/92/908979b3b990116923a7b2d0d1209png.png?imageMogr/format/webp/thumbnail/!72x72r/gravity/Center/crop/72x72/" alt="">
          <strong>王道川蜀鸡翅</strong>
          <span>x&nbsp;2</span>
          <h4>￥24</h4>
        </li>
      </ul>
      <div class="food-container_tip">
        <strong>配送费</strong>
        <span>￥1</span>
      </div>
      <div class="food-container_discounts">
        <strong>红包</strong>
        <span class="discounts">0个可用</span>
      </div>
      <div class="food-container_aggregate">
        <span>优惠说明</span>
        <div>小计￥<strong>25</strong></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Food',
  props: {
    tabs: Object
  }
}
</script>

<style lang="less">
@import '~@/styles/common/mixins.less';
  // 商品详情
  .checkout-food{
    padding: 0 5px;
    padding-top: 10px;
    box-sizing: border-box;
    .food-container {
      height: 100%;
      background: #fff;
      padding: 0 5.333333vw;
      h3 {
        .border-bottom;
        padding: 4.266667vw 0;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        z-index: 1;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 900;
      }
      ul {
        margin-top: .666667vw;
        color: #333;
        font-size: .346667rem;
      }
      li {
        display: flex;
        height: 60px;
        align-items: center;
        width: 100%;
        padding: .32rem 0;
        border-bottom: 1px dotted #eee;
        font-size: .373333rem;
        color: inherit;
        img {
          display: inline-block;
          width: 2.96rem;
          height: 2.96rem;
        }
        strong {
          display: flex;
          flex: 1;
          font-size: 14px;
        }
        span{
          font-size: .32rem;
        }
        h4{
          margin-left: 50px;
        }
      }
      .food-container_tip , .food-container_discounts{
        .border-bottom;
        padding: 16px 0;
        box-sizing: border-box;
        height: 52px;
        display: flex;
        justify-content: space-between;
        .discounts{
          display: inline-block;
          width: 62px;
          height: 18px;
          background: red;
          color: #fff;
          font-size: 12px;
          line-height: 18px;
          text-align: center;
        }
      }
      .food-container_aggregate {
        height: 60px;
        padding: 16px 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        span{
          color:#bbb;
          font-size: 14px;
        }
        div{
          font-size: 14px;
          strong {
            font-size: 22px;
          }
        }
      }
    }
  }
</style>

