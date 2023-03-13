<template>
    <div class="d-flex justify-content-between align-items-center text-center">
        <h1 class="mb-0">
            <a class="navbar-brand me-0 py-0" href="index.html"><img src="" alt="logo"
                    style="width: 60px; height: 60px;"></a>
        </h1>
    </div>
    <div class="bg-secondary">
        <nav class="navbar navbar-expand-lg py-0 sticky-top d-flex justify-content-between container">
            <div class="py-3 py-lg-4 d-flex align-items-center">

                <input class="menu-check" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    type="checkbox" id="menu-check" />
                <label class="menu-open-button d-inline" for="menu-check">
                    <div class="ham">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
            </div>



            <!-- 下拉選單 -->
            <div class="collapse navbar-collapse border-0 justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav text-center fw-bold">
                    <li class="nav-item  border-base py-lg-2">
                        <router-link to="/" class="nav-link py-3 mx-1 px-lg-3  list-group-item-hover fs-lg-5">首頁
                        </router-link>
                    </li>

                    <li class="nav-item  border-base py-lg-2">
                        <router-link to="/Custom" class="nav-link py-3 mx-1 px-lg-3  list-group-item-hover fs-lg-5">關於
                        </router-link>
                    </li>
                    <li class="nav-item  border-base py-lg-2">
                        <router-link to="/products" class="nav-link py-3 mx-1 px-lg-3  list-group-item-hover fs-lg-5">前台產品列表
                        </router-link>
                    </li>
                    <li class="nav-item  border-base py-lg-2">
                        <router-link to="/cart"
                            class="nav-link py-3 mx-1 px-lg-3  list-group-item-hover fs-lg-5 position-relative fs-7">


                            <span class="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger ">
                                {{ cartNum }}
                                <span class="visually-hidden">unread messages</span>
                            </span>


                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </router-link>
                    </li>
                    <li class="nav-item  border-base py-lg-2">
                        <router-link to="/Admin" class="nav-link py-3 mx-1 px-lg-3  list-group-item-hover fs-lg-5">後台
                        </router-link>
                    </li>
                    <li class="nav-item border-base py-lg-2">
                        <router-link to="/Login" class="nav-link py-3 mx-1 px-lg-3  list-group-item-hover fs-lg-5">登入
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>

    </div>




    <router-view></router-view>

    <footer class="footer bg-secondary py-2">
        <div class="container text-center d-lg-flex justify-content-between align-items-center">
            <router-link to="/">
                <h2 class="m-0"><img src="" alt="logo" style="width: 50px; height: 50px;"></h2>
            </router-link>
            <p class="fs-12p fs-lg-14p m-0">©BREAD / all rights reserved.</p>
            <ul class="d-flex justify-content-center justify-content-lg-between m-0 p-0">
                <li><a href="#" class="px-2 fs-4 fs-lg-3 text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg></a></li>

                <li><a href="#" class="px-2 fs-4 fs-lg-3 text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path
                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg></a></li>

                <li><a href="#" class="px-2 fs-4 fs-lg-3 text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg></a></li>
            </ul>
        </div>
    </footer>
</template>
  
<script>
import { RouterView, RouterLink } from 'vue-router';
import cartStore from '../stores/cart';
import { mapActions, mapState } from "pinia";


export default {
    computed: {
        ...mapState(cartStore, ['data', 'carts', 'total', 'final_total','cartNum']),
    },
    components: {
        RouterView,
        RouterLink,
    },
    methods:{
        ...mapActions(cartStore, ['getCart'])
    },
    mounted(){
        this.getCart()
    }
};
</script>