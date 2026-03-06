<template>
	<!-- 内容区域 -->
	<view class="content">
		<!-- 添加文件区域 -->
		<view class="add-file-container">
			<text class="section-title">添加新文件</text>
			<view class="add-file-form">
				<up-input 
					type="text" 
					placeholder="请输入文件名" 
					border="bottom" 
					v-model="file" 
					customStyle="flex: 1; margin-right: 10px;" 
				/>
				<up-button type="primary" @click="addFile" size="default">添加</up-button>
			</view>
		</view>
		
		<!-- 文件列表区域 -->
		<view class="file-list-container">
			<text class="section-title">文件列表</text>
			<view v-if="fileList.length === 0" class="empty-state">
				<up-icon name="document" size="60" color="#ccc" />
				<text class="empty-text">暂无文件</text>
				<text class="empty-subtext">点击上方添加按钮创建新文件</text>
			</view>
			<view v-else class="file-list">
				<view 
					v-for="(item, index) in fileList" 
					:key="index" 
					class="file-card" 
					@click="sendToDome(item.name)"
				>
					<up-avatar 
						shape="square" 
						size="60" 
						:src="item.url" 
						customStyle="margin-bottom: 10px;" 
					/>
					<text class="file-name">{{ item.name }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue';
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app';

	const file = ref('')
	const urls = [
		'https://uview-plus.jiangruyi.com/album/1.jpg',
		'https://uview-plus.jiangruyi.com/album/2.jpg',
		'https://uview-plus.jiangruyi.com/album/3.jpg',
		'https://uview-plus.jiangruyi.com/album/4.jpg',
		'https://uview-plus.jiangruyi.com/album/5.jpg',
		'https://uview-plus.jiangruyi.com/album/6.jpg',
		'https://uview-plus.jiangruyi.com/album/7.jpg',
		'https://uview-plus.jiangruyi.com/album/8.jpg',
		'https://uview-plus.jiangruyi.com/album/9.jpg',
		'https://uview-plus.jiangruyi.com/album/10.jpg',
	];
	const fileList = ref([
		{name: "watch",url: urls[uni.$u.random(0, urls.length - 1)]},
		{name: "dome1",url: urls[uni.$u.random(0, urls.length - 1)]},
		{name: "uploadImage",url: urls[uni.$u.random(0, urls.length - 1)]},
		{name: "props",url: urls[uni.$u.random(0, urls.length - 1)]},
		{name: "goEasy",url: urls[uni.$u.random(0, urls.length - 1)]},
	]);
	onLoad(() => {

	});
	const loadmore = () => {
		
	};
	const addFile = () => {
		if (!file.value || file.value.trim() === '') {
			uni.showToast({
				title: '请输入文件名',
				icon: 'none',
				duration: 1500
			});
			return;
		}
		
		fileList.value.push({
			name: file.value.trim(),
			url: urls[uni.$u.random(0, urls.length - 1)],
		});
		
		uni.showToast({
			title: '文件添加成功',
			icon: 'success',
			duration: 1500
		});
		
		file.value = '';
	}
	const sendToDome = (name) => {
		uni.navigateTo({
			url: `/pages/dome/${name}/${name}`,
			success: () => {
				// 导航成功
			},
			fail: (err) => {
				uni.showToast({
					title: '导航失败',
					icon: 'none',
					duration: 1500
				});
				console.error('导航失败:', err);
			}
		});
	}
</script>
<style>
	@import 'index.scss'
</style>