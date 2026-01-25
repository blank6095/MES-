<template>
	<view class="container">
		<image src="https://uview-plus.jiangruyi.com/album/10.jpg" mode=""></image>
		<view class="content">
			<span class="title">{{title}}</span>
			<span class="data">{{data[0]}} 首 · {{data[1]}}次播放</span>
		</view>
	</view>
</template>

<script setup>
import { string } from '../../uni_modules/uview-plus/libs/function/test';

const {title,data}=defineProps({
	title:{type:String,default:"新建"},
	data:{type:Array}
})
</script>

<style lang="scss">
@import 'cardBox.scss'
</style>