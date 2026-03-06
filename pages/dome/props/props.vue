<template>
  <view class="container">
    <video
      :src="videoUrl"
      :controls="true"
      :show-play-btn="true"
      :show-center-play-btn="true"
      class="video-player"
      @loadedmetadata="onLoadedMetadata"
      @play="onPlay"
      @pause="onPause"
      @ended="onEnded"
      @error="onError"
      @waiting="onWaiting"
    />
    
    <view class="info-panel">
      <view class="info-item">时长: {{ duration }}秒</view>
      <view class="info-item">尺寸: {{ width }}x{{ height }}</view>
      <view class="info-item">文件大小: {{ fileSize }}</view>
      <view class="info-item">状态: {{ status }}</view>
    </view>
    
    <button @click="downloadAndCheck">⬇️ 下载并检查</button>
    <button @click="reuploadVideo">🔄 重新上传视频</button>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const videoUrl = ref('https://items.xdjpro.com/upload/20260224/20260224144648_96022.mp4')
const duration = ref(0)
const width = ref(0)
const height = ref(0)
const fileSize = ref('')
const status = ref('等待加载')

const onLoadedMetadata = (e) => {
  duration.value = e.detail.duration || 0
  width.value = e.detail.width || 0
  height.value = e.detail.height || 0
  
  console.log('📊 视频信息:', {
    duration: duration.value,
    width: width.value,
    height: height.value
  })
  
  // ⭐ 关键检查
  if (duration.value === 0) {
    status.value = '❌ 视频时长为 0'
    uni.showModal({
      title: '视频文件异常',
      content: '视频时长为 0，文件可能损坏。请重新上传或转码视频。',
      showCancel: false
    })
  } else if (duration.value < 1) {
    status.value = '⚠️ 视频时长太短'
    console.warn('视频时长小于 1 秒，可能不完整')
  } else {
    status.value = '✅ 视频正常'
  }
}

const onPlay = () => {
  console.log('▶️ 播放')
  status.value = '播放中'
}

const onPause = () => {
  console.log('⏸️ 暂停')
}

const onEnded = () => {
  console.log('⏹️ 结束')
  status.value = '播放结束'
  
  // 如果时长正常但立即结束，说明有问题
  if (duration.value > 5) {
    console.error('⚠️ 视频时长正常但提前结束，文件可能损坏!')
  }
}

const onError = (e) => {
  console.error('❌ 错误:', e)
  status.value = '加载失败'
}

const onWaiting = () => {
  console.log('⏳ 缓冲中...')
}

// 下载检查
const downloadAndCheck = () => {
  uni.showLoading({ title: '下载中...' })
  
  uni.downloadFile({
    url: videoUrl.value,
    success: (res) => {
      uni.hideLoading()
      fileSize.value = (res.tempFileSize / 1024).toFixed(2) + 'KB'
      
      console.log('✅ 下载成功:', res.tempFilePath)
      console.log('📦 文件大小:', res.tempFileSize, '字节')
      
      // 检查文件大小是否合理
      if (res.tempFileSize < 1024) {
        uni.showModal({
          title: '文件异常',
          content: '文件太小，可能上传不完整',
          showCancel: false
        })
      } else {
        uni.showModal({
          title: '下载成功',
          content: `文件大小: ${fileSize.value}\n\n请在电脑上用 VLC 播放器检查:\n1. 能否正常播放？\n2. 时长是多少？\n3. 编码是否为 H.264？`,
          showCancel: false
        })
      }
    },
    fail: (err) => {
      uni.hideLoading()
      console.error('❌ 下载失败:', err)
      uni.showToast({ title: '下载失败', icon: 'none' })
    }
  })
}

// 重新上传提示
const reuploadVideo = () => {
  uni.showModal({
    title: '重新上传视频',
    content: '建议使用以下设置重新转码视频:\n\n格式：MP4\n视频编码：H.264\n音频编码：AAC\n分辨率：1280x720 或 1920x1080\n帧率：25 或 30fps',
    confirmText: '知道了',
    showCancel: false
  })
}
</script>

<style scoped>
.container {
  padding: 20rpx;
}

.video-player {
  width: 100%;
  height: 400rpx;
  background: #000;
  border-radius: 12rpx;
}

.info-panel {
  margin-top: 20rpx;
  padding: 20rpx;
  background: #f5f5f5;
  border-radius: 8rpx;
}

.info-item {
  padding: 10rpx 0;
  font-size: 26rpx;
  color: #666;
}

button {
  margin-top: 20rpx;
  width: 100%;
}
</style>