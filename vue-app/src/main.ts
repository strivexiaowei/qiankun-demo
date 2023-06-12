


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
import router from '@/router/index'
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


let instance: any = null
function render(props: any = {}) {
  const { container } = props
  instance = createApp(App)
  instance.use(router)
  // 全局组件祖册
 
  instance?.mount(container ? container.querySelector('#app') : '#app')
  console.log('开始加载相关内容')
}
renderWithQiankun({
  mount(props: any) {
    render(props)
  },
  bootstrap() {
    console.log('%c', 'color:green;', ' ChildOne bootstrap')
  },
  update() {
    console.log('%c', 'color:green;', ' ChildOne update')
  },
  unmount(props: any) {
    console.log('unmount', props)
    instance.unmount()
    instance._container.innerHTML = ''
    instance = null
  }
})
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('并不是qiankun渲染')
  render()
}
