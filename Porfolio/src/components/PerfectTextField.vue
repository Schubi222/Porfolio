<template>
  <div class="Text-Field-Wrapper">
    <div class="Text-Field-Wrapper__heading" v-if="props.heading">{{props.heading}}</div>
    <div class="Text-Field-Wrapper__text">{{props.text}}</div>
  </div>

</template>

<script setup>
  const props = defineProps(['heading','text'])


</script>

<style scoped>
@import "@/assets/TextField.css";
</style>