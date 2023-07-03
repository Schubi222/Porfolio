<template>
  <div class="Text-Field-Wrapper">
    <div class="Text-Field-Wrapper__heading" v-if="props.heading">{{props.heading}}</div>
    <div class="Text-Field-Wrapper__text">{{props.text}}</div>
    <RouterLink v-if="props.link" :to="'/'+props.link.to" class="Text-Field-Wrapper__text Text-Field-Wrapper__link">
      {{props.link.text}}
    </RouterLink>
  </div>

</template>

<script setup>
  import {RouterLink} from "vue-router";
  const props = defineProps(['heading','text', 'link'])

</script>

<style scoped>
@import "@/assets/TextField.css";
</style>