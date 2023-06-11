import axios, { AxiosRequestConfig, Method } from 'axios';
const baseURL = (): string => {
    const { DEV, VITE_APP_TITLE, VITE_APP_BASE_API }: any = import.meta.env
    if (DEV) {
        return VITE_APP_TITLE
    } else {
        return VITE_APP_BASE_API
    }
}
// console.log(baseURL());

// 提示信息和页面跳转
import { message } from 'ant-design-vue';
import router from '@/router';


/**
   * 请求失败后的错误统一处理
   * @param {Number} status 请求失败的状态码
   */
const errorHandle = (status: number, other: string) => {
    // 状态码判断
    switch (status) {
        case 401:
            // message.error('token过期');
            router.replace({
                path: '/login'
            });
            break;

        default:
    }
};

// 定义接口
interface PendingType {
    url?: string;
    method?: Method;
    params: any;
    data: any;
    cancel: any;
}
// 取消重复请求
const pending: Array<PendingType> = [];
const { CancelToken } = axios;

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    pending.forEach((item, index) => {
        if (item.url === config.url && item.method === config.method && JSON.stringify(item.params) === JSON.stringify(config.params) && JSON.stringify(item.data) === JSON.stringify(config.data)) {
            item.cancel('操作太频繁，请稍后再试');
            // // 从数组中移除记录
            pending.splice(index, 1);
        }
    });
};

/* 实例化请求配置 */
const instance = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin-Type': '*',
    },
    // 请求时长
    timeout: 1000 * 60 * 30,
    // 请求的base地址 TODO:这块以后根据不同的模块调不同的api
    baseURL: baseURL(),
    //     ? "测试"
    //     : "正式",
    // 表示跨域请求时是否需要使用凭证
    withCredentials: false,
});

/**
   * 请求拦截器
   * 每次请求前，如果存在token则在请求头中携带token
   */
instance.interceptors.request.use(
    config => {

        removePending(config);
        config.cancelToken = new CancelToken((c) => {
            pending.push({
                url: config.url, method: config.method, params: config.params, data: config.data, cancel: c,
            });
        });
        const token = sessionStorage.getItem('platformToken')
        // @ts-ignore
        config.headers.token = token ? token : ''
        return config;
    },
    error => Promise.reject(error.data.error.message),

);

// 响应拦截器
instance.interceptors.response.use((config: any) => {
    removePending(config.config);
    // 请求成功
    if (config.status === 200) {
        if (config.config.url.includes('export') || config.config.url.includes('download') || config.config.url.includes('newDownloadExcel') || config.config.url.includes('customDownloadExcel')) {
            return Promise.resolve(config.data)
        }
        if (config.data && config.data.code) {
            if (config.data.code === 200) {
                return Promise.resolve(config.data);
            }
            message.error(config.data.msg);
            return Promise.reject(config.data);
        }
    }
    message.error('数据库存请求失败');
    return Promise.reject(config);

    // 请求失败
    // eslint-disable-next-line consistent-return
}, (error) => {
    const { response } = error;
    if (response) {
        errorHandle(response.status, response.data.message);
        return Promise.reject(response);
    }
});
// 只需要考虑单一职责，这块只封装axios
export default instance;
