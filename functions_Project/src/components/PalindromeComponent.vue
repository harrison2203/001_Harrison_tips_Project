<script setup>
import { ref, onMounted } from 'vue';
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import DescriptionPropsComponent from './souscomponents/DescriptionPropsComponent.vue';
import TitleComponent from './souscomponents/TitleComponent.vue';
import InputResultComponent from './souscomponents/InputResultComponent.vue';

const titlePalindrome = "Palindrome";
const descriptionComponent = "Is it the same backwards?."
const customMessage = "Put a word :"
const inputName = ref('');
const splitString = ref ('');
const result = ref('');

function receiveEmitResult(newVal){
	result.value = newVal;
}
function receiveEmit(newValue){
    inputName.value = newValue;
}

function isPalindrome (){

    splitString.value = inputName.value.split("").reverse().join('')

    if(splitString.value.toLowerCase() ===inputName.value.toLowerCase()) {
        result.value = "It is a Palindrome !"
    } else {
        result.value = "It is not a Palindrome !"
    }
    return result.value
}
</script>

<template>
  <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
      <TitleComponent :title="titlePalindrome"></TitleComponent>
      <DescriptionPropsComponent :description="descriptionComponent"></DescriptionPropsComponent>
      <InputNameComponent :message="customMessage" @inputChanged="receiveEmit"></InputNameComponent>
			<InputResultComponent :value="result" @inputRes="receiveEmitResult"></InputResultComponent>
      <ButtonComponent @click="isPalindrome" />
    </form>
  </div>
</template>

