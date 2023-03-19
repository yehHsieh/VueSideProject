<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container">
    <div class="d-lg-flex justify-content-between my-5">
      <h2 class="fw-bold">挑出自己偏好的調酒吧</h2>
      <RouterLink to="/game" class="none-decoration">
        <p class="btn btn-primary d-inline rounded-pill py-lg-3">今日調酒<svg xmlns="http://www.w3.org/2000/svg" width="16"
            height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
          </svg></p>

      </RouterLink>
    </div>

    <h3 class="mb-3 mt-5">步驟一: 選風味</h3>
    <ul class="row mt-3 mb-5 p-0">
      <li class="col-lg-2 col-md-4 text-center my-1"><a href="" class="btn btn-outline-fav d-block rounded-pill py-3"
          @click.prevent="getFavProducts('甜')" v-bind:class="{ active: isActive1 }">甜</a></li>
      <li class="col-lg-2 col-md-4 text-center my-1"><a href="" class="btn btn-outline-fav d-block rounded-pill py-3"
          @click.prevent="getFavProducts('適中')" v-bind:class="{ active: isActive2 }">適中</a></li>
      <li class="col-lg-2 col-md-4 text-center my-1"><a href="" class="btn btn-outline-fav d-block rounded-pill py-3"
          @click.prevent="getFavProducts('不甜')" v-bind:class="{ active: isActive3 }">不甜</a></li>
    </ul>
    <h3 class="my-3">步驟二: 選酒精度數</h3>
    <ul class="row mt-3 mb-5 p-0">
      <li class="col-lg-2 col-md-4 text-center my-1"><a href="" class="btn btn-outline-alc d-block rounded-pill py-3"
          @click.prevent="getAlcProducts('20')">&lt 20度</a></li>
      <li class="col-lg-2 col-md-4 text-center my-1"><a href="" class="btn btn-outline-alc d-block rounded-pill py-3"
          @click.prevent="getAlcProducts('30')">20度~40度</a></li>
      <li class="col-lg-2 col-md-4 text-center my-1"><a href="" class="btn btn-outline-alc d-block rounded-pill py-3"
          @click.prevent="getAlcProducts('40')">&gt 40度</a></li>
    </ul>



    <ul class="row my-5 p-0" v-if="tempProducts.length > 0 && showNum">
      <li v-for="product in tempProducts" :key="product.id"
        class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
        <div class="card border-0">
          <a style="cursor: pointer;" class="overflow-hidden"><img :src="product.imagesUrl" alt="" width="200"></a>

          <div class="card-body text-center">
            <h3 class="card-title fs-4 mt-3">{{ product.title }}</h3>
            <p class="card-text me-2">$ {{ product.origin_price }}</p>
            <!-- <p class="card-text text-secondary text-dark"><del>$ {{ product.origin_price }}</del></p> -->

            <p>
              <RouterLink :to="`/product/${product.id}`" class="text-dark fw-bold bottom-line text-decoration-none">詳細資訊
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </RouterLink>
            </p>
          </div>
        </div>
      </li>
    </ul>

<ul class="row my-5 p-0" v-if="finalProducts.length > 0">
      <li v-if="finalProducts.length > 0" v-for="product in finalProducts" :key="`${product.id}1`"
        class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
        <div class="card border-0" v-if="finalProducts.length > 0">
          <a style="cursor: pointer;" class="overflow-hidden"><img :src="product.imagesUrl" alt="" width="200"></a>

          <div class="card-body text-center">
            <h3 class="card-title fs-4 mt-3">{{ product.title }}</h3>
            <p class="card-text me-2">$ {{ product.origin_price }}</p>
            <!-- <p class="card-text text-secondary text-dark"><del>$ {{ product.origin_price }}</del></p> -->

            <p>
              <RouterLink :to="`/product/${product.id}`" class="text-dark fw-bold bottom-line text-decoration-none">詳細資訊
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </RouterLink>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <p v-if="!showNum &&  finalProducts.length==0">無符合條件商品</p>
    <p v-if="tempProducts.length==0" style="height: 50vh;">尚未選擇喜好</p>

  </div>

  <div class="bg-secondary py-3">
    <div class="container">
      <h3 class="fw-bold">我的收藏</h3>
      <p v-if="favoriteItems.length == 0">尚未有收藏</p>
      <ul class="row my-5 p-0" v-else>
        <li v-for="(product, inde) in favoriteItems" :key="product.id"
          class="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
          <div class="card border-0">

            <a style="cursor: pointer;" class="overflow-hidden position-relative"><img :src="product.imagesUrl" alt=""
                width="200"></a>

            <div class="card-body text-center">
              <h3 class="card-title fs-4 mt-3">{{ product.title }}</h3>
              <p class="card-text me-2">$ {{ product.origin_price }}</p>
              <!-- <p class="card-text text-secondary text-dark"><del>$ {{ product.origin_price }}</del></p> -->

              <p>
                <RouterLink :to="`/product/${product.id}`" class="text-dark fw-bold bottom-line text-decoration-none">詳細資訊
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </RouterLink>
              </p>
            </div>
          </div>
        </li>
        <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
      </ul>
    </div>

  </div>
</template>

<script >
import Swal from 'sweetalert2'
import { RouterLink } from 'vue-router';
import favoritesStore from '../../stores/favorites'
import { mapState } from 'pinia';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: {},
      isLoading: false,
      tempProducts: [],
      finalProducts: [],
      tempFav: '',
      tempAlc: 0,
      showNum: true,
      isActive1: false,
      isActive2: false,
      isActive3: false
    }
  },
  computed: {
    ...mapState(favoritesStore, ['favoriteItems'])
  },
  methods: {
    getFavProducts(fav) {
      this.finalProducts = []
      this.isLoading = true;
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.showNum = true,
      this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
          this.tempProducts = []
          this.tempFav = fav
          this.products.forEach(i => {
            if (this.tempFav == "甜" && i.fav == "甜") {
              this.tempProducts.push(i);
              this.isActive1 = true
            }
            if (this.tempFav == "適中" && i.fav == "適中") {
              this.tempProducts.push(i);
              this.isActive2 = true

            }
            if (this.tempFav == "不甜" && i.fav == "不甜") {
              this.tempProducts.push(i);
              this.isActive3 = true
            }
          })
          this.isLoading = false;
        })
    },

    getAlcProducts(alc) {
      console.log(this.finalProducts)
      this.isLoading = true;
      this.tempAlc = alc
      this.finalProducts = []
      if (this.tempProducts.length == 0) {
        Swal.fire({
          icon: 'error',
          title: '請先選擇風味',
        })
      }
      this.tempProducts.forEach(i => {
        if (this.tempAlc == '20' && i.alc < 20) {
          this.finalProducts.push(i);
console.log(i)
console.log(this.finalProducts)
console.log(this.finalProducts.length)
        }
        if (this.tempAlc == '30' && i.alc >= 20 && i.alc < 40) {
          this.finalProducts.push(i);

        }
        if (this.tempAlc == '40' && i.alc >= 40) {
          this.finalProducts.push(i);
        }
        if (this.finalProducts.length == 0) {
          this.showNum = false
        }
      })
      this.isLoading = false;
    },


  },

  created() {

  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
