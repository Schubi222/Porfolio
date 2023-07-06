<template>
  <div class="About-View-Wrapper">
    <div class="About-View-Wrapper__top-text">
      <h2 class="About-View-Wrapper__top-heading">Fabian Schubert</h2>
      <h3 class="About-View-Wrapper__title">Web Developer</h3>
      <div class="About-View-Wrapper__top-flow-text">
        I build applications and websites striving for constant improvement.
      </div>
    </div>
    <div class="CV-Wrapper">
      <div class="CV-Wrapper__personal">
        <p>
          PLACEHOLDER:
          This should be some text about myself concerning coding. Maybe from my beginnings to how I ended up in
          Web dev and how I enjoy it.
        </p>
        <p>
          Currently my main focus is gathering more experience with different web technologies
          by working on different projects
        </p>
        <p>
          When I am not immersed in coding I like to spend my time
          <span id="Ice-Hockey-Animation">playing ice hockey</span>, <span id="Gym-Animation">working out</span>,
          <span id="Read-Animation">reading books</span> or <span id="Socialise-Animation">socialising</span>.
        </p>
      </div>
      <div class="CV-Wrapper__projects"></div>
      <div class="CV-Wrapper__education">
        <ExperienceEntry v-for="entry in entry_objects" :key="entry.heading" :entry="entry"/>
      </div>
      <div class="CV-Wrapper__jobs">
        <p>

        </p>
        <a href="./src/assets/pdfs/Fabian_Schubert_Lebenslauf_eng.pdf" target="_blank">View full CV</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExperienceEntry from "@/components/ExperienceEntry.vue";
import {ref} from "vue";
const entry_objects = ref([{
  timeline:'1998-PRESENT',
  heading:'Living',
  sub_heading:'Human being',
  text:'Improving oneself with the intention to create a better world for as many people as possible while living' +
      'fulfilled and also still having some fun.',
  tags:['Eating','Drinking','Public speaking','NHL','Ice Hockey']
}])
</script>


<style scoped>
  @import "@/assets/about.css";
</style>