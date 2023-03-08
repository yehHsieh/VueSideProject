<template>
<table class="table">
        <tbody>
            <tr v-for="product in products" :key="product.id">
                {{ product.category }}
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

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
    data() {
        return {
            products: {}
        }
    },

    methods: {
        getProduct() {
            // console.log(this.$route.params)
            // const { category } = this.$route.params;
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
            .then((res)=>{
                console.log(res);
                this.products = res.data.products;
            })
        }
    },

    mounted() {
        this.getProduct()
    }
}
</script>