// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    /*
     * proxyTable进行vue跨域请求
     * 若请求地址是http://192.168.20.26:8888/TonikIntegration
     * 你的所有包含TonikIntegration实际上都是http://192.168.20.26:8888/TonikIntegration
     * 本地会虚拟一个服务端接收你的localhost请求并代你发送该请求
     * 比如bigData.vue中 /TonikIntegration/servlet/LoginServlet
     * 会匹配到 /TonikIntegration 转而请求 http://192.168.20.26:8888/TonikIntegration/servlet/LoginServlet
     *
     * */
    proxyTable: {
      '/TonikIntegration': {
        target: "http://192.168.20.26:8888/TonikIntegration",
        changeOrigin: true,
        pathRewrite: {
          '^/TonikIntegration': ''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
