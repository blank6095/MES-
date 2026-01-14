<template>
	<view class="addFile">
		<up-input type="text" placeholder="请输入文件名" border="bottom" v-model="file" />
		<button type="primary" @click="addFile">添加</button>
	</view>
	<view class="u-page">
		<up-list @scroll-to-lower="scrolltolower">
			<up-list-item v-for="(item, index) in fileList" :key="index">
				<up-cell :title="item.name" isLink @click="sendToDome(item.name)">
					<template #icon>
						<up-avatar shape="square" size="35" :src="item.url" customStyle="margin: -3px 5px -3px 0">
						</up-avatar>
					</template>
				</up-cell>
			</up-list-item>
		</up-list>
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

	const file = ref()
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
	const fileList = ref([{
		name: "dome1",
		url: urls[uni.$u.random(0, urls.length - 1)]
	}]);
	onLoad(() => {

	});

	const scrolltolower = () => {
		loadmore();
	};

	const loadmore = () => {
		fileList.value.push({
			name: file.value,
			url: urls[uni.$u.random(0, urls.length - 1)],
		});
	};
	const addFile = () => {
		loadmore()
	}
	const sendToDome = (file) => {
		uni.navigateTo({
			url: `/pages/dome/dome1/${file}`
		})
	}
</script>
<style>
	@import 'index.scss'
</style>