/*
 * @Author: your name
 * @Date: 2022-03-29 16:26:42
 * @LastEditTime: 2022-03-30 11:01:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \service-trade-admin\vite.config.ts
 */

import { ConfigEnv, defineConfig, loadEnv, UserConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import qiankun from 'vite-plugin-qiankun'
const packName = require('./package').name  // 必须要指定当前子应用命名
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
    const root = process.cwd();
    const env = loadEnv(mode, root)
    console.log(env.VITE_PUBLIC_PATH);
    return {
        plugins: [
            vue(),
            VueSetupExtend(),
            styleImport({
                libs: [
                    {
                        libraryName: 'vxe-table',
                        esModule: true,
                        resolveStyle: (name) => `vxe-table/es/${name}/style.css`
                    }
                ]
            }),
            qiankun(`app-vue`, {
                useDevMode: true
            }),
        ],
        server: {
            headers: {
                'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
            }
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, "src")
            }
        },
        // server: {
        //     proxy: {
        //         '/dev': {
        //             // http://192.168.65.196:8600
        //           target: 'http://192.168.65.20:8600',   //代理接口
        //           changeOrigin: true,
        //           rewrite: (path) => path.replace(/^\/dev/, '')
        //         }
        //       }
        // },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
                sass: {
                    javascriptEnabled: true,
                    // additionalData: `@use "~/styles/element/index.scss" as *;`,
                    // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
                    // 给导入的路径最后加上 ;
                    // additionalData: `@use "@/styles/element/" as *;`,
                }
            }
        },
    }
}
