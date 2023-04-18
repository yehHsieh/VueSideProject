<template>
    <Loading :active="isLoading" :z-index="1060" />
    <div class="container">
        <div class="d-lg-flex justify-content-between my-5">
            <h2 class="fw-bold">今日調酒</h2>
            <RouterLink to="/Custom" class="none-decoration">
                <p class="btn btn-primary d-inline rounded-pill py-lg-3">偏好調酒<svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg></p>
            </RouterLink>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <h3 class="mb-3 mt-5">步驟一: 選基底</h3>
                <ul class="row mt-3 mb-5 p-0 offset-lg-2">
                    <li class="col-lg-2 col-6 text-center"><a href="" class="d-block py-3 btn-outline-hover"
                            @click.prevent="getTypeProducts('brandy')" v-bind:class="{ bgBtn: isActive[0] }"
                            style="border-radius: 24px;"><img src="../../assets/img/brandy.png" alt="brandy" style="width: 100px;"
                                class="image-contain"></a></li>
                    <li class="col-lg-2 col-6 text-center "><a href="" class=" d-block py-3 btn-outline-hover"
                            @click.prevent="getTypeProducts('gin')" v-bind:class="{ bgBtn: isActive[1] }"
                            style="border-radius: 24px;"><img src="../../assets/img/gin.png" alt="gin" style="width: 100px;"
                                class="image-contain"></a></li>
                    <li class="col-lg-2 col-6 text-center "><a href="" class=" d-block py-3 btn-outline-hover"
                            @click.prevent="getTypeProducts('rum')" v-bind:class="{ bgBtn: isActive[2] }"
                            style="border-radius: 24px;"><img src="../../assets/img/rum.png" alt="rum" style="width: 100px;"
                                class="image-contain"></a></li>
                    <li class="col-lg-2 col-6 text-center "><a href="" class=" d-block py-3 btn-outline-hover"
                            @click.prevent="getTypeProducts('vodka')" v-bind:class="{ bgBtn: isActive[3] }"
                            style="border-radius: 24px;"><img src="../../assets/img/vodka.png" alt="vodka" style="width: 100px;"
                                class="image-contain"></a></li>
                    <li class="col-lg-2 col-6 text-center "><a class=" d-block py-3 btn-outline-hover"
                            @click.prevent="getTypeProducts('wiskey')" v-bind:class="{ bgBtn: isActive[4] }"
                            style="border-radius: 24px;"><img src="../../assets/img/whisky.png" alt="wiskey" style="width: 100px;"
                                class="image-contain"></a></li>
                </ul>
                <h3 class="my-3">步驟二: 心情顏色</h3>
                <ul class="row mt-5 mb-5 p-0">
                    <li class="col-4 text-center"><a href="" class="btn rounded-circle " style="width: 100px;
                                                          height: 100px;
                                                          background-color: rgba(234, 213, 21, 1);"
                            @click.prevent="getRandom(products, 'yellow')"></a>
                        <p>醉</p>
                    </li>
                    <li class="col-4 text-center"><a href="" class="btn rounded-circle " style="width: 100px;
                                                          height: 100px;
                                                          background-color: rgba(215, 11, 35, 1);"
                            @click.prevent="getRandom(products, 'red')"></a>
                        <p>很醉</p>
                    </li>
                    <li class="col-4 text-center"><a href="" class="btn rounded-circle " style="width: 100px;
                                                          height:  100px;
                                                          background-color: rgba(17, 125, 253, 1);"
                            @click.prevent="getRandom(products, 'blue')"></a>
                        <p>不能再醉了</p>
                    </li>
                </ul>
                <ul class="row my-5" v-if="products.length > 0">
                    <li v-if="finalProducts.length == 0 && showNum" v-for="product in tempProducts" :key="product.id"
                        class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <div class="card border-0">
                            <a style="cursor: pointer;" class="overflow-hidden"><img :src="product.imagesUrl" alt="productImg"
                                    width="200"></a>
                            <div class="card-body text-center">
                                <h3 class="card-title fs-4 mt-3">{{ product.title }}</h3>
                                <p class="card-text me-2">$ {{ product.origin_price }}</p>
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
                            <a style="cursor: pointer;" class="overflow-hidden"><img :src="product.imagesUrl" alt="productImg"
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
                </ul>
            </div>
            <div class="col-lg-6 d-flex align-items-center justify-content-center flex-column">
                <div class="d-flex align-items-center justify-content-center pt-5 pb-2">
                    <div class="glass my-3 position-relative" style="height: 400px; width: 200px;">
                        <div class="position-absolute end-0 bottom-0 start-0" style="height: 200px; width: 200px;"
                            :class="{ brandy: isActive[0], gin: isActive[1], rum: isActive[2], vodka: isActive[3], wiskey: isActive[4] }">
                        </div>
                        <div class="position-absolute end-0 bottom-50 start-0" style="height: 100px; width: 200px;"
                            :class="{ yellow: isColor[0], red: isColor[1], blue: isColor[2] }">
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center mb-3">
                    <button class="btn btn-outline-primary d-block rounded-pill py-3" @click="getCoupon">領取你今日的特調</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script >
import { isObject } from '@vue/shared';
import Swal from 'sweetalert2'
// import { RouterLink } from 'vue-router';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
    data() {
        return {
            products: {},
            isLoading: false,
            finalProducts: [],
            randomObject: {},
            tempAlc: 0,
            // 確認商品有符合篩選判斷
            showNum: true,
            //按鈕判斷持續被啟動 
            isActive: [false, false, false, false, false],
            // 判斷丟入的顏色
            isColor: [false, false, false],
            couponArray: [{ name: "5折優惠券", code: "dink" }, { name: "7折優惠券", code: "every" }, { name: "3折優惠券", code: "day" }],
            // 隨機選優惠券
            randomArray: []
        }
    },
    methods: {
        getTypeProducts(category) {
            this.isActive = [false, false, false, false, false];
            this.showNum = true
            this.finalProducts = []
            this.isLoading = true;
            this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?category=${category}`)
                .then((res) => {
                    this.products = res.data.products;
                    this.isLoading = false;
                })
            //判斷點擊的項目 
            const categoryIndex = {
                brandy: 0,
                gin: 1,
                rum: 2,
                vodka: 3,
                wiskey: 4
            }
            this.isActive[categoryIndex[category]] = true;
        },

        getRandom(array, color) {
            if (Object.keys(this.products).length === 0) {
                Swal.fire({
                    icon: 'error',
                    title: '請先選擇基底',
                })
            }
            else {
                this.isColor = [false, false, false];

                const randomIndex = Math.floor(Math.random() * array.length);
                this.randomObject = array[randomIndex];
                const colorIndex = {
                    yellow: 0,
                    red: 1,
                    blue: 2,
                }
                this.isColor[colorIndex[color]] = true;
            }
        },
        getCoupon() {
            if (Object.keys(this.randomObject).length === 0) {
                Swal.fire({
                    icon: 'error',
                    title: '尚未完成調酒',
                })
            } else {
                const randomIndex = Math.floor(Math.random() * this.couponArray.length);
                this.randomArray = this.couponArray[randomIndex];
                Swal.fire({
                    title: `專屬特調${this.randomObject.title}`,
                    html: `<P>恭喜獲得${this.randomArray.name}</p>  <P class="text-primary">優惠碼 ${this.randomArray.code}</p>`,
                    imageUrl: `${this.randomObject.imagesUrl}`,
                    imageWidth: 200,
                    imageHeight: 400,
                    imageAlt: 'Custom image',
                    customClass: {
                        imageUrl: 'image-cover' // 自定義樣式類名
                    }
                })
            }

        },

    },

    created() {

    }
}
</script>
  
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
  