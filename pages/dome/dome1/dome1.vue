<template>
	<u-input placeholder="请输入插槽1内容" v-model="input1"></u-input>
	<u-input placeholder="请输入插槽2内容" v-model="input2"></u-input>
	<view>
		<dome>
			<template #input1>{{input1}}</template>
			<template #input2>{{input2}}</template>
		</dome>
	</view>
</template>

<script setup>
import {ref} from 'vue'
const input1=ref()
const input2=ref()
</script>

<style lang="scss">
	       
</style>
