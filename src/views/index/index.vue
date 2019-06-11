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
        { id: 1, name: '首页', icon: 'icon-changyonglogo40', href: '/shop' },
        { id: 2, name: '发现', icon: 'icon-faxian', href: '/discover' },
        { id: 3, name: '订单', icon: 'icon-icon--copy', href: '/order' },
        { id: 4, name: '我的',names: 'profiles', icon: 'icon-wode', href: '/profile' }
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
