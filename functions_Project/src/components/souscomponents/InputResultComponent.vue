<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const {value} = defineProps(['value']);
const emits = defineEmits(['inputRes']);

function inputResult(){
	emits('inputRes', result.value);
}

</script>

<template>
	<div>
		<slot>
			<label for="result" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result:</label>
		</slot>

		<input id="-input-result"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
		:value = "value"
		@input="inputResult"
		/>
	</div>
</template>