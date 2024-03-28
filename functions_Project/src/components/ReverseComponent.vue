<script setup>
import { ref } from 'vue';
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import TitleComponent from './souscomponents/TitleComponent.vue';
import DescriptionPropsComponent from './souscomponents/DescriptionPropsComponent.vue';
import InputResultComponent from './souscomponents/InputResultComponent.vue';

const descriptionComponent = "Write a word and get it reversed.";
const customMessage = "Put your name:";
const reverseName = ref ('Reverse'.split('').reverse().join(''));
const reversedText = ref('');
const inputName = ref('');

function receiveEmitResult(newVal){
	reversedText.value = newVal
}
function receiveEmit(newValue){ // emit qui reçoit l'input de 'InputNameComponent.vue'
  inputName.value = newValue;
}

function reverse() { 
  reversedText.value = inputName.value.split('').reverse().join('');
  inputName.value = '';
}
</script>

<template>
  <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <TitleComponent :title="reverseName"></TitleComponent>
        <DescriptionPropsComponent :description="descriptionComponent"></DescriptionPropsComponent>
        <InputNameComponent :message="customMessage" @inputChanged="receiveEmit"></InputNameComponent>
				<InputResultComponent :value="reversedText" @inputRes="receiveEmitResult"></InputResultComponent>
        <ButtonComponent @click="reverse"/>
    </form>
  </div>
</template>
