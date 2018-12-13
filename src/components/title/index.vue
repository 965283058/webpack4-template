<style scoped>
    .title {
        width: 100%;
        height: 88px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 36px;
    }
    .title--white{
        background: white;
    }

    .back {
        width: 50px;
    }

    .text {
        text-align: center;
    }

    .back {
        margin-left: 30px;
        display: inline-block;
        width: 44px;
        height: 44px;
        position: relative;
        text-align: left;
    }

    .back:after {
        content: '';
        display: block;
        left: 10px;
        width: 20px;
        height: 20px;
        top: 10px;
        border-right: 1.5px solid;/*no*/
        border-bottom: 1.5px solid;/*no*/
        border-color: #909090;
        position: absolute;
        transform: rotate(135deg);
    }
    .back--white:after{
        border-color: #FFFFFF;
    }

    .refer {
        text-align: right;
        margin-right: 30px;
        font-size: 24px;
    }

</style>
<template>
    <div v-if="show" class="title" :class="{'title--white':white}">
        <span class="back" :class="{'back--white':transparent}" @click="back"></span>
        <div class="text">{{text}}</div>
        <span class="refer"><slot></slot></span>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            show: {
                type: Boolean,
                default: function () {
                    let wxShow = !(/micromessenger/.test(navigator.userAgent.toLowerCase()))
                    let appShow = navigator.userAgent.toLowerCase().indexOf("houbank-") == -1
                    return wxShow && appShow
                }
            },
            white: {
                type: [String, Boolean],
                default: false
            },
            transparent:{
                type: [String, Boolean],
                default: false
            },
        },
        computed: {
            text() {
                return this.title || this.$route.meta.title
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
                this.$emit('back')
            }
        }
    }
</script>
