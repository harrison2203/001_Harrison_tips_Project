
<script setup>
import { ref } from 'vue';

const inputAmount = ref();
const inputTipAmount = ref();
const total = ref(0);
const showResult = ref(false);

function tips() {
  total.value = inputAmount.value * (inputTipAmount.value / 100);
  showResult.value = true;
}
</script>


<template>
	<h1 class="text-center text-9xl">Tips!</h1>
  
	<div class="flex-col">
	  <label for="amount-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total amount</label>
	  <input
		id="amount-input"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		v-model="inputAmount"
	  /><br />
	</div>
  
	<div class="flex-col">
	  <label for="tip-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Percentage</label>
	  <input
		id="tip-input"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		v-model="inputTipAmount"
	  /><br />
	</div>
  
	<div>
	  <button
		type="button"
		class="flex justify-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-10 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
		@click="tips()"
	  >
		Click
	  </button>
	</div>
  
	<p v-if="showResult">{{ total }}</p>
	
  </template>

