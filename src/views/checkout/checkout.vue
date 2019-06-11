<template>
  <div>
    <div class="header">
      <router-link to="/shop">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
      </router-link>
      <h1>确认订单</h1>
    </div>

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
  </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '~@/styles/common/mixins.less';
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
</style>
