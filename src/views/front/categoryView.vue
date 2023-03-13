<template>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <ul class="row my-5">
        <li v-for="product in products" :key="product.id"
            class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div class="card border-0">
                <a style="cursor: pointer;" class="overflow-hidden"><img :src="product.imagesUrl" alt="" width="200"></a>

                <div class="card-body text-center">
                    <h3 class="card-title fs-4 mt-3">{{ product.title }}</h3>
                    <p class="card-text me-2">$ {{ product.origin_price }}</p>
                    <!-- <p class="card-text text-secondary text-dark"><del>$ {{ product.origin_price }}</del></p> -->

                    <p>
                        <RouterLink :to="`/product/${product.id}`"
                            class="text-dark fw-bold bottom-line text-decoration-none">詳細資訊 <svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg></RouterLink>
                    </p>
                </div>
            </div>
        </li>
        <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    </ul>

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
import Pagination from '../../components/Pagination.vue';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
    data() {
        return {
            products: {},
            pagination: {},
            isLoading: false,
        }
    },
    components: {
        Pagination,
    },
    methods: {
        getProducts(page = 1) {
            this.isLoading = true;
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products?page=${page}`)
                .then((res) => {
                    this.products = res.data.products;
                    this.pagination = res.data.pagination;
                    this.isLoading = false;
                })
        },
    },

    mounted() {
        this.getProducts()
    }
}
</script>