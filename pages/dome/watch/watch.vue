<template> <u-input placeholder="请输入" v-model="value"></u-input>


</template>

 <script setup>
   // 1. 导入watch
   import { ref, watch } from 'vue'
   const value = ref()
   // 2. 调用watch 侦听变化
   watch(value, (newValue, oldValue)=>{	
          console.log(`value发生了变化，老值为${oldValue},新值为${newValue}`)
   },{immediate:true})
 </script>

<style lang="scss">

</style>