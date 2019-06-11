<template>
  <div>
    <div class="header">
      <router-link to="/checkout/checkout">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
      </router-link>
      <h1>添加地址</h1>
    </div>
    <van-address-edit
    :area-list="areaList"
    show-set-default
    @save="onSave"

  />
  </div>
</template>

<script>
export default {
  data() {
    return {
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '深圳市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '深圳市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '宝安区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
        }
      },
    }
  },
  methods: {
    onSave() {
      window.location.href = 'http://localhost:8082/#/checkout/checkout'
    },

  }
}
</script>

<style lang="less">
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
</style>

