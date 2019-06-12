// 配置文件

module.exports = {
  // 选项
  devServer: {
    // port: 9090
    // 正向代理的配置
    // http://localhost:8080/api/find => http://m.maoyan.com/api/find
    // proxy: 'http://i.waimai.meituan.com/'
    proxy: {
      // key - 请求前缀
      // value - 代理选项设置
      // http://localhost:8080/maoyan/api/find => http://m.maoyan.com/api/find
      '/elme': {
        target: 'https://h5.ele.me/',
        pathRewrite: {
          '^/elme': ''
        }
      }
    }
  }
}
