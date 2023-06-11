


/*
 * @Author: your name
 * @Date: 2022-03-24 10:09:59
 * @LastEditTime: 2022-03-30 11:00:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-vue-app\src\main.ts
 */
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router/index'
import store from '@/store/index'
import '@/styles/antd-theme/index.less'
import '@/assets/scss/common.scss'
import Antd from 'ant-design-vue';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'xe-utils'
// import 'vxe-table/lib/style.css'
import './assets/scss/base.scss';
import VXETable from 'vxe-table';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app: any = null
// 独立运行时
if(!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app = createApp(App)
  app.use(router('')).use(store) // router('')，独立运行，路由前缀为空
  app.use(ElementPlus)
  app.mount('#app')
} else {
  // 作为微应用运行
  renderWithQiankun({ // 调用renderWithQiankun
    mount(props) {
      app = createApp(App)
      app
      	.use(router(props._parent_base))// 路由前缀添加router(props._parent_base)，_parent_base是从主应用中传过来的
      	.use(store)
      app.use(ElementPlus)
      app.mount(props.container ? props.container.querySelector('#app') : '#app')
    },
    bootstrap() {
      console.log('-- bootstrap --')
    },
    update() {
      console.log('-- update --')
    },
    unmount() {
      console.log('-- unmount --', app)
      app?.unmount()
    }
  })
}