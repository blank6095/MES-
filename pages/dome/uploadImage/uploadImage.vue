<template>
	<view class="content">
		<view class="url">
			<view class="title">图片地址</view>
			<u-copy :content="url" class="copy">
				<view class="copy-box">{{format(url)}}</view>
				<view class="copy-btn" @click="copyUrl">
					<u-icon name="/static/复制.png" size="20"></u-icon>
				</view>
			</u-copy>
		</view>
		<view class="img-list">
			<view class="image-item" v-for="(item,index) in images" @click="showUrl(item,index)" :class="{active:num===index}">
				<image :src="item" mode="aspectFill"></image>
			</view>
			<view class="addImage"  @click="uploadImage()">
				<u-icon name="plus" size="50" color="#949494"></u-icon>
				<text>添加图片</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {computed,ref} from 'vue';
	const images = ref([])
	const url = ref("")
	const num=ref(-1)
	const showUrl=(e,index)=>{
		url.value=e
		num.value=index
		// console.log(num.value);
	}
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
				images.value.push(data.data.src);
				console.log("上传图片",images.value);
				uni.hideLoading();	
			},
			fail: (err) => {
				console.error('上传失败:', err);
				
			}
		});
		return
	}
	//从本地选择图片
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
			}
		});
	}
	const format =(url)=>{
		if(url)
		return `${url.substring(0, 12)}...${url.substring(url.length - 12)}`
	}
</script>

<style lang="scss" scoped>
	@import 'uploadImage.scss'
</style>