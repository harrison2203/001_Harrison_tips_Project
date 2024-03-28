<script setup>
import { ref, defineEmits } from "vue";

const emits = defineEmits(['send-filter', 'send-value-searchbar']);
const inputSearch = ref('');

const mapping = {
	initiales : "GetInitialsComponent",
	palindrome : "PalindromeComponent",
	oddOrEven : "OddEvenComponent",
	eraseVowels : "EraseVowelsComponent",
	capitalLetter : "CapitalLetterComponent",
	esreveR : "ReverseComponent"
};

function filterFunction(){
	const matchNames = [];
		for (const title in mapping){
			console.log('le title', title)
			if(title.toLowerCase().includes(inputSearch.value.toLocaleLowerCase().replace(/ /g, ""))){
				matchNames.push(mapping[title]);
			}
		}
		emits("send-filter", matchNames);
		console.log("show me", matchNames)
			return matchNames;
}
</script>

<template>
	<form class="flex items-center justify-center mt-6">
		<div class="relative w-2/3	 mx-auto">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3">
				<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
				</svg>
			</div>
			<input type="search" v-model="inputSearch" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your function..." required @input="$emit('send-value-searchbar', inputSearch)">
		</div>
		<div class="item document" v-for="document in filterFunction()" :key="document"></div>
	</form>
</template>
