<template>
  <section class="parts">
    <router-link
      v-for="(item) in partsItem"
      :key="item.id"
      to="/items"
      class="parts-left"
      >
      <div class="parts-left-box">
        <h2 class="parts-left-title">{{ item.title }}</h2>
        <p class="parts-left-titles">{{ item.subtitle }}</p>
      </div>
      <!--  setHashImg(item.main_pic_hash)-->
      <img
        class="parts-left-img"
        :src="item.main_pic_hash | getPartsImg" >
    </router-link>
  </section>
</template>
<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
export default {
  props:{
    partsItem: Array
  },
  // 8389c9aea0e856149083d84af3444b78jpeg
  // https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/
  methods: {
    ...mapGetters('discover',['HashImg']),
    ...mapMutations('discover',['HashImgs'])

    // setHashImg(value){
    //   this.$store.commit('discover/GETHASHIMG', value);
    //   var src = '.jpeg?imageMogr/format/webp/'
    //   this.$store.commit('discover/SETIMGURL', src);

    //   this.HashImgs
    // }

  },
  filters: {
    getPartsImg (value) {
      let newPartsImg = ''
      let PartsImgs = value.split('')
      PartsImgs.splice( 1, 0, '/' )
      PartsImgs.splice( 4, 0, '/' )
      PartsImgs = PartsImgs.join('')
      newPartsImg = `https://fuss10.elemecdn.com/${PartsImgs}.jpeg?imageMogr/format/webp/`
      return newPartsImg

      // this.$store.commit('discover/GETHASHIMG', value);
      // src = '.jpeg?imageMogr/format/webp/'
      // this.$store.commit('discover/SETIMGURL', src);

      // return this.HashImg
    }
  },
  created () {
    // var src = '.jpeg?imageMogr/format/webp/'
    // this.$store.commit('discover/SETIMGURL', src);
  }
}
</script>



<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';
// .discover{
//   height: 100%;
//   background: rgb(252, 248, 248);
  .parts{
    width: 375px;
    height: 160px;
    // background-color: #fff;
    position: relative;
    & a:nth-child(1){
      &::after {
        content: '';
        position: absolute;
        width: 1px;
        right: 0;
        top: 0;
        height: 100%;
        background: #ededed;
        transform: scaleX(.5);
      }
    }
    & a:nth-child(2){
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 1px;
        background: #e7e3e3;
        transform: scaleY(.5);
      }
    }

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
    & a:nth-child(2){
      margin-left: 187px;
      width: 187px;
      height: 80px;
      padding: 0 15px;
      align-items: center;
      justify-content: space-around;
      .parts-left-box{
        width: 90px;
        height: 39px;
        .parts-left-title{
          color: rgb(2, 133, 241);
        }
      }
      .parts-left-img{
        width: 45px;
        height: 45px;
      }
    }
    & a:nth-child(3){
      margin-left: 187px;
      margin-top: 80px;
      width: 187px;
      height: 80px;
      padding: 0 15px;
      justify-content: space-around;
      align-items: center;
      .parts-left-box{
        width: 85px;
        height: 39px;
        .parts-left-title{
          color: rgb(241, 78, 2);
        }
      }
      .parts-left-img{
        width: 45px;
        height: 45px;
      }
    }
  }

</style>
