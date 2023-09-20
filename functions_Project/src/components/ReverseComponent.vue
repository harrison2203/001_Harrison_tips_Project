
<script setup>
import { ref } from 'vue';
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';

const customMessage = "Put your name:";
const reverseName = ref ('Reverse'.split('').reverse().join(''));
const reversedText = ref(''); // stocke la string inversé
const inputName = ref(''); // stocke le string que je mets dans l'input

function handleInputChanged(newValue){ // emit qui reçoit l'input de 'InputNameComponent.vue'
  inputName.value = newValue;
}

function reverse() { 
  reversedText.value = inputName.value.split('').reverse().join(''); // cette fonction prend la valeur de nameReverse puis split reverse et join et ensuite le stocke dans reversedText
  inputName.value = ''; // ici on réinitialise la valeur de la variable afin d'effacer le contenu de l'input
}

</script>

<template>
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">{{ reverseName }}</h5>
          <h1>Write a word and get it reversed.</h1>

          <div>
            <InputNameComponent :message="customMessage" @inputChanged="handleInputChanged">
            </InputNameComponent>
          </div>

          <div>
              <label for="name-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">your reversed name:</label>
              <input id="name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
              v-model="reversedText"
        />
          </div>
          <ButtonComponent @click="reverse"/>
      </form>
  </div>
</template>