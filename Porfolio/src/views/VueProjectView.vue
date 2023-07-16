<template>
<div class="Vue-Project-View-Wrapper">
  <div class="Vue-Project-View-Wrapper__back-btn animated-link" @click="$router.back()">&#11013; Back</div>
  <div class="Vue-Project-View-Wrapper__logo"> <img class="main_Menu_Item main_Menu_Img" src="@/assets/logo.svg" alt="logo" /></div>
  <PerfectTextField :text="text" class="Vue-Project-View-Wrapper__description"/>
  <div class="Vue-Project-View-Wrapper__applications">
    <router-link to="/vue-projects/calculator" class="Vue-Project-View-Wrapper__applications-btn">Calculator</router-link>
    <router-link to="/vue-projects/math-quiz" class="Vue-Project-View-Wrapper__applications-btn">Math-Quiz</router-link>

  </div>
  <router-view class="Vue-Project-View-Wrapper__router-view"/>
</div>
</template>

<script setup>
import {RouterView} from "vue-router";
import PerfectTextField from "@/components/PerfectTextField.vue";
import {ref} from "vue";
const text = ref("These are some small Vue.js projects I have built to improve my knowledge!")

</script>


<style scoped>
  @import "@/assets/VueProjectCss/VueProjectView.css";

</style>