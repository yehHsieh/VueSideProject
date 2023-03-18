<template>
  <main>
    <div
      style="background-image:url(src/assets/img/pexels-picjumbocom-225236.jpg); height: 100vh;width: 100%; background-position: center; background-size: cover">
      <h2 class="position-relative" style="height:100vh;"><router-link to="/products"
          class="position-absolute end-20 top-55 text-center text-dark text-decoration-none">
          Gamara Bar
          <br>
          最初的心動
          <br>
          來點屬於你的調酒
        </router-link>
      </h2>
    </div>

    <!-- slogan -->
    <div class="bg-secondary">
      <div class="container py-5">
        <h3 class="fw-bold">專屬你的調酒</h3>
        <div class="text-center my-3">
          <h4 class="fw-bold">會不會?</h4>
          <p>有時突然很想喝調酒，去了酒吧卻不知如何點起，<br>有時在家突然想喝點調酒，卻不想出門
          </p>
          <p>
            沒關係，本店網站可提供 <br>依你喜愛口味挑出你的調酒， <br>或是一句你喜愛的調酒訂購原料自己完成
          </p>
        </div>
      </div>
    </div>

    <!-- light show -->
    <div class="bg-primary">
      DRINK WHEREEVER
    </div>

    <!-- two place -->
    <div class="d-flex">
      <div class="d-flex align-items-center justify-content-center"
        style="background-image:url(src/assets/img/home.jpg); height: 50vh; width: 50%; background-position: center; background-size: cover">
        <router-link to="/products" class=" text-white text-decoration-none fs-2">家裡喝
        </router-link>
      </div>
      <div class="d-flex align-items-center justify-content-center"
        style="background-image:url(src/assets/img/alexander-kovacs-spZexiKfZTs-unsplash.jpg); height: 50vh; width: 50%; background-position: center; background-size: cover">
        <router-link to="/Custom" class=" text-black text-decoration-none fs-2 bg-orangeLight">酒吧喝
        </router-link>
      </div>
    </div>

    <!-- swiper -->
    <div class="bg-secondary py-5">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <h2 class="fw-bold mb-3">調酒基底</h2>
        </div>
        <swiper :slides-per-view="3.5" :space-between="5" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide>
            <div class="card" style="width: 16rem;">
              <img src="../../assets/img/brandy(product2).jpg" class="card-img-top" alt="...">
              <div class="card-body bg-light text-center p-4">
                <h5 class="card-title">白蘭地</h5>
                <p class="card-text">白蘭地是葡萄酒蒸餾而成的烈性暖酒
                </p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card" style="width: 16rem;">
              <img src="../../assets/img/gin(product2).jpg" class="card-img-top" alt="...">
              <div class="card-body bg-light text-center p-4">
                <h5 class="card-title">琴酒</h5>
                <p class="card-text">琴酒是最常用來調製雞尾酒的基酒
                </p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card" style="width: 16rem;">
              <img src="../../assets/img/rum(product2).jpg" class="card-img-top" alt="...">
              <div class="card-body bg-light text-center p-4">
                <h5 class="card-title">蘭姆酒</h5>
                <p class="card-text">蘭姆酒是一種味道醇厚且芳香的酒類
                </p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card" style="width: 16rem;">
              <img src="../../assets/img/vodka(product2).jpg" class="card-img-top" alt="...">
              <div class="card-body bg-light text-center p-4">
                <h5 class="card-title">伏特加</h5>
                <p class="card-text">vodka意旨少量的水,由許多農作物蒸餾而成
                </p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card" style="width: 16rem;">
              <img src="../../assets/img/whisky(product2).jpg" class="card-img-top" alt="...">
              <div class="card-body bg-light text-center p-4">
                <h5 class="card-title">威士忌</h5>
                <p class="card-text">由發酵的發芽穀物經過蒸餾釀造而成
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

    </div>
    <!--  -->

    <!-- news -->
    <div class="container my-5">
      <h2 class="fw-bold">最新消息</h2>
      <ul>
        <li class="row border-bottom pt-3 pb-2">
          <div class="col-8">跨年夜 12/31 8 PM HAPPY HOUR </div>
          <div class="col-4">2022/12/29</div>
        </li>
        <li class="row border-bottom pt-3 pb-2">
          <div class="col-8">樂團得卡就應 Live 演出 </div>
          <div class="col-4">2022/11/29</div>
        </li>
        <li class="row border-bottom pt-3 pb-2">
          <div class="col-8">10/25老闆去思考人生店休一天</div>
          <div class="col-4">2022/10/20</div>
        </li>
      </ul>
    </div>

    <!-- light show -->
    <div class="bg-primary">
      DRINK WHEREEVER
    </div>

    <!-- bar info -->
    <div class="container my-5">
      <h2 class="fw-bold">酒吧資訊</h2>
      <ul class="row">
        <ul class="col-7 my-4">
          <li class="mb-3">營業時間 : Fri - Sun 1800 PM ~ 0100 AM</li>
          <li class="mb-3">地址 : 台南市中西區民族路二段</li>
          <li>連絡電話 : 090023002030</li>
        </ul>
        <li class="col-5"><img src="../../assets/img/pexels-clem-onojeghuo-185768.jpg" alt="shop"></li>
      </ul>
    </div>
  </main>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
