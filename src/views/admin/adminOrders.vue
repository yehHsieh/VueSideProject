<template>
    後臺訂單列表
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <table class="table mt-4">
        <thead>
            <tr>  
                <th>購買時間</th>
                <th>Email</th>
                <th>購買款項</th>
                <th>應付金額</th>
                <th>是否付款</th>
                <th>編輯</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(item, key) in orders" :key="key">
                <tr v-if="orders.length" :class="{ 'text-danger': !item.is_paid }">
                    <!-- <td>{{ $filters.date(item.create_at) }}</td> -->
                    <!-- <td>{{ item.created_at | formatDate }}</td> -->
                    <td></td>
                    
                    <td><span v-text="item.user.email" v-if="item.user"></span></td>
                    <td>
                        <ul class="list-unstyled">
                            <li v-for="(product, i) in item.products" :key="i">
                                {{ product.product.title }} 數量：{{ product.qty }}
                                {{ product.product.unit }}
                            </li>
                        </ul>
                    </td>
                    <td class="text-right">{{ item.total }}</td>
                    <td>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                                v-model="item.is_paid" @change="updatePaid(item)" />
                            <label class="form-check-label" :for="`paidSwitch${item.id}`">
                                <span v-if="item.is_paid">已付款</span>
                                <span v-else>未付款</span>
                            </label>
                        </div>
                    </td>
                    <td>
                        <div class="btn-group">
                            <button class="btn btn-outline-primary btn-sm" type="button" @click="openModal(item)">
                                檢視
                            </button>
                            <button class="btn btn-outline-danger btn-sm" type="button" @click="openDelOrderModal(item)">
                                刪除
                            </button>
                        </div>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
    <OrderModal :order="tempOrder" ref="orderModal" @update-paid="updatePaid"></OrderModal>
    <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
</template>

<script>
import OrderModal from '../../components/OrderModal.vue'
import DelModal from '../../components/DelModal.vue';
import Pagination from '../../components/Pagination.vue';


const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
    data() {
        return {
            orders: {},
            isNew: false,
            pagination: {},
            isLoading: false,
            tempOrder: {},
            currentPage: 1,
        }
    },
    components: {
        OrderModal,
        DelModal,
        Pagination,
    },
    methods: {
        getOrders(currentPage = 1) {
            this.currentPage = currentPage;
            const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/orders?page=${currentPage}`;
            this.isLoading = true;
            this.$http.get(api, this.tempProduct).then((response) => {
                this.orders = response.data.orders;
                this.pagination = response.data.pagination;
                this.isLoading = false;
            }).catch((error) => {
                this.isLoading = false;
                // this.$httpMessageState(error.response, '錯誤訊息');
            });
        },
        updatePaid(item) {
            const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${item.id}`;
            const paid = {
                is_paid: item.is_paid,
            };
            this.$http.put(api, { data: paid }).then((response) => {
                this.isLoading = false;
                const orderComponent = this.$refs.orderModal;
                orderComponent.hideModal();
                this.getOrders(this.currentPage);
                // this.$httpMessageState(response, '更新付款狀態');
            }).catch((error) => {
                this.isLoading = false;
                // this.$httpMessageState(error.response, '錯誤訊息');
            });
        },
        openModal(item) {
            this.tempOrder = { ...item };
            this.isNew = false;
            const orderComponent = this.$refs.orderModal;
            orderComponent.openModal();
        },
        openDelOrderModal(item) {
            this.tempOrder = { ...item };
            const delComponent = this.$refs.delModal;
            delComponent.openModal();
        },
        delOrder() {
            const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`;
            this.isLoading = true;
            this.$http.delete(url).then(() => {
                this.isLoading = false;
                const delComponent = this.$refs.delModal;
                delComponent.hideModal();
                this.getOrders(this.currentPage);
            }).catch((error) => {
                this.isLoading = false;
                // this.$httpMessageState(error.response, '錯誤訊息');
            });
        },
    },
    mounted() {
        this.getOrders();
    },
}
</script>