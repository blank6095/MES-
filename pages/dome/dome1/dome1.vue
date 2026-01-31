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
</template>

<script>
	export default {
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
	.border1{
		position: absolute;
		width: 170rpx;
		height: 170rpx;
		border-radius:50% ;
		background-color: white;
		margin: 0rpx 0rpx 260rpx 600rpx;
	}
	.border2{
		position: absolute;
		width: 150rpx;
		height: 150rpx;
		border-radius:50% ;
		background-color: white;
		margin: 250rpx 300rpx 0rpx 0rpx;
	}
	.card-container {
		position: relative;
		background-color: #f5f5f5;
	}
	.store-card {
		display: flex;
		align-items: center;
		background-image: linear-gradient(135deg, #00a868, #00c77d);
		padding: 30rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
		color: white;
		overflow: hidden;
	}

	.logo {
		background-color: transparent;
		image {
			width: 150rpx;
			height: 150rpx;
			border-radius: 20rpx;
		}
		margin-right: 30rpx;
		margin-bottom: 40rpx;
	}

	.content {
		flex: 1;
		overflow: hidden;
	}

	.title {
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	.rating {
		display: flex;
		align-items: center;
		margin: 10rpx 0rpx;
	}

	.stars {
		font-size: 28rpx;
		margin-right: 10rpx;
	}

	.score {
		font-size: 28rpx;
		font-weight: bold;
		margin-right: 10rpx;
	}

	.max {
		font-size: 24rpx;
		opacity: 0.8;
	}

	.tags {
		margin-bottom: 20rpx;
	}

	.tag {
		font-size: 24rpx;
		opacity: 0.9;
	}

	.call-btn {
		background-color: white;
		border: none;
		border-radius: 20rpx;
		padding: 10rpx 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		phone-number{
			color: rgba(255, 255, 255, 0.2);
		}
		width: 50%;
		height:	70rpx;
		margin-left: 240rpx;
		margin-right: 0rpx;
	}

	.phone-icon {
		margin-right: 10rpx;
	}
</style>