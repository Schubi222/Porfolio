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
      <div class="CV-Wrapper__experience">
        <ExperienceEntry v-for="entry in entry_objects" :key="entry.heading" :entry="entry"/>
      </div>
      <a class="CV-Link" href="./src/assets/pdfs/Fabian_Schubert_Lebenslauf_eng.pdf" target="_blank" >View full CV</a>
      <div class="CV-Wrapper__projects"></div>
    </div>
  </div>
</template>

<script setup>
import ExperienceEntry from "@/components/ExperienceEntry.vue";
import json from "@/assets/Data/cv.json"
import {ref} from "vue";

const entry_objects = ref(json.entries)
console.log(json.entries)
</script>


<style scoped>
  @import "@/assets/aboutview.css";
  .CV-Wrapper{
    &>a{
      font-size: 30px !important;
      color: rgb(148 163 184);
      margin: 3rem 1rem !important;
    }
    & > a:hover{
      background: -webkit-linear-gradient(180deg, rgba(94,234,212,1) 70%, rgba(148,163,184,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      background-size: 500% auto;
      animation: textShine 1s ease-in-out 1 forwards;
    }
  }
  @keyframes textShine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: -100% 50%;
    }
  }
</style>