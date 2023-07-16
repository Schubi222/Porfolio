<template>
  <div class="Project-Preview-Wrapper">
      <div class="Project-Preview-Wrapper__back-btn animated-link" @click="$router.back()">&#11013; Back</div>
    <div class="Project-Preview-Wrapper__content">
      <div class="Project-Preview-Wrapper__content-date">{{ date }}</div>
      <h1 class="Project-Preview-Wrapper__content-name">{{capitalizedName}}</h1>
      <div class="Project-Preview-Wrapper__content-description">{{description}}</div>
      <div class="Project-Preview-Wrapper__content-type">{{type}}</div>
      <div class="Project-Preview-Wrapper__content-view-project" v-if="project_link">
        <a class="Project-Preview-Wrapper__content-view-project-link animated-link" :href="project_link">
          View Project
        </a>

      </div>
      <div class="Project-Preview-Wrapper__content-img" v-if="img">
        <img :src="'./src/assets/imgs/'+img" alt="Image showcasing the project">
      </div>
    </div>
  </div>
</template>

<script setup>
  import projects_file from '@/assets/Data/projects.json'

  import {computed, ref} from "vue";

  function searchProjectByName(name) {
    for (const project of projects_file.projects) {
      if (project.link === name) {
        return project;
      }
    }
    return null; // Return null if the project is not found
  }

  const project = searchProjectByName(window.location.pathname.split("/").pop())

  const date = ref(project.date)
  const name = ref(project.name)
  const description = ref(project.description)
  const type = ref(project.type)
  const project_link = ref(project.project_link)
  const img = ref(project.large_img_src)
  console.log(project_link.value)
  const capitalizedName = computed(() =>{
    const capitalizedFirst = name.value[0].toUpperCase();
    const rest = name.value.slice(1);
    return capitalizedFirst + rest;
  })
</script>

<style scoped>
  @import "@/assets/ProjectPreview.css";
</style>