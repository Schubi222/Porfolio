<template>
  <div class="Home-View">
    <h1 class="test">HOME</h1>
    <PerfectTextField :text="text" class="Home-View__text-field"/>


  </div>
</template>

<script setup>
  import PerfectTextField from "@/components/PerfectTextField.vue";
  const text = "There is something you could do, you would do, that would make a difference.\n\n ~Jordan B. Peterson"
</script>

<style scoped>
  @import "@/assets/HomeView.css";
</style>