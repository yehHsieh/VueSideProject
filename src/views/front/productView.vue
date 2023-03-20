<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-lg-2 col-4 mb-2 text-center">
                <RouterLink :to="`/AllProducts`" class="btn btn-outline-primary d-block rounded-pill py-3">全部</RouterLink>
            </div>

            <div class="col-lg-2 col-4 mb-2 text-center">
                <RouterLink :to="`/brandy`" class="btn btn-outline-primary d-block rounded-pill py-3">白蘭地</RouterLink>
            </div>

            <div class="col-lg-2 col-4 mb-2 text-center">
                <RouterLink :to="`/gin`" class="btn btn-outline-primary d-block rounded-pill py-3">琴酒</RouterLink>
            </div>

            <div class="col-lg-2 col-4 mb-2 text-center">
                <RouterLink :to="`/rum`" class="btn btn-outline-primary d-block rounded-pill py-3">蘭姆酒</RouterLink>
            </div>

            <div class="col-lg-2 col-4 mb-2 text-center">
                <RouterLink :to="`/vodka`" class="btn btn-outline-primary d-block rounded-pill py-3">伏特加</RouterLink>
            </div>

            <div class="col-lg-2 col-4 mb-2 text-center">
                <RouterLink :to="`/wiskey`" class="btn btn-outline-primary d-block rounded-pill py-3">威士忌</RouterLink>
            </div>
        </div>
    </div>

    <div class="container my-5 d-flex justify-content-center align-items-center flex-column">
        <h2 class="fw-bold my-lg-3 fs-2">{{ product.title }}</h2>

        <div class="row offset-lg-3">
            <div class="col-lg-6 text-center my-2">
                <img :src="product.imagesUrl" alt="" class="img-fluid" width="300">
            </div>
            <div class="col-lg-6 mt-lg-3">
                <div class="ms-lg-6 fs-4 d-flex justify-content-center d-lg-block">
                    <p class="border border-dark rounded-pill py-1 px-4 box-shadow text-center me-2 me-lg-0"
                        style="background-color: rgba(34, 152, 255, 1);">{{ product.fav }}</p>
                    <p class="border border-dark rounded-pill py-1 px-4 box-shadow text-center"
                        style="background-color: rgba(34, 152, 255, 1);">{{ product.alc }}</p>
                </div>
            </div>
        </div>
        <div class="my-5 w-50">
            {{ product.description }}


        </div>
        <div class="row my-5">
            <ul class="col-lg-5 mb-5 mb-lg-0">
                <h3>作法</h3>
                <li v-for="step in product.steps">{{ step }}</li>
            </ul>

            <div class="col-lg-7">
                <div class="d-flex border-bottom justify-content-between pb-2">
                    <div class="d-inline">
                        <h3 class="col-8 d-inline">材料(可選購) ${{ product.origin_price }}</h3>
                    </div>

                    <!-- 購物車 -->
                    <div class="d-flex-inline justify-content-between">
                        <div class="btn btn-secondary" @click="minusProduct">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-dash-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>
                        </div>
                        {{ num }}
                        <div class="btn btn-secondary" @click="plusProduct">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>
                        <div class="btn btn-outline-primary ms-lg-2 d-flex align-items-center justify-content-center d-lg-inline mt-2" @click="addToCart(product.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-cart-plus" viewBox="0 0 16 16">
                                <path
                                    d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="py-3">
                    {{ product.content }}
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <h3 class="fw-bold">相似商品</h3>
        <ul class="row my-5 p-0">
        <li v-for="product in simiProducts" :key="product.id"
            class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div class="card border-0">
                <a style="cursor: pointer;" class="overflow-hidden"><img :src="product.imagesUrl" alt="" width="200"></a>

                <div class="card-body text-center">
                    <h3 class="card-title fs-4 mt-3">{{ product.title }}</h3>
                    <p class="card-text me-2">$ {{ product.origin_price }}</p>
                    <!-- <p class="card-text text-secondary text-dark"><del>$ {{ product.origin_price }}</del></p> -->

                    <p>
                        <RouterLink :to="`${product.id}`" class="text-dark fw-bold bottom-line text-decoration-none" @click="nextTick">詳細資訊
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
    </ul>
    </div>

</template>

<script>

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import { mapState, mapActions } from "pinia";
import cartStore from '../../stores/cart'
import Swal from 'sweetalert2';
import { RouterLink } from 'vue-router';


export default {
    data() {
        return {
            product: {},
            simiProducts: {},
            num: 1,
        }
    },
    computed: {
        ...mapState(cartStore, ['num', 'carts']),
    },
    methods: {
        getProduct() {
            console.log(this.$route.params)
            console.log(this.$route)
            const { id } = this.$route.params;
            this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${id}`)
                .then((res) => {
                    console.log(res);
                    this.product = res.data.product;

                    return this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?category=${this.product.category}`);
                })
                .then((res) => {
                    console.log(res);
                    this.simiProducts = res.data.products;
                })
                .catch((err) => {
                    console.log(err);
                });
            this.$forceUpdate();

        },
        nextTick(){
            window.scrollTo(0, 0)
        },
        ...mapActions(cartStore, ["getCart"]),
        plusProduct() {
            this.num++;
        },
        minusProduct() {
            if (this.num > 0) {
                this.num--;
            }
        },
        addToCart(id) {
            const data = {
                "product_id": id,
                "qty": this.num
            }

            this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
                .then((res) => {
                    console.log(res)
                    this.num = 0;
                    this.getCart();
                    Swal.fire({
                        icon: 'success',
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 1700
                    })
                })
        },
        deleteItem(item) {
            Swal.fire({
                reverseButtons: true,
                title: '確定刪除?',
                showCancelButton: true,
                cancelButtonText: '取消',
                confirmButtonText: '確定',
                confirmButtonColor: 'rgba(255, 159, 0, 1)'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.loadingItem = item.id;
                    this.$http.delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${item.id}`)
                        .then(res => {
                            console.log('刪除購物車:', res.data);
                            this.getCarts();
                            this.loadingItem = "";
                        })
                    Swal.fire('刪除成功!', '', 'success')
                }
            })

        },
    },
    watch: {
        product() {
            this.getProduct();
        }
    },
    mounted() {
        this.getProduct();
        this.num
    },
}
</script>