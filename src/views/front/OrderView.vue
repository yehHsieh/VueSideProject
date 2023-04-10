<template>
    <div :style="{backgroundImage: `url(${bgImg})`, backgroundPosition: 'center'}" class="p-3">
        <div class="container p-3 "
            style="background:rgba(255, 255, 255, 0.6);backdrop-filter:blur(8px);border-radius:24px;">
            <v-form @submit="addToOrder">
                <ul class="progresses m-0 d-flex">
                    <li>商品確認</li>
                    <li>訂購人資訊</li>
                    <li class="active">訂單確認</li>
                </ul>
                <h2 class="mb-4">訂單資訊</h2>
                <ul class="border py-3 fs-lg-5 fs-md-6 fs-xs-7">
                    <li class="mb-2">訂購人 : {{ data.user.name }}</li>
                    <li class="mb-2">信箱 : {{ data.user.email }}</li>
                    <li class="mb-2">電話 : {{ data.user.tel }}</li>
                    <li class="mb-2">備註 : {{ data.message }}</li>
                    <li class="mb-2 me-2 d-inline">總金額 :<del>{{ total }}</del></li>
                    <li class="mb-2 d-inline"> {{ final_total }} 元</li>
                </ul>
                <ul class="row text-center fw-bold py-lg-5 mb-3 mt-5 py-3 m-0 px-0 fs-lg-5 fs-md-6 fs-xs-7">
                    <li class="col-2 px-0">商品</li>
                    <li class="col-4 px-0">品名</li>
                    <li class="col-2 px-0">數量</li>
                    <li class="col-2 px-0">單價</li>
                    <li class="col-2 px-0">小計</li>
                </ul>
                <ul class="row text-center py-lg-5 mb-3 py-3 align-items-center m-0 fw-bold ps-0 fs-lg-5 fs-md-6 fs-xs-7" v-for="cart in carts" :key="cart.id">
                    <li class="col-2"><img :src="cart.product.imagesUrl" alt="" style="width: 100px;"></li>
                    <li class="col-4">{{ cart.product.title }}</li>
                    <li class="col-2">{{ cart.qty }}</li>
                    <li class="col-2 p-0">${{ cart.product.price }}</li>
                    <li class="col-2 p-0">${{ cart.qty * cart.product.price }}</li>
                </ul>
                <div class="text-end">
                    <RouterLink :to="`/info`" class="btn btn-outline-dark me-3 rounded-pill py-1 px-4 text-center">修改訂單
                    </RouterLink>
                    <button type="submit" class="btn btn-danger rounded-pill py-1 px-4 text-center">送出訂單</button>
                </div>
            </v-form>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import cartStore from '@/stores/cart'
import bgImg from '@/assets/img/inf-pexels-pixabay-37925.jpg'

export default {
    data() {
        return {
            order: [],
            bgImg:bgImg
        }
    },
    computed: {
        ...mapState(cartStore, ['data', 'carts', 'total', 'final_total']),
    },
    methods: {
        ...mapActions(cartStore, ['getCart', 'addToOrder']),
    },
    mounted() {
        this.getCart();
    }
}
</script>