<template>
	<view class="card-container">
		<!-- 卡片容器 -->

		<view class="store-card">
			<view class="border1"></view>
			<view class="border2"></view>
			<!-- 左侧图标 -->
			<view class="logo">
				<image src="https://items.xdjpro.com/20240329120117_18007.jpg" mode="aspectFill"></image>
			</view>
			<!-- 右侧内容 -->
			<view class="content">
				<text class="title">Meetall美特好超市（优选）</text>

				<!-- 星级评分 -->
				<view class="rating">
					<text class="stars">★★★★★</text>
					<text class="score">5.0</text>
					<text class="max">满分5分</text>
				</view>

				<!-- 类型标签 -->
				<view class="tags">
					<text class="tag">超市 · 优选店</text>
				</view>
				<button class="call-btn" @click="call">
					<u-icon name="phone"></u-icon>
					<text class="phone-number">13202369854</text>
				</button>
			</view>
		</view>
	</view>
	<view class="store-address">
		<view class="address">
			<view class="icon">
				<u-icon name="map-fill"></u-icon>
			</view>
			<view class="detaill">
				<view class="title">
					店铺地址
				</view>
				<view class="ad">
					中国重庆市南岸市
				</view>
			</view>
		</view>
		<view class="container">
			<!-- 轮播图容器 -->
			<swiper class="banner-swiper" :indicator-dots="true" :autoplay="true" circular>
				<swiper-item v-for="(item, index) in banners" :key="index" class="banner-item">
					<image :src="item" class="banner-image" mode="aspectFill" />
				</swiper-item>
			</swiper>
		</view>
		<button class="btn">一键导航</button>
		<view class="business-hours">
			<view class="left">
				<view class="icon">
					<u-icon name="clock-fill"></u-icon>
				</view>
				<view class="time">
					<view class="title">营业时间</view>
					<text>00:00 - 23:59</text>
				</view>
			</view>
			<button class="right">
				<u-icon name="checkmark-circle-fill"></u-icon>
				营业中
			</button>
		</view>
	</view>
	<view class="store-service">
		<view class="title">
			快捷服务
		</view>
		<view class="service-grid">
			<view class="service-item" v-for="(item,index) in storeService">
				<view class="service-icon">
					<u-icon :name="item.icon" :color="item.color" size="20"></u-icon>
				</view>
				<view class="service-name">
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banners: [
					"/static/wxv74p852humsjiat3y9d0cqzbgrln6o_PIC2018.png",
					"/static/wxv74p852humsjiat3y9d0cqzbgrln6o_PIC2018.png"
				],
				storeService: [{
						name: "电话",
						icon: "phone-fill",
						color: "#2563eb"
					},
					{
						name: "导航",
						icon: "map-fill",
						color: "#16a34a"
					},
					{
						name: "优惠券",
						icon: "tags-fill",
						color: "#dc2626"
					},
					{
						name: "会员",
						icon: "integral-fill",
						color: "#9333ea"
					},
					{
						name: "提建议",
						icon: "chat-fill",
						color: "#4f46e5"
					},
					{
						name: "会员",
						icon: "integral-fill",
						color: "#2563eb"
					},
				]
			}
		},
		methods: {
			call() {
				uni.makePhoneCall({
					phoneNumber: '13202369854'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import 'dome1.scss'
</style>