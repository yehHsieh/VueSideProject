<template>
    <div class="container">
        <h2 class="my-3 fw-bold">挑一個喜歡的基底吧</h2>
        <div class="row">
            <div class="col-2 text-center">
                <RouterLink :to="`/AllProducts`" class="btn btn-outline-primary d-block rounded-pill py-3">全部</RouterLink>
            </div>

            <div class="col-2 text-center">
                <RouterLink :to="`/brandy`" class="btn btn-outline-primary d-block rounded-pill py-3">白蘭地</RouterLink>
            </div>

            <div class="col-2 text-center">
                <RouterLink :to="`/gin`" class="btn btn-outline-primary d-block rounded-pill py-3">琴酒</RouterLink>
            </div>

            <div class="col-2 text-center">
                <RouterLink :to="`/rum`" class="btn btn-outline-primary d-block rounded-pill py-3">蘭姆酒</RouterLink>
            </div>

            <div class="col-2 text-center">
                <RouterLink :to="`/vodka`" class="btn btn-outline-primary d-block rounded-pill py-3">伏特加</RouterLink>
            </div>

            <div class="col-2 text-center">
                <RouterLink :to="`/wiskey`" class="btn btn-outline-primary d-block rounded-pill py-3">威士忌</RouterLink>
            </div>
        </div>

        <router-view></router-view>

    </div>
    {{ products }}
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import favoritesStore from '../../stores/favorites'
import Pagination from '../../components/Pagination.vue';
import { mapActions, mapState } from 'pinia';

export default {
    data() {
        return {
            products: [],
        }
    },
    computed: {
        ...mapState(favoritesStore, [ 'filled', 'empty'])
    },
    methods: {
        ...mapActions(favoritesStore, ['addFavorite', 'removeFavorite']),
        getProducts(category) {
            this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?category=${category}`)
                .then((res) => {
                    this.products = res.data.products;
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
        this.$router.push('/AllProducts')
    }
}
</script>

