<template>
    這是產品列表頁面
    <h2>挑一個喜歡的基底吧</h2>
    <table class="table">
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.title }}</td>
                <td><img :src="product.imagesUrl" alt="" width="200"></td>
                <td>
                    <RouterLink :to="`/product/${product.id}`" class="btn btn-outline-primary">連結至</RouterLink>
                    <button type="button" class="btn btn-outline-secondary" @click="addToCart(product.id)">加入購物車</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { RouterLink } from 'vue-router';
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