import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import bigData from '@/components/bigdata'
import home from '@/components/bigdata/home'
//首页
import homePage from '@/components/bigdata/homepage'
import basicdata from '@/components/bigdata/basicdata/basicdata.vue'
import websiteManage from '@/components/bigdata/basicdata/websiteManage.vue'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/bigdata',
      component: bigData
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'homePage',
          name: 'bigdata.homePage',
          component: homePage
        },
        {
          path: 'basicdata',
          name: 'bigdata.basicData',
          component: basicdata,
          children: [
            {
              path: 'website',
              name: 'bigdata.websiteManage',
              component: websiteManage
            }
          ]
        }
      ]
    }
  ]
})
