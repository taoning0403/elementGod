<template>
  <div class="banner-container">
    <div class="banner-top">
      <div class="banner-top-l">
        <img src="https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/" class="banner-img" />
        <span class="banner-monji">超级会员</span>
        <span class="banner-money">
          <b></b>每月领20元红包
        </span>
      </div>
      <a class="banner-top-r">
        <b class="banner-top-r_monji"></b>立即开通
      </a>
    </div>
    <div class="banner-bottom">
      <div class="banner-bottom_swiper">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" >
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" >
          </van-swipe-item>
          <van-swipe-item>
            <img src="https://fuss10.elemecdn.com/0/ff/edc9f276114b06237b7b50c21e505jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" >
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="banner-bottom_certificate">资质证照</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.banner-container {
  margin-bottom: 2.133333vw;
  padding: 0 2.666667vw;
  .banner-top {
    height: 10.666667vw;
    margin-bottom: 1.066667vw;
    border-radius: .533333vw;
    background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.666667vw 0 4vw;
    color: #644f1b;
    font-size: .293333rem;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    .banner-top-l {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      .banner-img {
        width: 4.533333vw;
        height: 4.533333vw;
        margin-right: 2vw;
      }
      .banner-monji {
        font-size: 14px;
        font-weight: 700;
      }
      .banner-money {
        &:before {
          content: "\B7";
          margin: 0 1.066667vw;
          font-weight: 700;
        }
      }
    }
    .banner-top-r {
      height: 10.666667vw;
      color: #644f1b;
      display: flex;
      align-items: center;
      &:after {
        display: block;
        content: "";
        width: 1.066667vw;
        height: 1.066667vw;
        border-right: .266667vw solid #8c632b;
        border-bottom: .266667vw solid #8c632b;
        transform: rotate(-45deg);
        margin-left: 1.066667vw;
      }
      .banner-top-r_monji {
        color: #bd8f22;
        font-size: .533333rem;
        margin-right: .533333vw;
      }
    }
  }
  .banner-bottom {
    margin-top: 1.333333vw;
    border-radius: 1.066667vw;
    width: 100%;
    height: 23.466667vw;
    position: relative;
    .banner-bottom_swiper {
      overflow: hidden;
      position: relative;
      height: 100%;
      img {
        width: 355px;
      }
    }
    .banner-bottom_certificate {
      z-index: 9;
      position: absolute;
      bottom: .533333vw;
      right: .533333vw;
      width: 14.666667vw;
      height: 5.066667vw;
      line-height: 5.066667vw;
      text-align: center;
      background-color: rgba(0,0,0,.5);
      font-size: 10px;
      border-radius: 2.666667vw;
      color: #eee;
    }
  }
}
</style>

