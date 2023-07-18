<template>
<div class="Vue-BMI-Calculator-Wrapper">
  <div class="Top-Wrapper">
    <div class="Top-Wrapper__heading">
      <h1>Body Mass Index Calculator</h1>
      <p>
        Body Mass Index is a simple calculation using a person’s height and weight. The formula is BMI = kg/m2 where kg
        is a person’s weight in kilograms and m2 is their height in metres squared.
      </p>
    </div>
    <div class="Top-Wrapper__form-wrapper">
      <h3>Enter your details</h3>

      <div class="Radio-Input-Group">
        <div class="Radio-Input-Group__single-input">
          <input class="radio-input" id="metric" type="radio" value="Metric" v-model="system">
          <label for="metric">Metric</label>
        </div>
        <div class="Radio-Input-Group__single-input">
          <input class="radio-input" id="imperial" type="radio" value="Imperial" v-model="system">
          <label for="imperial">Imperial</label>
        </div>
      </div>
      <div class="Number-Input-Labels">
        <label for="height" :class="system==='Imperial' ? 'large' : ''">Height</label>
        <label for="weight" >Weight</label>
      </div>
      <div class="Numerical-Inputs-Wrapper">

        <div class="Number-Input-Wrapper" v-if="system === 'Metric'">
        <input class="Number-Input-Wrapper__input" id="height" type="number" placeholder="0" v-model="cm" min="0" required>
          <span class="Number-Input-Wrapper__unit">cm</span>
        </div>

        <div class="Number-Input-Wrapper imperial" v-if="system === 'Imperial'">
          <input class="Number-Input-Wrapper__input" id="height" type="number" placeholder="0" v-model="feet" min="0" required>
          <span class="Number-Input-Wrapper__unit">feet</span>
        </div>
        <div class="Number-Input-Wrapper" v-if="system === 'Imperial'">
          <input class="Number-Input-Wrapper__input" type="number" placeholder="0"  v-model="inches" min="0" max="11" required>
          <span class="Number-Input-Wrapper__unit">inches</span>
        </div>

        <div class="Number-Input-Wrapper">
          <input class="Number-Input-Wrapper__input" id="weight" type="number" placeholder="0" v-model="weight" min="0" required>
          <span class="Number-Input-Wrapper__unit">{{weight_unit}}</span>
        </div>
      </div>

      <div class="Results-Wrapper" :id="BMI_color">
        <div v-if="result === 0">
          <h4>Welcome!</h4>
          <p>Enter your height and weight to see your BMI!</p>
        </div>
        <div v-else  class="Results-Wrapper__result" >
          <div class="result">BMI: {{result}}</div>
          <div class="info">{{BMI_text}}</div>

        </div>


      </div>

    </div>
  </div>
</div>
</template>

<script setup>
import {computed, ref} from "vue";

  const cm = ref(null)
  const feet = ref(null)
  const inches = ref(null)
  const weight = ref(null)
  const system = ref("Metric")

  const result = computed(() =>{

    let weight_in_kg = weight.value
    let height_in_cm = cm.value / 100
    if(system.value === 'Imperial'){
      height_in_cm = (feet.value*12 + inches.value)*2.54/100
      weight_in_kg = weight.value/2.205
    }
    if (!height_in_cm) return 0

    return Math.round(weight_in_kg/Math.pow(height_in_cm,2)*100)/100
  })

  const weight_unit = computed(() =>{
    if (system.value === 'Imperial'){
      return "lb"
    }else{
      return "kg"
    }
  })

  const BMI_color = computed(() =>{
    const currentBMI = result.value
    if (!currentBMI) return ""
    else if(18.5 <= currentBMI && currentBMI < 25){
      return "green"
    }
    else{
      return "red"
    }
  })

  const BMI_text = computed(() =>{
    const currentBMI = result.value
    if( 18.5 > currentBMI){
      return "You are underweight!"
    }
    else if(18.5 <= currentBMI && currentBMI < 25){
      return "You are in the normal range!"
    }
    else if(25 <= currentBMI && currentBMI < 30){
      return "You are overweight"
    }
    else {
      return "You are obese!"
    }
  })

</script>


<style scoped>
  @import "@/assets/VueProjectCss/VueBMICalculator.css";
</style>