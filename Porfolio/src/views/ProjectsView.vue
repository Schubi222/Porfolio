<template>
  <div class="Project-View-Wrapper">
    <div class="Project-View-Wrapper__first-row Project-View-Wrapper__rom">
      <PerfectTextField class="Welcome-Text-Field" :heading="heading_welcome" :text="text_welcome"/>
      <ProjectCard v-for="project in projects" :key="project.name" :project="project"/>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import PerfectTextField from '@/components/PerfectTextField.vue'
import projects_file from '@/assets/Data/projects.json'
import {ref} from "vue";

const heading_welcome = 'Willkommen in meinem Porfolio!'
const text_welcome = 'Ich bin ein ambitionierter Webentwickler aus Graz.' +
    ' Stehts auf der nach neuen Herausforderungen versuche ich mir immer neue Fähigkeiten anzueignen.' +
    ' Über die Zeit hat sich so mein kleines Portfolio angesammelt.'


const projects = ref(projects_file.projects)

</script>

<style scoped>
.Project-View-Wrapper{
  display: flex;
}
.Project-View-Wrapper__first-row{
  width: 100%;
  height: 250px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  overflow: hidden;
}
/*.Welcome-Text-Field{
  width: 500px;
  height: 250px;
}*/
</style>