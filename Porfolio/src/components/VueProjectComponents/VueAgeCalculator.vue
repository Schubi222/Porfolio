<template>
  <div class="Age-Calculator">
    <div class="Input-Wrapper">
      <label :class="{'error-text': error.error_day}" for="Day">Day</label>
      <label :class="{'error-text': error.error_month}" for="Month">Month</label>
      <label :class="{'error-text': error.error_year}" for="Year">Year</label>

      <input :class="{'error-input': error.error_day}" type="text" id="Day" v-model="input.day" placeholder="DD">
      <input :class="{'error-input': error.error_month}" type="text" id="Month" v-model="input.month" placeholder="MM">
      <input :class="{'error-input': error.error_year}" type="text" id="Year" v-model="input.year" placeholder="YYYY">


      <div :class="{'error-text': error.error_day}" >{{error.error_day}}</div>
      <div :class="{'error-text': error.error_month}" >{{error.error_month}}</div>
      <div :class="{'error-text': error.error_year}" >{{error.error_year}}</div>

      <span class="border"></span>

      <div class="Input-Wrapper__submit-btn" @click="submit"><img src="@/assets/imgs/icon-arrow.svg" alt="Arrow"></div>
    </div>

    <div class="Output-Wrapper">
      <div><span>{{result.day || '--'}}</span> Days</div>
      <div><span>{{result.month || '--'}}</span> Months</div>
      <div><span>{{result.year || '--'}}</span> Years</div>
    </div>
  </div>
</template>


<script setup>
import {ref} from "vue";
const error = ref({
  error_day: "",
  error_month: "",
  error_year: "",
})
const input = ref({
  day:null,
  month:null,
  year:null,
})
const result = ref({
  day:Number | null,
  month:Number | null,
  year:Number | null,
})

const submit = ref(() =>{
  error.value = {
    error_day: "",
    error_month: "",
    error_year: "",
  }
  const now = new Date()
  const date = new Date(input.value.year, input.value.month-1, input.value.day)
  if (evaluate_form(date, now)){
    calculateResult(date, now)
  }
})
function evaluate_form(date, now){

  if(date.getDate() !== Number(input.value.day)){
    error.value.error_day="Must be a valid day";
    return false
  }
  if(date.getMonth() !== Number(input.value.month) - 1){
    error.value.error_month="Must be a valid month";
    return false
  }
  if(date.getFullYear() !== Number(input.value.year) || date > now){
    error.value.error_year="Must be a valid year";
    return false
  }
  return true
}

function calculateResult(date, now){
  const dif = now - date

  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const millisecondsPerMonth = 30.44 * millisecondsPerDay;
  const millisecondsPerYear = 365.25 * millisecondsPerDay;

  const years = Math.floor(dif / millisecondsPerYear);
  const months = Math.floor((dif % millisecondsPerYear) / millisecondsPerMonth);
  const days = Math.floor(((dif % millisecondsPerYear) % millisecondsPerMonth) / millisecondsPerDay);


  result.value.day = days
  result.value.month = months
  result.value.year = years
}

</script>
<style scoped>
@import "@/assets/VueProjectCss/VueAgeCalculator.css";
</style>