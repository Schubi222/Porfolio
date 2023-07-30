<template>
  <RouterLink :to="'/projects/'+router_link" class="Project-Card-Link">
    <div class="Project-Card">
      <img :src="'./imgs/' + img_src" alt="Image representing the project" class="Project-Card__img">
      <div class="Hover-Wrapper">
        <div class="Hover-Wrapper__heading">{{heading}}</div>
        <div class="Hover-Wrapper__text" v-for="tag in tags" :key="tag">{{tag}}</div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
  import {RouterLink} from "vue-router";
  import {ref} from "vue";


  const props = defineProps(['project'])

  const tags = ref(props.project.tags)
  const heading = ref(props.project.name)
  const img_src = ref(props.project.img)
  const router_link = ref(props.project.link)





</script>

<style scoped>
@import '../assets/ProjectCard.css';
</style>