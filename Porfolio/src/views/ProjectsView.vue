<template>
  <PerfectTextField class="Welcome-Text-Field" :heading="heading_welcome" :text="text_welcome"/>
  <ProjectCard v-for="project in projects" :key="project.name" :project="project"/>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import PerfectTextField from '@/components/PerfectTextField.vue'
import {ref} from "vue";

const heading_welcome = 'Willkommen in meinem Porfolio!'
const text_welcome = 'Ich bin ein ambitionierter Webentwickler aus Graz.' +
    ' Stehts auf der nach neuen Herausforderungen versuche ich mir immer neue Fähigkeiten anzueignen.' +
    ' Über die Zeit hat sich so mein kleines Portfolio angesammelt.'

const project_object = {
  name:'Calculator',
  tags: ['Beginner', 'Vue.js'],
  img: 'Calculator.png',
  link: 'projects/calculator',
  width: 250
}
const projects = ref([project_object])

</script>

<style scoped>
.Welcome-Text-Field{
  width: 500px;
  height: 250px;
}
</style>