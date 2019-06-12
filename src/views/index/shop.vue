<template>
  <div class="page-shop">
    <Headercity />
    <Search />
    <Shoplist />
  </div>
</template>

<script>
import Headercity from '@/components/shop/Headercity.vue'
import Search from '@/components/shop/Search.vue'
import Shoplist from '@/components/shop/Shoplist.vue'

export default {
  components: {
    Headercity,
    Search,
    Shoplist
  }

}
</script>

<style>

</style>
