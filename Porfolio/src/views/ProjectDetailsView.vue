<template>
  <div class="Project-Preview-Wrapper">
      <div class="Project-Preview-Wrapper__back-btn animated-link" @click="$router.back()">&#11013; Back</div>
    <div class="Project-Preview-Wrapper__content">
      <div class="Project-Preview-Wrapper__content-date">{{ date }}</div>
      <h1 class="Project-Preview-Wrapper__content-name">{{name}}</h1>
      <div class="Project-Preview-Wrapper__content-description">{{description}}</div>
      <div class="Project-Preview-Wrapper__content-type">{{type}}</div>
      <div class="Project-Preview-Wrapper__content-view-project" v-if="project_link">
        <router-link :to="project_link" class="Project-Preview-Wrapper__content-view-project-link animated-link">
          View Project
        </router-link>
      </div>
      <div class="Project-Preview-Wrapper__content-border"></div>
      <div class="Project-Preview-Wrapper__content-img" v-if="img">
<!--FOR BUILD .. for dev nothing        -->
        <img :src="'../imgs/large_imgs/'+img" alt="Image showcasing the project">
      </div>
    </div>
  </div>
</template>

<script setup>
  import projects_file from '@/assets/Data/projects.json'


  import {onMounted, ref} from "vue";

  function searchProjectByName(name) {
    for (const project of projects_file.projects) {
      if (project.link === name) {
        return project;
      }
    }
    return null;
  }
  const props = defineProps(['project_name'])
  const project = searchProjectByName(props.project_name)

  const date = ref(project.date)
  const name = ref(project.name)
  const description = ref(project.description)
  const type = ref(project.type)
  const project_link = ref(project.project_link)
  const img = ref(project.large_img_src)


  onMounted(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  })
</script>

<style scoped>
  @import "@/assets/ProjectPreview.css";
</style>