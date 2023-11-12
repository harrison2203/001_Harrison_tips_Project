<script setup>
import ButtonComponent from './souscomponents/ButtonComponent.vue';
import InputNameComponent from './souscomponents/InputNameComponent.vue';
import DescriptionPropsComponent from './souscomponents/DescriptionPropsComponent.vue';
import TitleComponent from './souscomponents/TitleComponent.vue';
import InputResultComponent from './souscomponents/InputResultComponent.vue';
import { ref } from 'vue';

const titleInitials = "Initiales";
const descriptionComponent = "Write words and get the initials.";
const customLabel = "Get your name:";
const abbreviatedName = ref('');
const inputName = ref('');

// emit qui reçoit l'input de 'InputResultComponent'
function receiveEmitResult(newVal){
	abbreviatedName.value = newVal;
}
// emit qui reçoit l'input de 'InputNameComponent'
function receiveEmit(newValue){
  inputName.value = newValue
}

//fonction principale
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

function getInitials(){
  abbreviatedName.value = abbrevName();
}
</script>

<template>
  <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <TitleComponent :title="titleInitials"></TitleComponent>
        <DescriptionPropsComponent :description="descriptionComponent"></DescriptionPropsComponent>
        <InputNameComponent :message="customLabel" @inputChanged="receiveEmit"></InputNameComponent>
				<InputResultComponent :value="abbreviatedName" @inputRes="receiveEmitResult"></InputResultComponent>
        <ButtonComponent @click="getInitials"/>
    </form>
  </div>
</template>



