<script setup>
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import TitlePropsComponent from './souscomponents/TitlePropsComponent.vue';
import { ref, onMounted } from 'vue';

const titleComponent = "Write words and get the initials.";
const customLabel = "Get your name:";
const inputName = ref('');
const abbreviatedName = ref('');

function handleInputChanged(newValue){ // emit qui reçoit l'input de 'InputNameComponent.vue'
  inputName.value = newValue
}

function abbrevName() {
  let trimVariable = inputName.value.trim();
  let splitName = trimVariable.split(" ");
  let result = "";

  for (let i = 0; i < splitName.length; i++){

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
          <TitlePropsComponent :title="titleComponent">
          </TitlePropsComponent>
        
          <div>
            <InputNameComponent :message="customLabel" @inputChanged="handleInputChanged">
            </InputNameComponent>
          </div>

          <div>
            <label for="reverse-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result:</label>
            <input
              id="reverse-name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              v-model="abbreviatedName"
            />
          </div>
        <ButtonComponent @click="getInitials"/>
      </form>
    </div>
</template>



