<template>
  <div class="Age-Calculator">
    <div class="Input-Wrapper">
      <label for="Day">Day</label>
      <label for="Month">Month</label>
      <label for="Year">Year</label>

      <input type="text" id="Day" v-model="input.day" placeholder="DD">
      <input type="text" id="Month" v-model="input.month" placeholder="MM">
      <input type="text" id="Year" v-model="input.year" placeholder="YYYY">

      <div>Error1</div>
      <div>Error2</div>
      <div>Error3</div>
    </div>

    <div class="Output-Wrapper">
      <div><span>{{result.day}}</span> Days</div>
      <div><span>{{result.month}}</span> Months</div>
      <div><span>{{result.year}}</span> Years</div>
    </div>



    {{input}}
  </div>
</template>


<script setup>
import {ref} from "vue";
const input = ref({
  day:null,
  month:null,
  year:null,
})
const result = ref({
  day:'--',
  month:'--',
  year:'--',
})
</script>
<style scoped>
@import "@/assets/VueProjectCss/VueAgeCalculator.css";
</style>