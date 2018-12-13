<style>
    .wrap {
        display: flex;
        height: 100%;
        flex-direction: column;
    }

    .main {
        position: relative;
        flex: 1;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }

    .main::-webkit-scrollbar {
        display: none;
    }
</style>

<template>
    <div class="wrap">
        <slot name="header"></slot>
        <div class="main" >
            <slot></slot>
        </div>
        <slot name="footer"></slot>
        <slot name="overlay"></slot>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props: {},
        computed: {},
        methods: {
        },
        mounted(){
        },
        components: {},
        filters: {}
    }
</script>