# overseas-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# overseas-vue-project

#安装echarts
1.cnpm install echarts --save

2.在main.js中
import echarts from 'echarts'
Vue.use(echarts)

3.在homepage.vue中使用

#进行ajax请求
1.cnpm install vue-resource

2.别忘记在src/router/index.js中import VueResource from 'vue-resource'和 Vue.use(VueResource)
