<template>
  <div class="discover">
    <div></div>
    <!-- 头部 -->
    <PartsItem :partsItem="partsItems"/>
    <!-- 中部 登陆过后缓存的
    <section class="discover-main">
      <div class="activity-header">
        <span class=" activity-spana"></span>
        <i class="iconfont icon-zan " ></i>
        <strong class="activity-title">为你推荐</strong>
        <span class=" activity-spanb"></span>
      </div>
      <p class="activity-msg">你的口味我都懂得</p>
      <ActivityRecommend :activityItem="activityItem" />
      <p class="activity-footer">
        查看更多<i class="el-icon-arrow-right"></i>
      </p>
    </section>-->
    <!-- 下部分 -->
    <section class="discover-bottom">
      <div class="activity-header">
        <span class=" activity-spana"></span>
        <i class="el-icon-time " ></i>
        <strong class="activity-title">限时好礼</strong>
        <span class=" activity-spanb"></span>
      </div>
      <p class="activity-msg">金币换好礼</p>
      <ActivityBody :exchangeItem=" exchangeItem"/>
      <p class="activity-footer">
        查看更多<i class="el-icon-arrow-right"></i>
      </p>

    </section>
  </div>
</template>

<script>
// 组件
import http from '@/utils/publicTools/http'
import PartsItem from '@/components/discover/PartsItem.vue'
import ActivityRecommend from '@/components/discover/ActivityRecommend.vue'
import ActivityBody from '@/components/discover/ActivityBody.vue'

// store 数据
import { mapActions, mapState } from 'vuex'

export default {
    data () {
      return {
        partsItems:
        [
          {
            id: '1',
            title: '金币商城',
            titles: '0元好物在这里',
            to: {path: './jinbi'},
            linkC: ['border-right'],
            // leftBox: ['parts-left-box'],
            // leftTitle: ['parts-left-title'],
            // leftTitles: ['parts-left-titles'],
            // leftImg: ['parts-left-img'],
            leftImgSrc: 'https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/'
          },
          {
            id: '2',
            title: '推荐有奖',
            titles: '20元现金拿不停',
            to: {path: './tuijian'},
            linkC: ['border-bottoms'],
            // leftBox: ['parts-left-box'],
            // leftTitle: ['parts-left-title'],
            // leftTitles: ['parts-left-titles'],
            // leftImg: ['parts-left-img'],
            leftImgSrc: 'https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/'
          },
          {
            id: '3',
            title: '周边优惠',
            titles: '领取口碑好券',
            to: {path: './zhoubian'},
            // linkC: ['parts-left'],
            // leftBox: ['parts-left-box'],
            // leftTitle: ['parts-left-title'],
            // leftTitles: ['parts-left-titles'],
            // leftImg: ['parts-left-img'],
            leftImgSrc: 'https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/'
          }
        ],
        activityItem:
        [
          {
            id: 1,name: '',
            imgSrc: 'https://fuss10.elemecdn.com/9/28/f32da85ddeebda4685aebd130d1bajpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/',
            title: '酸菜肉丝粉',
            onSale: '月售53份',
            Praise: '好评率100%',
            prices: '18.88',
            pricesFav: '满35减13',
            shopName: '  熊猫记    (固戍店)'
          },
          {
            id: 2,name: '',
            imgSrc: 'https://fuss10.elemecdn.com/1/78/057cbeefe72a7c801cb628297e411jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/',
            title: '酸菜肉丝粉',
            onSale: '月售53份',
            Praise: '好评率100%',
            prices: '18.88',
            pricesFav: '满35减13',
            shopName: ' 熊猫记    (固戍店)'
          },
          {
            id: 3,name: '',
            imgSrc: 'https://fuss10.elemecdn.com/4/56/3a678c85f1858a5718b3baed7bbdejpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/',
            title: '酸菜肉丝粉',
            onSale: '月售53份',
            Praise: '好评率100%',
            prices: '18.88',
            pricesFav: '满35减13',
            shopName: ' 熊猫记    (固戍店)'
          },
          {
            id: 4,name: '',
            imgSrc: 'https://fuss10.elemecdn.com/c/19/701e2740761b2b1cd6e26fcfc27c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/',
            title: '酸菜肉丝粉',
            onSale: '月售53份',
            Praise: '好评率100%',
            prices: '18.88',
            pricesFav: '满35减13',
            shopName: '  熊猫记    (固戍店)'
          },
          {
            id: 5,name: '',
            imgSrc: 'https://fuss10.elemecdn.com/a/62/b8b27023ea1362a5da1bbebfaee15jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/',
            title: '酸菜肉丝粉',
            onSale: '月售53份',
            Praise: '好评率100%',
            prices: '18.88',
            pricesFav: '满35减13',
            shopName: ' 熊猫记    (固戍店)'
          },
          {
            id: 6,name: '',
            imgSrc: 'https://fuss10.elemecdn.com/0/5c/855622258e307116b62debb443409jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/',
            title: '酸菜肉丝粉',
            onSale: '月售53份',
            Praise: '好评率100%',
            prices: '18.88',
            pricesFav: '满35减13',
            shopName: ' 熊猫记    (固戍店)'
          },
        ],
        exchangeItem:
        [
          {
            id: 1,name:'',
            giftImg: 'https://fuss10.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?imageMogr/format/webp/',
            giftSubtitle: '3元品质联盟红包',
            prices: '30金币',
            pricesOnsale: '￥3',
            giftTitle: '限时优惠'
          },
          {
            id: 2,name:'',
            giftImg: 'https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/',
            giftSubtitle: '3元品质联盟红包',
            prices: '30金币',
            pricesOnsale: '￥3',
            giftTitle: '限时优惠'
          },
          {
            id: 3,name:'',
            giftImg: 'https://fuss10.elemecdn.com/7/ad/f0132ee0fee6c57253ada4573364ejpeg.jpeg?imageMogr/format/webp/',
            giftSubtitle: '3元品质联盟红包',
            prices: '30金币',
            pricesOnsale: '￥3',
            giftTitle: '限时优惠'
          },
        ],
        Par: ''
      }
    },

  computed: {
    ...mapState('discover', [
      'partsList'
    ]),

  },

  methods: {
    ...mapActions('discover', [
      'GetPartsList'
    ]),
    newPicImg(){
      return this.Par[0].main_pic_hash
    }
  },

  components: {
    PartsItem,
    ActivityRecommend,
    ActivityBody
  },
// block_index: 1
// content_url: "https://h5.ele.me/exchange/"
// id: (...)
// main_pic_hash: "8389c9aea0e856149083d84af3444b78jpeg"
// sub_pic_hash: ""
// subtitle: "0元好物在这里"
// title: "金币商城"
// title_color: "#ff9900"
// ubt_stats_id: 0
// https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/
  watch: {
      partsList (newVal, oldVal){
        this.Par = newVal[1];
        // for(var i = 0;i < parts.length;i++){
        //   this.Par[i] = Parts[i];
        // }
        
        var arr = this.newPicImg()
        console.log(arr)
      }
  },

  creared () {

  },
  mounted () {
    this.GetPartsList();
    // console.log(this.$store.state.discover.partsList);
  }
}
</script>

<style lang="less" scoped>
.discover{
  height: 100%;
  background: rgb(252, 248, 248);
  width: 100%;
  overflow-y: auto;
  .discover-main{
    height: auto;
    background-color: #fff;
    margin-top: 10px;
    .activity-header{
      height: 41px;
      padding-top: 20px;
      margin: 0 auto;
      box-sizing: border-box;
      text-align: center;
      display: flex;
      justify-content:center;
      .icon-zan{
        color: rgb(241, 100, 19);
      }
      .activity-title{
        font-weight: 900;
        font-size: 18px;
        color: #555;
        margin: 0 2px;
        display: block;
      }
      // 左横线--点
      .activity-spana{
        width: 20px;
        height: 1px;
        margin: 8px 4px 8px 0;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 20px;
          top: 50%;
          left: 0;
          height: 1px;
          background: #333;
          transform: scaleY(.5);
        }
        &::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          right:0;
          top: 50%;
          background: #333;
          // transform: scaleY(.5);
          border-radius: 50%;
          transform: translateY(-50%);
        }
      }
      // 右横线--点
      .activity-spanb{
        width: 20px;
        height: 1px;
        margin: 8px 4px 8px 0;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 20px;
          top: 50%;
          right: 0;
          height: 1px;
          background: #333;
          transform: scaleY(.5);
        }
        &::before {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          left: 0px;
          top: 50%;
          background: #333;
          // transform: scaleY(.5);
          border-radius: 50%;
          transform: translateY(-50%)
        }
      }
    }
    .activity-msg{
      height: 20px;
      padding-bottom: 8px;
      margin: 0 auto;
      box-sizing: border-box;
      text-align: center;
      font-size: 10px;
      color: rgb(173, 169, 169);
    }
    .activity-footer{
      width: 100%;
      height: 33px;
      line-height: 33px;
      padding: 16px 0;
      text-align: center;
      color: rgb(173, 169, 169);
      font-size: 12px;
    }

  }
  .discover-bottom{
    height: auto;
    min-height: 200px;
    background: #fff;
    margin-top: 10px;
    padding-bottom: 50px;
    .activity-header{
      height: 41px;
      padding-top: 20px;
      margin: 0 auto;
      box-sizing: border-box;
      text-align: center;
      display: flex;
      justify-content:center;
      .el-icon-time{
        color: rgb(241, 100, 19);
      }
      .activity-title{
        font-weight: 900;
        font-size: 18px;
        color: #555;
        margin: 0 2px;
        display: block;
      }
      // 左横线--点
      .activity-spana{
        width: 20px;
        height: 1px;
        margin: 8px 4px 8px 0;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 20px;
          top: 50%;
          left: 0;
          height: 1px;
          background: #333;
          transform: scaleY(.5);
        }
        &::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          right:0;
          top: 50%;
          background: #333;
          // transform: scaleY(.5);
          border-radius: 50%;
          transform: translateY(-50%);
        }
      }
      // 右横线--点
      .activity-spanb{
        width: 20px;
        height: 1px;
        margin: 8px 4px 8px 0;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 20px;
          top: 50%;
          right: 0;
          height: 1px;
          background: #333;
          transform: scaleY(.5);
        }
        &::before {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          left: 0px;
          top: 50%;
          background: #333;
          // transform: scaleY(.5);
          border-radius: 50%;
          transform: translateY(-50%)
        }
      }
    }
    .activity-msg{
      height: 20px;
      padding-bottom: 8px;
      margin: 0 auto;
      box-sizing: border-box;
      text-align: center;
      font-size: 10px;
      color: rgb(173, 169, 169);
    }
    .activity-footer{
      width: 100%;
      height: 33px;
      line-height: 33px;
      padding: 16px 0;
      text-align: center;
      color: rgb(173, 169, 169);
      font-size: 12px;
    }
  }
}
</style>
