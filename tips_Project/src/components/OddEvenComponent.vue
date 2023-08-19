<script setup>
import { ref } from 'vue';


const inputName = ref('');
const result = ref('');

function evenOrNot (){

    if (inputName.value %2 === 0) {
        result.value = "Even";

    } else {
        result.value = "Odd";
    }
}
</script>

<template>

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Odd or Even</h5>
        <h1>Write a number and get if is even or not.</h1>

        
        <div>
            <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Put your name:</label>
            <input id="number-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            v-model="inputName"
			/>
        </div>

        <div>
            <label for="result" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Odd or Not:</label>
            <input id="result" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
            v-model="result"
			/>
        </div>

        <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		@click="evenOrNot"
		>Click
		</button>
    </form>
</div>
</template>