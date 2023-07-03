<template>
  <div class="Home-View">
    <h1 class="test">HOME</h1>
    <PerfectTextField :text="about_text" :link="about_link" class="Home-View__text-field"/>
    <swiper
        :centered-slides="true"
        :slides-per-view="4"
        :space-between="30"
        :parallax="true"
        :scrollbar="true"
        :modules="modules"

        class="mySwiper">
      <swiper-slide class="swiper_custom_slide"><img src="@/assets/imgs/Calculator.png" alt=""></swiper-slide>
      <swiper-slide class="swiper_custom_slide">Slide 2</swiper-slide>
      <swiper-slide class="swiper_custom_slide">Slide 3</swiper-slide>
      <swiper-slide class="swiper_custom_slide">Slide 4</swiper-slide>
    </swiper>
    <RouterLink class="btn big_btn" to="/projects">All Projects</RouterLink>
    <!--  TODO: GITHUB-->
    <!--  TODO: Contact-->
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

  const about_text = "There is something you could do, you would do, that would make a difference.\n\n ~Jordan B. Peterson"
  const about_link = {to: 'about', text:'Want to read more about me?'}
  const modules = [Scrollbar, Parallax]

</script>

<style scoped>
  @import "@/assets/HomeView.css";
  @import "@/assets/SwiperCustomStyles.css";

/*  .Home-View{
    height: fit-content;
    width: 100%;
    align-self: center;
  }*/
</style>