<script setup>
import { ref } from 'vue';
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import DescriptionPropsComponent from './souscomponents/DescriptionPropsComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import TitleComponent from './souscomponents/TitleComponent.vue';

const customOddLabel = "Write down a number:";
const titleComponent = "Odd or Even";
const descriptionComponent = "Write a number and get if is even or not.";
const inputName = ref('');
const result = ref('');

function receiveEmit (newValue) {
    inputName.value = newValue;
}

function evenOrNot (){
    if (inputName.value %2 === 0) {
        inputNameResult.value = "Even";
    } else{
        inputNameResult.value = "Odd";
    }
}

</script>

<template>
	<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
			<form class="space-y-6" action="#">
					<TitleComponent :title="titleComponent"></TitleComponent>
					<DescriptionPropsComponent :description="descriptionComponent"></DescriptionPropsComponent>
					<InputNameComponent :message="customOddLabel" @inputChanged="receiveEmit"></InputNameComponent>
					<div>
							<label for="result" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Odd or not : </label>
							<input id="result" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
							v-model="result"
							/>
					</div>
					<ButtonComponent @click="evenOrNot"/>
			</form>
	</div>
</template>