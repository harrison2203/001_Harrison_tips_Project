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
const reversedText = ref(''); // stocke la string inversé
const inputName = ref(''); // stocke le string que je mets dans l'input


function receiveEmitResult(newVal){
	reversedText.value = newVal
}
function receiveEmit(newValue){ // emit qui reçoit l'input de 'InputNameComponent.vue'
  inputName.value = newValue;
}

function reverse() { 
  reversedText.value = inputName.value.split('').reverse().join(''); // cette fonction prend la valeur de nameReverse puis split reverse et join et ensuite le stocke dans reversedText
  inputName.value = ''; // ici on réinitialise la valeur de la variable afin d'effacer le contenu de l'input
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
