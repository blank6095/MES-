<template>
	<button @click="popup">弹出</button>
	<u-popup :show="showPopup" :round="10" mode="center" @close="close" @open="open" class="popup-container">
		<view class="popup-content">
			<view class="title">
				<text>指定会员</text>
			</view>
			<u-input placeholder="请输入会员名称" class=""></u-input>
			<button @click="showPopup=false">确认</button>
		</view>
	</u-popup>
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