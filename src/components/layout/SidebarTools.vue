<template>
  <div class="sidebar-tools pst-v1">
    <div class="nav-top">
      <div class="tf-btn-icon toggle-switch-mode" @click="toggleMode">
        <i class="icon icon-light"></i>
      </div>
    </div>
    <ul class="nav-list">
      <li class="nav-item">
        <a href="#home" class="item-link scroll-link" :class="{ active: activeSection === 'home' }">
          <i class="icon icon-home"></i>
          <p class="tool-tip text-caption">Home</p>
        </a>
      </li>
      <li class="br-line"></li>
      <li class="nav-item">
        <a href="#about" class="item-link scroll-link" :class="{ active: activeSection === 'about' }">
          <i class="icon icon-user-circle"></i>
          <p class="tool-tip text-caption">About</p>
        </a>
      </li>
      <li class="nav-item">
        <a href="#education" class="item-link scroll-link" :class="{ active: activeSection === 'education' }">
          <i class="icon icon-edu"></i>
          <p class="tool-tip text-caption">Education</p>
        </a>
      </li>
      <li class="nav-item">
        <a href="#work" class="item-link scroll-link" :class="{ active: activeSection === 'work' }">
          <i class="icon icon-high-light"></i>
          <p class="tool-tip text-caption">Work</p>
        </a>
      </li>
      <li class="nav-item">
        <a href="#service" class="item-link scroll-link" :class="{ active: activeSection === 'service' }">
          <i class="icon icon-service"></i>
          <p class="tool-tip text-caption">Services</p>
        </a>
      </li>
      <li class="nav-item">
        <a href="#tech" class="item-link scroll-link" :class="{ active: activeSection === 'tech' }">
          <i class="icon icon-tech-stack"></i>
          <p class="tool-tip text-caption">Tech</p>
        </a>
      </li>
      <!-- <li class="nav-item">
        <a href="#testimonial" class="item-link scroll-link" :class="{ active: activeSection === 'testimonial' }">
          <i class="icon icon-tes"></i>
          <p class="tool-tip text-caption">Testimonials</p>
        </a>
      </li> -->
      <li class="br-line"></li>
      <li class="nav-item">
        <a href="#contact" class="item-link scroll-link" :class="{ active: activeSection === 'contact' }">
          <i class="icon icon-send"></i>
          <p class="tool-tip text-caption">Contact</p>
        </a>
      </li>
    </ul>
    <div class="nav-bottom">
      <a href="#" class="tf-btn-icon go-top">
        <i class="icon icon-arrow-top"></i>
      </a>
    </div>
  </div>
</template>
<script setup>
import { useScrollSpy } from '../../composables/useScrollSpy'

const { activeSection } = useScrollSpy()

const toggleMode = () => {
  document.body.classList.toggle('dark-mode')
  const isDark = document.body.classList.contains('dark-mode')
  document.querySelectorAll('.image-switch').forEach((img) => {
    const src = isDark ? img.getAttribute('data-dark') : img.getAttribute('data-light')
    if (src) img.setAttribute('src', src)
  })
}
</script>
<style scoped>
</style>
