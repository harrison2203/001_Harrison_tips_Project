<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { message, value } = defineProps(['message', 'value']);
const emits = defineEmits(['inputRes']);
const result = ref('');
const inputName = ref('');

function onInputChange() {
  emits('inputRes', result.value);
	emits('inputRes', inputName.result);
}
</script>

<template>
  <div>
    <slot>
      <label for="name-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Result: </label>
    </slot>
    <input
      id="name-input"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      :value="value"
      @input="onInputChange"
    />
  </div>
</template>
