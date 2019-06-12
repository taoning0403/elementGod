<template>
  <div class="discover">
    <PartsItem :partsItem="partsItems"/>
    <section class="discover-main">
      <div class="activity-header">
        <span class=" activity-spana"></span>
        <i class="iconfont icon-zan " ></i>
        <strong class="activity-title">为你推荐</strong>
        <span class=" activity-spanb"></span>
      </div>
      <p class="activity-msg">你的口味我都懂得</p>
      <ActivityRecommend :activityItem="activityItem" />
    </section>
    <section class="bottom"></section>
  </div>
</template>

<script>
import http from '@/utils/publicTools/http'
import PartsItem from '@/components/discover/PartsItem.vue'
import ActivityRecommend from '@/components/discover/ActivityRecommend.vue'
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
        ]
      }
    },

  methods : {
    xshl () {
      http.get('http://localhost:8080/ele/restapi/shopping/v1/sale_list_index?type=special_food&latitude=-1&longitude=-1&params=%7B%7D',
      )
      .then(res =>{
        console.log(res);
      })
    }
  },
  creared () {
  },
  mounted () {
    // this.xshl();
  },
  components: {
    PartsItem,
    ActivityRecommend
  }
}
</script>

<style lang="less" scoped>
.discover{
  height: 100%;
  background: rgb(252, 248, 248);
  width: 100%;
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
        font-weight: 600px;
        font-size: 16px;
        color: #000;
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
          width: 4px;
          height: 4px;
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
          width: 4px;
          height: 4px;
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
  }
  .bottom{
    height: 400px;
    background: rgb(214, 208, 208);
  }
}
</style>
