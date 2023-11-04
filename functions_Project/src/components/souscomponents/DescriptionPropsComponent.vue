<script setup>
import { ref, defineProps } from 'vue';

const { description } = defineProps(['description']);
</script>

<template>
	<div>
			<h1>{{ description }}</h1>
	</div>
</template>