<script setup>
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import TitlePropsComponent from './souscomponents/TitlePropsComponent.vue';
import { ref } from 'vue';

const titleComponent = "Write a sentence down";
const customCapitalMessage = "Write whatever you want here :";
const inputName = ref('');
const array = ref ([]);
const result = ref('');

function handleInputChanged(newValue){ // emit qui reçoit l'input de 'InputNameComponent.vue'
  inputName.value = newValue
}

function capitalLetter(){
    array.value = inputName.value.split(" ");
    
    for (let i=0; i <array.value.length; i++){
    array.value[i] = array.value[i].charAt(0).toUpperCase() + array.value[i].slice(1)
    }
    result.value = array.value.join (" ");
}
</script>

<template>
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Capital Letter</h5>
            <div>
                <TitlePropsComponent :title="titleComponent">
                </TitlePropsComponent>
            </div>

            <div>
            <InputNameComponent :message="customCapitalMessage" @inputChanged="handleInputChanged">
            </InputNameComponent>
            </div>

            <div>
                <label for="result" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result:</label>
                <input id="result" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                v-model="result"
                />
            </div>

            <ButtonComponent @click="capitalLetter"/>
        </form>
    </div>
</template>