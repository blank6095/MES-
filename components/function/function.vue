<template>
	<view class="item" @click="go">
		<u-icon :name="icon" size="20" class="item"></u-icon>
		<span class="item">{{title}}</span>
	</view>
</template>
<script setup>
	import {
		ref
	} from 'vue';
	const {
		title,
		src,
		icon
	} = defineProps({
		title: {
			type: String,
			required: true
		},
		src: {
			type: String,
			default: '/pages/index/index'
		},
		icon: {
			type: String,
			default: 'plus'
		}
	})
	const go = () => {
		uni.navigateTo({
			url: src
		})
	}
</script>

<style lang="scss">
	@import 'function.scss'
</style>