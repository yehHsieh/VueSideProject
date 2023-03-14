<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container">
    <h2>挑出自己偏好的調酒吧</h2>
    <h3>我的收藏</h3>
    <h3>步驟一: 選風味</h3>
    <ul class="row">
      <li class="col-2 text-center"><a href="" class="btn btn-outline-fav d-block rounded-pill py-3"
          @click.prevent="getFavProducts('甜')">甜</a></li>
      <li class="col-2 text-center"><a href="" class="btn btn-outline-fav d-block rounded-pill py-3"
          @click.prevent="getFavProducts('適中')">適中</a></li>
      <li class="col-2 text-center"><a href="" class="btn btn-outline-fav d-block rounded-pill py-3"
          @click.prevent="getFavProducts('不甜')">不甜</a></li>
    </ul>
    <h3>步驟二: 選酒精度數</h3>
    <ul class="row">
      <li class="col-2 text-center"><a href="" class="btn btn-outline-alc d-block rounded-pill py-3">&lt 10度</a></li>
      <li class="col-2 text-center"><a href="" class="btn btn-outline-alc d-block rounded-pill py-3">10度~20度</a></li>
      <li class="col-2 text-center"><a href="" class="btn btn-outline-alc d-block rounded-pill py-3" @click.prevent="getAlcProducts(25)">&gt 20度</a></li>
    </ul>



    <ul class="row my-5" v-if="products.length > 0">
      <li v-if="finalProducts.length <= 0" v-for="product in tempProducts" :key="product.id"
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

      <li v-else v-for="product in finalProducts" :key="`${product.id}1`"
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

    <p v-else>尚未選擇喜好</p>
  </div>
  {{ finalProducts }}
</template>

<script >
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: {},
      isLoading: false,
      tempProducts: [],
      finalProducts:[],
      tempFav: '',
      tempAlc: 0
    }
  },
  methods: {
    getFavProducts(fav) {
      this.isLoading = true;
      this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
          this.tempProducts = []
          this.tempFav = fav
          this.products.forEach(i => {
            if (this.tempFav == "甜" && i.fav == "甜") {
              this.tempProducts.push(i);
            }
            if (this.tempFav == "適中" && i.fav == "適中") {
              this.tempProducts.push(i);
            }
            if (this.tempFav == "不甜" && i.fav == "不甜") {
              this.tempProducts.push(i);
            }
          })
          this.isLoading = false;
        })
    },

    getAlcProducts(alc) {
      this.isLoading = true;
      this.tempAlc = alc
      this.finalProducts = []
      this.tempProducts.forEach(i => {
        if (this.tempAlc > 20 && i.alc > 20) {
          this.finalProducts.push(i);
        }
      })
      this.isLoading = false;
    },


  },

  mounted() {
    
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
