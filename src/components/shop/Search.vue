<template>
  <div class="search">
    <a class="content">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path></svg>
      <span>搜索饿了么商家、商品名称</span>
    </a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.search {
  background-image: linear-gradient(90deg,#0af,#0085ff);
  position: sticky;
  z-index: 999;
  top: 0;
  padding: 2vw 3.733333vw;
  margin: -.133333vw 0;
  .content {
    display: flex;
    width: 100%;
    height: .96rem;
    height: 9.6vw;
    justify-content: center;
    align-items: center;
    border-radius: .026667rem;
    border-radius: .266667vw;
    background: #fff;
    color: #999;
    font-size: .373333rem;
    svg {
      width: 4.266667vw;
      height: 4.266667vw;
      margin-right: 1.333333vw;
    }
  }
  &:before {
    top: -1px;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
  }
  &:after {
    bottom: -1px;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
  }
}
</style>
