<script setup>
import { ref, defineProps } from 'vue';

const { title } = defineProps(['title']);

</script>

<template>
	<div>
		<h1>{{ title }}</h1>
	</div>
</template>