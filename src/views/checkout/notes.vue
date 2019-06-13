<template>
<div class="notes">
  <div class="header">
    <router-link to="/checkout/checkout">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
    </router-link>
    <h1>订单备注</h1>
  </div>
  <div class="add-notes">
    <textarea class="add-notes_txt" placeholder="填写额外对餐厅和骑手小哥备注的信息"></textarea>
  </div>
  <button
    class="add-notes_ok"
    @click="ok()"
    >
    确认</button>
</div>
</template>

<script>
export default {
  methods:{
    ok () {
      location.href = 'http://localhost:8080/#/checkout/checkout'
    }
  }
}
</script>

<style lang="less" scoped>
.notes {
  background: #f5f5f5;
}
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
.add-notes {
  height: 242px;
  margin: 8px 0;
  padding: 16px;
  box-sizing: border-box;
  background: #fff;
  .add-notes_txt {
    height: 210px;
    width: 100%;
    margin-bottom: 4.266667vw;
    padding: 4.266667vw;
    border: 1px solid #ccc;
    border-radius: .666667vw;
    font-size: .373333rem;
    box-sizing: border-box;
    background: #f5f5f5;
  }
}
.add-notes_ok {
    padding: 3.466667vw 0;
    color: #fff;
    font-size: .426667rem;
    background-color: #00e067;
    border-radius: .533333vw;
    opacity: .98;
    display: block;
    width: 92vw;
    height: 47px;
    margin: 2.133333vw auto 0;
    border: 0;
}
</style>

