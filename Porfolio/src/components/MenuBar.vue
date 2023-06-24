<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterView />
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>