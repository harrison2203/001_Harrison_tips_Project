<script setup>
import { ref } from 'vue';
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import TitlePropsComponent from './souscomponents/TitlePropsComponent.vue';

const titleComponent = "You will see vowels disapear.";
const eraseVowelsMessage = "Write a sentence here:";
const inputName = ref('');
const result = ref('');
let count = ref(0);

function receiveEmit(newValue){ // emit qui reçoit l'input de 'InputNameComponent.vue'
  inputName.value = newValue
}

function eraseVowel (){
	result.value = inputName.value.replace(/[aeiou]/gi, '');
	count.value ++;
}

</script>

<template>
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Erase vowels</h5>
            
            <TitlePropsComponent :title="titleComponent"></TitlePropsComponent>
            
            <div>
            <InputNameComponent :message="eraseVowelsMessage" @inputChanged="receiveEmit">
            </InputNameComponent>
            </div>

            <div>
                <label for="result" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result:</label>
                <input id="result" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                v-model="result"
                />
            </div>

            <ButtonComponent  @click="eraseVowel"/>
        </form>
    </div>
</template>