import { defineStore } from "pinia";
import axios from 'axios'
import router from "@/router";
import Swal from 'sweetalert2'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

const cartStore = defineStore("cart", {
    state: () => {
        return {
            carts: [],
            cartNum: 0,
            total: 0,
            final_total: 0,
            originPrice: 0,
            num: 0,
            data: {
                user: {
                    name: "",
                    email: "",
                    tel: "",
                    address: "",
                },
                message: ""
            },
            loadingItem: "",
        }
    },
    actions: {
        getCart() {
            axios.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`)
                .then((res) => {
                    this.carts = res.data.data.carts
                    this.total = res.data.data.total
                    this.final_total = res.data.data.final_total
                    this.cartNum = 0
                    this.originPrice = 0
                    this.price = 0
                    for (let i = 0; i < this.carts.length; i++) {
                        this.cartNum += this.carts[i].qty;
                        this.originPrice += this.carts[i].product.origin_price;
                    }
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        submitInf(name) {
            this.data.user.name = name;
            router.push("/order")
        },
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
                })
        },
        addToOrder() {
            const data = this.data
            axios.post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order`, { data })
                .then(res => {
                    return new Promise(resolve => {
                        Swal.fire({
                            icon: 'success',
                            title: res.data.message,
                            showConfirmButton: false,
                            timer: 1700
                        }).then(() => resolve());
                    });
                })
                .then(() => {
                    router.push('/');
                    window.scrollTo(0, 0)
                });
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
                    axios.delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${item.id}`)
                        .then(res => {
                            console.log('刪除購物車:', res.data);
                            this.getCart();
                            this.loadingItem = "";
                        })
                    Swal.fire('刪除成功!', '', 'success')
                }
            })

        },
    },
    getters: {

    }

})
export default cartStore
