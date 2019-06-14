<template>
  <header>
    <div class="city-select">
      <div class="select-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="icon-address"><path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
        <span class="city-address">AddressCity</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="icon-select"><path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
header {
  background-image: linear-gradient(90deg,#0af,#0085ff);
  color: #fff;
  padding: 2.666667vw 3.733333vw 0;
  .city-select {
    display: flex;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;
    height: 9.2vw;
    width: 60%;
    font-weight: 700;
    .icon-select {
      width: 1.866667vw;
      height: .933333vw;
      fill: #fff;
      vertical-align: middle;
    }
    .city-address {
      margin: 0 1.333333vw;
      max-width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .icon-address {
      width: 3.466667vw;
      height: 4.133333vw;
      fill: #fff;
    }
  }
}
</style>
