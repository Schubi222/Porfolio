<template>
  <nav class="MenuBar">
    <RouterLink class="MenuBar_link" to="/">Home</RouterLink>
    <RouterLink class="MenuBar_link" to="/projects">Projects</RouterLink>
    <RouterLink class="MenuBar_link" to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>