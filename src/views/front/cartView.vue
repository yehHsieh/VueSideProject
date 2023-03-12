<template>
    這是購物車頁面
    <ul class="progresses m-0 d-flex">
        <li class="active">商品確認</li>
        <li>訂購人資訊</li>
        <li>訂單完成</li>
    </ul>
    <div class="container my-5 p-3 bg-secondary">
        <div class="d-flex justify-content-between">
            <h2>商品確認</h2>
            <div class="d-flex justify-content-between">
                <input type="text" class="me-3 rounded-pill" v-model.trim="couponCode" placeholder="請輸入優惠碼">
                <button class="btn btn-outline-primary rounded-pill py-1 px-4 text-center" @click="getCoupon">驗證優惠碼</button>
            </div>
        </div>
        <table class="table align-middle">
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
                <template v-if="cart.carts">
                    <tr v-for="item in cart.carts" :key="item.id">
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

                <tr>
                    <td colspan="4" class="text-end">折扣金額:</td>
                    <td class="text-end">{{ cart.total - cart.final_total }}</td>
                </tr>
                <tr v-if="couponOn || allDiscount">
                    <td colspan="4" class="text-end text-success">最後金額:</td>
                    <td class="text-end text-success">{{ cart.final_total }}</td>
                </tr>
                <tr v-else>
                    <td colspan="4" class="text-end text-success">最後金額:</td>
                    <td class="text-end text-success">{{ cart.final_total }}</td>
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
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import Swal from 'sweetalert2';

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
        }
    },

    methods: {
        getProducts(id) {
            this.loadingItem = id;
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
                .then(res => {
                    console.log('產品列表:', res.data.products);
                    this.products = res.data.products;
                    this.loadingItem = "";
                })
        },
        getCarts() {
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
                .then(res => {
                    console.log('購物車:', res.data);
                    this.cart = res.data.data;
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
                    this.getCarts();
                    this.loadingItem = "";
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
                    this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
                        .then(res => {
                            console.log('刪除購物車:', res.data);
                            this.getCarts();
                            this.loadingItem = "";
                        })
                    Swal.fire('刪除成功!', '', 'success')
                }
            })

        },
        getCoupon() {
            if (this.couponCode === "drunk") {
                this.allDiscount = true;
            }
            else {
                const data = { "code": this.couponCode }
                this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/coupon`, { data })
                    .then(res => {
                        console.log(res)
                        this.couponOn = true,
                        this.getCarts();
                        Swal.fire({
                        icon: 'success',
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 1700
                    })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    },


    mounted() {
        this.getProducts();
        this.getCarts();
    }

}
</script>