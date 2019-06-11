<template>
  <section class="panel-my">
    <router-link
      v-for="(item) in panelMy"
      :key="item.id"
      :to="item.href"
      :class="item.linkC"
    >
      <aside class="iconfont" :class="item.asideC"></aside>
      <article :class="item.articleC">{{ item.name }}<i class=" iconfont" :class="item.iconC"></i></article>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'MyPanel',

  props: {
    panelMy: Array
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';

  .panel-my{
    min-width: 375px;
    min-height: 45px;
    background: #fff;
    .panel-my-link{
      width: 375px;
      height: 45px;
      display: flex;
      justify-content:  flex-start;
      align-content:center;
      align-items: center;
      .panel-my-site{
        font-size: 20px;
        margin-right: 8px;
        color: rgb(15, 105, 240);
        margin-left: 15px;
      }
      .panel-my-art{
        width: 332px;
        height: 44px;
        padding: 14px 10px 14px 0;
        box-sizing: border-box;
        position: relative;
        color: #333;
        .icon-faxian{
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(-50%,-50%);
          color: rgb(99, 97, 97)
        }
      }
    }
    .panel-my-margin{
      margin:10px 0;
    }
    .panel-boon-link{
      margin-bottom:10px;
      margin-top: 0;
    }
  }
</style>
