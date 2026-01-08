<template>
  <div class="body-background">
    <div class="bg-item">
      <img loading="lazy" width="1440" height="900" :src="cloudBg" alt="Image">
    </div>
    <div class="bg-video video-dark">
      <video class="video" muted autoplay loop playsinline>
        <source :src="videoOverlay" type="video/mp4">
      </video>
      <div class="overlay-1"></div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import cloudBg from '../assets/images/item/cloud-bg.png'
import videoOverlay from '../assets/video/overlay-2.mp4'

let observer = null
let isUpdating = false

const updateBodyClasses = () => {
  if (isUpdating) return
  isUpdating = true

  const isDark = document.body.classList.contains('dark-mode')
  
  // Update for Dark Mode
  if (isDark) {
    if (document.body.classList.contains('body-bg-item')) document.body.classList.remove('body-bg-item')
    if (document.body.classList.contains('body-v1')) document.body.classList.remove('body-v1')
    if (!document.body.classList.contains('video-v1')) document.body.classList.add('video-v1')
  } 
  // Update for Light Mode
  else {
    if (document.body.classList.contains('video-v1')) document.body.classList.remove('video-v1')
    if (!document.body.classList.contains('body-bg-item')) document.body.classList.add('body-bg-item')
    if (!document.body.classList.contains('body-v1')) document.body.classList.add('body-v1')
  }

  // Ensure counter-scroll is always present
  if (!document.body.classList.contains('counter-scroll')) {
    document.body.classList.add('counter-scroll')
  }

  // Allow observer to trigger again after a microtask
  setTimeout(() => {
    isUpdating = false
  }, 0)
}

onMounted(() => {
  updateBodyClasses()
  observer = new MutationObserver((mutations) => {
    // Check if the mutation was relevant (class change) and not caused by us
    const relevantMutation = mutations.find(m => m.attributeName === 'class')
    if (relevantMutation && !isUpdating) {
      updateBodyClasses()
    }
  })
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>


