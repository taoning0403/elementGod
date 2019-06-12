<template>
  <section class="main-info">
    <router-link
      v-for="(item) in infoItem"
      :key="item.id"
      :to="item.href"
      :class="item.classParent"
    >
      <p :class="item.Iconfj"><i :class="item.classIcon" class="iconfont"></i></p>
      <p :class="item.classFont">{{ item.name }}</p>
    </router-link>
  </section>
</template>
<script>
export default {
  name: 'ProfileItem',

  props: {
    infoItem: Array
  }
}
</script>

<style lang="less" scoped>
  .main-info{
    width: 375px;
    height: 84px;
    // background: #eee;
    display: flex;
    justify-content: space-between;
    .img{
      width: 173px;
      height: 29px;
    }
    .index-info{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 187px;
      height: 84px;
      background: #fff;
    }
    .icon-faxian{
      width: 25px;
      height: 25px;
      color: rgb(12, 245, 136);
      font-size: 32px;
    }
    .index-font{
      font-size: 12px;
      margin-top: 8px;
      font-weight: 600;
      color: #666;
    }
    .itemIcon-fjhb{
      width: 25px;
      height: 25px;
      background: rgb(233, 9, 132);
      color: #fff;
      border-radius: 50%;
      text-align: center;
      // font-size: 24px;

      .el-icon-mobile{
        font-size: 22px;
        line-height: 25px;
      }
    }
    .itemIcon-fjjb{
      width: 25px;
      height: 25px;
      background: rgb(8, 247, 88);
      border-radius: 50%;
      color: #fff;
      // font-size: 24px;
      text-align: center;
      .el-icon-coin{
        font-size: 22px;
        line-height: 25px;
      }
    }
  }

</style>