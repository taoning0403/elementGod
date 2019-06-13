<template>
  <div class="goods">
    <headers></headers>
    <div class="tab border-bottom-1px">
      <div class="tab-item">
        <router-link to="/goods/commodity">商品</router-link>
      </div>
      <div >
        <router-link to="/goods/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/goods/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import headers from "@/components/Details/headers.vue";
export default {
  components: {
    headers
  }
};
</script>

<style>
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: (rgba(7, 17, 27, 0.1));
}
.tab-item {
  flex: 1;
  text-align: center;
}

.router-link-active{
  color: red;
}
</style>

