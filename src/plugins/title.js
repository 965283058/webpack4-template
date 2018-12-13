function plugin(Vue, opts) {
    opts = Object.assign({
        src: 'https://www.baidu.com/favicon.ico'
    }, opts)

    Object.defineProperty(Vue.prototype, '$title', {
        get() {
            return document.title
        },
        set(value) {
            setTitle(value, opts.src)
        }
    })
    Vue.setTitle = setTitle
}

function setTitle(title, src = 'https://www.baidu.com/favicon.ico') {
    document.title = title
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin