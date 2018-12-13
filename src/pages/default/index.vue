<style scoped>
    .home-warp {
        background: #f7f7f7;
    }

    .title__ref {
        font-size: 28px;
        color: #7F7F7F;
        text-align: right;
    }

    .list-warp {
        padding-top: 24px;
    }

    .list {
        background: #ffffff;
    }

    .list__title {
        height: 94px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        color: #4A4B5C;
        line-height: 32px;
        position: relative;
        border: 1px solid #D9E0E5; /*no*/
    }

    .list__title img {
        width: 44px;
        height: 30px;
        margin: 0 24px;
    }

    .list__title--more {
        font-size: 24px;
        color: #9D9DA6;
        position: absolute;
        right: 66px;
    }

    .list__title--more:after {
        content: '';
        width: 16px;
        height: 16px;
        display: block;
        border: 1.5px solid #9D9DA6; /*no*/
        border-left: 0;
        border-bottom: 0;
        position: absolute;
        top: 6px;
        right: -18px;
        transform: rotate(45deg);
    }

    .product-box {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .product {
        width: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid #D9E0E5; /*no*/
        position: relative;
    }

    .product:nth-of-type(odd):after {
        content: '';
        display: block;
        border-left: 1px solid #D9E0E5; /*no*/
        position: absolute;
        top: 0;
        bottom: 0;
        right: -0.5px; /*no*/
    }

    .product__over {
        width: 148px;
        height: 108px;
        background: url("./assets/over.png") no-repeat;
        background-size: 100%;
        position: absolute;
        left: 32px;
        top: 32px;
    }

    .product__img-warp {
        width: 100%;
        height: 360px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .product__title {
        font-size: 28px;
        line-height: 40px;
        color: #4A4B5C;
        text-align: center;
    }

    .product__price {
        font-size: 32px;
        line-height: 44px;
        color: #FE6F4E;
        margin-bottom: 32px;
    }

    .product__price--text {
        font-size: 24px;
        color: #000000;
    }


</style>
<template>
    <layout class="home-warp">
        <Title :white="true">
            <router-link class="title__ref" to="/rule">积分规则</router-link>
        </Title>
        <div @loadMore="" class="list-warp">
            <div class="list">
                <h2 class="list__title">
                    <img src="./assets/title_left.png" alt="">
                    精美商品
                    <img src="./assets/title_right.png" alt="">
                    <span class="list__title--more">更多</span>
                </h2>
                <div class="product-box">
                    <div class="product" :class="{'product--disabled':product.count==0}"
                         v-for="product in vo.productList" :key="product.id">
                        <div class="product__img-warp">
                            <div class="product__over" v-if="product.count==0"></div>
                            <images :src="product.img" alt=""></images>
                        </div>
                        <h3 class="product__title">{{product.name}}</h3>
                        <h3 class="product__price">{{product.price}}<span class="product__price--text">积分</span></h3>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    import images from 'components/image'

    export default {
        data() {
            return {
                vo: {
                    productList: []
                }
            }
        },
        mounted() {
            let list = []
            for (let i = 0; i < 20; i++) {
                list.push({
                    id: i,
                    name: '返现红包10元',
                    price: Math.ceil(Math.random() * 4000),
                    img: require(`./assets/p${Math.ceil(Math.random() * 4)}.png`),
                    count: Math.floor(Math.random() * 10)
                })
            }
            this.vo.productList = list
        },
        components: {
            images
        }
    }
</script>

