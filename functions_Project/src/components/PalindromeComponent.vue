<script setup>
import { ref, onMounted } from 'vue';
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import TitlePropsComponent from './souscomponents/TitlePropsComponent.vue';

const titleComponent = "Is it the same backwards?."
const customMessage = "Put a word :"
const inputName = ref('');
const splitString = ref ('');
const result = ref('');

function receiveEmit(newValue){
    inputName.value = newValue;
}

function isPalindrome (){

    splitString.value = inputName.value.split("").reverse().join('')

    if(splitString.value.toLowerCase() ===inputName.value.toLowerCase()) {
        result.value = "It is a Palindrome !"
    } else {
        result.value = "It is not a Palindrome !"
    }
    return result.value
}

</script>

<template>
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Palindrome</h5>

            <TitlePropsComponent :title="titleComponent"></TitlePropsComponent>

            <div>
            <InputNameComponent :message="customMessage" @inputChanged="receiveEmit">
            </InputNameComponent>
            </div>

            <div>
                <label for="reverse-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">It's a palindrome?</label>
                <input id="reverse-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                v-model="result"
                />
            </div>

            <ButtonComponent @click="isPalindrome"/>
        </form>
    </div>
</template>
