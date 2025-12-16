<template>
  <div class="tf-header-wrap">
    <div class="left">
      <div class="time-local text-body-3">
        <p class="date">{{ dateString }}</p>
        <p class="clock">{{ timeString }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const timeString = ref('')
const dateString = ref('')
let timer
const update = () => {
  const now = new Date()
  timeString.value = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  dateString.value = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}
onMounted(() => {
  update()
  timer = setInterval(update, 1000)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>
