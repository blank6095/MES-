<template>
  <view>
    <button @click="subscribe">订阅通知</button>
    <view v-for="(msg, index) in messages" :key="index">
      {{ msg.content }}
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { getGoEasy } from '@/utils/goeasy.js'

const messages = ref([])

const subscribe = () => {
  const goEasy = getGoEasy()
  
  // 订阅频道（例如：系统通知频道）
  goEasy.subscribe({
    channel: "system_notice",
    onMessage: (message) => {
      console.log('收到消息:', message.content)
      messages.value.push(message)
    }
  })
}
</script>