<template>
    <div class="container">
        這是產品列表頁面
        <h2>挑一個喜歡的基底吧</h2>
        <div class="row">
            <div class="col-2 text-center">
                <RouterLink :to="`/AllProducts`" class="btn btn-outline-primary d-block rounded-pill">all</RouterLink>
            </div>

            <div class="col-2 text-center">
                <RouterLink :to="`/brandy`" class="btn btn-outline-primary d-block rounded-pill">brandy</RouterLink>
            </div>

            <div class="col-2 text-center">
                <RouterLink :to="`/gin`" class="btn btn-outline-primary d-block rounded-pill">gin</RouterLink>
            </div>

            <div class="col-2 text-center">
                <RouterLink :to="`/rum`" class="btn btn-outline-primary d-block rounded-pill">rum</RouterLink>
            </div>

            <div class="col-2 text-center">
                <RouterLink :to="`/vodka`" class="btn btn-outline-primary d-block rounded-pill">vodka</RouterLink>
            </div>

            <div class="col-2 text-center">
                <RouterLink :to="`/wiskey`" class="btn btn-outline-primary d-block rounded-pill">wiskey</RouterLink>
            </div>
        </div>






        <router-view></router-view>
    </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
    data() {
        return {
            products: []
        }
    },
    methods: {
        getProducts() {
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
                .then((res) => {
                    this.products = res.data.products;
                    console.log(this.products);
                })
        },
        addToCart(id) {
            const data = {
                "product_id": id,
                "qty": 1
            }

            this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
                .then((res) => {
                    console.log(res)
                })
        }
    },
    mounted() {
        this.getProducts()

    }
}
</script>