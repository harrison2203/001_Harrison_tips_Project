<script setup>
import {ref} from 'vue';

const inputAmount = ref ();
const inputTipAmount = ref(3);
const total = ref('');
const showResult = ref (false)

function tips() {
  total.value = inputAmount.value * (inputTipAmount.value / 100);
  showResult.value = true;
}

</script>

<template>


<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Tips!</h5>

        <div>
            <label for="totalAmount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total amount</label>
            <input id="amount-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 		v-model="inputAmount"
			/>
        </div>

		<div>
			<label for="selectPercentage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total amount</label>
			<select id="select"  v-model="inputTipAmount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
				<option selected class="text-center">%</option>
				<option value="5" class="text-center">5</option>
				<option value="10" class="text-center">10</option>
				<option value="20" class="text-center">20</option>
			</select>
		</div>

        <div>
            <label for="totalTip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Tip :</label>
            <input id="total" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white "
			v-model="total"
			/>
        </div>

        <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		@click="tips"
		>Click
		</button>

    </form>
</div>
</template>

