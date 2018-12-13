function plugin(Vue, Toast) {
    let Component, component, container, propsData

    propsData = {
        type: '',
        text: '',
        visible: false
    }

    Component = Vue.extend(Toast)
    container = document.createElement('div')
    document.getElementsByTagName('body')[0].appendChild(container)
    component = new Component({
        propsData
    }).$mount(container)

    function method({ type = '', text, time = 2000, hide = function () {} }) {
        
        if (['success', 'error', 'warn'].indexOf(type) === -1) {
            type = ''
        }
        
        Object.assign(component, {
            type,
            text,
            time,
            visible: true
        })
        
        component.$on('hide', function () {
            if (component.visible) {
                component.visible = false
                if (typeof hide === 'function') {
                    hide()
                }
            } 
        })
    }

    Vue.toast = method
    Vue.prototype.$toast = method
}

module.exports = plugin
