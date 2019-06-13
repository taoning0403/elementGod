<template>
  <div class="rttlist">
    <div 
    v-for="list in rttLists"
    :key="list.id"
    class="index-container">
      <div class="index-shopInfo">
        <div class="logo-container">
          <div class="logo-main">
            <img :alt="list.restaurant.name" class="logo-logo" :src="list.restaurant.image_path | getList">
          </div>
        </div>
        <div class="index-main">
          <div class="index-main-item">
            <h3 class="index-shopname">
              <i class="index-premium" content="品牌">品牌</i>
              <span style="font-size: 14px;">{{ list.restaurant.name }}</span>
            </h3>
            <ul class="index-supportWrap">
              <span class="index-omit"> ··· </span>
            </ul>
          </div>
          <div class="index-main-item">
            <div class="index-rateWrap">
              <span class="index-rate">评分: {{ list.restaurant.rating }}</span>
              <span>月售{{ list.restaurant.recent_order_num }}单</span>
            </div>
            <div class="delivery-delivery">
              <div alt="蜂鸟专送" class="delivery-icon-hollow">
                蜂鸟专送
              </div>
            </div>
          </div>
          <div class="index-main-item">
            <div class="index-moneylimit">
              <span>¥20起送&nbsp;&nbsp;|&nbsp;&nbsp;配送费¥4</span>
            </div>
            <div class="index-timedistanceWrap">
              <span class="index-distanceWrap">{{ list.restaurant.distance }}m</span>
              <span>{{ list.restaurant.order_lead_time }}分钟</span>
            </div>
          </div>
        </div>
      </div>
      <div class="index-activityWrap">
        <div class="index-tagLine">
          <span class="mini-tag-tag index-tag">
            粤菜
          </span>
          <span class="mini-tag-tag index-tag">
            支持自取
          </span>
          <span class="mini-tag-tag index-tag">
            品质联盟
          </span>
        </div>
        <span class="index-dashedline"></span>
        <div class="index-activities">
          <div class="index-activityList">
            <div class="index-actRow">
              <span class="index-iconWrap">
                <span class="index-icon" style="background-color: rgb(240, 115, 115);">减</span>
              </span>
              <span class="index-desc">满50减20，满180减40，满208减51</span>
            </div>
            <div class="index-actRow">
              <span class="index-iconWrap">
                <span class="index-icon" style="background-color: rgb(240, 115, 115);">换</span>
              </span>
              <span class="index-desc">特价商品3元起</span>
            </div>
          </div>
          <div class="index-activityBtn">
            <span>2个活动</span>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" class="activityBtn-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      rttLists:''
    }
  },

  computed: {
    ...mapState('shop', [
      'rttList'
    ])
  },

  watch: {
    rttList (newVal, oldVal) {
      this.rttLists = newVal.items
      console.log(this.rttLists)
    }
  },

  methods: {
    ...mapActions('shop', [
      'GetRttList'
    ])
  },

  created () {
    this.GetRttList()
  },

  filters: {
    getList (value) {
      let newImage_hash = ''
      let imgType = ''
      let image_hash = value.split('')
      imgType = value.split('')
      imgType.splice(0, 32)
      imgType = imgType.join('')
      image_hash.splice(1, 0, '/')
      image_hash.splice(4, 0, '/')
      image_hash = image_hash.join('')
      newImage_hash = `https://fuss10.elemecdn.com/${image_hash}.${imgType}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
      return newImage_hash
    }
  }
}
</script>

<style lang="less" scoped>
.rttlist {
  padding-bottom: 50px;
}
.index-container {
  position: relative;
  border-bottom: .133333vw solid #eee;
  background-color: #fff;
  color: #666;
  padding: 4vw 0;
  list-style: none;
  font-size: .293333rem;
  line-height: normal;
  .index-shopInfo {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    padding: 0 2.666667vw;
    color: #666;
    .logo-container {
      position: relative;
      flex: none;
      z-index: 0;
      .logo-main {
        position: relative;
        width: 17.333333vw;
        height: 17.333333vw;
        .logo-logo {
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 100%;
          border-radius: .533333vw;
          border: .133333vw solid rgba(0,0,0,.08);
        }
      }
    }
    .index-main {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      flex-grow: 1;
      flex-direction: column;
      user-select: none;
      padding-left: 2.666667vw;
      .index-main-item {
        align-items: center;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        .index-shopname {
          display: flex;
          margin: 0;
          padding: 0;
          color: #333;
          font-weight: 700;
          align-items: center;
          font-size: .4rem;
          overflow: hidden;
          .index-premium {
            position: relative;
            margin-right: 1.333333vw;
            padding: .266667vw .666667vw;
            color: transparent;
            text-align: center;
            white-space: nowrap;
            font-weight: 700;
            font-size: .293333rem;
            font-style: normal;
            line-height: normal;
            &:after {
              display: block;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 0;
              content: attr(content);
              padding: .533333vw 1.333333vw;
              color: #6f3f15;
              font-weight: 700;
              font-size: 22px;
              width: 40px;
              height: 38px;
              border-radius: 1.066667vw;
              background-image: linear-gradient(-139deg,#fff100,#ffe339);
              white-space: nowrap;
              transform: scale(.5);
              transform-origin: 0 0;
            }
          }
        }
        .index-supportWrap {
          align-items: center;
          margin-left: 2.666667vw;
          display: flex;
          .index-omit {
            margin-left: 2.666667vw;
            padding: 0 1.333333vw;
          }
        }
        .index-rateWrap {
          display: flex;
          align-items: center;
          .index-rate {
            margin-right: 1.066667vw;
          }
        }
        .delivery-delivery {
          display: flex;
          align-items: center;
          .delivery-icon-hollow {
            margin-left: 1.066667vw;
            position: relative;
            padding: 0 .4vw;
            color: transparent;
            white-space: nowrap;
            font-size: .266667rem;
            border: .133333vw solid transparent;
            border-radius: .4vw;
            line-height: 1.2;
            &:after {
              color: #fff;
              border: .133333vw solid #0097ff;
              background-image: linear-gradient(45deg,#0085ff,#0af);
              position: absolute;
              left: 0;
              top: 0;
              z-index: 0;
              white-space: nowrap;
              content: attr(content);
              font-size: .533333rem;
              padding: 0 .533333vw;
              border-radius: .8vw;
              transform: scale(.5);
              transform-origin: 0 0;
            }
          }
        }
        .index-moneylimit {
          display: flex;
          align-content: center;
        }
        .index-timedistanceWrap {
          display: flex;
          align-items: center;
          color: #999;
          .index-distanceWrap {
            &:after {
              margin: 0 .8vw;
              color: #ddd;
              content: "|";
            }
          }
        }
      }
    }
  }
  .index-activityWrap {
    padding-left: 22.666667vw;
    .index-tagLine {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 2.666667vw 2.666667vw 0 0;
      .mini-tag-tag {
        margin-right: 1.333333vw;
        margin-bottom: 1.066667vw;
        position: relative;
        font-size: .266667rem;
        color: transparent;
        white-space: nowrap;
      }
      .index-tag {
        padding: 0 1.066667vw;
        color: rgb(102, 102, 102);
        display: inline-block;
        border: 1px solid rgb(221, 221, 221);
      }
    }
    .index-dashedline {
      display: block;
      width: 290px;
      height: 13.5px;
      visibility: hidden;
    }
    .index-activities {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-content: stretch;
      overflow: hidden;
      .index-activityList {
        flex: 1;
        padding-right: 2.666667vw;
        overflow: hidden;
        .index-actRow {
          display: flex;
          align-items: center;
          font-size: .293333rem;
          line-height: 4.8vw;
          .index-iconWrap {
            display: inline-block;
            position: relative;
            margin-right: 1.6vw;
            height: 3.733333vw;
            width: 3.733333vw;
            vertical-align: middle;
            .index-icon {
              position: absolute;
              left: 0;
              top: 0;
              z-index: 0;
              height: 7.466667vw;
              width: 7.466667vw;
              font-size: .56rem;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 1.066667vw;
              transform: scale(.5);
              transform-origin: 0 0;
            }
          }
          .index-desc {
            display: inline-block;
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            vertical-align: middle;
          }
        }
      }
      .index-activityBtn {
        padding: .8vw 2.666667vw 0 0;
        color: #999;
        text-align: right;
        font-size: .266667rem;
        line-height: 1;
        .activityBtn-img {
          width: 1.733333vw;
          opacity: .9;
          margin-left: 1.066667vw;
          transition: all .3s ease-in-out;
          transform: rotate(0deg);
          fill: currentColor;
          will-change: transform;
          vertical-align: middle;
          position: relative;
          z-index: 1;
        }
      }
    }
  }
}
</style>

