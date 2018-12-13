<style scoped>
    .container {
        padding: 200px 0 0;
    }

    .container img {
        width: 750px;
        display: block;
        margin: 0 auto;
    }

    .container p {
        text-align: center;
        font-size: 32px;
        color: #454545;
        margin-top: 40px;
    }

    .goindex {
        width: 200px;
        height: 80px;
        line-height: 78px;
        text-align: center;
        border: 1px solid #42B9FE;/*no*/
        border-radius: 50px;
        font-size: 28px;
        color: #454545;
        margin: 100px auto;
    }
</style>
<template>
    <div class="container">
        <img src="./assets/404.jpg" alt="">
        <p>哎呀！没找到您想访问的页面…</p>
        <div class="goindex" @click="$router.push('/')">返回首页</div>
    </div>
</template>

<script>
    export default {
        name: '404'
    }
</script>