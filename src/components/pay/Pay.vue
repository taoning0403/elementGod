<template>
  <div class="footer-pay">
    <span class="money">￥{{ msg }} </span>
    <!-- <div @click="pay()">
      <router-link class="pay" to="/order">去支付</router-link>
    </div> -->
    <div class="pay" @click="pay()">去支付</div>

  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
import { setInterval, clearInterval } from 'timers';

Vue.use(Toast);
export default {
  name:'Pay',

  data () {
    return {
      msg: '25'
    }
  },
  props:{
    tabs: Number,
  },

  methods: {
    pay () {
      Toast.loading({
        mask: true,
        message: '免密支付中...'
      });
      const timer = setInterval( ()=>{
        Toast.success('支付成功');
        Toast.clear()
        location.href = 'http://localhost:8080/#/order'
        clearInterval(timer)
      } ,1000)
    }
  }

}
</script>

<style lang="less">
  .footer-pay {
    height: 44px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #3c3c3c;
    z-index: 2;
    .money {
      font-size: 20px;
      color: #fff;
      line-height: 44px;
      margin-left: 10px;
    }
    .pay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      background: #00e067;
      min-width: 28vw;
      padding: 0 1.333333vw;
      border: none;
      color: #fff;
      font-size: 20px;
      text-align: center;
      line-height:44px;
    }
  }
</style>

