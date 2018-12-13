<style scoped>
    .vt-scroll-view {
        width: 100%;
        overflow: hidden;
    }

    .vt-scroll__pull-header {
        width: 100%;
        height: 185px;
        display: block;
        line-height: 55px;
        padding-top: 25px;
        position: absolute;
        top: 0px;
        z-index: -1;
        text-align: center;
        transform: translateY(-100%);
        box-sizing: border-box;
        overflow: hidden;
    }

    .vt-scroll__content {
        width: 100%;
        position: relative;
        z-index: 0;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
        transition-property: none;
    }

    .vt-scroll-view__loadmore,
    .vt-scroll__loaded {
        width: 100%;
        font-size: 24px;
        overflow: hidden;
        position: relative;
        display: flex;
        height: 60px;
        line-height: 60px;
        justify-content: center;
        align-items: center;
    }

    .vt-scroll-view__loadmore {
        padding-right: 40px;
    }

    .vt-scroll-view__loading {
        display: inline-block;
        width: 48px;
        height: 48px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4=);
        animation: vt-scroll-view__loading-animation 1s steps(12, end) infinite;
    }

    .vt-scroll-view__loading-text {
        display: inline-block;
        margin-left: 10px;
        position: relative;
    }

    .vt-scroll-view__loading-text:after {
        content: '...';
        animation-name: vt-scroll-view__loading-text;
        animation-timing-function: linear;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        position: absolute;
        line-height: 55px;
        left: 76px;
        bottom: 0;
    }

    @keyframes vt-scroll-view__loading-text {
        0% {
            content: ".";
        }
        33% {
            content: "..";
        }
        66% {
            content: "...";
        }
        100% {
            content: "";
        }
    }

    @keyframes vt-scroll-view__loading-animation {
        0% {
            transform: rotate3d(0, 0, 1, 0deg);
        }
        100% {
            transform: rotate3d(0, 0, 1, 360deg);
        }
    }

    .vt-scroll__pull--loading {
        width: 225px;
        height: 160px;
    }

    .vt-scroll__pull--runing {
        width: 675px;
        height: 480px;
        display: inline-block;
        overflow: hidden;
        transform: scale(0.33333333) translate3d(0, -100%, 0);
    }

    .vt-scroll__pull--runing img {
        width: 20925px;
        height: 480px;
        transform: translate3d(0, 0, 0);
    }
</style>
<template>
    <div class="vt-scroll-view">
        <div class="vt-scroll__content" ref="content">
            <div ref="pullHeader" class="vt-scroll__pull-header">
                <img class="vt-scroll__pull--loading" src="./assets/loading.gif" alt="" v-if="loading">
                <span class="vt-scroll__pull--runing">
                    <img src="./assets/pull.png" alt="" ref="pullRun">
                </span>
                <!--<span :class="{'vt-scroll-view__loading-text':tipText==loadingText}">{{tipText}}</span>-->
            </div>
            <slot></slot>
            <template v-if="loadMore">
                <div v-show="in_bottom && !ended">
                    <slot name="loading"></slot>
                    <div v-if="!$slots.loading" class="vt-scroll-view__loadmore">
                        <span class="vt-scroll-view__loading"></span>
                        <span class="vt-scroll-view__loading-text">{{loadingText}}</span>
                    </div>
                </div>
                <div v-show="end">
                    <slot name="loaded"></slot>
                    <div v-if="!$slots.loaded" v-show="loadedText" class="vt-scroll__loaded">{{loadedText}}</div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                scrollEl: null,//滚动元素
                in_bottom: false,
                loading: false,//加载中
                canPullRefresh: false,
                headerClientHeight: 0,
                shortHeaderClientHeight: 0,//超过此距离开始播放动画
                tipText: '',
                timer: null,
                lastRefreshTime: 0,
            }
        },
        props: {
            loadingText: {
                type: String,
                default: '加载中'
            },
            loadedText: {
                type: String,
                default: '没有更多数据了'
            },
            distance: {
                type: Number,
                default: 30
            },
            end: {
                type: Boolean,
                default: false
            },
            loadMore: {
                type: Boolean,
                default: true
            },
            pullRefresh: {
                type: Boolean,
                default: false
            },
            refreshText: {
                type: String,
                default: '下拉刷新'
            },
            refreshUsableText: {
                type: String,
                default: '松开即可刷新'
            },
        },
        computed: {},
        methods: {
            _inits(){
                this.scrollEl = getScrollElement(this.$refs.content)
                if (this.pullRefresh) {
                    this.$refs.content.addEventListener('touchstart', this._refreshTouchStart);
                    this.$refs.content.addEventListener('touchmove', this._refreshTouchMove);
                    this.$refs.content.addEventListener('touchend', this._refreshTouchEnd);
                }
                if (this.loadMore) {
                    this.scrollEl.removeEventListener('scroll', this._pageScroll)
                    this.scrollEl.addEventListener('scroll', this._pageScroll)
                }
            },
            _un(){
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                if (this.pullRefresh) {
                    this.$refs.content.removeEventListener('touchstart', this._refreshTouchStart);
                    this.$refs.content.removeEventListener('touchmove', this._refreshTouchMove);
                    this.$refs.content.removeEventListener('touchend', this._refreshTouchEnd);
                }
                if (this.scrollEl) {
                    this.scrollEl.removeEventListener('scroll', this._pageScroll)
                }
            },
            _pageScroll() {
                if (this.end || this.loading) {
                    return
                }
                let scrollHeight = this.scrollEl.scrollHeight
                let scrollTop = this.scrollEl.scrollTop
                this.in_bottom = ((scrollHeight - this.scrollEl.clientHeight - scrollTop) < this.distance && scrollTop >= this.distance)
                if (this.in_bottom) {
                    this.loading = true
                    this.$nextTick(()=> {
                        this.scrollEl.scrollTop = scrollHeight
                        // 调用异步读取接口
                        this.$emit('next', () => {
                            this.in_bottom = false
                            this.loading = false
                        })
                    })
                }
            },
            _refreshTouchStart(e) {
                if (!this.loading && !this.canPullRefresh && this.scrollEl.scrollTop == 0) {
                    this.canPullRefresh = true
                    let touch = e.changedTouches[0];
//                    this.tipText = this.refreshText;//下拉提示文字
                    this.startY = touch.clientY;//获得当前按下点的纵坐标
                    this.$refs.pullRun.style.webkitTransform = `translate3d(9rem, 0, 0)`
                    this.$refs.pullRun.style.transform = `translate3d(9rem, 0, 0)`
                }
            },
            _refreshTouchMove(e) {
                let touch = e.changedTouches[0];
                let _move = touch.clientY - this.startY;//获得滑动的距离  
                if (_move > 0) {
                    if (!this.loading && this.canPullRefresh) {
                        if (this.headerClientHeight == 0) {
                            this.headerClientHeight = this.$refs.pullHeader.clientHeight
                            this.shortHeaderClientHeight = this.headerClientHeight * 0.35
                        }
                        this.offsetTop = _move / (Math.ceil(_move / 1000) + 2)
                        this.$refs.content.style.marginTop = this.offsetTop + 'px'
                        /*if (this.offsetTop >= this.headerClientHeight) {//内容主体超出了一个头部的距离      
                         this.tipText = this.refreshUsableText
                         }*/
                        if (this.offsetTop >= this.shortHeaderClientHeight) {
                            let imgIndex = Math.floor((this.offsetTop - this.shortHeaderClientHeight) / (this.headerClientHeight - this.shortHeaderClientHeight) * 31)
                            if (imgIndex > 31) {
                                imgIndex = 31
                            }
                            let translate3d = `translate3d(-${(imgIndex - 1) * 9}rem, 0, 0)`
                            this.$refs.pullRun.style.webkitTransform = translate3d
                            this.$refs.pullRun.style.transform = translate3d
                        }
                        e.preventDefault()
                    } else if (!this.loading && this.$refs.content.scrollTop == 0) {
                        this.canPullRefresh = true
//                        this.tipText = this.refreshText
                        this.startY = touch.clientY;//获得当前按下点的纵坐标
                    } else if (this.loading) {
                        e.preventDefault()
                    }
                }
            },
            _refreshTouchEnd() {
                if (!this.loading && this.canPullRefresh) {
                    this.$refs.content.style.transitionProperty = 'margin'
                    if (this.offsetTop >= this.$refs.pullHeader.clientHeight) {//内容主体超出了一个头部的距离
                        this.loading = true
//                        this.tipText = this.loadingText
                        this.$refs.content.style.marginTop = this.$refs.pullHeader.clientHeight + 'px'
                        this.lastRefreshTime = Date.now()
                        this.$emit('refresh', this._resetBox)
                    } else {
                        this._resetBox();
                    }
                }
            },
            _resetBox() {
                if (this.loading) {
                    let diff = Date.now() - this.lastRefreshTime
                    if (diff < 1750) {
                        setTimeout(this._stop, 1750 - diff)
                    } else {
                        this._stop()
                    }
                } else {
                    this._stop()
                }
            },
            _stop(){
                this.lastRefreshTime = 0
                this.offsetTop = 0
                this.$refs.content.style.marginTop = '0px'
                this.timer = setTimeout(()=> {
                    this.canPullRefresh = false
                    this.loading = false
                    this.$refs.content.style.transitionProperty = 'none'
//                    this.tipText = this.refreshText
                }, 400)
            },
            scrollTop(){
                this.scrollEl.scrollTop = 0
            }
        },
        mounted(){
            this._inits()
        },
        beforeDestroy() {
            this._un()
        },
    }


    const getScrollElement = function (el, coordinate = 'y') {
        coordinate = coordinate.toUpperCase();
        let parent = el.parentNode;
        let attr = 'overflow' + coordinate;
        let value = null;
        while (parent.tagName !== 'HTML' && parent.tagName !== 'BODY' && parent.nodeType === 1) {
            value = getStyle(parent, attr);
            if (value === 'auto' || value === 'scroll') {
                return parent;
            }
            parent = parent.parentNode;
        }
        return window;
    };

    const getStyle = function (el, attr) {
        return window.getComputedStyle(el, null)[attr];
    };
</script>