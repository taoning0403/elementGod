<template>
  <div class="seller-wrapper" ref="sellerWrapper">
    <div class="seller">
      <div class="top-wrapper white">
        <div class="base">
          <div class="left">
            <h3 class="titlec">{{seller.seller.name}}</h3>
            <div class="counts">
              <div class="star-wrapper">
              </div>
              <span>月售{{ seller.seller.sellCount}}单</span>
            </div>
          </div>
          <div class="right">
            <span
              class="icon icon-favorite"
            ></span>
          </div>
        </div>
        <div class="delivery-wrapper">
          <div class="minPrice item border-right">
            <h5>起送价</h5>
            <div class="notice">
              {{seller.seller.minPrice}}
              <span>元</span>
            </div>
          </div>
          <div class="deliveryPrice item border-right">
            <h5>商家配送</h5>
            <div class="notice">
              {{seller.seller.deliveryPrice}}
              <span>元</span>
            </div>
          </div>
          <div class="deliveryTime item">
            <h5>平均配送时间</h5>
            <div class="notice">
              {{seller.seller.deliveryTime}}
              <span>分钟</span>
            </div>
          </div>
        </div>
      </div>
      <div class="avtivities-wrapper white">
        <h3 class="title">公告与活动</h3>
        <p class="bulletin">{{seller.seller.bulletin}}</p>
        <ul v-if="seller.seller.supports" class="supports">
          <li class="support-item border-top-1px" v-for="(item,index) in seller.seller.supports" :key="index">
            <span class="text">{{seller.seller.supports[index].description}}</span>
          </li>
        </ul>
      </div>
      <div class="pics-wrapper white">
        <h3 class="title">商家实景</h3>
        <div class="pics-list" v-if="seller.seller.pics" ref="picListWrapper">
          <ul ref="picList">
            <li v-for="(item,index) in seller.seller.pics" class="item" :key="index">
              <img :src="item" alt width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
      <div class="infos-wrapper white">
        <h3 class="title">商家信息</h3>
        <div class="infos" v-if="seller.seller.infos">
          <ul>
            <li v-for="(item,index) in seller.seller.infos" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../utils/publicTools/http";
export default {

  data() {
    return {
      seller: {},
    };
  },
  created() {
    http
      .get("./seller.json")
      .then(response => {
        let res = response.data;
        console.log(response);
        this.seller = response;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.left{
  display: block;
  text-align: center;

  margin:  0 auto;
}
titlec{
font-size: 18px;
}
.seller-wrapper {
  position: absolute;
  top: 174px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  background: #f3f5f7;
  overflow-y: auto;
  overflow-x: hidden;
}

.top-wrapper {
  padding: 18px 0;
}

.base {
  display: flex;
  justify-content: space-between;
  margin: 0 18px;
  padding-bottom: 18px;
}

.counts {
  vertical-align: top;
  margin-top: 8px;
  font-size: 0;
}

.star-wrapper {
  display: inline-block;
  margin-right: 8px;
  vertical-align: top;
}

.star-wrapper span {
  display: inline-block;
  vertical-align: top;
  font-size: 10px;
  color: rgb(77, 85, 93);
}

.star-wrapper .text {
  margin-right: 12px;
}

.star-wrapper .right {
  width: 36px;
}

.delivery-wrapper {
  display: flex;
}

.pics-list ul li {
  float: left;
  margin: 10px;
}
.delivery-wrapper .item {
  flex: 1;
  margin-top: 18px;
  text-align: center;
}

.border-right {
  border-right: 1px solid rgba(7, 17, 27, 0.1);
}

.h5 {
  font-size: 10px;
  color: rgb(147, 153, 159);
}

.notice {
  margin-top: 5px;
  font-size: 24px;
  font-weight: 200;
  color: rgb(7, 17, 27);
}

s .avtivities-wrapper,
.pics-wrapper,
.infos-wrapper {
  margin-top: 16px;
}

.avtivities-wrapper {
  padding: 18px 18px 0;
}

.bulletin {
  margin: 8px 0 16px;
  padding: 0 12px;
  line-height: 24px;
  font-size: 12px;
  font-weight: 200;
  text-align: justify;
  color: rgb(240, 20, 20);
}

.supports li {
  padding: 16px 12px;
  font-size: 12px;
}

.supports .icon {
  vertical-align: top;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
}

.decrease {
  background-image: url(./img/decrease_1@2x.png);
}

.discount {
  background-image: url(./img/decrease_1@2x.png);
}

.guarantee {
  background-image: url(./img/decrease_1@2x.png);
}

.invoice {
  background-image: url(./img/decrease_1@2x.png);
}

.special {
  background-image: url(./img/decrease_1@2x.png);
}

.pics-wrapper {
  padding: 18px 0 18px 18px;
}

.pics-list {
  width: 100%;
  margin-top: 12px;
  overflow: hidden;
  white-space: nowrap;
}

.pics-lis ul {
  font-size: 0;
}

.pics-lis ul li {
  display: inline-block;
  margin-right: 6px;
}
.infos-wrapper {
  padding: 18px 18px 0 18px;
}

.infos {
  margin-top: 12px;
}

.infos li {
  line-height: 16px;
  padding: 16px 12px;
  font-size: 12px;
  color: rgb(7, 17, 27);
}
</style>
