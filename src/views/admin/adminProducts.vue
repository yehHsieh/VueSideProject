<template>
    後臺產品列表
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="container">
        <div class="text-end mt-4">
            <button class="btn btn-primary" @click="openModal(true)">
                建立新的產品
            </button>
        </div>
    </div>
    <table class="table mt-4">
        <thead>
            <tr>
                <th width="120">
                    分類
                </th>
                <th>產品名稱</th>
                <th width="120">
                    原價
                </th>
                <th width="120">
                    售價
                </th>
                <th width="100">
                    是否啟用
                </th>
                <th width="120">
                    編輯
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item) in products" :key="item.id">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td class="text-end">{{ item.origin_price }}</td>
                <td class="text-end">{{ item.price }}</td>
                <td>
                    <span class="text-success" v-if="item.is_enabled">啟用</span>
                    <span v-else>未啟用</span>
                </td>
                <td>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
                            編輯
                        </button>
                        <button type="button" class="btn btn-outline-danger btn-sm" @click="openDelProductModal(item)">
                            刪除
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    <!-- Modal -->
    <product-modal @update-product="updateProduct" :product="tempProduct" :isNew="isNew" ref="productModal" />
    <!-- DelModal -->
    <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"></DelModal>
</template>


<script>
import ProductModal from '../../components/ProductModal.vue';
import DelModal from '../../components/DelModal.vue'
import Pagination from '../../components/Pagination.vue';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
    data() {
        return {
            products: [],
            tempProduct: {},
            isNew: false,
            pagination: {},
            isLoading: false,
            currentPage: 1,
        }
    },
    components: {
        ProductModal,
        Pagination,
        DelModal,
    },
    methods: {
        getProducts(page = 1) {
            this.currentPage = page;
            const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/products?page=${page}`;
            this.isLoading = true;
            this.$http.get(api).then((response) => {
                this.products = response.data.products;
                this.pagination = response.data.pagination;
                this.isLoading = false;

            }).catch((error) => {
                this.isLoading = false;
                this.$httpMessageState(err.response.data.message);
            });
        },
        openModal(isNew, item) {
            if (isNew === true) {
                this.tempProduct = {};
                this.isNew = true;
            } else if (isNew === "edit") {
                this.tempProduct = { ...item };
                this.isNew = false;
            }
            console.log(this.$refs)
            const productComponent = this.$refs.productModal;
            productComponent.openModal();
        },
        openDelProductModal(item) {
            this.tempProduct = { ...item };
            const delComponent = this.$refs.delModal;
            delComponent.openModal();
        },
        updateProduct( tempProduct, productModal) {
            let http = "post";
            let api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/product`;
            const productComponent = this.$refs.productModal;
            if (!this.isNew) {
                http = "put";
                api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/product/${tempProduct.id}`;
            }
            this.$http[http](api, {
                data: this.tempProduct
            }).then((response) => {
                alert(response.data.message);
                productComponent.hideModal();
                this.getProducts(this.currentPage);
            }).catch((err) => {
                alert(err.response.data.message);
            })
        },
        // updateProduct(item) {
        //     // console.log(item)
        //     this.tempProduct = item;
        //     let api = `${import.meta.env.VITE_APP_URL}api/${import.meta.env.VITE_APP_PATH}/admin/product`;
        //     this.isLoading = true;
        //     let httpMethod = 'post';
        //     let status = '新增產品';
        //     if (!this.isNew) {
        //         console.log(this.tempProduct)
        //         api = `${import.meta.env.VITE_APP_URL}api/${import.meta.env.VITE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        //         httpMethod = 'put';
        //         status = '更新產品';
        //         console.log(this.tempProduct)
        //         this.products = res.data.products;
        //         this.pagination = res.data.pagination;
        //     }
        //     const productComponent = this.$refs.productModal;
        //     this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        //         this.isLoading = false;
        //         // this.$httpMessageState(response, status);
        //         productComponent.hideModal();
        //         this.getProducts(this.currentPage);
        //     }).catch((error) => {
        //         this.isLoading = false;
        //         // this.$httpMessageState(error.response, status);
        //     });
        // },
        delProduct(delModal) {
            const delComponent = this.$refs.delModal;
            this.$http.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`)
                .then((res) => {
                    alert(res.data.message);
                    delComponent.hideModal();
                this.getProducts(this.currentPage);
                })
                .catch((err) => {
                    alert(err.response.data.message);
                })
        },
    },
    mounted() {
        this.getProducts();
    },
}
</script>