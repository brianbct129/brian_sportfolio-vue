<template>
  <div id="tech" class="section-tech-stack flat-spacing">
    <div class="sect-tag text-caption fw-medium effectFade fadeUp no-div">
      <i class="icon icon-tech-stack"></i>
      Tech Stack
    </div>
    <h4 class="s-title letter-space--2 text-black-72 split-text effect-blur-fade">
      See how my expertise with these <br class="d-none d-sm-block">
      tools drives better results
    </h4>
    <ul class="tech-list">
      <li class="wg-tech">
        <div class="tech-infor effectFade fadeUp no-div">
          <div class="tech_image">
            <img loading="lazy" width="19" height="28" src="../assets/images/section/tech-1.svg" alt="Image">
          </div>
          <div class="tech_info">
            <p class="info__name fw-medium text-black-72">Figma</p>
            <p class="info__duty text-black-56 text-body-3">Leading design tool</p>
          </div>
        </div>
        <div class="tech-progress">
          <div class="progress-line" data-progress="80">
            <p class="progress-num text-caption">
              <span class="counter">
                <span class="number" data-speed="1500" data-to="80">80</span>
                %
              </span>
            </p>
          </div>
        </div>
      </li>
      <li class="br-line"></li>
      <li class="wg-tech">
        <div class="tech-infor effectFade fadeUp no-div">
          <div class="tech_image">
            <img :src="isDark ? tech2Dark : tech2Light" width="18" height="28" alt="Image">
          </div>
          <div class="tech_info">
            <p class="info__name fw-medium text-black-72">Framer</p>
            <p class="info__duty text-black-56 text-body-3">No-code website builder</p>
          </div>
        </div>
        <div class="tech-progress">
          <div class="progress-line" data-progress="90">
            <p class="progress-num text-caption">
              <span class="counter">
                <span class="number" data-speed="1500" data-to="90">90</span>
                %
              </span>
            </p>
          </div>
        </div>
      </li>
      <li class="br-line"></li>
      <li class="wg-tech">
        <div class="tech-infor effectFade fadeUp no-div">
          <div class="tech_image">
            <img loading="lazy" width="29" height="28" src="../assets/images/section/tech-3.svg" alt="Image">
          </div>
          <div class="tech_info">
            <p class="info__name fw-medium text-black-72">Adobe Photoshop</p>
            <p class="info__duty text-black-56 text-body-3">Raster graphics editor</p>
          </div>
        </div>
        <div class="tech-progress">
          <div class="progress-line" data-progress="60">
            <p class="progress-num text-caption">
              <span class="counter">
                <span class="number" data-speed="1500" data-to="60">10</span>
                %
              </span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, onUpdated, nextTick } from 'vue'
import tech2Light from '../assets/images/section/tech-2.svg'
import tech2Dark from '../assets/images/section/tech-2_dark.svg'

const isDark = ref(false)
let observer = null

onMounted(() => {
  isDark.value = document.body.classList.contains('dark-mode')
  observer = new MutationObserver(() => {
    isDark.value = document.body.classList.contains('dark-mode')
  })
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
  
  nextTick(() => {
    if (window.refreshAnimations) window.refreshAnimations()
  })
})

onUpdated(() => {
  nextTick(() => {
    if (window.refreshAnimations) window.refreshAnimations()
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>
<style scoped>
</style>
