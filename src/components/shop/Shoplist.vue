<template>
  <van-swipe indicator-color="white" class="swiper">
    <van-swipe-item>
      <!-- <ul class="swiper-item">
        <li
          v-for="img in imgList[0].entries.slice(0, 10)"
          :key="img.id"
        >
         <img :src="" alt="">
        {{ img.name }}
        </li>
      </ul> -->
      <!-- {{ imgList[0].entries[0].name }} -->
    </van-swipe-item>
    <van-swipe-item>
      <!-- <ul class="swiper-item">
        <li
          v-for="img in imgList[0].entries"
          :key="img.id"
        >{{ img.image_hash }}</li>
      </ul> -->
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('shop', [
      'imgList'
    ])
  },

  methods: {
    ...mapActions('shop', [
      'GetImgList'
    ])
  },

  mounted () {
    this.GetImgList()
  },

  filters: {
    getList (value) {
      return
    }
  }
}
</script>

<style lang="less" scoped>
.swiper {
  width: 375px;
  height: 177px;
  .swiper-item{
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

