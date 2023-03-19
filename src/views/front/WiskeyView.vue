<template>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <ul class="row my-5">
        <li v-for="(product, inde) in products" :key="product.id"
            class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div class="card border-0">

                <a style="cursor: pointer;" class="overflow-hidden position-relative"><img :src="product.imagesUrl" alt=""
                        width="200">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-heart position-absolute top-10 end-0" viewBox="0 0 16 16" @click="addFavorite(inde)"
                        :class="{ 'd-none': filled[inde] || null }, { 'd-inline': empty[inde] || null }">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-heart-fill position-absolute top-10 end-0" viewBox="0 0 16 16"
                        @click="removeFavorite(inde)"
                        :class="{ 'd-inline': filled[inde] || null }, { 'd-none': empty[inde] || null }">
                        <path fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                </a>

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
</template>

<script>

import favoritesStore from '../../stores/favorites'
import Pagination from '../../components/Pagination.vue';
import { mapActions, mapState } from 'pinia';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;



export default {
    data() {
        return {
            products: {},
            pagination: {},
            isLoading: false,
        }
    },
    computed: {
        ...mapState(favoritesStore, ['tempProducts', 'filled', 'empty', 'index', 'favoriteItems'])
    },
    components: {
        Pagination,
    },
    methods: {
        ...mapActions(favoritesStore, ['addFavorite', 'removeFavorite', 'getProducts1']),
        getProducts(page = 1) {
            this.isLoading = true;
            this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?page=${page}&category=wiskey`)
                .then((res) => {
                    this.products = res.data.products;
                    this.pagination = res.data.pagination;
                    this.isLoading = false
                })
        },
    },
    
    mounted() {
        this.getProducts1()
        this.getProducts()
    }
}
</script>