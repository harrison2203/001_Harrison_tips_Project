<script setup>
import { ref } from 'vue';
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import DescriptionPropsComponent from './souscomponents/DescriptionPropsComponent.vue';
import TitleComponent from './souscomponents/TitleComponent.vue';
import InputResultComponent from './souscomponents/InputResultComponent.vue';

const TitleErase = "Erase vowels";
const descriptionComponent = "You will see vowels disapear.";
const eraseVowelsMessage = "Write a sentence here:";
const inputName = ref('');
const result = ref('');

function receiveEmitResult(newVal){
	result.value = newVal;
}

function receiveEmit(newValue){ // emit qui reçoit l'input de 'InputNameComponent.vue'
  inputName.value = newValue;
}

function eraseVowel (){
	result.value = inputName.value.replace(/[aeiou]/gi, '');
}
</script>

<template>
	<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
		<form class="space-y-6" action="#">
			<TitleComponent :title="TitleErase"></TitleComponent>
			<DescriptionPropsComponent :description="descriptionComponent"></DescriptionPropsComponent>
			<InputNameComponent :message="eraseVowelsMessage" @inputChanged="receiveEmit"></InputNameComponent>
			<InputResultComponent :value="result" @inputRes="receiveEmitResult"></InputResultComponent>
			<ButtonComponent  @click="eraseVowel"/>
		</form>
	</div>
</template>