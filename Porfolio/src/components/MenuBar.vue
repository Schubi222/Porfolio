<template>
  <nav class="Menu-bar">
    <RouterLink class="Menu-bar__link" to="/">Home</RouterLink>
    <RouterLink class="Menu-bar__link" to="/projects">Projects</RouterLink>
    <RouterLink class="Menu-bar__link" to="/about">About</RouterLink>
  </nav>
  <div class="Menu-bar-mobile">
    <div class="Menu-bar-mobile__hover-box" @click="toggle_mobile_menu">
      <div class="Menu-bar-mobile__hamburger" ref="hamburger_div"></div>
    </div>
    <div class="Menu-bar-mobile__side-panel" ref="side_panel">
      <nav class="Menu-bar-mobile__side-panel__link-container">
        <RouterLink class="Menu-bar-mobile__side-panel__link-container__link" to="/">Home</RouterLink>
        <RouterLink class="Menu-bar-mobile__side-panel__link-container__link" to="/projects">Projects</RouterLink>
        <RouterLink class="Menu-bar-mobile__side-panel__link-container__link" to="/about">About</RouterLink>
      </nav>

    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from "vue";

const hamburger_div = ref()
const side_panel = ref()

const toggle_mobile_menu = () =>{
  hamburger_div.value.classList.toggle('is_open')
  side_panel.value.classList.toggle('is_open')
}



</script>

<style scoped>

</style>