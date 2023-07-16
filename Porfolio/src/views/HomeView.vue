<template>
  <div class="Home-View">
    <div class="Home-View__logo noSelect">
      <div class="Home-View__logo-first-line">Fabian</div>
      <div class="Home-View__logo-second-line">Schubert</div>
    </div>
    <PerfectTextField :text="about_text" :link="about_link" class="Home-View__text-field"/>
    <swiper
        :centered-slides="true"
        :initial-slide="0"
        :slides-per-view="slides_per_view || 4"
        :space-between="10"
        :speed="600"
        :parallax="true"
        :scrollbar="true"
        :modules="modules"
        class="mySwiper">
      <swiper-slide class="swiper_custom_slide noSelect" @click="$router.push(`/projects/${projects[0].link}`)" >
        <img :src="'./src/assets/imgs/'+searchProjectByName(projects[0].link).img" alt="" data-swiper-parallax="-20%" data-swiper-parallax-scale=".95">
      </swiper-slide>
      <swiper-slide class="swiper_custom_slide noSelect" @click="$router.push(`/projects/${projects[1].link}`)">
        <img :src="'./src/assets/imgs/'+searchProjectByName(projects[1].link).img" alt="" data-swiper-parallax="-20%" data-swiper-parallax-scale=".95">
      </swiper-slide>
      <swiper-slide class="swiper_custom_slide noSelect" @click="$router.push(`/projects/${projects[2].link}`)" >
        <img :src="'./src/assets/imgs/'+searchProjectByName(projects[2].link).img" alt="" data-swiper-parallax="-20%" data-swiper-parallax-scale=".95">
      </swiper-slide>
      <swiper-slide class="swiper_custom_slide noSelect" @click="$router.push(`/projects/${projects[3].link}`)" >
        <img :src="'./src/assets/imgs/'+searchProjectByName(projects[3].link).img" alt="" data-swiper-parallax="-20%" data-swiper-parallax-scale=".95">
      </swiper-slide>
    </swiper>
    <RouterLink class="btn big_btn noSelect" to="/projects">All Projects</RouterLink>

    <div class="Github-Wrapper">
      <h1>My Github Statistics</h1>
      <a class="Github-Wrapper__link animated-link" href="https://github.com/Schubi222">
        <div>Want to access my repo?</div>
        <img class="Github-Wrapper__link-icon" src="@/assets/imgs/github_logo.png" alt="github logo"/>
      </a>
      <p><img class="noSelect" src="https://github-readme-streak-stats.herokuapp.com?user=schubi222&theme=dark" alt="schubi222" /></p>
      <p><img class="Github-Wrapper__second noSelect" src="https://github-readme-stats.vercel.app/api/top-langs/?username=schubi222&langs_count=5&theme=dark" alt="schubi222" /></p>
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

  import { onMounted, ref} from "vue";
  import projects_file from "@/assets/Data/projects.json";

  const searchProjectByName = (name) =>{
    for (const project of projects_file.projects) {
      if (project.link === name) {
        return project;
      }
    }
    return null;
  }


  const projects = ref(project_file.projects)

  const about_text = "There is something you could do, you would do, that would make a difference.\n\n ~Jordan B. Peterson"
  const about_link = {to: 'about', text:'Want to read more about me?'}
  const modules = [Scrollbar, Parallax]
  const supported_jumps = ['contact']

  let slides_per_view = ref(0)

  const calc_slides_per_view = (() =>{
    const window_size = window.screen.width
    if (window_size > 1024){slides_per_view.value=4}
    else if (window_size > 768){slides_per_view.value=3}
    else if (window_size > 425){slides_per_view.value=2}
    else {slides_per_view.value=1}
  })

  calc_slides_per_view()

  window.addEventListener('resize',() => {
    calc_slides_per_view()
    });


  onMounted(() =>{
    const jump_to = window.location.href.split("/#")?.at(1);
    if (jump_to && supported_jumps.includes(jump_to.toString())){
      window.scrollTo({
        top: document.getElementById(jump_to.toString()).offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
    else{
      window.scrollTo({
        top: 0,
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