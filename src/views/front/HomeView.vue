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
      <div class="container py-3">
        <h3 class="fw-bold">專屬你的調酒</h3>
        <div class="text-center">
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
    <div>
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
    <div>swiper</div>
    <!--  -->

    <!-- news -->
    <div class="container">
      <h3 class="fw-bold">最新消息</h3>
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
  </main>
</template>

<script>
export default {
  component: {

  }
}
</script>
