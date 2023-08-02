
<script setup>
import { ref } from 'vue';

const nameReverse = ref('');  // stocke le string que je mets dans l'input
const reversedText = ref(''); // stocke la string inversé

function reverse() { 
  reversedText.value = nameReverse.value.split('').reverse().join(''); // cette fonction prend la valeur de nameReverse puis split reverse et join et ensuite le stocke dans reversedText
  nameReverse.value = ''; // ici on réinitialise la valeur de la variable afin d'effacer le contenu de l'input
}

</script>

<template>

  <h1>Reverse</h1>

  <div class="test">
    <div>
      <input type="text" id="text" name="name" required placeholder="put your name" v-model="nameReverse">
    </div>
    <div>
      <button @click="reverse">click here</button>
    </div>
    <!-- Affiche le résultat inversé dans le <p> uniquement s'il y a une valeur dans reversedText -->
    <p v-if="reversedText">{{ reversedText }}</p>
  </div>
</template>







<style scoped>
/* Votre style CSS si nécessaire */
</style>