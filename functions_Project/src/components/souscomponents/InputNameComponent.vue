<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const inputName = ref('');
const { message } = defineProps(['message']);
const emits = defineEmits(['inputChanged']);

function onInputChange(){
	emits('inputChanged', inputName.value)
}
</script>

<template>
	<div>
		<slot>
				<label for="name-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ message }}</label>
		</slot>

		<input
				id="name-input"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
				v-model="inputName"
				@input="onInputChange"
    />
	</div>
</template>