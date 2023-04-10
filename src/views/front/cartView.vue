<template>
    <Loading :active="isLoading" :z-index="1060"/>
    <ul class="progresses d-flex py-3 container">
        <li class="active">商品確認</li>
        <li>訂購人資訊</li>
        <li>訂單完成</li>
    </ul>
    <div class="container mb-5 my-lg-5 p-3 bg-secondary" style="background:rgba(255, 255, 255, 0.6);backdrop-filter:blur(8px);border-radius:24px;">
        <div class="d-lg-flex justify-content-between">
            <h2>商品確認</h2>
            <div class="d-flex justify-content-between">
                <input type="text" class="me-3 rounded-pill p-2" v-model.trim="couponCode" placeholder="請輸入優惠碼">
                <button class="btn btn-outline-primary rounded-pill py-1 px-4 text-center" @click="getCoupon">驗證優惠碼</button>
            </div>
        </div>
        <!-- laptopView -->
        <table class="table align-middle block-rwd-show">
            <thead>
                <tr>
                    <th></th>
                    <th>品名</th>
                    <th style="width: 120px">數量/單位</th>
                    <th>單價</th>
                    <th class="text-end">金額</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="carts">
                    <tr v-for="item in carts" :key="item.id">
                        <td>
                            <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item)"
                                :disabled="item.id === loadingItem">
                                <i class="fas fa-spinner fa-pulse"></i>
                                x
                            </button>
                        </td>
                        <td>
                            {{ item.product.title }}
                        </td>
                        <td>
                            <div class="input-group input-group-sm">
                                <select class="form-control" name="" id="" v-model="item.qty" @change="updateCartItem(item)"
                                    :disabled="item.id === loadingItem">
                                    <option :value="i" v-for="i in 20" :key="`${i}1223`">{{ i }}份</option>
                                </select>
                            </div>
                        </td>
                        <td v-if="allDiscount"><del>{{ item.product.origin_price }}</del> {{ item.product.price }}</td>
                        <td v-else>{{ item.product.origin_price }}</td>

                        <td v-if="allDiscount" class="text-end">
                            <small class="text-success">價格：</small>
                            {{ item.total }}
                        </td>
                        <td v-else class="text-end">
                            <small class="text-success">價格：</small>
                            {{ item.product.origin_price * item.qty }}
                        </td>
                    </tr>
                </template>
            </tbody>
            <tfoot>
                <tr v-if="couponOn">
                    <td colspan="4" class="text-end">折扣金額:</td>
                    <td class="text-end">{{ total - final_total }}</td>
                </tr>
                <tr v-if="allDiscount">
                    <td colspan="4" class="text-end">折扣金額:</td>
                    <td class="text-end">{{ originPrice - total }}</td>
                </tr>
                <tr v-else>
                </tr>
                <tr v-if="couponOn || allDiscount">
                    <td colspan="4" class="text-end text-success">最後金額:</td>
                    <td class="text-end text-success">{{ final_total }}</td>
                </tr>
                <tr v-else>
                    <td colspan="4" class="text-end text-success">最後金額:</td>
                    <td class="text-end text-success">{{ originPrice }}</td>
                </tr>
                <tr>
                    <td colspan="5" class="text-end">
                        <RouterLink :to="`/AllProducts`"
                            class="btn btn-outline-dark me-3 rounded-pill py-1 px-4 text-center">再逛逛</RouterLink>
                        <RouterLink :to="`/info`" class="btn btn-primary rounded-pill py-1 px-4 text-center">去結帳
                        </RouterLink>
                    </td>
                </tr>
            </tfoot>
        </table>

        <!-- phoneView -->
        <div class="table align-middle mt-3 block-rwd-none">
            <ul v-for="item in carts" :key="item.id" class="p-0">
                <li class="border-bottom">
                    <div class="row">
                        <div class="me-1 col-2">
                            <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item)"
                                :disabled="item.id === loadingItem">
                                <i class="fas fa-spinner fa-pulse"></i>
                                x
                            </button>
                        </div>
                        <div class="col-9">
                            <p>品名: {{ item.product.title }}</p>
                            <p>數量/單位:
                            <div class="input-group input-group-sm">
                                <select class="form-control" name="" id="" v-model="item.qty" @change="updateCartItem(item)"
                                    :disabled="item.id === loadingItem">
                                    <option :value="i" v-for="i in 20" :key="`${i}1223`">{{ i }}份</option>
                                </select>
                            </div>
                            </p>
                            <p>單價: <span v-if="allDiscount"><del>{{ item.product.origin_price }}</del> {{ item.product.price
                            }}</span>
                                <span v-else>{{ item.product.origin_price }}</span>
                            </p>
                            <p> <span v-if="allDiscount" class="text-end">
                                    <small class="text-success text-end">價格：</small>
                                    {{ item.total }}
                                </span>
                                <span v-else class="text-end">
                                    <small class="text-success text-end">價格：</small>
                                    {{ item.product.origin_price * item.qty }}
                                </span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul>
                <li v-if="couponOn">
                    <p colspan="4" class="text-end">折扣金額:{{ total - final_total }}</p>
                </li>
                <li v-if="allDiscount">
                    <productId colspan="4" class="text-end">折扣金額:{{ originPrice - total }}</productId>
                </li>
                <li v-else>
                </li>
                <li v-if="couponOn || allDiscount">
                    <p colspan="4" class="text-end text-success">最後金額: {{ final_total }}</p>
                </li>
                <li v-else>
                    <p colspan="4" class="text-end text-success">最後金額: {{ originPrice }}</p>
                </li>
                <li>
                    <p colspan="5" class="text-end">
                        <RouterLink :to="`/AllProducts`"
                            class="btn btn-outline-dark me-3 rounded-pill py-1 px-4 text-center">再逛逛</RouterLink>
                        <RouterLink :to="`/info`" class="btn btn-primary rounded-pill py-1 px-4 text-center">去結帳
                        </RouterLink>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import Swal from 'sweetalert2';
import { mapState, mapActions } from "pinia";
import cartStore from '@/stores/cart';

export default {

    data() {
        return {
            products: [],
            productId: '',
            cart: {},
            loadingItem: '',
            user: {},
            couponCode: '',
            allDiscount: false,
            couponOn: false,
            isLoading: false,
        }
    },
    computed: {
        ...mapState(cartStore, ['num', 'carts', 'total', 'final_total', 'originPrice']),
    },
    methods: {
        ...mapActions(cartStore, ['getCart', 'deleteItem']),
        getProducts(id) {
            this.loadingItem = id;
            this.isLoading = true;
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
                .then(res => {
                    console.log('產品列表:', res.data.products);
                    this.products = res.data.products;
                    this.loadingItem = "";
                    this.isLoading = false;
                })
        },

        updateCartItem(item) {//購物車id和產品id
            const data = {
                product_id: item.product.id,
                qty: item.qty,
            }
            console.log(data, item.id)
            this.loadingItem = item.id;
            this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
                .then(res => {
                    console.log('更新購物車:', res.data);
                    this.getCart();
                    this.loadingItem = "";
                })
        },

        getCoupon() {
            if (this.couponCode === "drunk") {
                this.allDiscount = true;
            }
            else {
                const data = { "code": this.couponCode }
                this.$http.post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/coupon`, { data })
                    .then(res => {
                        console.log(res)
                        this.couponOn = true,
                            this.getCart();
                        Swal.fire({
                            icon: 'success',
                            title: res.data.message,
                            showConfirmButton: false,
                            timer: 1700
                        })
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: "無此優惠券",
                            showConfirmButton: false,
                            timer: 1700
                        })
                        console.log(err)
                    })
            }
        }
    },


    mounted() {
        this.getProducts();
        this.getCart();
    }

}
</script>