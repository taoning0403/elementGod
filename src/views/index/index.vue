<template>
  <div>
    <router-view></router-view>
    <Tabbar :tabs="tabs" />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  data () {
    return {
      tabs: [
        { id: 1, name: '首页', icon: 'el-icon-platform-eleme', href: '/shop' },
        { id: 2, name: '发现', icon: 'el-icon-discover', href: '/discover' },
        { id: 3, name: '订单', icon: 'el-icon-notebook-2', href: '/order' },
        { id: 4, name: '我的', icon: 'el-icon-user', href: '/profile' }
      ]
    }
  },
  components: {
    Tabbar
  }
}
</script>

<style>

</style>
