<template>
  <div class="home-filter">
    <div class="filter">
      <div class="filter-header">
        <a class="filter-nav">
          <span>综合排序</span>
          <svg viewBox="0 0 72 32" class="dropdown-icon">
            <path d="M36 32l36-32h-72z"></path>
          </svg>
        </a>
        <a class="filter-nav">
          <span>距离最近</span>
        </a>
        <a class="filter-nav">
          <span>品质联盟</span>
        </a>
        <a class="filter-nav">
          <span>筛选</span>
          <svg viewBox="0 0 26 26" id="more-filter" class="filter-nav-more__icon">
            <path
              d="M9.001 15.009V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.981l7.788-10.01a1 1 0 0 0-1.578-1.228l-8 10.28a1 1 0 0 0-.21.615V22h-4v-7.324a1 1 0 0 0-.2-.6L4.001 5h14a1 1 0 0 0 0-2H2a1 1 0 0 0-.8 1.6L9 15.009z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.home-filter {
  position: sticky;
  top: 1.333rem;
  z-index: 100;
  .filter {
    top: 0px;
    position: relative;
    line-height: 10.4vw;
    z-index: 101;
    height: 10.666667vw;
    .filter-header {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 10.533333vw;
      display: flex;
      z-index: 4;
      background-color: #fff;
      .filter-nav {
        flex: 1;
        text-align: center;
        color: #666;
        position: relative;
        font-size: 13px;
        z-index: 101;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .dropdown-icon {
          width: 1.6vw;
          height: .8vw;
          margin-left: 1.333333vw;
          margin-bottom: .533333vw;
          fill: #333;
          will-change: transform;
          transition: transform .3s,-webkit-transform .3s;
        }
        .filter-nav-more__icon {
          margin-left: .533333vw;
          width: 16px;
          height: 16px;
          fill: #666;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
