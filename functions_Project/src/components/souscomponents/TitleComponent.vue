<script setup>
import { defineProps } from 'vue';

const {title} = defineProps(['title']);
</script>

<template>
	<div>
		<h5 class="text-xl font-medium text-gray-900 dark:text-white">{{ title }}</h5>
	</div>
</template>