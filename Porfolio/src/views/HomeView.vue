<template>
  <div class="Home-View">
    <h1 class="test">HOME</h1>
    <PerfectTextField :text="text" class="Home-View__text-field"/>
    <swiper
        :centered-slides="true"
        :slides-per-view="4"
        :space-between="30"
        :parallax="true"
        :scrollbar="{
          hidden: false,
          enabled: true,
        }"
        :modules="modules"
        class="mySwiper">
      <swiper-slide class="swiper_custom_slide"><img src="@/assets/imgs/Calculator.png" alt=""></swiper-slide>
      <swiper-slide class="swiper_custom_slide">Slide 2</swiper-slide>
      <swiper-slide class="swiper_custom_slide">Slide 3</swiper-slide>
      <swiper-slide class="swiper_custom_slide">Slide 4</swiper-slide>
    </swiper>

  </div>
</template>

<script setup>
  import PerfectTextField from "@/components/PerfectTextField.vue";
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import {Scrollbar, Parallax} from "swiper";

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/scrollbar';
  const text = "There is something you could do, you would do, that would make a difference.\n\n ~Jordan B. Peterson"
  const modules = [Scrollbar, Parallax]

</script>

<style scoped>
  @import "@/assets/HomeView.css";
  .mySwiper{
    margin: 0 20rem;
    width: 80%;
    height: 410px;
    padding: 5rem 20rem;
    overflow: hidden;
  }
  .swiper_custom_slide{
    border: 1px solid white;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  }

  .Home-View{
    height: fit-content;
    width: 100%;
    align-self: center;
  }
</style>