<template>
  <van-swipe indicator-color="gray" class="swiper">
    <van-swipe-item>
      <ul class="swiper-item">
        <li
          v-for="list in lists1"
          :key="list.id"
          >
        <img :src="list.image_hash | getList" alt="">
        {{ list.name }}
        </li>
      </ul>
    </van-swipe-item>
    <van-swipe-item>
      <ul class="swiper-item">
        <li
          v-for="list in lists2"
          :key="list.id"
        >
        <img :src="list.image_hash | getList" alt="">
        {{ list.name }}
        </li>
      </ul>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      lists1:'',
      lists2:''
    }
  },

  watch: {
    imgList(newVal, oldVal){
      this.lists1 = newVal[0].entries.slice(0, 10)
      this.lists2 = newVal[0].entries.slice(10, 19)
    }
  },

  computed: {
    ...mapState('shop', [
      'imgList'
    ]),
  },

  methods: {
    ...mapActions('shop', [
      'GetImgList'
    ])
  },

  created () {
    this.GetImgList()
  },

  filters: {
    getList (value) {
      let newImage_hash = ''
      let image_hash = value.split('')
      image_hash.splice(1, 0, '/')
      image_hash.splice(4, 0, '/')
      image_hash = image_hash.join('')
      newImage_hash = `https://fuss10.elemecdn.com/${image_hash}.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/`
      return newImage_hash
    }
  }
}
</script>

<style lang="less" scoped>
.swiper {
  width: 375px;
  height: 177px;
  font-size: 12px;
  .swiper-item{
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      margin: 4% 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      img {
        width: 45px;
        height: 45px;
      }
    }
  }
}
</style>

