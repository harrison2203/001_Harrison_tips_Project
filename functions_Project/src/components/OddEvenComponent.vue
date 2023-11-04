<script setup>
import { ref } from 'vue';
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import DescriptionPropsComponent from './souscomponents/DescriptionPropsComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import TitleComponent from './souscomponents/TitleComponent.vue';
import InputResultComponent from './souscomponents/InputResultComponent.vue';

const customOddLabel = "Write down a number:";
const titleComponent = "Odd or Even";
const descriptionComponent = "Write a number and get if is even or not.";
const inputName = ref('');
const result = ref('');

function receiveEmitResult(newVal){
	result.value = newVal;
}
function receiveEmit(newValue){
    inputName.value = newValue;
}

function evenOrNot(){
    if (inputName.value %2 === 0) {
        result.value = "Even";
    } else{
        result.value = "Odd";
    }
}

</script>

<template>
	<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
			<form class="space-y-6" action="#">
					<TitleComponent :title="titleComponent"></TitleComponent>
					<DescriptionPropsComponent :description="descriptionComponent"></DescriptionPropsComponent>
					<InputNameComponent :message="customOddLabel" @inputChanged="receiveEmit"></InputNameComponent>
					<InputResultComponent :value="result" @inputRes="receiveEmitResult"></InputResultComponent>
					<ButtonComponent @click="evenOrNot"/>
			</form>
	</div>
</template>