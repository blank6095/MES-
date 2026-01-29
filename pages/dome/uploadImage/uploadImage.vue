<template>
	<view>
		<u-image :src="image" @click="uploadImage()"></u-image>
	</view>
	<view class="">
		url:
		<text>{{image}}</text>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const image=ref()
	const uploadImageFile = (tempFilePath) => {
		uni.showLoading({
			title: '上传中'
		});
		uni.uploadFile({
			// 修复问题3：使用正确的接口地址
			url: 'https://slapi.xdjplus.com/Api/Common/UploadImages',
			filePath: tempFilePath,
			name: 'file',
			header: {
				'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdOa1i-ivlSIsImp0aSI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDI2LzIvMjcgMTQ6NDE6MjgiLCJuYmYiOjE3Njk1ODI0ODgsImV4cCI6MTc3MjE3NDQ4OCwiaXNzIjoiTWFnaWNTaG9wIiwiYXVkIjoiTWV0YU1hZ2ljU2hvcCJ9.BZD5XuzHOsVhI3k9XM6Z158Z119Y0u6JKrSFqSPQXFY"
			},
			success: (res) => {
				const data = JSON.parse(res.data)
				console.log(data.data.src);
				image.value = data.data.src;
				uni.hideLoading();
				this.$u.toast('上传成功');
			},
			fail: (err) => {
				console.error('上传失败:', err);
				this.$u.toast('网络错误');
			}
		});
		return
	}
	const uploadImage = () => {
		uni.chooseImage({
			count: 1, // 只允许选择1张图片
			sizeType: ['compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				uploadImageFile(res.tempFilePaths[0])
			},
			fail: (err) => {
				console.error('选择图片失败:', err);
				this.$u.toast('选择图片失败');
			}
		});
	}
	
</script>

<style>

</style>