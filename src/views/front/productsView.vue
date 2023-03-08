<template>
    這是產品列表頁面
    <h2>挑一個喜歡的基底吧</h2>
    <RouterLink :to="`/AllProducts`" class="btn btn-outline-primary">all</RouterLink>
    <RouterLink :to="`/brandy`" class="btn btn-outline-primary">brandy</RouterLink>
    <RouterLink :to="`/gin`" class="btn btn-outline-primary">gin</RouterLink>
    <RouterLink :to="`/rum`" class="btn btn-outline-primary">rum</RouterLink>
    <RouterLink :to="`/vodka`" class="btn btn-outline-primary">vodka</RouterLink>
    <RouterLink :to="`/wiskey`" class="btn btn-outline-primary">wiskey</RouterLink>
    <router-view></router-view>
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

            this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`,{data})
            .then((res) =>{
                console.log(res)
            })
        }
    },
    mounted() {
        this.getProducts()
        
    }
}
</script>