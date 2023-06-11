


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

const app = createApp(App)
// useTable(app)
app.use(Antd).use(ElementPlus).use(VXETable).use(router).use(store)
app.mount('#app')