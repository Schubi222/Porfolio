<template>
  <div class="Project-View-Wrapper">
    <div class="Project-View-Wrapper__first-row Project-View-Wrapper__rom">
      <PerfectTextField class="Welcome-Text-Field" :heading="heading_welcome" :text="text_welcome"/>
      <RouterLink class="Project-View-Wrapper__project-card" :to="'/projects/'+project.link" v-for="project in projects" :key="project.link">
        <ProjectCard :project="project" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import PerfectTextField from '@/components/PerfectTextField.vue'
import projects_file from '@/assets/Data/projects.json'
import {onMounted, ref} from "vue";

const heading_welcome = 'Welcome to my portfolio!'
/*const text_welcome = 'Ich bin ein ambitionierter Webentwickler aus Graz.' +
    ' Stehts auf der nach neuen Herausforderungen versuche ich mir immer neue Fähigkeiten anzueignen.' +
    ' Über die Zeit hat sich so mein kleines Portfolio angesammelt.'*/
const text_welcome = 'I am an ambitious web developer from Graz (Austria). ' +
    'Always looking for new challenges, always striving for improvement. ' +
    'Over time, this small portfolio has accumulated.'


const projects = ref(projects_file.projects)
onMounted(()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
})
</script>

<style scoped>
@import "@/assets/ProjectView.css";
</style>