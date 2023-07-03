<script setup>
import MenuBar from '@/components/MenuBar.vue'
import FooterBar from "@/components/FooterBar.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <MenuBar/>
  </header>

  <div class="Main-Content">
  <RouterView />
  </div>

  <div class="footer_div">
    <FooterBar/>
  </div>
</template>

<style scoped>

</style>
