<template>
    <img ref="image" :style="style" :src="src" :alt="alt" @load="load"/>
</template>

<script>
    let imageMap = {}
    let index = 0
    window.addEventListener('resize', () => {
        setTimeout(() => {
            Object.keys(imageMap).forEach(key => {
                if (imageMap[key] && imageMap[key].load) {
                    imageMap[key].changeStyle()
                }
            })
        }, 302)
    })
    export default {
        data() {
            return {
                index: null,
                originWidht: 0,
                style: {
                    width: 'auto',
                    opacity: 0
                }
            }
        },
        props: {
            src: String,
            alt: String
        },
        methods: {
            load() {
                this.originWidht = this.$refs.image.width
                this.changeStyle()
            },
            changeStyle() {
                console.info(window.__hb_rem)
                this.style.width = (this.originWidht * window.__hb_rem) + 'px'
                this.style.opacity = 1
            }
        },
        mounted() {
            this.index = index++
            imageMap[this.index] = this
        },
        beforeDestroy() {
            delete imageMap[this.index]
        }
    }
</script>

<style scoped>

</style>