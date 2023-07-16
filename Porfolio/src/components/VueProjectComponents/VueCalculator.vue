<template>
  <div class="Calculator_wrapper">
    <div id="Calculator_display">{{operator === "" ?( first_number||0) : (second_number||0)}}</div>
    <div id="Calculator_body">
      <div class="Calculator_body_inputs" @click="add_to_input">7</div>
      <div class="Calculator_body_inputs" @click="add_to_input">8</div>
      <div class="Calculator_body_inputs" @click="add_to_input">9</div>
      <div class="Calculator_body_inputs" @click="add_operator">/</div>
      <div class="Calculator_body_inputs" @click="add_to_input">4</div>
      <div class="Calculator_body_inputs" @click="add_to_input">5</div>
      <div class="Calculator_body_inputs" @click="add_to_input">6</div>
      <div class="Calculator_body_inputs" @click="add_operator">*</div>
      <div class="Calculator_body_inputs" @click="add_to_input">1</div>
      <div class="Calculator_body_inputs" @click="add_to_input">2</div>
      <div class="Calculator_body_inputs" @click="add_to_input">3</div>
      <div class="Calculator_body_inputs" @click="add_operator">-</div>
      <div class="Calculator_body_inputs" @click="negate">-/+</div>
      <div class="Calculator_body_inputs" @click="add_to_input">0</div>
      <div class="Calculator_body_inputs" @click="decimal">.</div>
      <div class="Calculator_body_inputs" @click="add_operator">+</div>
      <div class="Calculator_body_inputs Calculator_body_inputs_special b" @click="calc">=</div>
      <div class="Calculator_body_inputs Calculator_body_inputs_special c" @click="clear">C</div>
    </div>
  </div>
</template>

<script setup>
import { ref} from "vue";
const first_number = ref("")
const second_number = ref("")
const operator = ref("")

const current_number = () => operator.value === "" ? first_number : second_number

const add_to_input = (elem) => current_number().value += elem.target.textContent
const add_operator = (elem) => operator.value = elem.target.textContent

const clear = () => {
  first_number.value = "";
  second_number.value = "";
  operator.value = ""
}

const negate = () =>{
  first_number.value[0] === "-" ?  first_number.value=first_number.value.substring(1) : first_number.value="-"+first_number.value
}

// This could result in some decimal point errors in calc.
const decimal = () =>{
  let number_to_work_on = current_number()
  if (number_to_work_on.value === ""){number_to_work_on.value="0."}
  else if (number_to_work_on.value.includes(".")){return}
  else {number_to_work_on.value += '.' }
}

const calc = () =>{
  if(!operator.value){return}
  if(!second_number.value){return;}
  if(operator.value === "/" && second_number.value === "0"){return;}
  first_number.value = eval(first_number.value+operator.value+second_number.value).toString()
  operator.value = ""
  second_number.value = ""
}


</script>


<style scoped>
.Calculator_wrapper{
  border: 1px solid lightblue;
  padding: 15px;
  box-shadow: 0 1px 4px 2px lightblue;
}
#Calculator_body{
  display: grid;

  grid-template:repeat(4, 35px)/repeat(5, 35px);
}
.Calculator_body_inputs{
  color: white;
  border: 1px solid lightblue;
  text-align: center;
  margin: 3px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: 0 1px 1px 1px lightblue;
}
.Calculator_body_inputs:hover{
  background: lightblue;
}
.Calculator_body_inputs_special{
  place-content: center;
  padding: 50% 0
}
.b{
  grid-column: 5;
  grid-row: 3/6;
}
.c{
  grid-column: 5;
  grid-row: 1/3;
}
#Calculator_display{
  background: aliceblue;
  color: black;
  border-bottom: lightblue 1px solid;
  height: 45px;
  margin-bottom: 10px;
  padding: 5px;
}
</style>