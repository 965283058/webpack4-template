import router from '../router'

const CHANNEL_CODE = 'MSITE';
const PAGE_TYPE = 'H5';

//跳转其他页面
const to = (path) => {
    path = decodeURIComponent(path)
    if (path.indexOf('://') == -1) {
        router.push(path)
    } else {
        let wantPath = path.replace(/^http:\/\/[^/]+/, "", '').replace(`${process.env.ROUTER_ROOT}/`.replace(/\/\//g, '/'), '')
        let matchComponents = router.getMatchedComponents(wantPath)
        if (matchComponents.length && !(matchComponents.length == 1 && matchComponents[0].name == "404")) {
            return router.push(wantPath)
        }
        window.location.href = path
    }
}

// 获取sessionStorage中的pageType和channelCode，没有则取常量
const getChannelCode = () => {
    let channelCode = sessionStorage.getItem('channelCode');
    return channelCode && channelCode !== 'null' ? channelCode : CHANNEL_CODE;
};

const getPageType = () => {
    let pageType = sessionStorage.getItem('pageType');
    return pageType && pageType !== 'null' ? pageType : PAGE_TYPE;
};

// script的外联中是否含有echarts.common.min.js标签
const hasEchartScript = () => {
    const nodeList = document.getElementsByTagName('script') || [];
    for (let node of nodeList) {
        if (node.src.indexOf('echarts-en.common.min.js') > -1) {
            return true
        }
    }
    return false
};

const loadEchart = () => {
    return new Promise((rev, rej) => {
        if (!hasEchartScript()) {
            let oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.src = 'https://cdn.bootcss.com/echarts/4.1.0.rc2/echarts-en.common.min.js';
            const head = document.head || document.getElementsByTagName('head')[0];
            head.appendChild(oScript);
            oScript.onload = () => {
                rev()
            };
        } else {
            if (typeof window.echarts == "object") {
                rev()
            } else {
                let loadTime = window.setInterval(() => {
                    if (typeof window.echarts == "object") {
                        window.clearInterval(loadTime)
                        rev()
                    }
                }, 50)
            }
        }
    })
}

const getRateString = function (num) {
    num = num + ''
    if (num.indexOf('.') > 0) {
        return num
    } else {
        return num + '.0'
    }
}


const is = {};
is.existy = (value) => {
    return value != null;
};

is.telephone = (tel) => {
    return is.existy(tel) && /^1[3-8][0-9]\d{8}$/.test(tel);
};

// 密码校验规则：8-20位，数字与字母的组合
is.password = (password) => {
    return is.existy(password) && /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(password);
};


export {
    hasEchartScript,
    loadEchart,
    is,
    getChannelCode,
    getPageType,
    getRateString,
    to
};
