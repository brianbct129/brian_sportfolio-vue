<template>
  <div class="action-open-mobile d-lg-none">
    <div class="tf-btn-icon style-2">
      <div class="btn-mobile-menu" :class="{ close: isOpen }" @click="toggleMenu">
        <span></span>
      </div>
    </div>
    <div class="nav-mobile-list" :class="{ open: isOpen }">
      <ul class="nav-mobile-item">
        <li class="nav-item">
          <a href="#home" class="item-link scroll-link" @click="closeMenu">
            <i class="icon icon-home"></i>
            <p class="tool-tip text-caption">Home</p>
          </a>
        </li>
        <li class="br-line"></li>
        <li class="nav-item">
          <a href="#about" class="item-link scroll-link" @click="closeMenu">
            <i class="icon icon-user-circle"></i>
            <p class="tool-tip text-caption">About</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#education" class="item-link scroll-link" @click="closeMenu">
            <i class="icon icon-edu"></i>
            <p class="tool-tip text-caption">Education & Experience</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#work" class="item-link scroll-link" @click="closeMenu">
            <i class="icon icon-high-light"></i>
            <p class="tool-tip text-caption">Work</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#service" class="item-link scroll-link" @click="closeMenu">
            <i class="icon icon-service"></i>
            <p class="tool-tip text-caption">Services</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#tech" class="item-link scroll-link" @click="closeMenu">
            <i class="icon icon-tech-stack"></i>
            <p class="tool-tip text-caption">Tech</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#testimonial" class="item-link scroll-link" @click="closeMenu">
            <i class="icon icon-tes"></i>
            <p class="tool-tip text-caption">Testimonials</p>
          </a>
        </li>
        <li class="br-line"></li>
        <li class="nav-item">
          <a href="#contact" class="item-link scroll-link" @click="closeMenu">
            <i class="icon icon-send"></i>
            <p class="tool-tip text-caption">Contact</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
const isOpen = ref(false)
let overlayEl = null
const toggleMenu = () => { isOpen.value = !isOpen.value }
const closeMenu = () => { isOpen.value = false }
const applyState = () => {
  if (overlayEl) overlayEl.classList.toggle('open', isOpen.value)
  document.body.classList.toggle('overflow-hidden', isOpen.value)
}
watch(isOpen, applyState)
onMounted(() => {
  overlayEl = document.querySelector('.overlay-pop')
  if (overlayEl) overlayEl.addEventListener('click', closeMenu)
})
onBeforeUnmount(() => {
  if (overlayEl) overlayEl.removeEventListener('click', closeMenu)
})
</script>
