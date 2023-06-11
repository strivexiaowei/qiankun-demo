import axios from './axios';
// import qs from 'qs' // 注意: post, put提交方式需要采用该写法: qs.stringify(params)
const { MODE }: any = import.meta.env
// const MODE: string = 'production'
const baseApi: any = {
//   development: 'http://192.168.65.9:8610', // 开发 - 生产环境 153 219
  development: 'hhttp://192.168.65.62:8600',      // 体验
  trial: 'https://www.anning.city/trade',      // 体验
  production: 'https://www.anning.city/trade'       // 正式版
}
export const url = baseApi[MODE] // 正式环境







