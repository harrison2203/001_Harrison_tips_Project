
<script setup>
import { ref } from 'vue';
import ButtonComponent from './souscomponents/ButtonComponent.vue';

const inputAmount = ref();
const inputPercentage = ref();
const total = ref();
const showResult = ref(false);

function tips() {

  total.value = inputAmount.value * (inputPercentage.value / 100);
  showResult.value = true;

}

</script>

<template>
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Tips</h5>
            
            <div>
                <label for="amount-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount:</label>
                <input id="amount-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                v-model="inputAmount"
                />
            </div>

            <div>
                <label for="percentage-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Percentage</label>
                <input id="percentage-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                v-model="inputPercentage"
                />
            </div>

            <div>
                <label for="total" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total:</label>
                <input id="total" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                v-model="total"
                />
            </div>

            <ButtonComponent @click="tips"/>
        </form>
    </div>
  </template>

