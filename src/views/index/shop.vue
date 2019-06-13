<template>
  <div class="page-shop">
    <Headercity />
    <Search />
    <Shoplist />
    <Banner />
    <Ossume />
    <Filterbtn />
  </div>
</template>

<script>
import Headercity from '@/components/shop/Headercity.vue'
import Search from '@/components/shop/Search.vue'
import Shoplist from '@/components/shop/Shoplist.vue'
import Banner from '@/components/shop/Banner.vue'
import Ossume from '@/components/shop/Ossume.vue'
import Filterbtn from '@/components/shop/Filterbtn.vue'

export default {
  components: {
    Headercity,
    Search,
    Shoplist,
    Banner,
    Ossume,
    Filterbtn
  }
  
}
</script>

<style>

</style>
