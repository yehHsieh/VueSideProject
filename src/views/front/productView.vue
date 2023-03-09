<template>
    <div class="container">
        <div class="row my-3">
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
    </div>

    <div class="container my-5 d-flex justify-content-center align-items-center flex-column">
        <h2 class="fw-bold my-3 fs-2">{{ product.title }}</h2>

        <div class="d-flex">
             <img :src="product.imagesUrl" alt="" class="img-fluid" width="300">
            <div class="ms-5 fs-4">
                <p class="border border-dark rounded-pill py-1 px-4 box-shadow text-center" style="background-color: rgba(34, 152, 255, 1);">{{ product.fav }}</p>
                <p class="border border-dark rounded-pill py-1 px-4 box-shadow text-center" style="background-color: rgba(34, 152, 255, 1);">{{ product.alc }}</p>
            </div>
        </div>
<div>
    {{ product.description }}
</div>
    </div>
</template>

<script>

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
    data() {
        return {
            product: {}
        }
    },

    methods: {
        getProduct() {
            console.log(this.$route.params)
            const { id } = this.$route.params;
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
                .then((res) => {
                    console.log(res);
                    this.product = res.data.product;
                })
        }
    },

    mounted() {
        this.getProduct()
    }
}
</script>