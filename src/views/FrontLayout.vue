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
                        <router-link to="/cart" class="nav-link py-3 mx-1 px-lg-3  list-group-item-hover fs-lg-5">前台購物車
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
</template>
  
<script>
import { RouterView, RouterLink } from 'vue-router';

export default {
    components: {
        RouterView,
        RouterLink,
    },
};
</script>