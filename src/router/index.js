import Vue from 'vue'
import routes from './map'
import Router from 'vue-router'

Vue.use(Router)

let router, notFound



router = new Router({
    mode: 'history',
    base: process.env.ROUTER_ROOT,
    routes: Object.keys(routes).reduce((previous, current) => {
        return (previous.push({path: current, ...routes[current]}), previous)
    }, []),
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})

router.beforeEach(({matched}, from, next) => {
    matched.filter(({meta}) => meta.title).map(({meta}) => {
            document.title = meta.title

        })
    next()
})



Vue.router = router

export default router
