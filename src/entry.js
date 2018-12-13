import Vue from 'vue'
import App from './App'
import router from './router'

import http from 'vue-http'
import extendHttp from 'plugins/fetch'
import title from 'plugins/title'

import Loading from 'components/vt-loading'
import Toast from 'components/vt-toast'
import Message from 'components/vt-message'


import TitleHeader from 'components/title'
import Layout from 'components/layout'
import scrollview from 'components/scrollview'


import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger.vue'

import {milliFormat} from 'utils'

Vue.use(http, {
    duration: 1,
    root: process.env.API_ROOT,
    timeout: 150000,
    loading: (bool) => {
        Vue.loading(bool)
    },
    error: (text) => Vue.toast({type: "", text})
})


Vue.use(AlloyFingerPlugin, {AlloyFinger})

Vue.component('Layout', Layout)
Vue.component('scrollview', scrollview)
Vue.component('Loading', Loading)
Vue.component('Toast', Toast)
Vue.component('Title', TitleHeader)
Vue.component('Message', Message)

Vue.config.productionTip = false

Vue.use(extendHttp)
Vue.use(title)

Vue.filter('milliFormat', milliFormat)

new Vue({
    router,
    ...App
}).$mount('#app')
