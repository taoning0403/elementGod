<template>
  <section class="main-info">
    <router-link
      v-for="(item) in infoItem"
      :key="item.id"
      :to="item.href"
      :class="item.classParent"
    >
      <p><i :class="item.classIcon" class="iconfont"></i></p>
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
    }
  }


</style>

