<template>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="container">
        <div class="d-flex justify-content-between">
            <h2>今日調酒</h2>
            <RouterLink to="/Custom">
                <p class="d-inline">挑出自己偏好的調酒吧</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
            </RouterLink>
        </div>
        <h3>步驟一: 選基底</h3>
        <ul class="row offset-1">
            <li class="col-2 text-center"><a href="" class="d-block py-3 btn-outline-hover" @click.prevent="getFavProducts('甜')"
                    v-bind:class="{ active: isActive }" style="border-radius: 24px;"><img src="../../assets/img/brandy.png" alt="" style="width: 100px;"
                        class="image-contain"></a></li>
            <li class="col-2 text-center "><a href="" class=" d-block py-3 btn-outline-hover" @click.prevent="getFavProducts('甜')"
                    v-bind:class="{ active: isActive }" style="border-radius: 24px;"><img src="../../assets/img/gin.png" alt="" style="width: 100px;"
                        class="image-contain"></a></li>
            <li class="col-2 text-center "><a href="" class=" d-block py-3 btn-outline-hover" @click.prevent="getFavProducts('甜')"
                    v-bind:class="{ active: isActive }" style="border-radius: 24px;"><img src="../../assets/img/rum.png" alt="" style="width: 100px;"
                        class="image-contain"></a></li>
            <li class="col-2 text-center "><a href="" class=" d-block py-3 btn-outline-hover" @click.prevent="getFavProducts('甜')"
                    v-bind:class="{ active: isActive }" style="border-radius: 24px;"><img src="../../assets/img/vodka.png" alt="" style="width: 100px;"
                        class="image-contain"></a></li>
            <li class="col-2 text-center "><a href="" class=" d-block py-3 btn-outline-hover" @click.prevent="getFavProducts('甜')"
                    v-bind:class="{ active: isActive }" style="border-radius: 24px;"><img src="../../assets/img/whisky.png" alt="" style="width: 100px;"
                        class="image-contain"></a></li>
        </ul>
        <h3>步驟二: 心情顏色</h3>
        <ul class="row">
            <li class="col-2 text-center"><a href="" class="btn d-block border-rounded-100 py-3" style="background-color: blue;"
                    @click.prevent="getAlcProducts('20')">&lt 20度</a></li>
            <li class="col-2 text-center"><a href="" class="btn btn-outline-alc d-block rounded-pill py-3"
                    @click.prevent="getAlcProducts('30')">20度~40度</a></li>
            <li class="col-2 text-center"><a href="" class="btn btn-outline-alc d-block rounded-pill py-3"
                    @click.prevent="getAlcProducts('40')">&gt 40度</a></li>
        </ul>



        <ul class="row my-5" v-if="products.length > 0">
            <li v-if="finalProducts.length == 0 && showNum" v-for="product in tempProducts" :key="product.id"
                class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                <div class="card border-0">
                    <a style="cursor: pointer;" class="overflow-hidden"><img :src="product.imagesUrl" alt=""
                            width="200"></a>

                    <div class="card-body text-center">
                        <h3 class="card-title fs-4 mt-3">{{ product.title }}</h3>
                        <p class="card-text me-2">$ {{ product.origin_price }}</p>
                        <!-- <p class="card-text text-secondary text-dark"><del>$ {{ product.origin_price }}</del></p> -->

                        <p>
                            <RouterLink :to="`/product/${product.id}`"
                                class="text-dark fw-bold bottom-line text-decoration-none">詳細資訊
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </li>

            <li v-if="finalProducts.length > 0" v-for="product in finalProducts" :key="`${product.id}1`"
                class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                <div class="card border-0" v-if="finalProducts.length > 0">
                    <a style="cursor: pointer;" class="overflow-hidden"><img :src="product.imagesUrl" alt=""
                            width="200"></a>

                    <div class="card-body text-center">
                        <h3 class="card-title fs-4 mt-3">{{ product.title }}</h3>
                        <p class="card-text me-2">$ {{ product.origin_price }}</p>
                        <!-- <p class="card-text text-secondary text-dark"><del>$ {{ product.origin_price }}</del></p> -->

                        <p>
                            <RouterLink :to="`/product/${product.id}`"
                                class="text-dark fw-bold bottom-line text-decoration-none">詳細資訊
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </li>
            <li v-if="!showNum">無符合條件商品</li>
        </ul>
        <p v-else>尚未選擇喜好</p>
    </div>
</template>
  
<script >
import Swal from 'sweetalert2'
import { RouterLink } from 'vue-router';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
    data() {
        return {
            products: {},
            isLoading: false,
            tempProducts: [],
            finalProducts: [],
            tempFav: '',
            tempAlc: 0,
            showNum: true,
            isActive: false
        }
    },
    methods: {
        getFavProducts(fav) {
            this.showNum = true
            this.finalProducts = []
            this.isLoading = true;
            this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
                .then((res) => {
                    this.isActive = true
                    this.products = res.data.products;
                    this.tempProducts = []
                    this.tempFav = fav
                    this.products.forEach(i => {
                        if (this.tempFav == "甜" && i.fav == "甜") {
                            this.tempProducts.push(i);
                        }
                        if (this.tempFav == "適中" && i.fav == "適中") {
                            this.tempProducts.push(i);

                        }
                        if (this.tempFav == "不甜" && i.fav == "不甜") {
                            this.tempProducts.push(i);
                        }
                    })
                    this.isLoading = false;
                })
        },

        getAlcProducts(alc) {
            this.isLoading = true;
            this.tempAlc = alc
            this.finalProducts = []
            if (this.tempProducts.length == 0) {
                Swal.fire({
                    icon: 'error',
                    title: '請先選擇風味',
                })
            }
            this.tempProducts.forEach(i => {
                if (this.tempAlc == '20' && i.alc < 20) {
                    this.finalProducts.push(i);

                }
                if (this.tempAlc == '30' && i.alc >= 20 && i.alc < 40) {
                    this.finalProducts.push(i);

                }
                if (this.tempAlc == '40' && i.alc >= 40) {
                    this.finalProducts.push(i);
                }
                if (this.finalProducts.length == 0) {
                    this.showNum = false
                }
            })
            this.isLoading = false;
        },


    },

    created() {

    }
}
</script>
  
<style>@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}</style>
  