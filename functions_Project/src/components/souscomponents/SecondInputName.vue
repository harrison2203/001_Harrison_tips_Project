<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const inputNameResult = ref ('');
const emits = defineEmits(['emitResult']);

function inputResult(){
	emits ('emitResult', {value: inputNameResult.value});
}
</script>

<template>
	<div>
		<slot>
			<label for="result" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Odd or Not:</label>
		</slot>
		<input
		id="name-input"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
		v-model="inputNameResult"
		@input="inputResult"
		/>
	</div>
</template>