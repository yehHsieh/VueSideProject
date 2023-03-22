<template>
    <div
        :style="{backgroundImage: `url(${bgImg})`, backgroundPosition: 'center', backgroundSize: 'cover'}">
        <div class="container py-5">
            <ul class="progresses m-0 d-flex">
                <li>商品確認</li>
                <li class="active">訂購人資訊</li>
                <li>訂單完成</li>
            </ul>
            <div class="row">
                <div class="col-lg-6"></div>
                <div class="col-lg-6">
                    <div class="bg-opacity p-3 mt-3 p-lg-0 mt-lg-0 p-lg-0">
                        <div class="my-lg-5 py-lg-5 row justify-content-center" style="position: relative; z-index: 2;">
                            <v-form ref="form" class="col-md-8" v-slot="{ errors }" @submit="submitInf(data.user.name)">
                                <h2>訂購人資訊</h2>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <v-field id="email" name="email" type="email" class="form-control"
                                        rules="required|email" :class="{ 'is-invalid': errors['email'] }"
                                        placeholder="請輸入 Email" v-model.trim="data.user.email"></v-field>
                                    <error-message name="email" class="invalid-feedback"></error-message>
                                </div>

                                <div class="mb-3">
                                    <label for="name" class="form-label">收件人姓名</label>
                                    <v-field id="name" name="姓名" type="text" class="form-control"
                                        :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required"
                                        v-model.trim="data.user.name"></v-field>
                                    <error-message name="姓名" class="invalid-feedback"></error-message>
                                </div>

                                <div class="mb-3">
                                    <label for="tel" class="form-label">收件人電話</label>
                                    <v-field id="tel" name="電話" type="text" class="form-control"
                                        :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話"
                                        rules="required|numeric|min:8|digits:8" v-model.trim="data.user.tel"></v-field>
                                    <error-message name="電話" class="invalid-feedback"></error-message>
                                </div>

                                <div class="mb-3">
                                    <label for="address" class="form-label">收件人地址</label>
                                    <v-field id="address" name="地址" type="text" class="form-control"
                                        :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required"
                                        v-model.trim="data.user.address"></v-field>
                                    <error-message name="地址" class="invalid-feedback"></error-message>
                                </div>

                                <div class="mb-3">
                                    <label for="message" class="form-label">備註:</label>
                                    <textarea id="message" class="form-control" cols="30" rows="10"
                                        v-model.trim="data.message"></textarea>
                                </div>
                                <div class="text-end">
                                    <RouterLink :to="`/cart`"
                                        class="btn btn-outline-dark me-3 rounded-pill py-1 px-4 text-center">上一步
                                    </RouterLink>
                                    <!-- <button type="submit"
                                        class="btn btn-danger rounded-pill py-1 px-4 text-center">送出訂單</button> -->
                                    <!-- <RouterLink :to="`/order`"
                                        class="btn btn-danger rounded-pill py-1 px-4 text-center">確認
                                    </RouterLink> -->
                                    <button type="submit"
                                        class="btn btn-danger rounded-pill py-1 px-4 text-center">確認</button>
                                </div>
                            </v-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
import { mapActions, mapState } from "pinia";
import cartStore from '../../stores/cart'
import bgImg from '@/assets/img/inf-pexels-pixabay-37925.jpg'

export default {
    data() {
        return {
            user: {
                "name": "",
                "email": "",
                "tel": "",
                "address": ""
            },
            "message": "",
            bgImg:bgImg
        }
    },
    computed: {
        ...mapState(cartStore, ['data']),
    },
    methods: {
        ...mapActions(cartStore,['submitInf']),
        addToOrder() {
            const data = {
                user: {
                    "name": this.user.name,
                    "email": this.user.email,
                    "tel": this.user.tel,
                    "address": this.user.address,
                },
                "message": this.user.message,
            }
            this.$http.post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order`, { data })
                .then(res => {
                    this.$router.push('/order')
                })
        },


    },
}
</script>