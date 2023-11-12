<script setup>
import { ref } from 'vue';
import ReverseComponent from '../components/ReverseComponent.vue';
import PalindromeComponent from '../components/PalindromeComponent.vue';
//import TipsComponent from '../components/TipsComponent.vue';
import OddEvenComponent from '../components/OddEvenComponent.vue';
import EraseVowelsComponent from '../components/EraseVowelsComponent.vue';
import CapitalLetterComponent from '../components/CapitalLetterComponent.vue';
import GetInitialsComponent from '../components/GetInitialsComponent.vue';
import SearchBarComponent from '../components/souscomponents/SearchBarComponent.vue';

const inputName = ref('');
const matchNames = ref([]);

const receiveSearchBar = (inputValue) => {
	inputName.value = inputValue;
	console.log("testons", inputName.value)
}

function receiveMapping(newValue){
	if (JSON.stringify(newValue) !== JSON.stringify(matchNames.value)) {
		matchNames.value = newValue;
		console.log('newvalue', newValue);
		console.log('match', matchNames.value);
	}
}
</script>

<template>
	<div >
		<div class="text-center">
				<SearchBarComponent @send-filter="receiveMapping" @send-value-searchbar="receiveSearchBar"/>
		</div>
		<div v-if="inputName == ''" class="grid gap-5 grid-cols-3 grid-rows-2 m-8">
				<PalindromeComponent/>
				<ReverseComponent />
				<GetInitialsComponent/>
				<OddEvenComponent/>
				<EraseVowelsComponent/>
				<CapitalLetterComponent/>
		</div>
		<div v-else="" class="flex justify-center  m-14">
				<template v-if="matchNames.includes('PalindromeComponent')">
					<PalindromeComponent/>
				</template>

				<template v-else-if="matchNames.includes('ReverseComponent')">
					<ReverseComponent />
				</template>

				<template v-else-if="matchNames.includes('GetInitialsComponent')">
        	<GetInitialsComponent/>
				</template>

				<template v-else-if="matchNames.includes('OddEvenComponent')">
					<OddEvenComponent/>
				</template>

				<template v-else-if="matchNames.includes('EraseVowelsComponent')">
					<EraseVowelsComponent/>
				</template>

				<template v-else-if="matchNames.includes('CapitalLetterComponent')">
					<CapitalLetterComponent/>
				</template>

				<template v-else="">
					<p class="font-bold text-4xl text-red-600">No Matches Found</p>
				</template>
			</div>
		
	</div>
	</template>

	<style scoped>
</style>
