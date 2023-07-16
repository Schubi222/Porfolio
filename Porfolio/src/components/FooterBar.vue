<template>
  <div class="Footer-Bar-Wrapper">
    <div class="Footer-Bar-Wrapper__Copyright">Fabian Schubert</div>
    <div class="Footer-Bar-Wrapper__icon-wrapper noSelect">
      <a href="https://github.com/Schubi222">
        <img class="Footer-Bar-Wrapper__icon-wrapper__icon github" src="@/assets/imgs/github_logo.png" alt="github logo"/>
      </a>
      <a href="https://www.linkedin.com/in/fabian-schubert-899914278/">
        <img class="Footer-Bar-Wrapper__icon-wrapper__icon linked_in" src="@/assets/imgs/linkedin.png" alt="linkedIn logo"/>
      </a>
    </div>
    <RouterLink to="/imprint" class="Footer-Bar-Wrapper__imprint animated-link">
      <div>Imprint</div>
    </RouterLink>
  </div>
</template>

<script setup>
import {RouterLink} from "vue-router";
</script>

<style scoped>
  @import "@/assets/FooterBar.css";
</style>