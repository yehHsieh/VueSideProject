<template>
    這是購物車頁面
    <table class="table align-middle">
        <thead>
            <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
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
                                <option :value="i" v-for="i in 20" :key="`${i}1223`">{{ i }}</option>
                            </select>
                        </div>
                    </td>
                    <td class="text-end">
                        <small class="text-success">價格：</small>
                        {{ item.total }}
                    </td>
                </tr>
            </template>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ cart.total }}</td>
            </tr>
            <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ cart.final_total }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<script>

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {

    data() {
        return {
            products: [],
            productId: '',
            cart: {},
            loadingItem: '',
            user: {},
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
            this.loadingItem = item.id;
            this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
                .then(res => {
                    console.log('刪除購物車:', res.data);
                    this.getCarts();
                    this.loadingItem = "";
                })
        }
    },


    mounted() {
        this.getProducts();
        this.getCarts();
    }

}
</script>