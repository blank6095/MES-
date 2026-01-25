<template>
  <view class="container">
    <!-- 盒子1 -->
    <view 
      class="box" 
      :class="{ active: currentActive === 0 }"
      @click="handleClick(0)"
    >
      盒子 A
    </view>

    <!-- 盒子2 -->
    <view 
      class="box" 
      :class="{ active: currentActive === 1 }"
      @click="handleClick(1)"
    >
      盒子 B
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

// 当前激活的盒子索引（初始为 -1 表示无选中，或设为 0 表示默认选第一个）
const currentActive = ref(-1)

const handleClick = (index) => {
  currentActive.value = index
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 40rpx;
  padding: 60rpx;
}

.box {
  width: 200rpx;
  height: 200rpx;
  background-color: #f0f0f0;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  color: #666;
  transition: all 0.3s;
}

/* 激活状态样式 */
.box.active {
  background-color: #007AFF;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 8rpx 20rpx rgba(0, 122, 255, 0.3);
}
</style>