 export default {
    '/': {
        meta: {title: '积分商城'},
        component: (resolve) => {
            require(['pages/default'], resolve)
        }
    },
    '*': {
        meta: {title: '404'},
        component: (resolve) => {
            require(['pages/404'], resolve)
        }
    }
}
