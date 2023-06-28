<template>
<RouterLink :to="router_link" class="Project-Card__link">
  <div class="Project-Card">
    <img :src="'./src/assets/imgs/'+img_src" alt="Image representing the project" class="Project-Card__img">
    <div class="Hover-Wrapper">
      <div class="Hover-Wrapper__heading">{{heading}}</div>
      <div class="Hover-Wrapper__text" v-for="tag in project_tags" :key="tag">{{tag}}</div>
    </div>
  </div>
</RouterLink>
</template>

<script setup>
  import {RouterLink} from "vue-router";
  import {ref} from "vue";


  const project_tags = ref(['Beginner', 'Vue.js'])
  const heading = ref('Calculator')
  const img_src = ref('Calculator.png')
  const router_link = ref('projects/calculator')

</script>

<style scoped>
@import '../assets/ProjectCard.css';
</style>