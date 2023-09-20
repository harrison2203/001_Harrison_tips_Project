<script setup>
import ReverseComponent from '../components/ReverseComponent.vue';
import PalindromeComponent from '../components/PalindromeComponent.vue';
import TipsComponent from '../components/TipsComponent.vue';
import OddEvenComponent from '../components/OddEvenComponent.vue';
import EraseVowelsComponent from '../components/EraseVowelsComponent.vue';
import CapitalLetterComponent from '../components/CapitalLetterComponent.vue';
import GetInitialsComponent from '../components/GetInitialsComponent.vue';

</script>

<template>
	<div class="grid gap-5 grid-cols-3 grid-rows-2 m-8">
		<PalindromeComponent/>

		<ReverseComponent/>
		
		<GetInitialsComponent/>

		<OddEvenComponent/>

		<EraseVowelsComponent/>

		<CapitalLetterComponent/>
	</div>
</template>