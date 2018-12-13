<style>
    html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        height: 100%;
        -webkit-tap-highlight-color: transparent;
        font-family: PingFang SC,"Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    }

    body {
        margin: 0;
        font-size: 14px;
        height: 100%;
        font-family: PingFang SC,"Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
    }

    .box::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section,
    summary {
        display: block;
    }

    audio:not([controls]) {
        display: none;
        height: 0;
    }

    progress {
        vertical-align: baseline;
    }

    template,
    [hidden] {
        display: none;
    }

    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
        text-decoration: none;
    }

    a:active,
    a:hover {
        outline-width: 0;
    }

    abbr[title] {
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    b,
    strong {
        font-weight: bolder;
    }

    i, em {
        font-style: normal
    }

    dfn {
        font-style: italic;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sup {
        top: -0.5em;
    }

    sub {
        bottom: -0.25em;
    }

    img {
        border-style: none;
    }

    svg:not(:root) {
        overflow: hidden;
    }

    code,
    kbd,
    pre,
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    pre {
        overflow: auto;
        white-space: pre;
        white-space: pre-wrap;
        word-wrap: break-word;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        color: inherit;
        font: inherit;
        margin: 0;
        vertical-align: middle;
        outline: none;
    }

    button,
    input,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    html [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    [disabled] {
        cursor: default;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }

    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }

    textarea {
        overflow: auto;
        resize: none;
        vertical-align: top;
    }

    optgroup {
        font-weight: bold;
    }

    input,
    select,
    textarea {
        outline: 0;
    }

    textarea,
    input {
        -webkit-user-modify: read-write-plaintext-only;
    }

    input::-ms-clear,
    input::-ms-reveal {
        display: none;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: inherit;
        opacity: 0.54;
    }

    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    td,
    th {
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    form,
    blockquote {
        margin: 0;
    }

    ul,
    ol,
    li,
    dl,
    dd {
        margin: 0;
        padding: 0;
    }

    ul,
    ol {
        list-style: none outside none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: normal;
        line-height: 1.5;
    }

    * {
        box-sizing: border-box;
    }

    input,
    select {
        padding: 0;
        border: 0 none;
        -webkit-appearance: none;
        background-color: transparent;
    }

    .text-overflow {
        display: -webkit-box;
        overflow: hidden;
        word-wrap: break-word;
        word-break: break-all;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .slideInRight-enter {
        transform: translateX(100%);
    }

    .slideOutRight-enter-active,
    .slideInRight-enter-active {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        transition: transform 0.4s ease;
    }

    .slideInRight-leave-active {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        transition: transform 0.4s ease;
    }

    .slideOutRight-enter {
        transform: translateX(-100%);
    }

    .slideOutRight-leave-active {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(100%);
        transition: transform 0.4s ease;
    }

    /* 重置样式 */

    body .ui-checkbox__inner {
        border: 1px solid;
        /* no */
        border-color: #ddd;
        background-color: #fff;
        width: 18px;
        /* no */
        height: 18px;
        /* no */
    }

    body .ui-checkbox__inner[checked] {
        background-color: transparent;
    }

    body .ui-checkbox__inner:before {
        width: 5px; /* no */
        height: 10px; /* no */
        left: 5px; /* no */
        border-color: #027ff3;
    }

    body .ui-confirm__container {
        width: 560px;
        border-radius: 0;
    }

    body .ui-confirm__title {
        padding: 0;
        font-size: 32px;
        line-height: 118px;
        border-bottom: 1px solid #E6E6E6;; /*no*/
        color: #2B2B2B;
    }

    body .ui-confirm__info {
        font-size: 24px;
        line-height: 34px;
        color: #2B2B2B;
        margin-top: 68px;
        padding: 0 42px;
    }

    body .ui-confirm__button {
        margin: 100px 0 75px 0;
        padding: 0 78px;
        justify-content: space-between;
    }

    body .ui-confirm__button--ok,
    body .ui-confirm__button--cancel {
        width: 178.6px;
        height: 64.6px;
        box-sizing: border-box;
        border-radius: 8.4px;
        font-size: 28px;
        flex-basis: auto;
        flex-grow: 0;
        flex-shrink: 0;
    }

    body .ui-confirm__button--ok {
        border: 0;
        background-image: linear-gradient(-41deg, #01bafa 0%, #007CFF 100%);
        line-height: 64px;
        color: #FFFFFF;
    }

    body .ui-confirm__button--cancel {
        border: 1px solid #007CFF; /*no*/
        line-height: 62px;
        color: #007CFF;
        background-image: none;
    }

    body .ui-alert__info {
        text-align: left;
    }

    body .ui-alert__button {
        color: #007DFF;
    }

    body .ui-confirm__info {
        text-align: left;
    }

    body .ui-confirm__info {
        text-align: left;
    }

    .app-warp {
        /*min-height: 100%;*/
    }

    .app-warp--iphonex {
        padding-bottom: 34px !important; /*no*/
    }

</style>
<template>
    <!--<transition :name="transitionName">-->
    <router-view class="app-warp" :class="{'app-warp--iphonex':isIphoneX()}"></router-view>
    <!--</transition>-->
</template>
<script>
    import {getQueryString} from 'utils'

    let urls = []
    export default {
        data() {
            return {
                transitionName: '',
            }
        },
        methods: {
            isIphoneX(){
                return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
            }
        },
        beforeCreate() {
            //如果在APP中，判断是否登录，如果未登录，清除authtoken
            if (window.corvodaLib.isInApp()) {
                this.$sdk.checkLogined().then(() => {
                }).catch(() => {
                    if (localStorage.getItem('authtoken')) {
                        localStorage.setItem('authtoken', '')
                    }
                })
            } else {
                //如果在微信中，判断是否有token，拿token换取authtoken
                let token = getQueryString("token")
                if (token) {
                    sessionStorage.setItem('wxToken', token);
                    sessionStorage.setItem('wxCallBackUrl', window.location.href);
                    this.$router.replace('/wxAutoLogin')
                }
            }
        },
        watch: {
            /*'$route'(to, from) {
             if (urls[urls.length - 2] === to.path) {
             this.transitionName = 'slideOutRight'
             urls.splice(urls.lastIndexOf(to.path), 1)
             urls.splice(urls.lastIndexOf(from.path), 1)
             } else {
             if (urls.length > 0) {
             this.transitionName = 'slideInRight'
             }
             }
             urls.push(this.$route.path)
             }*/
        }
    }
</script>
