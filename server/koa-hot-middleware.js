const hotMiddleware = require("webpack-hot-middleware")

module.exports = function (compiler, options) {
    let originMiddleware = hotMiddleware(compiler, options)
    return async function (ctx, next) {
        let result = await middleware(originMiddleware, ctx.req, ctx.res)
        if (result && next) {
            await next()
        }
    }
}

async function middleware(originMiddleware, req, res) {
    let originEnd = res.end
    return new Promise((resolve, reject) => {
        res.end = function () {
            originEnd.apply(this, arguments)
            resolve(false)
        }
        originMiddleware(req, res, () => {
            resolve(true)
        })
    })
}