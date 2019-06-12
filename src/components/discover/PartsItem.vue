<template>
  <section class="parts">
    <router-link
      v-for="(item) in partsItem"
      :key="item.id"
      :class="item.linkC"
      :to="item.to"
      class="parts-left"
      >
      <div class="parts-left-box">
        <h2 class="parts-left-title">{{ item.title }}</h2>
        <p class="parts-left-titles">{{ item.titles }}</p>
      </div>
      <img
        class="parts-left-img"
        :src="item.leftImgSrc" >
    </router-link>
  </section>
</template>
<script>
export default {
  props:{
    partsItem: Array
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
