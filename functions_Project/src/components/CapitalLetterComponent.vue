<script setup>
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import DescriptionPropsComponent from './souscomponents/DescriptionPropsComponent.vue';
import TitleComponent from './souscomponents/TitleComponent.vue';
import { ref } from 'vue';
import InputResultComponent from './souscomponents/InputResultComponent.vue';

const titleCapital = "Capital Letter";
const descriptionComponent = "Write a sentence down";
const customCapitalMessage = "Write whatever you want here :";
const inputName = ref('');
const array = ref ([]);
const result = ref('');

function receiveEmitResult(newVal){
	result.value = newVal;
}

function receiveEmit(newValue){ // emit qui reçoit l'input de 'InputNameComponent.vue'
  inputName.value = newValue
}

function capitalLetter(){
    array.value = inputName.value.split(" ");
    
    for (let i=0; i <array.value.length; i++){
    array.value[i] = array.value[i].charAt(0).toUpperCase() + array.value[i].slice(1)
    }
    result.value = array.value.join (" ");
}
</script>

<template>
	<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
		<form class="space-y-6" action="#">
			<TitleComponent :title="titleCapital"></TitleComponent>
			<DescriptionPropsComponent :description="descriptionComponent"></DescriptionPropsComponent>
			<InputNameComponent :message="customCapitalMessage" @inputChanged="receiveEmit"></InputNameComponent>
			<InputResultComponent :value="result" @inputRes="receiveEmitResult"></InputResultComponent>
			<ButtonComponent @click="capitalLetter" />
		</form>
	</div>
</template>
