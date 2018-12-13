import Vue from 'vue'
import router from '../router'

const CodeEnum = {
    // 成功
    SUCCESS: '00000',
    // 未登录
    NOT_LOGIN: '90000',
    // 验证码失效
    AUTHCODE_INVALID: '90001',
    // 验证码错误
    AUTHCODE_ERROR: '90002',
    // 产品结果未知
    PRODUCT_NOT_KNOW: 'TR90000',
    // 产品已经售罄
    PRODUCT_SOLD_OUT: 'TR00001',
    // 产品剩余额度不足
    PRODUCT_NOT_ENOUGH: 'TR00002',
    // 支付路由 业务报错
    PAYROUTE_ERROR: 'PR90000'
};

export const post = function (url, params, opts = {}) {
    opts["headers"] = getHeaders(opts["headers"])
    if (!(params instanceof FormData)) {
        opts["headers"]['Content-Type'] = 'application/json;charset=UTF-8'
    }
    return Vue.http.post(url, params, opts).then(result, err)
}

export const get = function (url, params, opts = {}) {
    opts["headers"] = getHeaders(opts["headers"])
    return Vue.http.get(url, Object.assign({}, {params: params}, opts)).then(result, err)
}

let getHeaders = (data = {})=> {
    if (localStorage.getItem('authtoken')) {
        data['authtoken'] = localStorage.getItem('authtoken')
    }
    data['platform'] = 'h5'
    data['channel'] = 'm'
    return data
}

let result = response => {
    if (response.data.resultCode == CodeEnum.SUCCESS) {
        return Promise.resolve(response.data)
    } else if (response.data.resultCode === CodeEnum.NOT_LOGIN) {
        if (!(router.history && router.history.current.path == "/mine")) {
            Vue.toast({text: '请先登录'});
            setTimeout(()=> {
                router.push({
                    path: '/user/login',
                    query: {refer: router.currentRoute.fullPath}
                });
            }, 1500)
        }
        localStorage.setItem('authtoken', '')
        return Promise.reject(null)
    } else {
        let errData = Object.assign({}, response.data, {
            code: response.data.resultCode,
            message: response.data.resultMsg || '服务器错误！'
        })
        return Promise.reject(errData)
    }
}

let err = response => {
    // 处理http状态码
    if (`${response.status}`.charAt(0) === '4') {
        return Promise.reject({message: '请求资源不存在'})
    } else if (`${response.status}`.charAt(0) === '5') {
        return Promise.reject({message: '服务器繁忙，请稍后再试'})
    }
}


const plugin = (Vue, opts) => {
    if (!Vue.prototype.$post) {
        Vue.prototype.$post = post
    }

    if (!Vue.prototype.$get) {
        Vue.prototype.$get = get
    }

}

export default plugin
