<template>
	<view class="person-card">
		<u-avatar size="150rpx"></u-avatar>
		<view class="user-name" @click="login">
			{{getUserName}}
		</view>
		<view class="funtions">
			<function title="收藏" icon="star"></function>
			<function title="发现" icon="eye"></function>
			<function title="本地" icon="home"></function>
			<function title="资源" icon="grid"></function>
		</view>
	</view>
	<view class="info-card">
		<view class="tabs">
		    <up-tabs :list="list" ></up-tabs>
		</view>
		<view class="status">
			<span :class="{active:index===0}" @click="choose(0)">近期</span>
			<span :class="{active:index===1}" @click="choose(1)">创建</span>
		</view>
		<cardBox title="我的喜欢" :data="[103,288]"></cardBox>
	</view>
</template>
<script setup>
import { computed, ref } from 'vue';
import {store} from '/common/store/index.js'
// import { store } from '../../common/store';
const userInfo=ref();
const spanStyle=ref();
const index=ref(0)
const userStore = store()
const choose=(e)=>{
	index.value=e
}
const getUserName=computed(()=>{
	return userInfo.value ? userInfo.value.userName : "请登录";
})
const list=[
	{name:"博客"},
	{name:"笔记"},
	{name:"分享"},	
]
const login=()=>{
	userStore.value="123"
	uni.showToast({
		title:userStore.name
	})
}
</script>
<style lang="scss" scoped>
@import 'my.scss'
</style>