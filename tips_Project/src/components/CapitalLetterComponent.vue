<script setup>
import { ref } from 'vue';

const inputWord = ref('');
const array = ref ([]);
const result = ref('');

function capitalLetter (){

    array.value = inputWord.value.split(" ");
    
    for (let i=0; i <array.value.length; i++)  {

    array.value[i] = array.value[i].charAt(0).toUpperCase() + array.value[i].slice(1)
    }

    result.value = array.value.join (" ");

}

</script>

<template>

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Capital Letter</h5>
		<h1>Write a word here and see!</h1>
        
        <div>
            <label for="word-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Put your word:</label>
            <input id="word-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            v-model="inputWord"
            />
        </div>

        <div>
            <label for="result" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result:</label>
            <input id="result" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
            v-model="result"
            />
        </div>

        <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="capitalLetter"
        >Click
        </button>
    </form>
</div>
</template>