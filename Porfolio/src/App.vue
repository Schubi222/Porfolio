<script setup>
import MenuBar from '@/components/MenuBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <MenuBar/>
  </header>
  <body>

  <RouterView />
  </body>


</template>

<style scoped>

</style>
