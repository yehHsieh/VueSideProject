<template>
  <main>
    <div
      :style="{ backgroundImage: `url(${img})`, height: '100vh', width: '100%', backgroundPosition: 'center', backgroundSize: 'cover' }">
      <h2 class="position-relative" style="height:100vh;">
        <RouterLink to="/AllProducts"
          class="position-absolute end-20 top-55 text-center text-dark text-decoration-none p-3"
          style="background:rgba(255, 255, 255, 0.3);backdrop-filter:blur(2px);border-radius:24px;">
          Gamara Bar
          <br>
          最初的心動
          <br>
          來點屬於你的調酒
        </RouterLink>
      </h2>
    </div>

    <!-- slogan -->
    <div class="bg-secondary">
      <div class="container py-5">
        <h3 class="fw-bold text-lg-start text-center my-4">專屬你的調酒</h3>
        <div class="text-center my-3">
          <h4 class="fw-bold">會不會?</h4>
          <p>有時突然很想喝調酒，去了酒吧卻不知如何點起，<br>有時在家突然想喝點調酒，卻不想出門
          </p>
          <p>
            沒關係，本店網站可提供 <br>依你喜愛口味挑出你的調酒請點選<span class="text-danger">酒吧喝</span>， <br>或是找你喜愛的調酒訂購原料自己完成請點選<span
              class="text-danger">家裡喝</span>
          </p>
        </div>
      </div>
    </div>

    <!-- light show -->
    <div class="bg-primary" v-vue-aos="{animationClass:'fadeIn animated'}">
      DRINK WHEREEVER
    </div>

    <!-- two place -->
    <div class="d-flex">
      <div class="d-flex align-items-center justify-content-center"
        :style="{ backgroundImage: `url(${imgHome})`, height: '50vh', width: '50%', backgroundPosition: 'center', backgroundSize: 'cover' }">
        <RouterLink to="/AllProducts" class="text-white text-decoration-none fs-2 p-3"
          style="background:rgba(255, 255, 255, 0.6);backdrop-filter:blur(2px);border-radius:24px;">家裡喝
        </RouterLink>
      </div>
      <div class="d-flex align-items-center justify-content-center"
        :style="{ backgroundImage: `url(${imgBar})`, height: '50vh', width: '50%', backgroundPosition: 'center', backgroundSize: 'cover' }">
        <RouterLink to="/Custom" class=" text-black text-decoration-none fs-2 p-3"
          style="background:rgba(255, 255, 255, 0.6);backdrop-filter:blur(2px);border-radius:24px;">酒吧喝
        </RouterLink>
      </div>
    </div>

    <!-- swiper -->
    <div class="bg-secondary py-5">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <h2 class="fw-bold mb-3">調酒基底</h2>
        </div>
        <swiper :slides-per-view="3.5" :space-between="5" @swiper="onSwiper" @slideChange="onSlideChange" :breakpoints="{
          '350': {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          '800': {
            slidesPerView: 2.2,
            spaceBetween: 1,
          },
          '850': {
            slidesPerView: 3.5,
            spaceBetween: 15,
          },
        }">
          <swiper-slide>
            <RouterLink to="/brandy" class="text-decoration-none">
              <div class="card rounded-24" style="width: 16rem;">
                <img src="../../assets/img/brandy(product2).jpg" class="card-img-top" alt="...">
                <div class="card-body bg-light text-center p-4 text-black">
                  <h5 class="card-title">白蘭地</h5>
                  <p class="card-text">白蘭地是葡萄酒蒸餾而成的烈性暖酒
                  </p>
                </div>
              </div>
            </RouterLink>

          </swiper-slide>

          <swiper-slide>
            <RouterLink to="/gin" class="text-decoration-none">
              <div class="card rounded-24" style="width: 16rem;">
                <img src="../../assets/img/gin(product2).jpg" class="card-img-top" alt="...">
                <div class="card-body bg-light text-center p-4 text-black">
                  <h5 class="card-title">琴酒</h5>
                  <p class="card-text">琴酒是最常用來調製雞尾酒的基酒
                  </p>
                </div>
              </div>
            </RouterLink>
          </swiper-slide>

          <swiper-slide>
            <RouterLink to="/rum" class="text-decoration-none">
              <div class="card rounded-24" style="width: 16rem;">
                <img src="../../assets/img/rum(product2).jpg" class="card-img-top" alt="...">
                <div class="card-body bg-light text-center p-4 text-black">
                  <h5 class="card-title">蘭姆酒</h5>
                  <p class="card-text">蘭姆酒是一種味道醇厚且芳香的酒類
                  </p>
                </div>
              </div>
            </RouterLink>
          </swiper-slide>

          <swiper-slide>
            <RouterLink to="/vodka" class="text-decoration-none">
              <div class="card rounded-24" style="width: 16rem;">
                <img src="../../assets/img/vodka(product2).jpg" class="card-img-top" alt="...">
                <div class="card-body bg-light text-center p-4 text-black">
                  <h5 class="card-title">伏特加</h5>
                  <p class="card-text">vodka意旨少量的水,由許多農作物蒸餾而成
                  </p>
                </div>
              </div>
            </RouterLink>
          </swiper-slide>

          <swiper-slide>
            <RouterLink to="/wiskey" class="text-decoration-none">
              <div class="card rounded-24" style="width: 16rem;">
                <img src="../../assets/img/whisky(product2).jpg" class="card-img-top" alt="...">
                <div class="card-body bg-light text-center p-4 text-black">
                  <h5 class="card-title">威士忌</h5>
                  <p class="card-text">由發酵的發芽穀物經過蒸餾釀造而成
                  </p>
                </div>
              </div>
            </RouterLink>
          </swiper-slide>
        </swiper>
      </div>

    </div>
    <!--  -->

    <!-- news -->
    <div class="container my-5">
      <h2 class="fw-bold text-center text-lg-start">最新消息</h2>
      <ul>
        <li class="row border-bottom pt-3 pb-2">
          <div class="col-lg-8">跨年夜 12/31 8 PM HAPPY HOUR </div>
          <div class="col-lg-4 pt-3">2022/12/29</div>
        </li>
        <li class="row border-bottom pt-3 pb-2">
          <div class="col-lg-8">樂團得卡就應 Live 演出 </div>
          <div class="col-lg-4 pt-3">2022/11/29</div>
        </li>
        <li class="row border-bottom pt-3 pb-2">
          <div class="col-lg-8">10/25老闆去思考人生店休一天</div>
          <div class="col-lg-4 pt-3">2022/10/20</div>
        </li>
      </ul>
    </div>

    <!-- light show -->
    <!-- <div class="bg-primary">
      DRINK WHEREEVER
    </div> -->

    <div class="bg-secondary">
      <div class="container py-5">
        <h2 class="fw-bold text-center text-lg-start">現場演出</h2>
        <div class="d-flex align-items-center justify-content-center flex-column">
          <video width="520" height="340" ref="myVideo" class=""
            data-setup='{ "autoplay": true, "controls": true, "poster": "", "preload": "auto" }'>
            <source src="../../assets/img/guitarist-1651.mp4" type="video/mp4">
          </video>
          <div class="mt-3">
            <button @click="play()" class="btn btn-outline-primary me-2">Play</button>
            <button @click="pause()" class="btn btn-outline-primary">Pause</button>
          </div>

        </div>
      </div>
    </div>

    <!-- bar info -->
    <div class="container my-5">
      <h2 class="fw-bold text-center text-lg-start">酒吧資訊</h2>
      <ul class="row p-0">
        <div class="col-lg-5 my-4 d-flex flex-column justify-content-between">
          <ul>
            <li class="mb-3">營業時間 : Fri - Sun 1800 PM ~ 0100 AM</li>
            <li class="mb-3">地址 : 台南市中西區民族路二段</li>
            <li>連絡電話 : 090023002030</li>
          </ul>
          <div class="mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7645338387892!2d120.20359341412698!3d22.995684623104857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e768a1b1e858b%3A0x5840c448395db7e9!2zNzAw5Y-w5Y2X5biC5Lit6KW_5Y2A5rCR5peP6Lev5LqM5q61!5e0!3m2!1szh-TW!2stw!4v1679202021649!5m2!1szh-TW!2stw"
              width=100% height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="col-lg-2"></div>
        <div class="col-lg-5 p-3"><img src="../../assets/img/pexels-clem-onojeghuo-185768.jpg" alt="shop"
            style="height: 600px; width: 100%; border-radius:24px;"></div>
      </ul>
    </div>
  </main>
</template>

<script>
import bgImag from '@/assets/img/pexels-picjumbocom-225236.jpg';
import imgHome from '@/assets/img/home.jpg';
import imgBar from '@/assets/img/alexander-kovacs-spZexiKfZTs-unsplash.jpg';
import { RouterLink } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
  data() {
    return {
      img: bgImag,
      imgHome: imgHome,
      imgBar: imgBar
    }
  },
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
  methods: {
    play() {
      this.$refs.myVideo.play(); // 播放
    },
    pause() {
      this.$refs.myVideo.pause(); // 暫停
    },
  },
};
</script>
