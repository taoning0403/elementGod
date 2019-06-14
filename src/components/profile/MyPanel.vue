<template>
  <section class="panel-my">
    <router-link
      v-for="(item) in panelMy"
      :key="item.id"
      :to="item.href"
      :class="item.linkC"
    >
      <aside class="iconfont" :class="item.asideC"></aside>
      <article :class="item.articleC">
        {{ item.name }}
        <i class=" iconfont" :class="item.iconC"></i>
      </article>
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
      // 左侧图标
      .panel-my-site{
        font-size: 20px;
        margin-right: 8px;
        margin:20px 0 0 15px;
        transform: translate(-50%,-50%);
      }
      .panel-my-art{
        width: 100%;
        height: 44px;
        padding: 14px 10px 14px 0;
        box-sizing: border-box;
        position: relative;
        color: #333;
        .icon-iconfontjiantou2{
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(-50%,-50%)
        }
      }
      // 右箭头
      .icon-iconfontjiantou2{
        color: rgb(156, 153, 153);
      }
    }
    // 我的地址
    .panel-my-margin{
      margin:10px 0;
    }
    // 分享拿现金
    .panel-boon-link{
      margin-bottom:10px;
      margin-top: 0;
    }
    .icon-dizhi{
      color: rgb(78, 132, 233);
    }
    .icon-29{
      color: rgb(10, 223, 159);
    }
    .icon-icon-test{
      color: rgb(233, 109, 7);
    }
    .el-icon-phone{
      color: rgb(7, 124, 233);
    }
    .el-icon-platform-eleme{
      color: rgb(7, 124, 233);
    }
    .el-icon-s-order{
      color: rgb(7, 124, 233);
    }
  }
</style>
