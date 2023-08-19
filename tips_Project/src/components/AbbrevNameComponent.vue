<script setup>
import { ref, onMounted } from 'vue';

const inputName = ref('');
const abbreviatedName = ref('');

function abbrevName() {
  let trimVariable = inputName.value.trim();
  let splitName = trimVariable.split(" ");
  let result = "";

  for (let i = 0; i < splitName.length; i++) {
    if (splitName[i].length > 0) {
      result += splitName[i][0].toUpperCase();

      if (i < splitName.length - 1) {
        result += ".";
      }
    }
  }
  return result;
}

function getInitials() {
  abbreviatedName.value = abbrevName();
}

</script>

<template>

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Initiales</h5>
        <h1>Write words and get the initials.</h1>

        <div>
            <label for="name-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Put your name:</label>
            <input id="name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            v-model="inputName"
			/>
        </div>

        <div>
            <label for="reverse-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result:</label>
            <input id="reverse-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
            v-model="abbreviatedName"
			/>
        </div>

        <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		@click="getInitials"
		>Click
		</button>
    </form>
</div>

</template>


