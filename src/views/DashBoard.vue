<template>
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
                    
                    <li class="nav-item  border-base py-lg-2 me-2">
                        <router-link to="/admin/AdminOrders">後臺訂單</router-link> 

                    </li>

                    <li class="nav-item  border-base py-lg-2 me-2">
                        <router-link to="/admin/AdminProducts">後臺產品</router-link> 

                    </li>
                    <li class="nav-item  border-base py-lg-2 me-2">
                        <router-link to="/">回前台</router-link> 
                    </li>
                    <li class="nav-item  border-base py-lg-2 me-2">
                        <a href="#" @click.prevent="logout">登出</a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>


    <h1 class="mb-5">這裡是後台頁面</h1>


    <!-- <router-link to="/admin">後台首頁</router-link> -->
    <hr />
    <router-view></router-view>
</template>
  
<script>
const { VITE_APP_URL } = import.meta.env;
import { RouterView, RouterLink } from 'vue-router';

export default {
    data() {
        return {
            status: false,
        };
    },
    components: {
        RouterView,
        RouterLink,
    },
    methods: {
        logout() {
            document.cookie = `hexSchool = ;
                    expires = `
            this.$router.push('/Login')
        },
        checkAdmin() {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/, '$1');
            this.$http.defaults.headers.common.Authorization = token;
            this.$http.post(`${VITE_APP_URL}v2/api/user/check`)
                .then((res) => {
                    // this.getData();
                    if (!res.data.success) {
                        alert('請先登入')
                        this.$router.push('/Login')
                    }
                    else {
                        this.status = true;
                    }
                })
                .catch((err) => {
                    alert("帳密錯誤")
                    this.$router.push('/Login')
                })
        },
    },
    mounted() {
        this.checkAdmin();
    }
};
</script>