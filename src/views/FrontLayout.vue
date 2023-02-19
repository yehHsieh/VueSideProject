<template>
    <h1 class="mb-5">這裡是前台頁面</h1>|
    <router-link to="/">首頁</router-link> |
    <router-link to="/about">關於</router-link>|
    <router-link to="/products">前台產品列表</router-link> |
    <router-link to="/cart">前台購物車</router-link> 
    <!-- <router-link to="/admin">後台首頁</router-link> -->
    <hr />
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