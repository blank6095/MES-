<!-- 文件名：dome.vue -->
<template>
	
  <view class="container">
    <!-- 头部 -->
    

    <!-- 内容区域 1 -->
    <view class="content1">
      <p>插槽1</p>
      <!-- 这里可以放具体内容，或者保留插槽 -->
      <slot name="input1">
        <!-- 默认内容（可选） -->
        <text class="slot-content">这里是插槽1的默认内容</text>
      </slot>
    </view>

    <!-- 内容区域 2 -->
    <view class="content2">
      <p>插槽2</p>
      <slot name="input2">
        <text class="slot-content">这里是插槽2的默认内容</text>
      </slot>
    </view>

    <!-- 底部 -->
    <view class="root">
      底部信息 &copy; 2024
    </view>
  </view>
</template>

<script setup>
// 保留原有的 Props 定义
defineProps(['name'])
</script>

<style lang="scss">
@import './dome.scss'; // 修正路径引用
</style>