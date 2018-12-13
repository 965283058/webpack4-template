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
    if (window.navigator.userAgent.toLocaleLowerCase().indexOf("houbank-") > 0) {//只有APP中内嵌才会要这样更改title
        let id, iframe
        id = '__refreshDocumentTitle__'
        iframe = document.getElementById(id)
        if (!iframe) {
            iframe = Object.assign(document.createElement('iframe'), {
                id,
                width: 0,
                height: 0,
                src: src,
                scolling: 'no',
                frameborder: 0
            })
            iframe.style.display = 'none'
            document.body.appendChild(iframe)
        } else {
            iframe.src = iframe.src
        }
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin