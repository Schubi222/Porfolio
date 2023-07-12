<template>
  <div class="Imprint-Wrapper">
    <h1>Imprint</h1>
    <h2>Details</h2>
    <div class="Imprint-Wrapper__info">Fabian Schubert</div>
    <div class="Imprint-Wrapper__info">Graz, Austria</div>
    <h2>Contact</h2>
    <div class="Imprint-Wrapper__info">
      This website has the purpose to display the projects I have built and which technologies I have used doing so.
    </div>
    <div class="Imprint-Wrapper__info">Contacting me is possible using the contact form
      <div class="Imprint-Wrapper__info-link" @click="this.$router.push('/#contact')">HERE</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
 @import "@/assets/ImprintView.css";
</style>