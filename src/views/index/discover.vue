<template>
  <div class="discover">
    <PartsItem :partsItem="partsItems"/>
    <section class="main"></section>
    <section class="bottom"></section>
  </div>
</template>

<script>
import http from '@/utils/publicTools/http'
import PartsItem from '@/components/discover/PartsItem.vue'
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
    PartsItem
  }
}
</script>

<style lang="less" scoped>
.discover{
  height: 100%;
  background: rgb(252, 248, 248);
  .parts{
    width: 375px;
    height: 160px;
    // background-color: #fff;
    position: relative;
    .parts-left{
      width: 187px;
      height: 100%;
      background-color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      padding: 22px 11px 6px 16px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .parts-left-box{
        width: 80px;
        height: 131px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .parts-left-title{
          font-size: 16px;
          font-weight: 600px;
          color: rgb(241, 110, 2);
          margin-bottom: 4px;
        }
        .parts-left-titles{
          font-size: 10px;
          color: rgb(218, 214, 214);
        }
      }
      .parts-left-img{
        width: 75px;
        height: 75px;
        display: block;
      }
    }
  }
  .main{
    height: 400px;

  }
  .bottom{
    height: 400px;
    background: rgb(214, 208, 208);
  }
}
</style>
