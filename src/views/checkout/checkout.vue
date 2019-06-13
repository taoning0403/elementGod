<template>
  <div class="checkout">
    <!-- 头部 -->
    <div class="header">
      <router-link to="/shop">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
      </router-link>
      <h1>确认订单</h1>
    </div>
    <!-- main -->
    <div class="checkout-main">
      <!-- 收货地址 -->
      <div class="address">
        <p>订单配送至</p>
        <router-link class="address-choose" to="/checkout/address">
          新增收货地址 >
        </router-link>
      </div>

      <div class="checkout-keycard">
        <div class="keycard">
          <div class="delivery">
            <strong>送达时间</strong>
            <span>尽快送达</span>
          </div>
          <div class="card-item">
            <strong>支付方式</strong>
            <span>在线支付</span>
          </div>
        </div>
      </div>
      <!-- 商品订单 -->
      <div class="checkout-order"></div>

      <!-- 其他信息 -->
      <div class="checkout-other">
        <div class="checkout-other_list">
          <div class="tableware">
            <p class="tableware-select">
              <strong>餐具份数</strong>
              <span>未选择 ></span>
            </p>
            <p class="tableware-bottom"><img src="data:image/png;base64,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" alt="">
            <span>马上助力环保</span></p>
          </div>
          <router-link to="/checkout/notes" class="notes">
            <strong>订单备注</strong>
            <span>口味、偏好 ></span>
          </router-link>
          <div class="notes">
            <strong>发票信息</strong>
            <span>该店不支持线上开票，请电话联系商户</span>
          </div>
          <div class="phone">
            <strong>号码保护</strong>
            <p>号码保护中，将对商家、骑手隐藏您的真实手机号</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <Pay />
  </div>

</template>

<script>
import Pay from '@/components/pay/Pay.vue'
export default {
  components: {
    Pay
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/mixins.less';
  html,body {
    height: 100%;
  }
  .checkout {
    height: 100%;
  }
  //  头部
  .header{
    height: 44px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
    img {
      margin-top: 15px;
      margin-left: 10px;
      width: 15px;
      height: 15px;
    }
    h1{
      flex: 1;
      margin-top: 15px;
      text-align: center;
      font-size: 16px;
      color: #fff;
      font-weight: 900;
    }
  }
  // main
  .checkout-main {
    height: calc(100% - 88px);
    overflow-y: auto;
    background: #f5f5f5;
  }
  // 地址选择
  .address {
    height: 85px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 16px 10px 11px;
    box-sizing: border-box;
    p {
      color:hsla(0,0%,100%,.8);
      font-size: 14px;
      margin-bottom: 10px;
    }
    .address-choose {
      font-weight: 900;
      font-size: 24px;
      color:hsla(0,0%,100%,.8);
    }
  }
  .checkout-keycard {
    background-image: linear-gradient(90deg,#0af,#0085ff);
    height: 105px;
    padding: 0 5px;
    .keycard {
      height: 100px;
      background: #fff;
      padding: 0 20px;
      font-size: 14px;
      .delivery, .card-item {
        .border-bottom;
        line-height: 50px;
      }
       span {
        color: blue;
        position: absolute;
        right: 0;
      }
    }
  }

  // 商品详情
  .checkout-order{
    height: 318px;
    background: #0085ff;
  }

  // 其他信息
  .checkout-other{
    height: 250px;
    padding: 0 5px;
    margin-top: 15px;
    overflow: hidden;
    .checkout-other_list {
      height: 240px;
      background: #ffffff;
    }
    .tableware {
      .border-bottom;
      padding: 16px 20px;
      height: 75px;
      box-sizing: border-box;
      .tableware-select {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .tableware-select span{
        color: #bbb;
        font-size: .346667rem;
      }
      .tableware-bottom {
        margin-right: 1.333333vw;
        margin-top: 2.133333vw;
        color: #0bb473;
        display: flex;
        align-items: center;
        font-size: .32rem;
        img {
          height: 16px;
          width: 16px;
          margin-right: 4px;
        }
      }
    }
  }
  .notes {
    .border-bottom;
    padding: 16px 20px;
    height: 50px;
    box-sizing: border-box;
    justify-content: space-between;
    display: flex;
    strong {
      color: #333;
    }
    span {
      color: #bbb;
      font-size: .346667rem;
    }
  }
  .phone{
    padding: 16px 20px;
    height: 75px;
    box-sizing: border-box;
    p {
      margin-top: 10px;
      color: #bbb;
      font-size: .346667rem;
    }
  }
</style>
