<template>
  <div class="Home-View">
    <PerfectTextField :text="about_text" :link="about_link" class="Home-View__text-field"/>
    <swiper
        :centered-slides="true"
        :initial-slide="0"
        :slides-per-view="5"
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

    <div class="Github-Wrapper">
      <h1>My Github Statistics</h1>
      <a class="Github-Wrapper__link animated-link" href="https://github.com/Schubi222">
        <div>Want to access my repo?</div>
        <img class="Github-Wrapper__link-icon" src="@/assets/imgs/github_logo.png" alt="github logo"/>
      </a>
      <p><img src="https://github-readme-streak-stats.herokuapp.com?user=schubi222&theme=dark" alt="schubi222" /></p>
      <p><img class="Github-Wrapper__second" src="https://github-readme-stats.vercel.app/api/top-langs/?username=schubi222&langs_count=5&theme=dark" alt="schubi222" /></p>
    </div>

    <ContactForm id="contact"/>
  </div>
</template>

<script setup>
  import PerfectTextField from "@/components/PerfectTextField.vue";
  import ContactForm from "@/components/ContactForm.vue";
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import {Scrollbar, Parallax} from "swiper";

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/scrollbar';

  import project_file from "@/assets/Data/swiper_projects.json"

  import {onMounted, ref} from "vue";

  const projects = ref(project_file.projects)

  const about_text = "There is something you could do, you would do, that would make a difference.\n\n ~Jordan B. Peterson"
  const about_link = {to: 'about', text:'Want to read more about me?'}
  const modules = [Scrollbar, Parallax]
  const supported_jumps = ['contact']

  onMounted(() =>{
    const jump_to = window.location.href.split("/#")?.at(1);
    if (jump_to && supported_jumps.includes(jump_to.toString())){
      window.scrollTo({
        top: document.getElementById(jump_to.toString()).offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  })

</script>

<style scoped>
  @import "@/assets/HomeView.css";
  @import "@/assets/SwiperCustomStyles.css";

</style>