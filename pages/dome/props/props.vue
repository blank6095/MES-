<template>
	<button @click="test">点击</button>
</template>
<script setup>
	import {
		ref
	} from "vue";
	const showPopup = ref(false)
	const popup = () => {
		showPopup.value = true
	}
</script>
<style lang="scss">
	.popup-content {
		width: 600rpx;
		height: 300rpx;
		.tilte {
			text{
				text-align: center;
			}
		}
		
	}
</style>