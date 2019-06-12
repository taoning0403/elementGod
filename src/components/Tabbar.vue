<template>
  <ul class="tabbar">
    <router-link
      v-for="tab in tabs"
      :key="tab.id"
      :to="{path:tab.href}"
      active-class="z-act"
      tag="li"
    >
      <i :class="['iconfont', tab.icon]"></i>
      <span>{{ tab.name }}</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Tabbar',

  props: {
    tabs: Array
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';

.tabbar {
  .border-top;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  z-index: 100;
  background: #fff;
  list-style: none;

  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    color: @tabColor;

    .iconfont {
      font-size: 24px;
      margin-bottom: 4px;
    }

    span {
      font-size: 14px;
    }

    &.z-act {
      color: @tabColorActive;
    }
  }
}
</style>
