<template>
  <div class="Home-View">
    <PerfectTextField :text="about_text" :link="about_link" class="Home-View__text-field"/>
    <swiper
        :centered-slides="true"
        :slides-per-view="4"
        :space-between="30"
        :speed="600"
        :parallax="true"
        :scrollbar="true"
        :modules="modules"
        class="mySwiper">
      <swiper-slide class="swiper_custom_slide" @click="$router.push(`/projects/${projects[0].name}`)" >
        <img :src="'./src/assets/imgs/'+projects[0].name+'.png'" alt="" data-swiper-parallax="-10%" data-swiper-parallax-scale=".95">
      </swiper-slide>
      <swiper-slide class="swiper_custom_slide" @click="$router.push(`/projects/${projects[1].name}`)">
        <img :src="'./src/assets/imgs/'+projects[1].name+'.png'" alt="" data-swiper-parallax="-10%" data-swiper-parallax-scale=".95">
      </swiper-slide>
      <swiper-slide class="swiper_custom_slide" @click="$router.push(`/projects/${projects[2].name}`)" >
        <img :src="'./src/assets/imgs/'+projects[2].name+'.png'" alt="" data-swiper-parallax="-10%" data-swiper-parallax-scale=".95">
      </swiper-slide>
      <swiper-slide class="swiper_custom_slide" @click="$router.push(`/projects/${projects[3].name}`)" >
        <img :src="'./src/assets/imgs/'+projects[3].name+'.png'" alt="" data-swiper-parallax="-10%" data-swiper-parallax-scale=".95">
      </swiper-slide>
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

  import project_file from "@/assets/Data/swiper_projects.json"

  import {ref} from "vue";

  const projects = ref(project_file.projects)

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